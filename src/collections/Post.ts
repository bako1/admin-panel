/*import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts', // A unique, URL-friendly identifier
  access: {
    read: () => true, // Example: allow anyone to read
  },
  fields: [
    {
      name: 'title',
      type: 'text', // Use a standard field type
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
*/
import { CollectionConfig } from 'payload' // 1. Import the type
import { lexicalEditor, BlocksFeature, CodeBlock } from '@payloadcms/richtext-lexical'

// 2. Assign the CollectionConfig type here
export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              CodeBlock({
                languages: {
                  ts: 'TypeScript',
                  js: 'JavaScript',
                  python: 'Python',
                  java: 'Java',
                  cpp: 'C++',
                },
              }),
            ],
          }),
        ],
      }),
    },
  ],
}
