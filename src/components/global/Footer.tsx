import React from "react";
import Link from "next/link";

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center w-full p-4 text-xs lg:text-sm text-center">
      <p>Created by <Link href={'https://jacksanders.uk'} className={'hover-link underline font-bold'} target={'_blank'}>Jack Sanders</Link>.</p>
      <p>Disclaimer: All reviews were scraped from Letterboxd.com, and therefore I am not responsible for their content.</p>
    </footer>
  )
}