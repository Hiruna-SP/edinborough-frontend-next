"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { ChefHat, UploadCloud, Upload, Plus, X } from "lucide-react";
import { superGrotesk, prompt } from "@/lib/fonts";
import Button from "@/components/common/button";

const inputClasses = `${prompt.className} w-full border border-[#F1D6D5] bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#E2201B] focus:outline-none`;

const labelClasses = `${prompt.className} mb-1.5 block text-xs font-medium text-neutral-700`;

const PERKS = [
  {
    icon: "/images/submit/featured-video.png",
    title: "Get Featured",
    description: "Your recipe may be showcased on our Recipes page",
  },
  {
    icon: "/images/submit/golden-idea.png",
    title: "Inspire Home Cooks",
    description: "Help others discover delicious meal ideas",
  },
  {
    icon: "/images/submit/champion-8.png",
    title: "Win Exciting Rewards",
    description: "Selected recipes may receive exclusive Edinborough gifts",
  },
  {
    icon: "/images/submit/community-10.png",
    title: "Join Our Community",
    description: "Become part of the Edinborough family of food lovers",
  },
];

const RECIPE_CATEGORIES = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Appetizers",
  "Desserts",
  "Drinks",
  "Snacks",
];

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const EDINBOROUGH_PRODUCTS = [
  { name: "Tomato Sauce", image: "/images/recipes/9.png" },
  { name: "Soya Sauce", image: "/images/recipes/7.png" },
  { name: "Chilli Paste", image: "/images/recipes/8.png" },
  { name: "Chocolate Syrup", image: "/images/recipes/10.png" },
];

function RequiredMark() {
  return <span className="text-[#E2201B]">*</span>;
}

/**
 * RecipeSubmitForm - "Share Your Recipe" submission form. Rendered both as a
 * standalone page (/recipes/submit) and inside the intercepted modal that
 * overlays the recipes page. A tall cream sidebar sits beside the two form
 * sections (Personal Information + Recipe Information).
 */
