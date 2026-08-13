import { superGrotesk, prompt } from "@/lib/fonts";
import FilterDropdown from "@/components/common/filterDropDown";

export interface ListingFilter {
  label: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

interface ProductListingHeaderProps {
  title: string;
  titleColor?: string;
  description?: string;
  descriptionColor?: string;
  filters?: ListingFilter[];
}

/**
 * ProductListingHeader - Category title + description on the left,
 * a row of filter dropdowns (e.g. "All Brands", "Sort By") on the right.
 *
 * Usage:
 * <ProductListingHeader
 *   title="Red Sauces"
 *   description="Made with sun-ripened tomatoes and premium ingredients, our red sauces deliver rich taste and perfect texture in every drop."
 *   filters={[
 *     {
 *       label: "All Brands",
 *       options: [{ label: "All Brands", value: "all" }, { label: "Edinborough", value: "edinborough" }],
 *       value: selectedBrand,
 *       onChange: setSelectedBrand,
 *     },
 *     {
 *       label: "Sort By",
 *       options: [{ label: "Newest", value: "newest" }, { label: "Price: Low to High", value: "price-asc" }],
 *       value: sortBy,
 *       onChange: setSortBy,
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {string} title             - Category/page heading (e.g. "Red Sauces").
 * @param {string} [titleColor]      - Color for the heading (default: "#111111").
 * @param {string} [description]     - Short description below the title. Omit to render no description.
 * @param {string} [descriptionColor] - Color for the description (default: "#4B4B4B").
 * @param {ListingFilter[]} [filters] - Filter dropdowns shown on the right. Omit for no filters.
 */
export default function ProductListingHeader({
  title,
  titleColor = "#111111",
  description,
  descriptionColor = "#4B4B4B",
  filters,
}: ProductListingHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      <div>
        <h1
          className={`${superGrotesk.className} text-2xl font-normal uppercase leading-none sm:text-3xl`}
          style={{ color: titleColor }}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`${prompt.className} mt-2 max-w-lg text-sm font-normal leading-relaxed`}
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        )}
      </div>

      {filters && filters.length > 0 && (
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          {filters.map((filter) => (
            <FilterDropdown
              key={filter.label}
              label={filter.label}
              options={filter.options}
              value={filter.value}
              onChange={filter.onChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}