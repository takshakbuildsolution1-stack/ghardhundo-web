import type { PublicProject } from '@/lib/data/projects'
import { formatPrice } from '@/lib/data/projects'
import { LINKS } from '@/lib/analytics'

interface Props {
  project: PublicProject
}

export function ProjectCard({ project }: Props) {
  const { project_id, project_name, developer_name, micro_market, price_min, price_max, bhk_types, stage, possession_date } = project

  const bhkLabel = bhk_types.slice(0, 2).join(' / ')
  const stageLabel = stage === 'ready' ? 'Ready to move' : stage === 'nearing_possession' ? 'Nearing possession' : 'Under construction'
  const possessionLabel = possession_date
    ? new Date(possession_date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
    : null

  return (
    <a
      href={LINKS.projectBase(project_id)}
      className="glass-card p-5 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-250 group"
      style={{ textDecoration: 'none', display: 'flex' }}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-white font-bold text-[15px] mb-1">{project_name}</div>
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

      <div className="flex items-center justify-between text-[11px] text-white/30">
        <span>{stageLabel}</span>
        {possessionLabel && <span>Possession {possessionLabel}</span>}
      </div>

      <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="text-[12px] text-white/40 group-hover:text-saffron transition-colors font-medium">
          Get Best Offer →
        </span>
        <span className="text-[10px] text-white/20 uppercase tracking-wider">MahaRERA ✓</span>
      </div>
    </a>
  )
}
