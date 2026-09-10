import type { Metadata } from "next";
import RecipeSubmitForm from "@/components/recipes/recipeSubmitForm";

export const metadata: Metadata = {
  title: "Share Your Recipe | Edinborough",
  description:
    "Submit your favourite recipe made with Edinborough products and inspire home cooks across Sri Lanka.",
};

export default function RecipeSubmitPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm">
        <RecipeSubmitForm />
      </div>
    </main>
  );
}
