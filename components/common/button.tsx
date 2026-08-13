import Image from "next/image";
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
  bgColor?: string;
  textColor?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
};

/**
 * Shared button used across the site. Pass `href` to render it as a link,
 * or `onClick` to render it as a real <button>.
 *
 * <Button text="Explore Products" color="blue" href="/our-products" />
 * <Button text="Subscribe" color="red" onClick={handleSubmit} type="submit" />
 *
 * For one-off colors that don't fit the `color` presets, pass `bgColor`/`textColor`
 * (any CSS color value). These override the preset via inline style, so `color`
 * can be left as-is or omitted:
 * <Button text="Explore Our Products" bgColor="#FFFFFF" textColor="#0B0B0B" href="/products" />
 */
export default function Button({
  text,
  color = "blue",
  bgColor,
  textColor,
  href,
  onClick,
  type = "button",
  className = "",
  iconSrc,
  iconAlt = "",
}: ButtonProps) {
  const classes = `${prompt.className} inline-flex items-center justify-center gap-2.5 px-6 py-3 text-[10px] font-semibold uppercase tracking-widest transition-colors ${colorStyles[color]} ${className}`;

  const style =
    bgColor || textColor
      ? {
          backgroundColor: bgColor,
          color: textColor,
        }
      : undefined;

  const content = (
    <>
      {iconSrc && (
        <Image src={iconSrc} alt={iconAlt} width={20} height={20} className="shrink-0" />
      )}
      {text}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {content}
    </button>
  );
}