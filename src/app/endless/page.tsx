import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fontSans, fontTitle } from '@/app/fonts';

export default function Endless(): React.ReactNode {
  return (
    <main className={`flex flex-col ${fontTitle.className} px-4 md:px-24`}>
      <div className="flex justify-between items-center text-xl sm:text-3xl">
        <div className="flex items-center py-2">
          <Link href="/">
            <span className="text-lb-one text-4xl sm:text-5xl">L</span>
            <span className="text-lb-two text-4xl sm:text-5xl">G</span>
          </Link>
          <span className="text-lb-three bold ms-2 me-4 text-4xl sm:text-5xl mb-2">|</span>
          Endless Mode
        </div>
        <div className="flex items-center px-4 py-2">
          Score: 0
        </div>
      </div>
      <div className="flex-fill-remaining-space flex flex-col gap-8 lg:grid lg:grid-rows-1 lg:grid-cols-5 text-sm">
        <div className="flex flex-row lg:flex-col gap-2">
          <div className="max-lg:h-48 max-h-80 max-w-[13.5rem] aspect-[300/445] relative">
            <Image
              src="https://m.media-amazon.com/images/M/MV5BYWJkY2Q4NmYtOGRlMi00YTg5LWE2ZmQtY2NkYzk3YTRmNWZlXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg"
              alt={"The movie's poster (blurred)"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col gap-4 text-xs xl:text-base">
            <p>
              <span className="underline">Released:</span>
              {' '}
              2024
            </p>
            <p>
              <span className="underline">IMDB Rating:</span>
              {' '}
              3.8
            </p>
            <p>
              <span className="underline">Genre:</span>
              {' '}
              Action, Adventure, Sci-Fi
            </p>
            <p>
              <span className="underline">Starring:</span>
              {' '}
              Sydney Sweeney, Dakota Johnson, and Isabela Merced
            </p>
            <p>
              <span className="underline">Directed By:</span>
              {' '}
              SJ Clarkson
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-16 text-center lg:col-span-3 md:text-base xl:text-xl">
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <p>
              “We come to this place… for magic.
              <br />
              We come to the theater to laugh, to cry, to care.
              <br />
              Because we need that, all of us:
              <br />
              that indescribable feeling we get when the lights begin to dim,
              <br />
              and we go somewhere we&apos;ve never been before;
              <br />
              not just entertained, but somehow reborn.... together.
              <br />
              Dazzling images, on a huge silver screen.
              <br />
              Sound that I can feel.
              <br />
              Somehow, heartbreak feels good in a place like this.
              <br />
              Our heroes feel like the best part of us,
              <br />
              and stories feel perfect and powerful.
              <br />
              Because here...
              <br />
              They are.”
            </p>
            <div className="flex flex-col items-center">
              <p className={fontSans.className}>[No Rating]</p>
              <p className={fontSans.className}>- FlanaganFilm</p>
            </div>
          </div>
          <div className={fontSans.className}>
            <input type="text" placeholder="Make a guess..." className="text-lg xl:text-3xl px-2 py-2 border-text border-2 rounded-sm" />
            <p>Guess Button</p>
            <p>Guesses Remaining: 5/5</p>
          </div>
        </div>
      </div>
    </main>
  );
}
