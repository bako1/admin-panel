// collections/Dua.ts
import { CollectionConfig } from 'payload'

export const Dua: CollectionConfig = {
  slug: 'dua',
  admin: {
    useAsTitle: 'arabic',
  },
  fields: [
    {
      name: 'arabic',
      type: 'textarea',
      required: true,
    },
    {
      name: 'translations',
      type: 'array',
      fields: [
        {
          name: 'language',
          type: 'text',
        },
        {
          name: 'text',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'moods',
      type: 'relationship',
      relationTo: 'moods',
      hasMany: true,
    },
    {
      name: 'tone',
      type: 'select',
      options: ['short', 'deep', 'emergency'],
    },
    {
      name: 'maxIntensity',
      type: 'number',
      min: 1,
      max: 5,
    },
  ],
}
