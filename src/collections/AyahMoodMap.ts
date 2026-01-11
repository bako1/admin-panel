// collections/AyahMoodMap.ts
import { CollectionConfig } from 'payload'

export const AyahMoodMap: CollectionConfig = {
  slug: 'ayah-mood-map',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'mood',
      type: 'relationship',
      relationTo: 'moods',
      required: true,
    },
    {
      name: 'surahId',
      type: 'number',
      required: true,
    },
    {
      name: 'ayahId',
      type: 'number',
      required: true,
    },
    {
      name: 'minIntensity',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 1,
    },
    {
      name: 'maxIntensity',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'priority',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'cooldownDays',
      type: 'number',
      defaultValue: 7,
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Why this ayah fits this mood (editor only)',
      },
    },
  ],
}
