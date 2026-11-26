import { createFileRoute } from '@tanstack/react-router';
import { ReportPage } from '@/components/citypulse/report-page';
export const Route = createFileRoute('/report')({
 head: () => ({ meta: [{title: 'Report an issue | CityPulse AI'}, {name: 'description', content: 'Submit a sample infrastructure report with photographic evidence and a map location.'}, {property: 'og:title', content: 'Report an issue | CityPulse AI'}, {property: 'og:description', content: 'Submit a sample infrastructure report with photographic evidence and a map location.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: ReportPage,
});
