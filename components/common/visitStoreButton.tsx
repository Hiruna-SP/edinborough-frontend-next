import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { superGrotesk } from "@/lib/fonts";

export default function VisitStoreButton() {
  return (
    <Link
      href="https://store.edinborough.lk"
      target="_blank"
      rel="noopener noreferrer"
      className={`${superGrotesk.className} fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full bg-[#E31E24] px-5 py-3 text-xs font-normal uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-[#c8171c] sm:bottom-12 sm:right-8`}
    >
      <ShoppingCart className="h-4 w-4" strokeWidth={2} />
      Visit Store
    </Link>
  );
}
