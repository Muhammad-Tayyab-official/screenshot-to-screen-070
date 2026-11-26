import { createFileRoute } from '@tanstack/react-router';
import { AnalyticsPage } from '@/components/citypulse/analytics-page';
export const Route = createFileRoute('/analytics')({
 head: () => ({ meta: [{title: 'Infrastructure analytics | CityPulse AI'}, {name: 'description', content: 'Explore sample infrastructure trends, hotspots, resolution rates and department performance.'}, {property: 'og:title', content: 'Infrastructure analytics | CityPulse AI'}, {property: 'og:description', content: 'Explore sample infrastructure trends, hotspots, resolution rates and department performance.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: AnalyticsPage,
});
