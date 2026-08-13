import Image from "next/image";
import { superGrotesk, prompt } from "@/lib/fonts";

interface HeroBannerProps {
  title: string;
  text?: string;
  backgroundImage: string;
  imageAlt?: string;
}


export default function HeroBanner({ title, text, backgroundImage, imageAlt }: HeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt={imageAlt || title}
        width={1920}
        height={830}
        preload
        sizes="100vw"
        className="w-full h-auto"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90  to-black/0" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center pt-20">
        <div className="max-w-3xl pl-6 sm:pl-8 lg:pl-6 pr-6">
          <h1 className={`${superGrotesk.className} text-white font-normal uppercase leading-tight text-3xl sm:text-4xl md:text-[75px] tracking-tight whitespace-nowrap`}>
            {title}
          </h1>
          <p className={`${prompt.className} max-w-lg mt-3 sm:mt-4 text-gray-200 text-sm sm:text-[13px] leading-relaxed`}>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}