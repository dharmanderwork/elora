import type { MetadataRoute } from 'next';
import { SERVICES_DATA, JOURNAL_ARTICLES } from '@/lib/elora-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://elorabeautyatelier.demo';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/experts',
    '/gallery',
    '/pricing',
    '/book',
    '/contact',
    '/journal',
    '/faq',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const journalRoutes = JOURNAL_ARTICLES.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...journalRoutes];
}
