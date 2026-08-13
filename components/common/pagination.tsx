"use client";

import { superGrotesk } from "@/lib/fonts";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  activeColor?: string;
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
 */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  activeColor = "#E2201B",
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={`${superGrotesk.className} flex items-center justify-end gap-2 text-xs font-normal uppercase tracking-wide sm:text-sm`}
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-11 items-center uppercase gap-1 border px-3 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-[#EDEDED] disabled:text-[#B3B3B3] enabled:border-[#DBDBDB] enabled:bg-white enabled:text-black"
      >
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
            className="flex h-11 w-11 items-center justify-center border bg-white"
            style={{
              borderColor: isActive ? activeColor : "#DBDBDB",
              color: isActive ? activeColor : "#000000",
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
        className="flex h-11 items-center gap-1 border uppercase px-3 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-[#EDEDED] disabled:text-[#B3B3B3] enabled:border-[#DBDBDB] enabled:bg-white enabled:text-black"
      >
        Next
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}