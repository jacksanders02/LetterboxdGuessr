import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export const dynamic = 'force-dynamic';

/**
 * Shuffles an array in-place using the Durstenfeld shuffle
 * yoink https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param array the array to shuffle
 */
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Retrieves a list of all reviews in the database + movie info, for endless mode.
 * @constructor
 */
// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const allReviews = await prisma.review.findMany({
    include: {
      Movie: {
        include: {
          crewMembers: {
            include: {
              Worker: true,
            },
          },
        },
      },
    },
  });

  shuffleArray(allReviews);

  const returnReviews: Review[] = [];

  // Restructure reviews to match format better suited to front-end
  allReviews.forEach((review) => {
    // Hide film name from review
    const newText: string = review.text.replaceAll(new RegExp(`(${review.Movie.title})`, 'gi'), '[REDACTED]');

    const starring: MovieWorker[] = [];
    const directedBy: MovieWorker[] = [];

    review.Movie.crewMembers.forEach((c) => {
      if (c.role.includes('Actor')) {
        starring.push({
          name: c.Worker.name,
          link: c.Worker.link,
        });
      }

      if (c.role.includes('Director')) {
        directedBy.push({
          name: c.Worker.name,
          link: c.Worker.link,
        });
      }
    });

    returnReviews.push({
      reviewer: review.reviewer,
      rating: review.rating,
      link: review.link,
      text: newText,
      Movie: {
        id: review.Movie.id,
        title: review.Movie.title,
        year: review.Movie.year,
        genre: review.Movie.genre,
        poster: review.Movie.poster,
        criticRating: review.Movie.criticRating,
        starring,
        directedBy,
      },
    });
  });

  return NextResponse.json(returnReviews, {
    status: 200,
  });
}

// /**
//  * Retrieves a list of all movies in the database + their reviews and crew members, for endless.
//  * @constructor
//  */
// // eslint-disable-next-line import/prefer-default-export
// export async function GET() {
//   const allReviews = await prisma.movie.findMany({
//     include: {
//       reviews: true,
//       crewMembers: {
//         include: {
//           Worker: true,
//         },
//       },
//     },
//   });
//
//   return NextResponse.json(allReviews, {
//     status: 200,
//   });
// }
