import { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  fields: [
    { name: 'name', type: 'text' },
    { name: 'tagline', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'primaryCta', type: 'text' },
    { name: 'primaryHref', type: 'text' },
    { name: 'secondaryCta', type: 'text' },
    { name: 'secondaryHref', type: 'text' },
  ],
}
