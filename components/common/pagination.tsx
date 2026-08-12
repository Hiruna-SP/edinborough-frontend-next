"use client";

import { prompt } from "@/lib/fonts";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  activeColor?: string;
  inactiveColor?: string;
}

/**
 * Pagination - "Previous" / page numbers / "Next" control for product grids
 * and other paginated lists. The current page is shown with a bordered box;
 * "Previous"/"Next" disable themselves automatically at the first/last page.
 *
 * Usage:
 * <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
 *
 * Props:
 * @param {number} currentPage                 - Currently active page (1-indexed).
 * @param {number} totalPages                  - Total number of pages.
 * @param {(page: number) => void} onPageChange - Called with the new page number when the user navigates.
 * @param {string} [activeColor]               - Border/text color for the current page (default: "#E2201B").
 * @param {string} [inactiveColor]              - Text color for non-current pages and enabled Prev/Next (default: "#111111").
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  activeColor = "#E2201B",
  inactiveColor = "#111111",
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={`${prompt.className} flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wide sm:text-sm`}
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-2 py-1 disabled:opacity-40"
        style={{ color: inactiveColor }}
      >
        <span aria-hidden="true">&larr;</span>
        Previous
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className="flex h-8 w-8 items-center justify-center border"
            style={{
              borderColor: isActive ? activeColor : "transparent",
              color: isActive ? activeColor : inactiveColor,
            }}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 bg-[#111111] px-3 py-2 text-white disabled:opacity-40"
      >
        Next
        <span aria-hidden="true">&rarr;</span>
      </button>
    </nav>
  );
}