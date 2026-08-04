import Link from "next/link";
import { prompt } from "@/lib/fonts";

export type ButtonColor = "blue" | "white" | "red" | "outline";

const colorStyles: Record<ButtonColor, string> = {
  blue: "bg-[#0845BA] text-white hover:bg-[#093a99]",
  white: "bg-white text-neutral-900 hover:bg-neutral-200",
  red: "bg-[#E2201B] text-white hover:bg-[#c01813]",
  outline:
    "border border-white text-white hover:bg-white hover:text-neutral-900",
};

type ButtonProps = {
  text: string;
  color?: ButtonColor;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

/**
 * Shared button used across the site. Pass `href` to render it as a link,
 * or `onClick` to render it as a real <button>.
 *
 * <Button text="Explore Products" color="blue" href="/our-products" />
 * <Button text="Subscribe" color="red" onClick={handleSubmit} type="submit" />
 */
export default function Button({
  text,
  color = "blue",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${prompt.className} inline-flex items-center justify-center px-6 py-3 text-[10px] font-semibold uppercase tracking-widest transition-colors ${colorStyles[color]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
}