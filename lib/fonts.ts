import localFont from "next/font/local";
import { Prompt } from "next/font/google";

/**
 * SuperGroteskA is a licensed font, not available on Google Fonts.
 * Add your font files to /public/fonts with these exact names (or update
 * the paths below to match your files). At minimum you need a Regular
 * weight; add Bold too if you use it for headlines/nav.
 *
 * Paths are relative to THIS file — if you move fonts.ts, update them.
 */
export const superGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/SuperGroteskA Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/SuperGroteskA-Bold.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-super-grotesk",
  display: "swap",
});

export const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-prompt",
});