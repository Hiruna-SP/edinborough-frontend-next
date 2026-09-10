"use client";

import { useCallback, useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

/**
 * RecipeSubmitModal - client wrapper that renders the intercepted
 * /recipes/submit route as an overlay on top of the recipes page.
 * Dismisses on backdrop click, the close button, or Escape by calling
 * router.back() so the URL returns to /recipes.
 */
export default function RecipeSubmitModal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dismiss = useCallback(() => router.back(), [router]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [dismiss]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Share your recipe"
      onClick={dismiss}
      className="fixed inset-0 z-120 flex justify-center overflow-y-auto bg-black/60 p-3 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-white/90 text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
