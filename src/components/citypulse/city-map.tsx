import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import { type Issue } from '@/lib/citypulse/model';
interface Props { issues: Issue[]; onSelect?: (issue: Issue) => void; onLocation?: (lat: number, lng: number) => void; selected?: { lat: number; lng: number }; compact?: boolean }
export default function CityMap({ issues, onSelect, onLocation, selected, compact }: Props) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const map = L.map(container.current, { scrollWheelZoom: !compact, zoomControl: true }).setView([30.6682, 73.1086], compact ? 12 : 13);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 19 }).addTo(map);
    tiles.on('tileerror', () => container.current?.setAttribute('data-tile-error', 'true'));
    const colors = getComputedStyle(document.documentElement);
    const clusters = L.markerClusterGroup({ maxClusterRadius: 40, showCoverageOnHover: false, iconCreateFunction: cluster => L.divIcon({ html: `<span>${cluster.getChildCount()}</span>`, className: 'city-cluster', iconSize: [32, 32] }) });
    issues.forEach(issue => {
      const token = issue.severity === 'High' ? '--danger' : issue.severity === 'Medium' ? '--warning' : '--primary';
      const marker = L.marker([issue.lat, issue.lng], { icon: L.divIcon({ html: '<span></span>', className: `city-marker marker-${issue.severity.toLowerCase()}`, iconSize: [24,24], iconAnchor: [12,12] }) });
      const content = document.createElement('div');
      const heading = document.createElement('strong'); heading.textContent = issue.title;
      const details = document.createElement('p'); details.textContent = `${issue.id} · ${issue.status}`;
      content.append(heading, details); marker.bindPopup(content);
      marker.on('click', () => onSelect?.(issue)); clusters.addLayer(marker);
      void colors.getPropertyValue(token);
    });
    map.addLayer(clusters);
    if (selected) L.circleMarker([selected.lat, selected.lng], { radius: 10, color: colors.getPropertyValue('--primary').trim(), fillOpacity: .5 }).addTo(map);
    if (onLocation) map.on('click', e => onLocation(e.latlng.lat, e.latlng.lng));
    const observer = new ResizeObserver(() => map.invalidateSize()); observer.observe(container.current);
    return () => { observer.disconnect(); map.remove(); };
  }, [issues, onSelect, onLocation, selected, compact]);
  return <div ref={container} className="city-map" aria-label="Sahiwal infrastructure issue map" />;
}
