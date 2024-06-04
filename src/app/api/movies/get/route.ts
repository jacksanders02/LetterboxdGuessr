import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export const dynamic = 'force-dynamic';

/**
 * Retrieves a list of all reviews in the database + movie info, for endless mode.
 * @constructor
 */
// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const allMovies = await prisma.movie.findMany();

  const movieNames: string[] = [];

  // Restructure reviews to match format better suited to front-end
  allMovies.forEach((movie) => {
    movieNames.push(movie.title);
  });

  movieNames.sort();

  return NextResponse.json(movieNames, {
    status: 200,
  });
}
