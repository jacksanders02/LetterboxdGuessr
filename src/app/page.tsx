import Link from 'next/link';
import React from 'react';
import { fontTitle } from '@/app/fonts';
import {
  BrushOne, BrushThree, BrushTwo, Logo,
} from '@/components/svg';

export default function Home(): React.ReactNode {
  return (
    <main className={`flex flex-col items-center justify-between p-12 ${fontTitle.className} text-4xl`}>
      <div className="flex flex-col items-center justify-between text-5xl md:text-7xl lg:text-8xl">
        <h1 className="-ms-24 md:-ms-52 lg:-ms-72 mb-2">Letterboxd</h1>
        <Logo className="w-52 h-16 md:w-72 md:h-24 lg:w-96 lg:h-32 stroke-2" />
        <h1 className="ms-24 md:ms-48">
          <span className="text-lb-one">Gu</span>
          <span className="text-lb-two">es</span>
          <span className="text-lb-three">sr</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center md:justify-evenly w-full text-base lg:text-2xl 2xl:text-3xl">
        <Link
          href="/howto"
          className="transition-colors relative hover:fill-text-hover text-background hover:text-background-hover"
        >
          <BrushOne className="w-52 h-16 lg:w-72 lg:h-24 2xl:w-96 2xl:h-32" />
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">How to Play</h2>
        </Link>
        <Link
          href="/daily"
          className="transition-colors relative hover:fill-text-hover text-background hover:text-background-hover"
        >
          <BrushTwo className="w-52 h-16 lg:w-72 lg:h-24 2xl:w-96 2xl:h-32" />
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Play Daily</h2>
        </Link>
        <Link
          href="/endless"
          className="transition-colors relative hover:fill-text-hover text-background hover:text-background-hover"
        >
          <BrushThree className="w-52 h-16 lg:w-72 lg:h-24 2xl:w-96 2xl:h-32" />
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Play Endless</h2>
        </Link>
      </div>
    </main>
  );
}
