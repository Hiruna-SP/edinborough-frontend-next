"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { superGrotesk, prompt } from "@/lib/fonts";
import Button from "@/components/common/button";

export interface HelpTopic {
  icon: "product" | "partnership" | "export" | "support" | "feedback";
  title: string;
  description: string;
}

interface ContactFormSectionProps {
  helpTopics?: HelpTopic[];
  backgroundImage?: string;
}

const inputClasses = `${prompt.className} w-full border border-[#F1D6D5] bg-white px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#E2201B] focus:outline-none`;

function ProductIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="9" cy="7" r="3" stroke="#E2201B" strokeWidth="1.5" />
      <path
        d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="14"
        y="12"
        width="7"
        height="7"
        rx="1"
        stroke="#E2201B"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function PartnershipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="8" cy="8" r="2.6" stroke="#E2201B" strokeWidth="1.5" />
      <circle cx="16" cy="8" r="2.6" stroke="#E2201B" strokeWidth="1.5" />
      <path
        d="M2.5 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 7.5L12 12l8-4.5M12 12v9"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="#E2201B" strokeWidth="1.5" />
      <path
        d="M5 19.5c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 19v-1.5M15 19v-1.5"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 5h16v10H9l-4 3.5V15H4V5z"
        stroke="#E2201B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = {
  product: ProductIcon,
  partnership: PartnershipIcon,
  export: ExportIcon,
  support: SupportIcon,
  feedback: FeedbackIcon,
};

const DEFAULT_TOPICS: HelpTopic[] = [
  {
    icon: "product",
    title: "Product Inquiries",
    description: "Learn more about our products",
  },
  {
    icon: "partnership",
    title: "Partnerships",
    description: "Explore business opportunities",
  },
  {
    icon: "export",
    title: "Export Inquiries",
    description: "Information for global partners",
  },
  {
    icon: "support",
    title: "Customer Support",
    description: "We're here to assist you",
  },
  {
    icon: "feedback",
    title: "Feedback",
    description: "We value your feedback",
  },
];

/**
 * ContactFormSection - "Send Us a Message" contact form paired with a dark
 * "How Can We Help You?" panel listing common inquiry topics.
 */
export default function ContactFormSection({
  helpTopics = DEFAULT_TOPICS,
  backgroundImage = "/images/contact/1.png",
}: ContactFormSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="px-6 py-14 sm:px-10 lg:px-16 xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <h2
          className={`${superGrotesk.className} text-2xl font-normal uppercase leading-tight text-black sm:text-3xl`}
        >
          Send Us A Message
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Row height is driven by the left column (paragraph through
              textarea) so the help panel starts at the paragraph and ends
              at the textarea's bottom edge. */}
          <div className="mt-3 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
            <div className="space-y-5">
              <p
                className={`${prompt.className} max-w-sm text-sm text-neutral-600`}
              >
                Fill in the form and our team will get back to you as soon as
                possible
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your Name *"
                  className={inputClasses}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className={inputClasses}
                />
              </div>

              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number *"
                className={inputClasses}
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <select
                  name="inquiryType"
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    - Select Inquiry Type -
                  </option>
                  <option value="product">Product Inquiries</option>
                  <option value="partnership">Partnerships</option>
                  <option value="export">Export Inquiries</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                </select>
                <input
                  name="subject"
                  placeholder="Subject"
                  className={inputClasses}
                />
              </div>

              <textarea
                name="message"
                required
                placeholder="Your Message *"
                rows={9}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Help panel */}
            <div className="relative min-h-[420px] overflow-hidden bg-black">
              <Image
                src={backgroundImage}
                alt="Customer support agent"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />

              <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-8 py-10 sm:px-10">
                <h3
                  className={`${superGrotesk.className} text-2xl font-normal uppercase leading-tight text-white sm:text-3xl`}
                >
                  How Can We <span className="text-[#E2201B]">Help You?</span>
                </h3>

                <ul className="flex flex-col gap-5">
                  {helpTopics.map((topic, i) => {
                    const Icon = ICONS[topic.icon];
                    return (
                      <li
                        key={`${topic.title}-${i}`}
                        className="flex items-start gap-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E2201B]/60">
                          <Icon />
                        </span>
                        <div>
                          <p
                            className={`${superGrotesk.className} text-sm font-normal uppercase text-white sm:text-base`}
                          >
                            {topic.title}
                          </p>
                          <p
                            className={`${prompt.className} mt-0.5 text-sm text-neutral-300`}
                          >
                            {topic.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button text="Send Message" color="blue" type="submit" />

            {submitted && (
              <p className={`${prompt.className} mt-3 text-sm text-neutral-600`}>
                Thanks — we&apos;ve received your message and will be in touch
                soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
