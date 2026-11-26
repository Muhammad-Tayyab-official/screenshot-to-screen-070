import { createFileRoute } from '@tanstack/react-router';
import { OverviewPage } from '@/components/citypulse/overview';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{title: 'City overview | CityPulse AI'}, {name: 'description', content: 'Explore sample Sahiwal infrastructure issues, maintenance progress and city trends.'}, {property: 'og:title', content: 'City overview | CityPulse AI'}, {property: 'og:description', content: 'Explore sample Sahiwal infrastructure issues, maintenance progress and city trends.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: OverviewPage,
});