export default function RecipeSubmitForm() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientDraft, setIngredientDraft] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [stepDraft, setStepDraft] = useState("");
  const [products, setProducts] = useState<string[]>(["Tomato Sauce"]);
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function addIngredient() {
    const value = ingredientDraft.trim();
    if (!value) return;
    setIngredients((prev) => [...prev, value]);
    setIngredientDraft("");
  }

  function addStep() {
    const value = stepDraft.trim();
    if (!value) return;
    setSteps((prev) => [...prev, value]);
    setStepDraft("");
  }

  function toggleProduct(name: string) {
    setProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name],
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirmed) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-[300px_1fr]"
    >
      {/* Sidebar */}
      <aside className="flex flex-col bg-[#FBEEE7]">
        <div className="flex flex-col items-center px-6 pt-10 text-center">
          <ChefHat className="h-12 w-12 text-[#E2201B]" strokeWidth={1.5} />
          <p
            className={`${superGrotesk.className} mt-4 text-sm font-normal uppercase tracking-wide text-neutral-900`}
          >
            Share Your
          </p>
          <p
            className={`${superGrotesk.className} text-3xl font-normal uppercase leading-none text-[#E2201B]`}
          >
            Recipe
          </p>
          <p
            className={`${prompt.className} mt-4 text-xs leading-relaxed text-neutral-600`}
          >
            Inspire Sri Lanka with Your Signature Dish. Share your favourite
            recipe made using Edinborough products. If selected, your recipe
            could be featured on our website and social media channels.
          </p>
        </div>

        <ul className="flex flex-col gap-5 px-6 py-8">
          {PERKS.map((perk) => {
            return (
              <li key={perk.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2201B]/50">
                  <Image
                    src={perk.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 object-contain"
                  />
                </span>
                <div>
                  <p
                    className={`${prompt.className} text-xs font-semibold text-neutral-900`}
                  >
                    {perk.title}
                  </p>
                  <p
                    className={`${prompt.className} mt-0.5 text-[11px] leading-snug text-neutral-600`}
                  >
                    {perk.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="relative mt-auto h-52 w-full">
          <Image
            src="/images/recipes/12.png"
            alt="Edinborough product range with a plated dish"
            fill
            sizes="300px"
            className="object-cover object-center"
          />
        </div>
      </aside>

      {/* Form body */}
      <div className="space-y-10 px-6 py-10 sm:px-10">
        {/* Personal information */}
        <section>
          <h2
            className={`${superGrotesk.className} border-b border-neutral-200 pb-3 text-xl font-normal uppercase tracking-wide text-neutral-900`}
          >
            Personal Information
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div>
              <label className={labelClasses}>
                Full Name <RequiredMark />
              </label>
              <input
                name="fullName"
                required
                placeholder="Enter your full name"
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Profile Image (Optional)</label>
              <label className="flex cursor-pointer items-center gap-2 border border-[#F1D6D5] bg-[#F9DEDC] px-4 py-3 text-sm text-[#E2201B]">
                <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                <span className={`${prompt.className}`}>
                  Upload a clear photo of yourself (JPG, PNG, max 5MB)
                </span>
                <input type="file" name="profileImage" accept="image/*" hidden />
              </label>
            </div>

            <div>
              <label className={labelClasses}>Phone Number</label>
              <div className="flex">
                <span
                  className={`${prompt.className} flex items-center border border-r-0 border-[#F1D6D5] bg-[#F9DEDC] px-3 text-sm text-neutral-700`}
                >
                  94+
                </span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>
                Email Address <RequiredMark />
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>
                City <RequiredMark />
              </label>
              <input
                name="city"
                required
                placeholder="Enter your city"
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>
                County <RequiredMark />
              </label>
              <select
                name="country"
                required
                defaultValue=""
                className={inputClasses}
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="LK">Sri Lanka</option>
                <option value="IN">India</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>
        </section>

        {/* Recipe information */}
        <section>
          <h2
            className={`${superGrotesk.className} border-b border-neutral-200 pb-3 text-xl font-normal uppercase tracking-wide text-neutral-900`}
          >
            Recipe Information
          </h2>

          <div className="mt-6 space-y-5">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div>
                <label className={labelClasses}>
                  Recipe Name <RequiredMark />
                </label>
                <input
                  name="recipeName"
                  required
                  placeholder="Enter recipe name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className={labelClasses}>
                  Recipe Category <RequiredMark />
                </label>
                <select
                  name="category"
                  required
                  defaultValue="Breakfast"
                  className={inputClasses}
                >
                  {RECIPE_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              <div>
                <label className={labelClasses}>Preparation Time</label>
                <input
                  name="prepTime"
                  placeholder="e.g. 20 mins"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Cooking Time</label>
                <input
                  name="cookTime"
                  placeholder="e.g. 30 mins"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Servings</label>
                <input
                  name="servings"
                  placeholder="e.g. 4 People"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Difficulty</label>
                <select
                  name="difficulty"
                  defaultValue="Easy"
                  className={inputClasses}
                >
                  {DIFFICULTIES.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label className={labelClasses}>
                Ingredients <RequiredMark />
              </label>
              <div className="flex gap-3">
                <input
                  value={ingredientDraft}
                  onChange={(e) => setIngredientDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addIngredient();
                    }
                  }}
                  placeholder="Add all ingredients used"
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={addIngredient}
                  className={`${prompt.className} shrink-0 bg-[#1A1A1A] px-6 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-black`}
                >
                  Add +
                </button>
              </div>
              {ingredients.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ingredients.map((item, i) => (
                    <li
                      key={`${item}-${i}`}
                      className={`${prompt.className} inline-flex items-center gap-2 border border-[#F1D6D5] bg-[#F9DEDC] px-3 py-1.5 text-xs text-neutral-800`}
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() =>
                          setIngredients((prev) =>
                            prev.filter((_, idx) => idx !== i),
                          )
                        }
                        aria-label={`Remove ${item}`}
                      >
                        <X className="h-3.5 w-3.5 text-[#E2201B]" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cooking instructions */}
            <div>
              <label className={labelClasses}>
                Cooking Instructions <RequiredMark />
              </label>
              <div className="flex gap-3">
                <input
                  value={stepDraft}
                  onChange={(e) => setStepDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addStep();
                    }
                  }}
                  placeholder="Add each cooking step in detail."
                  className={inputClasses}
                />
                <button
                  type="button"
                  onClick={addStep}
                  className={`${prompt.className} shrink-0 bg-[#1A1A1A] px-6 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-black`}
                >
                  Add +
                </button>
              </div>
              {steps.length > 0 && (
                <ol className="mt-3 space-y-2">
                  {steps.map((step, i) => (
                    <li
                      key={`${step}-${i}`}
                      className={`${prompt.className} flex items-start gap-3 text-sm text-neutral-800`}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2201B] text-[11px] font-semibold text-white">
                        {i + 1}
                      </span>
                      <span className="flex-1">{step}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setSteps((prev) => prev.filter((_, idx) => idx !== i))
                        }
                        aria-label={`Remove step ${i + 1}`}
                      >
                        <X className="h-3.5 w-3.5 text-[#E2201B]" />
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {/* About */}
            <div>
              <label className={labelClasses}>
                About the recipe <RequiredMark />
              </label>
              <textarea
                name="about"
                required
                rows={5}
                placeholder="Describe your recipe."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Products used */}
            <div>
              <label className={labelClasses}>
                Edinborough Products Used <RequiredMark />
              </label>
              <div className="flex flex-wrap gap-4">
                {EDINBOROUGH_PRODUCTS.map((product) => {
                  const selected = products.includes(product.name);
                  return (
                    <button
                      type="button"
                      key={product.name}
                      onClick={() => toggleProduct(product.name)}
                      className={`relative flex h-28 w-28 flex-col items-center justify-center gap-1 border p-2 text-center transition-colors ${
                        selected
                          ? "border-[#E2201B] bg-[#F9DEDC]"
                          : "border-neutral-200 bg-white hover:border-[#E2201B]/50"
                      }`}
                    >
                      <span className="relative h-14 w-10">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </span>
                      <span
                        className={`${prompt.className} text-[11px] leading-tight text-neutral-800`}
                      >
                        {product.name}
                      </span>
                      <span
                        className={`absolute left-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center border ${
                          selected
                            ? "border-[#E2201B] bg-[#E2201B]"
                            : "border-neutral-300 bg-white"
                        }`}
                      >
                        {selected && (
                          <svg
                            viewBox="0 0 12 12"
                            className="h-2.5 w-2.5"
                            fill="none"
                          >
                            <path
                              d="M2 6.5l2.5 2.5L10 3.5"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
                <div className="flex h-28 w-28 flex-col items-center justify-center gap-1 border border-dashed border-neutral-300 text-neutral-400">
                  <Plus className="h-6 w-6" strokeWidth={1.5} />
                  <span className={`${prompt.className} text-[11px]`}>
                    Add More
                  </span>
                </div>
              </div>
            </div>

            {/* Uploads */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <label className={labelClasses}>
                  Upload Recipe Images <RequiredMark />
                  <span className="ml-1 font-normal text-neutral-400">
                    (Upload up to 5 high-quality photos)
                  </span>
                </label>
                <label className="flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-[#F1D6D5] bg-white px-6 py-10 text-center">
                  <UploadCloud
                    className="h-10 w-10 text-neutral-400"
                    strokeWidth={1.25}
                  />
                  <span
                    className={`${prompt.className} text-sm text-neutral-500`}
                  >
                    Drag &amp; Drop Images Here{" "}
                    <span className="font-semibold text-[#E2201B] underline">
                      Browse Files
                    </span>
                  </span>
                  <span
                    className={`${prompt.className} text-[11px] text-neutral-400`}
                  >
                    JPG &middot; PNG &middot; WEBP (Maximum 5MB each)
                  </span>
                  <input
                    type="file"
                    name="recipeImages"
                    accept="image/*"
                    multiple
                    hidden
                  />
                </label>
              </div>

              <div>
                <label className={labelClasses}>
                  Upload Recipe Video (Optional)
                </label>
                <input
                  name="videoUrl"
                  type="url"
                  placeholder="Paste YouTube Video Link (https://youtube.com/..)"
                  className={inputClasses}
                />
                <p
                  className={`${prompt.className} my-2 text-center text-xs text-neutral-400`}
                >
                  OR
                </p>
                <label className="flex cursor-pointer items-center justify-center gap-2 border border-[#F1D6D5] bg-[#F9DEDC] px-4 py-3 text-sm text-[#E2201B]">
                  <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  <span className={`${prompt.className}`}>
                    Upload MP4 Video (Maximum 50MB)
                  </span>
                  <input type="file" name="recipeVideo" accept="video/mp4" hidden />
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="-mx-6 -mb-10 mt-10 border-t border-neutral-200 bg-[#F4F4F4] px-6 py-6 sm:-mx-10 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label
              className={`${prompt.className} flex max-w-xl items-start gap-2 text-xs text-neutral-600`}
            >
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#E2201B]"
              />
              <span>
                I confirm that this recipe is my original creation and I grant
                Edinborough permission to publish it on its website and social
                media channels.
              </span>
            </label>

            <Button text="Submit Recipe" color="blue" type="submit" />
          </div>

          {submitted && (
            <p className={`${prompt.className} mt-4 text-sm text-[#0845BA]`}>
              Thank you! Your recipe has been submitted for review.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
