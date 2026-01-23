import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add folders you don't want indexed
    },
    sitemap: 'https://www.skellify.com/sitemap.xml',
  }
}