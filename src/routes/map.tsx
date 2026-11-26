import { createFileRoute } from '@tanstack/react-router';
import { MapPage } from '@/components/citypulse/map-page';
export const Route = createFileRoute('/map')({
 head: () => ({ meta: [{title: 'City intelligence map | CityPulse AI'}, {name: 'description', content: 'Explore sample infrastructure issues on an interactive OpenStreetMap of Sahiwal.'}, {property: 'og:title', content: 'City intelligence map | CityPulse AI'}, {property: 'og:description', content: 'Explore sample infrastructure issues on an interactive OpenStreetMap of Sahiwal.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: MapPage,
});
