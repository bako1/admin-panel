import { CollectionConfig } from "payload";

export const DishCollection: CollectionConfig = {
  slug: "dishes",
  fields: [
    { name: "name", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "price", type: "text", required: true },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "badges",
      type: "select",
      hasMany: true,
      options: ["Vegan", "Vegetarian", "Halal", "Gluten-free", "Spicy"],
    },
    {
      name: "featured",
      type: "checkbox",
    },
  ]
}
