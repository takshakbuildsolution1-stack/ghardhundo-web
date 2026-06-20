import type { PublicProject } from '@/lib/data/projects'
import { formatPrice } from '@/lib/data/projects'
import { LINKS } from '@/lib/analytics'

interface Props {
  project: PublicProject
}

function formatPossession(d: string | null): string {
  if (!d) return 'Ready to move'
  const dt = new Date(d)
  if (isNaN(dt.getTime())) return '—'
  if (dt.getTime() < Date.now()) return 'Ready to move'
  return dt.toLocaleString('en-IN', { month: 'short', year: 'numeric' })
}

function formatArea(min: number | null, max: number | null): string | null {
  if (!min && !max) return null
  if (min && max && min !== max) return `${min}–${max} sqft`
  return `${min ?? max} sqft`
}

export function ProjectCard({ project }: Props) {
  const {
    project_id, project_name, developer_name, micro_market,
    price_min, price_max, bhk_types, stage, possession_date,
    carpet_area_min, carpet_area_max, total_units, sold_units,
    available_units, booked_units, sales_velocity_pct,
  } = project

  const bhkLabel = bhk_types.slice(0, 2).join(' / ')
  const possession = formatPossession(possession_date)
  const area = formatArea(carpet_area_min, carpet_area_max)
  const bookedCount = booked_units ?? sold_units
  const soldPct = sales_velocity_pct !== null
    ? sales_velocity_pct
    : (total_units && bookedCount !== null ? Math.round((bookedCount / total_units) * 100) : null)

  return (
    <a
      href={LINKS.projectBase(project_id)}
      className="glass-card p-5 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-250 group"
      style={{ textDecoration: 'none', display: 'flex' }}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-white font-bold text-[15px] mb-0.5">{project_name}</div>
          <div className="text-white/30 text-[11px]">{developer_name} · {micro_market}</div>
        </div>
        <div
          className="text-[10px] font-semibold text-mint px-2 py-0.5 rounded-full shrink-0"
          style={{ background: 'rgba(46,204,138,0.1)', border: '1px solid rgba(46,204,138,0.2)' }}
        >
          {bhkLabel}
        </div>
      </div>

      <div className="text-saffron font-extrabold text-xl">{formatPrice(price_min, price_max)}</div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
        <div>
          <span className="text-white/25 uppercase tracking-wider text-[9px]">Possession</span>
          <div className="text-white/70 font-medium">{possession}</div>
        </div>
        {area && (
          <div>
            <span className="text-white/25 uppercase tracking-wider text-[9px]">Carpet Area</span>
            <div className="text-white/70 font-medium">{area}</div>
          </div>
        )}
        {total_units !== null && (
          <div>
            <span className="text-white/25 uppercase tracking-wider text-[9px]">Units Sold</span>
            <div className="text-white/70 font-medium">
              {bookedCount ?? '—'} / {total_units}
              {soldPct !== null && <span className="text-white/40 ml-1">({soldPct}%)</span>}
            </div>
          </div>
        )}
        {available_units !== null && (
          <div>
            <span className="text-white/25 uppercase tracking-wider text-[9px]">Available</span>
            <div className="text-white/70 font-medium">{available_units} units</div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="text-[12px] text-white/40 group-hover:text-saffron transition-colors font-medium">
          Get Best Offer →
        </span>
        <span className="text-[10px] text-white/20 uppercase tracking-wider">MahaRERA ✓</span>
      </div>
    </a>
  )
}
