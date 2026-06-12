import type { Project } from '@/lib/data/projects'
import { SeatProgressBar } from '@/components/ui/SeatProgressBar'
import { LINKS } from '@/lib/analytics'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const { id, name, locality, area, bhk, priceMin, priceMax, seatsTotal, seatsFilled } = project
  const priceLabel =
    priceMax >= 100
      ? `₹${priceMin}L – ₹${(priceMax / 100).toFixed(1)}Cr`
      : `₹${priceMin}–${priceMax}L`

  return (
    <a
      href={LINKS.projectBase(id)}
      className="glass-card p-5 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-250 group"
      style={{ textDecoration: 'none', display: 'flex' }}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-white font-bold text-[15px] mb-1">{name}</div>
          <div className="text-white/30 text-[11px]">{locality} · {area}</div>
        </div>
        <div
          className="text-[10px] font-semibold text-mint px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(46,204,138,0.1)', border: '1px solid rgba(46,204,138,0.2)' }}
        >
          {bhk}
        </div>
      </div>

      <div className="text-saffron font-extrabold text-xl">{priceLabel}</div>

      <div>
        <div className="flex justify-between text-[10px] text-white/30 mb-1.5">
          <span>Group progress</span>
          <span>{seatsFilled} / {seatsTotal} joined</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden mb-2" style={{ background: 'rgba(255,255,255,0.07)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${(seatsFilled / seatsTotal) * 100}%`,
              background: 'linear-gradient(90deg,#2ECC8A,#FF6B35)',
            }}
          />
        </div>
        <SeatProgressBar total={seatsTotal} filled={seatsFilled} />
      </div>

      <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="text-[12px] text-white/40 group-hover:text-saffron transition-colors font-medium">
          Join Group →
        </span>
        <span className="text-[10px] text-white/20 uppercase tracking-wider">MahaRERA ✓</span>
      </div>
    </a>
  )
}
