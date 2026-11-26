import { createFileRoute } from '@tanstack/react-router';
import { IssuesPage } from '@/components/citypulse/issues-page';
export const Route = createFileRoute('/issues')({
 head: () => ({ meta: [{title: 'Issue reports | CityPulse AI'}, {name: 'description', content: 'Review and track sample civic infrastructure reports across Sahiwal.'}, {property: 'og:title', content: 'Issue reports | CityPulse AI'}, {property: 'og:description', content: 'Review and track sample civic infrastructure reports across Sahiwal.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: IssuesPage,
});
