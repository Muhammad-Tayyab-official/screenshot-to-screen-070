export const categories = ['Road damage', 'Waste accumulation', 'Streetlight failure', 'Water & drainage', 'Road obstruction', 'Infrastructure damage'] as const;
export type Category = typeof categories[number];
export const statuses = ['Reported', 'Under Review', 'Verified', 'Assigned', 'In Progress', 'Resolved', 'Verified Complete'] as const;
export type Status = typeof statuses[number];
export const roles = ['Citizen', 'Field Inspector', 'Maintenance Worker', 'Department Administrator', 'City Administrator'] as const;
export type Role = typeof roles[number];
export type Severity = 'High' | 'Medium' | 'Low';
export interface Issue { id: string; title: string; description: string; category: Category; severity: Severity; status: Status; location: string; lat: number; lng: number; createdAt: string; department: string; assignee: string; notes: string[]; photo?: string; afterPhoto?: string }
export const departmentFor = (category: Category) => category === 'Waste accumulation' ? 'Sanitation' : category === 'Streetlight failure' ? 'Electrical Services' : category === 'Water & drainage' ? 'Water & Sewerage' : 'Public Works';
export function nextStatus(status: Status): Status | undefined { return statuses[statuses.indexOf(status) + 1]; }
// This is a demonstration of navigation and workflow access, not an authorization boundary.
export function canAdvancePreview(role: Role, status: Status): boolean {
  if (role === 'City Administrator') return status !== 'Verified Complete';
  if (role === 'Field Inspector') return ['Reported', 'Under Review', 'Resolved'].includes(status);
  if (role === 'Department Administrator') return status === 'Verified';
  if (role === 'Maintenance Worker') return status === 'Assigned' || status === 'In Progress';
  return false;
}
export function advanceIssue(issue: Issue, role: Role): Issue {
  const next = nextStatus(issue.status);
  if (!next || !canAdvancePreview(role, issue.status)) throw new Error('This role cannot advance this stage.');
  if (next === 'Assigned' && (!issue.department || !issue.assignee)) throw new Error('Choose a department and staff member before assignment.');
  if (next === 'Resolved' && (!issue.afterPhoto || !issue.notes.some(note => note.trim() && !note.endsWith('(sample workflow)')))) throw new Error('Add a completion photograph and maintenance note before resolving.');
  return { ...issue, status: next, notes: [...issue.notes, `${next} · ${role} (sample workflow)`] };
}
export function seedIssues(photos: Record<string, string>): Issue[] {
  const titles = ['Pothole on College Road', 'Waste accumulation near market', 'Streetlight out on Railway Road', 'Water leakage on Farid Town Road', 'Obstruction near High Street', 'Damaged pavement in Civil Lines'];
  const locations = ['College Road', 'High Street Market', 'Railway Road', 'Farid Town', 'High Street', 'Civil Lines'];
  const distribution: Status[] = ['Reported', 'Under Review', 'Verified', 'Assigned', 'In Progress', 'Resolved', 'Verified Complete', 'Verified Complete'];
  return Array.from({ length: 128 }, (_, i) => {
    const category = categories[i % categories.length] ?? 'Road damage';
    const status = distribution[i % distribution.length] ?? 'Reported';
    const p = category === 'Waste accumulation' ? photos['waste'] : category === 'Water & drainage' ? photos['water'] : category === 'Road damage' ? photos['road'] : undefined;
    return { id: `CP-${String(1048 - i).padStart(4, '0')}`, title: titles[i % 6] ?? 'Infrastructure report', description: 'Sample citizen report. Infrastructure damage needs an on-site inspection and appropriate maintenance.', category, severity: i % 3 === 0 ? 'High' : i % 3 === 1 ? 'Medium' : 'Low', status, location: locations[i % 6] ?? 'Sahiwal', lat: 30.6682 + Math.sin(i * 3.7) * .025, lng: 73.1086 + Math.cos(i * 2.4) * .036, createdAt: new Date(Date.UTC(2026, 10 - Math.floor(i / 23), 26 - i % 24, 9)).toISOString(), department: departmentFor(category), assignee: status === 'Assigned' || status === 'In Progress' ? 'Ali Hassan' : '', notes: [], ...(p ? { photo: p } : {}) };
  });
}
export function summary(issues: Issue[]) { return { total: issues.length, verified: issues.filter(x => statuses.indexOf(x.status) >= 2).length, pending: issues.filter(x => ['Verified', 'Assigned', 'In Progress'].includes(x.status)).length, resolved: issues.filter(x => ['Resolved', 'Verified Complete'].includes(x.status)).length }; }
