"use client";

import TextBanner from "@/components/common/textBanner";
import CarouselControls from "@/components/common/carousel";
import OpenPositionsGrid, { JobPosition } from "@/components/careers/openPositionsGrid";

interface RelatedPositionsProps {
  positions: JobPosition[];
  title?: string;
  titleColor?: string;
  viewAllText?: string;
  viewAllHref?: string;
}

/**
 * RelatedPositions - "Related Positions" section shown below a career detail
 * page: a TextBanner heading with a "View All" link + prev/next arrows on the
 * right (CarouselControls), followed by a row of open-role cards reused from
 * OpenPositionsGrid. Pass a short list (typically 3) of other roles; the
 * "Load All Positions" control is suppressed since every card is shown.
 *
 * Usage:
 * <RelatedPositions
 *   viewAllHref="/careers"
 *   positions={[
 *     {
 *       title: "HR Executive",
 *       department: "Human Resources",
 *       employmentType: "Full-Time",
 *       location: "Colombo, Sri Lanka",
 *       href: "/careers/hr-executive",
 *     },
 *   ]}
 * />
 *
 * Props:
 * @param {JobPosition[]} positions   - Related roles to display, in order.
 * @param {string} [title]            - Section heading (default: "Related Positions").
 * @param {string} [titleColor]       - Color for the heading (default: "#000000").
 * @param {string} [viewAllText]      - Text for the header link (default: "View All").
 * @param {string} [viewAllHref]      - Link target for "View All" (default: "/careers").
 */
export default function RelatedPositions({
  positions,
  title = "Related Positions",
  titleColor = "#000000",
  viewAllText = "View All",
  viewAllHref = "/careers",
}: RelatedPositionsProps) {
  if (positions.length === 0) return null;

  return (
    <>
      <TextBanner
        title={title}
        titleColor={titleColor}
        action={
          <CarouselControls
            label={viewAllText}
            href={viewAllHref}
            onPrev={() => {}}
            onNext={() => {}}
            prevDisabled
            nextDisabled
          />
        }
      />

      <OpenPositionsGrid positions={positions} initialCount={positions.length} />
    </>
  );
}
