// collections/Moods.ts

import { CollectionConfig } from "payload";

export const Moods: CollectionConfig = {
  slug: 'moods',
  admin: {
    useAsTitle: 'displayName',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'displayName',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'redirectMood',
      type: 'relationship',
      relationTo: 'moods',
      hasMany: false,
    },
  ],
}
