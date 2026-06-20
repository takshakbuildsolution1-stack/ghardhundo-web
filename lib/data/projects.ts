export interface PublicProject {
  project_id: string
  project_name: string
  developer_name: string
  micro_market: string
  corridor_zone: string
  price_min: number
  price_max: number
  bhk_types: string[]
  possession_date: string | null
  stage: string
  rera_id: string
  builder_score: number | null
  carpet_area_min: number | null
  carpet_area_max: number | null
  total_units: number | null
  sold_units: number | null
  available_units: number | null
  booked_units: number | null
  sales_velocity_pct: number | null
}

export async function fetchPublicProjects(): Promise<PublicProject[]> {
  try {
    const res = await fetch(
      'https://ghardhundo-platform.vercel.app/api/projects/public',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.projects ?? []
  } catch {
    return []
  }
}

export function formatPrice(minLakhs: number, maxLakhs: number): string {
  const fmt = (v: number) => v >= 100 ? `₹${(v / 100).toFixed(1)}Cr` : `₹${v}L`
  if (minLakhs === maxLakhs) return fmt(minLakhs)
  return `${fmt(minLakhs)} – ${fmt(maxLakhs)}`
}
