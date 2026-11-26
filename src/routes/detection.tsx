import { createFileRoute } from '@tanstack/react-router';
import { DetectionPage } from '@/components/citypulse/ai-pages';
export const Route = createFileRoute('/detection')({
 head: () => ({ meta: [{title: 'AI infrastructure detection | CityPulse AI'}, {name: 'description', content: 'Prepare photographic evidence for future computer vision analysis. No AI model is connected.'}, {property: 'og:title', content: 'AI infrastructure detection | CityPulse AI'}, {property: 'og:description', content: 'Prepare photographic evidence for future computer vision analysis. No AI model is connected.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: DetectionPage,
});
