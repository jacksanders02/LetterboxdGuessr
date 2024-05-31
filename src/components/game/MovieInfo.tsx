'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { fontSans, fontTitle } from '@/app/fonts';
import { BrushOne } from '@/components/svg';

const MAX_GUESSES = 5;

/**
 * Joins the names of workers into a single list of anchor elements
 * @param workers the workers to join
 */
function WorkerList({ names }: { names: MovieWorker[] }): React.ReactNode {
  return (
    <span>
      {names.map((worker, i) => (
        <>
          <Link
            href={worker.link}
            target="_blank"
            key={worker.name.replaceAll(/\s/g, '')}
            className="hover-link"
          >
            {worker.name}
          </Link>
          {i < names.length - 1 && (
            <>, </>
          )}
          {i === names.length - 2 && (
            <>and </>
          )}
        </>
      ))}
    </span>
  );
}

// Create datalist component with forwarded ref,
// to allow it to be referenced by main component
const MovieNamesDatalist = React.forwardRef(
  ({ movies }: { movies: string[] }, ref: React.ForwardedRef<HTMLInputElement>) => (
    <>
      <input list="guess-datalist" ref={ref} />
      <datalist
        id="guess-datalist"
        placeholder="Make a guess..."
        className="text-lg xl:text-3xl px-2 py-2 border-text border-2 rounded-sm"
        aria-label="Make a guess"
      >
        {movies.map((title) => (
          <option value={title} key={title} aria-label={`Select ${title}`} />
        ))}
      </datalist>
    </>
  ),
);

export default function MovieInfo() {
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [movieNames, setMovieNames] = useState<string[]>([]);
  const [review, setReview] = React.useState<number>(0);
  const [guesses, setGuesses] = React.useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch all reviews from API endpoint and set initial review
    fetch('/api/reviews/get-endless')
      .then((res) => res.json())
      .then((res: Review[]) => {
        setAllReviews(res);
      });

    // Fetch all movies from API endpoint for dropdown list
    fetch('/api/movies/get')
      .then((res) => res.json())
      .then((res: string[]) => {
        setMovieNames(res);
      });
  }, []);

  const checkGuess = () => {
    if (inputRef.current === null) {
      return;
    }

    if (inputRef.current.value.toLowerCase() === allReviews[review].Movie.title.toLowerCase()) {
      alert('yippee');
      document.dispatchEvent(new CustomEvent('update-score', { detail: { amount: MAX_GUESSES - guesses } }));
      inputRef.current.value = '';
      setGuesses(0);
      setReview(review + 1);
      return;
    }

    if (guesses >= MAX_GUESSES - 1) {
      alert(`Incorrect! it was ${allReviews[review].Movie.title}`);
      document.dispatchEvent(new Event('reset-score'));
      inputRef.current.value = '';
      setGuesses(0);
      setReview(review + 1);
    } else {
      setGuesses(guesses + 1);
    }
  };

  return (
    ((allReviews.length > 0) && (
      <div className="flex-fill-remaining-space flex flex-col gap-8 lg:grid lg:grid-rows-1 lg:grid-cols-5 text-sm">
        <div className="flex flex-row lg:flex-col gap-2">
          <div
            className="max-lg:h-48 max-h-80 max-w-[13.5rem] aspect-[300/445] relative"
          >
            <Image
              src={`/_next/image?url=${allReviews[review].Movie.poster}&w=${2 ** (3 + Math.min(3, guesses))}&q=1`}
              alt={"The movie's poster (blurred)"}
              fill
            />
          </div>
          <div className="flex flex-col gap-4 text-xs xl:text-base">
            {guesses > 0 && (
              <>
                <p>
                  <span className="underline">Released:</span>
                  {' '}
                  {allReviews[review].Movie.year}
                </p>
                <p>
                  <span className="underline">IMDB Rating:</span>
                  {' '}
                  {allReviews[review].Movie.criticRating}
                </p>
                <p>
                  <span className="underline">Genre:</span>
                  {' '}
                  {allReviews[review].Movie.genre}
                </p>
              </>
            )}
            {guesses > 2 && (
              <>
                <p>
                  <span className="underline">Starring:</span>
                  {' '}
                  <WorkerList names={allReviews[review].Movie.starring} />
                </p>
                <p>
                  <span className="underline">Directed By:</span>
                  {' '}
                  <WorkerList names={allReviews[review].Movie.directedBy} />
                </p>
              </>
            )}
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-8 lg:gap-16 text-center lg:col-span-3 md:text-base xl:text-xl"
        >
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <p>
              {allReviews[review].text}
            </p>
            <div className="flex flex-col items-center">
              <p className={fontSans.className}>
                {(allReviews[review].rating || -1) > -1 && (
                  <>
                    {'★'.repeat(Math.floor((allReviews[review].rating || 0) / 2))}
                    {(allReviews[review].rating || 0) % 2 === 1 ? '⯨' : ''}
                  </>
                )}
                {(allReviews[review].rating || -1) < 0 ? '[No Rating]' : ''}
              </p>
              <p className={fontSans.className}>
                -
                {allReviews[review].reviewer}
              </p>
            </div>
          </div>
          <div className={`flex flex-col items-center gap-2 ${fontSans.className}`}>
            <MovieNamesDatalist ref={inputRef} movies={movieNames} />
            <p>
              Guesses Remaining:
              {' '}
              {MAX_GUESSES - guesses}
              /
              {MAX_GUESSES}
            </p>

            <button
              type="button"
              className={`${fontTitle.className} w-min transition-colors relative hover:fill-text-hover text-background hover:text-background-hover text-sm lg:text-xl 2xl:text-2xl`}
              onClick={checkGuess}
            >
              <BrushOne className="w-36 h-12 lg:w-52 lg:h-16 2xl:w-72 2xl:h-24" />
              <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Guess</h2>
            </button>
          </div>
        </div>
      </div>
    )) || (
      <div className="flex-fill-remaining-space flex flex-col items-center justify-center">
        Loading :P
      </div>
    )
  );
}
