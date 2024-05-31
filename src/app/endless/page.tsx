import React from 'react';
import Link from 'next/link';
import { fontTitle } from '@/app/fonts';
import { MovieInfo, ScoreCounter } from '@/components/game';

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
        <ScoreCounter />
      </div>

      <MovieInfo />

    </main>
  );
}
