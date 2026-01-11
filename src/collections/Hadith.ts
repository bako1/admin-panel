// collections/Hadith.ts
import { CollectionConfig } from 'payload'

export const Hadith: CollectionConfig = {
  slug: 'hadith',
  admin: {
    useAsTitle: 'reference',
  },
  fields: [
    {
      name: 'source',
      type: 'text',
      required: true,
    },
    {
      name: 'reference',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'language',
      type: 'select',
      options: ['en', 'ar'],
      required: true,
    },
    {
      name: 'moods',
      type: 'relationship',
      relationTo: 'moods',
      hasMany: true,
    },
    {
      name: 'minIntensity',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'maxIntensity',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'authenticity',
      type: 'select',
      options: ['sahih', 'hasan', 'daif'],
    },
  ],
}
