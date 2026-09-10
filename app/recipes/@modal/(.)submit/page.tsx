import RecipeSubmitModal from "@/components/recipes/recipeSubmitModal";
import RecipeSubmitForm from "@/components/recipes/recipeSubmitForm";

export default function InterceptedRecipeSubmitPage() {
  return (
    <RecipeSubmitModal>
      <RecipeSubmitForm />
    </RecipeSubmitModal>
  );
}
