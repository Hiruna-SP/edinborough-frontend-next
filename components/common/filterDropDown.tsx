"use client";

import { superGrotesk } from "@/lib/fonts";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  label: string;
  options: FilterOption[];
  value?: string;
  onChange?: (value: string) => void;
  borderColor?: string;
  textColor?: string;
}

/**
 * FilterDropdown - Pill-style dropdown used for product listing filters
 * like "All Brands" / "Sort By". Wraps a native <select> for accessibility
 * and mobile usability, styled to look like a bordered pill button.
 *
 * Usage:
 * <FilterDropdown
 *   label="All Brands"
 *   options={[
 *     { label: "All Brands", value: "all" },
 *     { label: "Edinborough", value: "edinborough" },
 *     { label: "Pasha", value: "pasha" },
 *   ]}
 *   value={selectedBrand}
 *   onChange={setSelectedBrand}
 * />
 *
 * Props:
 * @param {string} label            - Placeholder/default text shown when no option is actively chosen by the caller (also used as the accessible label).
 * @param {FilterOption[]} options  - Options to list in the dropdown.
 * @param {string} [value]          - Currently selected value (controlled). Defaults to showing `label`.
 * @param {(value: string) => void} [onChange] - Called with the new value when the selection changes.
 * @param {string} [borderColor]    - Border color of the box (default: "#DBDBDB").
 * @param {string} [textColor]      - Text color (default: "#111111").
 */
export default function FilterDropdown({
  label,
  options,
  value,
  onChange,
  borderColor = "#DBDBDB",
  textColor = "#111111",
}: FilterDropdownProps) {
  return (
    <div
      className="relative inline-flex min-w-45 items-center justify-between border px-5 py-3"
      style={{ borderColor }}
    >
      <select
        aria-label={label}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={`${superGrotesk.className} w-full appearance-none bg-transparent pr-6 text-sm font-normal uppercase tracking-wide focus:outline-none`}
        style={{ color: textColor }}
      >
        {value === undefined && (
          <option value="" disabled hidden>
            {label}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute right-4 h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke={textColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}