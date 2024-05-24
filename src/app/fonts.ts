/**
 * Helper constants for fonts
 */

import {
  Noto_Color_Emoji,
  DM_Sans,
} from 'next/font/google';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';

export const fontEmoji: NextFont = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: ['400'],
  style: ['normal'],
});

export const fontSans: NextFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['sans-serif'],
});

export const fontTitle = localFont({
  src: './PoetsenOne.ttf',
  display: 'swap',
});
