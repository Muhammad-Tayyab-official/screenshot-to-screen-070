import { createFileRoute } from '@tanstack/react-router';
import { SettingsPage } from '@/components/citypulse/settings-page';
export const Route = createFileRoute('/settings')({
 head: () => ({ meta: [{title: 'Workspace settings | CityPulse AI'}, {name: 'description', content: 'Inspect CityPulse AI demonstration settings, connection status and role previews.'}, {property: 'og:title', content: 'Workspace settings | CityPulse AI'}, {property: 'og:description', content: 'Inspect CityPulse AI demonstration settings, connection status and role previews.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: SettingsPage,
});
