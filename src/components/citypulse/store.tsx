import { createContext, useContext, useState, type ReactNode } from 'react';
import road from '@/assets/road.asset.json';
import waste from '@/assets/waste.asset.json';
import water from '@/assets/water.asset.json';
import { seedIssues, type Issue, type Role } from '@/lib/citypulse/model';
interface CityState { issues: Issue[]; role: Role; setRole: (role: Role) => void; addIssue: (issue: Issue) => void; updateIssue: (issue: Issue) => void; search: string; setSearch: (search: string) => void }
const CityContext = createContext<CityState | null>(null);
export function CityProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState(() => seedIssues({ road: road.url, waste: waste.url, water: water.url }));
  const [role, setRole] = useState<Role>('City Administrator');
  const [search, setSearch] = useState('');
  return <CityContext.Provider value={{ issues, role, setRole, search, setSearch, addIssue: issue => setIssues(prev => [issue, ...prev]), updateIssue: issue => setIssues(prev => prev.map(x => x.id === issue.id ? issue : x)) }}>{children}</CityContext.Provider>;
}
export function useCity() { const value = useContext(CityContext); if (!value) throw new Error('CityProvider required'); return value; }
