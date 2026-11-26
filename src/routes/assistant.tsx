import { createFileRoute } from '@tanstack/react-router';
import { AssistantPage } from '@/components/citypulse/ai-pages';
export const Route = createFileRoute('/assistant')({
 head: () => ({ meta: [{title: 'CityPulse assistant | CityPulse AI'}, {name: 'description', content: 'A future AI assistant for authorized city infrastructure intelligence. No LLM is connected.'}, {property: 'og:title', content: 'CityPulse assistant | CityPulse AI'}, {property: 'og:description', content: 'A future AI assistant for authorized city infrastructure intelligence. No LLM is connected.'}, {property: 'og:type', content: 'website'}, {name: 'twitter:card', content: 'summary_large_image'}] }),
 component: AssistantPage,
});
