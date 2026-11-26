import { createFileRoute } from '@tanstack/react-router';
import { MaintenancePage } from '@/components/citypulse/maintenance-page';
export const Route = createFileRoute('/maintenance')({
 head: () => ({ meta: [{title: 'Maintenance management | CityPulse AI'}, {name: 'description', content: 'Manage the sample infrastructure workflow from verification to completed maintenance.'}, {property: 'og:title', content: 'Maintenance management | CityPulse AI'}, {property: 'og:description', content: 'Manage the sample infrastructure workflow from verification to completed maintenance.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: MaintenancePage,
});
