import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProjects() {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
  });
  
  return response.items;
}

export async function getProject(slug: string) {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
    'fields.slug': slug,
    limit: 1,
  });
  
  return response.items[0];
} 