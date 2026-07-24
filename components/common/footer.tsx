"use client";

import { useState } from "react";
import { Alex_Brush } from "next/font/google";

// Brush-script font used for the "Edinborough" wordmark.
// If your project already loads fonts globally (e.g. in app/layout.tsx),
// you can move this import there instead and just reuse the className.
const logoFont = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const shopLinks = [
  { label: "Buy Red Sauces", href: "/shop/red-sauces" },
  { label: "Buy Dark Sauces", href: "/shop/dark-sauces" },
  { label: "Buy Filling & Dipping", href: "/shop/filling-dipping" },
  { label: "Buy Food & Beverages", href: "/shop/food-beverages" },
];

const quickLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Products", href: "/our-products" },
  { label: "Network", href: "/network" },
  { label: "Careers", href: "/careers" },
];

const infoLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "Acheivements", href: "/achievements" },
  { label: "Recipes", href: "/recipes" },
  { label: "Brands", href: "/brands" },
  { label: "News", href: "/news" },
];

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.2H7.1v3.2h2.7V21h3.7Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5a4.9 4.9 0 0 1 1.8 1.2 4.9 4.9 0 0 1 1.2 1.8c.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4a4.9 4.9 0 0 1-1.2 1.8 4.9 4.9 0 0 1-1.8 1.2c-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5a4.9 4.9 0 0 1-1.8-1.2 4.9 4.9 0 0 1-1.2-1.8c-.2-.4-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4a4.9 4.9 0 0 1 1.2-1.8 4.9 4.9 0 0 1 1.8-1.2c.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.5.2-1.9.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3.9-.4 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.4 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2.9.3 1.9.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-.9.4-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.4-1.9a2.9 2.9 0 0 0-.7-1.1 2.9 2.9 0 0 0-1.1-.7c-.4-.2-.9-.3-1.9-.4-1.3-.1-1.7-.1-4.8-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.7-2a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16.6 2h-3.2v13.4a2.8 2.8 0 1 1-2-2.7v-3.3a6.1 6.1 0 1 0 5.2 6V8.7a7.6 7.6 0 0 0 4.4 1.4V6.9a4.5 4.5 0 0 1-4.4-4.9Z" />
    </svg>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; active?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">
        {title}
      </h3>
      <ul className="mt-6 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`text-sm transition-colors hover:text-white ${
                link.active ? "text-red-500" : "text-neutral-300"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your newsletter provider (Mailchimp, Klaviyo, etc.)
    setStatus("submitted");
  }

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        {/* Wordmark */}
        <div className="flex justify-center">
          <span
            className={`${logoFont.className} text-[64px] leading-none sm:text-[88px] lg:text-[104px]`}
          >
            Edinborough
          </span>
        </div>

        {/* Content row — columns hug their own content, spaced with a
           consistent gap, rather than stretching into an even grid. */}
        <div className="mt-12 flex flex-col flex-wrap gap-x-36 gap-y-10 pb-12 sm:mt-[70px] lg:flex-row lg:items-start">
          {/* Newsletter */}
          <div className="max-w-[460px]">
            <p className="max-w-[400px] text-sm text-neutral-300">
              For the latest Edinborough recipes, tips, news, views and
              priority notice for competitions and events, please subscribe
              to our email newsletter.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-9 flex items-center gap-4"
            >
              <div className="w-full max-w-[300px] border-b border-neutral-600 pb-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Sign Up Now"
                  className="w-full bg-transparent text-sm text-white placeholder:text-neutral-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-sm bg-white px-6 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Subscribe
              </button>
            </form>
            {status === "submitted" && (
              <p className="mt-2 text-xs text-neutral-400">
                Thanks — you&apos;re on the list.
              </p>
            )}
          </div>

          <FooterLinkColumn title="Shop" links={shopLinks} />
          <FooterLinkColumn title="Quick Links" links={quickLinks} />
          <FooterLinkColumn title="Information" links={infoLinks} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-neutral-800 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-6">
              <a
                href="#"
                aria-label="YouTube"
                className="text-white transition-opacity hover:opacity-70"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white transition-opacity hover:opacity-70"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white transition-opacity hover:opacity-70"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-white transition-opacity hover:opacity-70"
              >
                <TikTokIcon />
              </a>
            </div>
            <span className="ml-10 text-xs text-neutral-400">
              &copy;2026 Edinborough Pvt Ltd. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy & Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>

          <p className="text-xs text-neutral-500">
            Design &amp; Developed by{" "}
            <span className="font-semibold text-neutral-300">
              Archmage Solutions Pvt Ltd
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}