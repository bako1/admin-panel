// collections/Reflections.ts
import { CollectionConfig } from 'payload'

export const Reflections: CollectionConfig = {
  slug: 'reflections',
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'ayahMoodMap',
      type: 'relationship',
      relationTo: 'ayah-mood-map',
      required: true,
    },
    {
      name: 'language',
      type: 'select',
      options: [
        { label: 'English', value: 'en' },
        { label: 'Arabic', value: 'ar' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
      ],
    },
    {
      name: 'tone',
      type: 'select',
      options: [
        { label: 'Comforting', value: 'comforting' },
        { label: 'Strengthening', value: 'strengthening' },
        { label: 'Hopeful', value: 'hopeful' },
      ],
    },
    {
      name: 'maxIntensity',
      type: 'number',
      min: 1,
      max: 5,
    },
  ],
}
