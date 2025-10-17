import React from "react";
import VariantButton from "./VariantButton";

const FoodCard = ({ foodItem, handleLike, handleDislike }) => {
  // Tag styling for UI badges
  const tagsClass = {
    healthy_choice: "bg-green-100 text-green-800",
    protein_boost: "bg-blue-100 text-blue-800",
    vegan: "bg-yellow-100 text-yellow-800",
    vegetarian: "bg-purple-100 text-purple-800",
    gluten_free: "bg-red-100 text-red-800",
    low_carb: "bg-pink-100 text-pink-800",
    dairy_free: "bg-teal-100 text-teal-800",
    light: "bg-indigo-100 text-indigo-800",
    mess_special: "bg-orange-100 text-orange-800",
    recommended: "bg-gray-100 text-gray-800",

    // extra dataset-specific tags
    low_fat: "bg-emerald-100 text-emerald-800",
    low_calorie: "bg-lime-100 text-lime-800",
    high_fiber: "bg-green-200 text-green-900",
    carb_rich: "bg-pink-200 text-pink-900",
    sweet: "bg-rose-100 text-rose-800",
    snack: "bg-yellow-200 text-yellow-900",
    light_snack: "bg-sky-100 text-sky-800",
    comfort_food: "bg-orange-200 text-orange-900",
    cheat_meal: "bg-red-200 text-red-900",
    probiotic: "bg-purple-200 text-purple-900",
    antioxidants: "bg-indigo-200 text-indigo-900",
    vitamins: "bg-cyan-100 text-cyan-800",
    omega3: "bg-blue-200 text-blue-900",
    fiber: "bg-green-300 text-green-900",
    healthy_fats: "bg-teal-200 text-teal-900",
    energy_boost: "bg-amber-100 text-amber-800",
    on_the_go: "bg-gray-200 text-gray-900",
    side: "bg-slate-100 text-slate-800",
    cold: "bg-blue-50 text-blue-700",
    vitamin_rich: "bg-indigo-50 text-indigo-700",
  };

  // Dietary preferences (used for filters / highlighting user-specific meals)
  const dietaryChoiceClass = {
    vegan: "bg-yellow-50 border border-yellow-200 text-yellow-700",
    vegetarian: "bg-purple-50 border border-purple-200 text-purple-700",
    gluten_free: "bg-red-50 border border-red-200 text-red-700",
    low_carb: "bg-pink-50 border border-pink-200 text-pink-700",
    dairy_free: "bg-teal-50 border border-teal-200 text-teal-700",
  };

  return (
    <div className="flex flex-col bg-card-bg/60 rounded-2xl gap-2 w-[254px] h-fit text-[16px] shadow-lg p-4">
      <div className="flex gap-2 justify-end">
        {foodItem.tags.map(
          (tag, index) =>
            index < 2 && (
              <div
                key={index}
                className={`text-[14px] rounded-full px-2 ${tagsClass[tag]}`}
              >
                {tag}
              </div>
            )
        )}
      </div>

      <div className="flex">
        <div className="font-semibold">{foodItem.name}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col text-[14px] text-gray-600 ml-2">
          <div className="text-amber-700">
            Calories: {foodItem.nutrition.calories}
          </div>
          <div className="text-blue-600">
            Protein: {foodItem.nutrition.protein}g
          </div>
          <div className="">Carbs: {foodItem.nutrition.carbs}g</div>
          <div className="">Fats: {foodItem.nutrition.fats}g</div>
        </div>
        <div className="flex flex-col items-end mr-4 gap-4">
          <VariantButton
            size="tiny"
            variant={`${foodItem.liked === true ? "cta": "ghostCta"}`}
            icon="thumbs-up"
            onClick={handleLike}
          />
          <VariantButton
            size="tiny"
            variant={`${foodItem.disliked === true ? "red": "ghostRed"}`}
            icon="thumbs-down"
            onClick={handleDislike}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
