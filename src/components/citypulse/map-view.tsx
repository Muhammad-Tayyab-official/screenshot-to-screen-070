import { ClientOnly } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { MapPin } from 'lucide-react';
const CityMap = lazy(() => import('./city-map'));
export function MapView(props: React.ComponentProps<typeof CityMap>) {
  const fallback = <div className="map-loading"><MapPin className="size-6" /><span>Loading Sahiwal map…</span></div>;
  return <ClientOnly fallback={fallback}><Suspense fallback={fallback}><CityMap {...props} /></Suspense></ClientOnly>;
}
