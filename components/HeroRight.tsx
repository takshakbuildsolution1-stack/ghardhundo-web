import type { PublicProject } from '@/lib/data/projects'
import { formatPrice } from '@/lib/data/projects'
import { LINKS } from '@/lib/analytics'

const FALLBACK_CARDS: PublicProject[] = [
  { project_id: '1', project_name: 'West Pune · 2BHK', developer_name: '', micro_market: 'Baner', corridor_zone: '', price_min: 58, price_max: 78, bhk_types: ['2BHK'], possession_date: null, stage: 'under_construction', rera_id: '', builder_score: null, carpet_area_min: null, carpet_area_max: null, total_units: null, sold_units: null, available_units: null, booked_units: null, sales_velocity_pct: null },
  { project_id: '2', project_name: 'East Pune · 3BHK', developer_name: '', micro_market: 'Kharadi', corridor_zone: '', price_min: 105, price_max: 130, bhk_types: ['3BHK'], possession_date: null, stage: 'under_construction', rera_id: '', builder_score: null, carpet_area_min: null, carpet_area_max: null, total_units: null, sold_units: null, available_units: null, booked_units: null, sales_velocity_pct: null },
  { project_id: '3', project_name: 'North Pune · 2BHK', developer_name: '', micro_market: 'Moshi', corridor_zone: '', price_min: 45, price_max: 62, bhk_types: ['2BHK'], possession_date: null, stage: 'under_construction', rera_id: '', builder_score: null, carpet_area_min: null, carpet_area_max: null, total_units: null, sold_units: null, available_units: null, booked_units: null, sales_velocity_pct: null },
]

interface Props {
  projects: PublicProject[]
}

export function HeroRight({ projects }: Props) {
  const main = projects[0] ?? null
  const cards = projects.slice(1, 4)

  return (
    <div className="relative flex flex-col gap-2.5">
      <div className="data-flow-line" />

      {/* AI Match Card */}
      <div className="glass-card-saffron p-[18px] relative overflow-hidden">
        <div className="ai-scan" />

        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-white/40">
            // AI_MATCH_RESULT
          </span>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 bg-mint rounded-full"
              style={{ animation: 'pulseDot 1s infinite', boxShadow: '0 0 6px #2ECC8A' }}
            />
            <span className="font-mono text-[9px] tracking-[1px] text-mint">LIVE</span>
          </div>
        </div>

        {main ? (
          <>
            <div className="text-base font-bold text-white mb-0.5">{main.project_name}</div>
            <div className="text-[11px] text-white/30 mb-3.5">{main.micro_market} · {main.bhk_types.slice(0, 2).join(' / ')}</div>
            <div className="flex justify-between items-center mb-2.5">
              <div className="text-[22px] font-extrabold text-white">{formatPrice(main.price_min, main.price_max)}</div>
              <div
                className="text-[11px] font-bold text-mint px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(46,204,138,0.12)', border: '1px solid rgba(46,204,138,0.25)' }}
              >
                Best Offer
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-base font-bold text-white mb-0.5">Top AI match</div>
            <div className="text-[11px] text-white/30 mb-3.5">West Pune · 2BHK / 3BHK</div>
            <div className="flex justify-between items-center mb-2.5">
              <div className="text-[22px] font-extrabold text-white">₹65–90L</div>
              <div
                className="text-[11px] font-bold text-mint px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(46,204,138,0.12)', border: '1px solid rgba(46,204,138,0.25)' }}
              >
                Best Offer
              </div>
            </div>
          </>
        )}

        <div className="flex items-center gap-2.5 mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
              <circle
                cx="20" cy="20" r="16" fill="none" stroke="#FF6B35" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="15" strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 4px rgba(255,107,53,0.6))' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-saffron">95%</div>
          </div>
          <div className="text-[11px] text-white/35 leading-relaxed">
            <strong className="text-white/75">95% match score</strong><br />
            Based on your budget, location &amp; BHK
          </div>
        </div>
      </div>

      {/* Live project cards */}
      {(cards.length > 0 ? cards : FALLBACK_CARDS).map((card) => (
        <a
          key={card.project_id}
          href={LINKS.register}
          className="glass-card p-3.5 flex items-center justify-between cursor-pointer transition-all hover:-translate-x-1.5 group"
          style={{ textDecoration: 'none' }}
        >
          <div>
            <div className="text-[13px] font-bold text-white mb-0.5">{card.project_name}</div>
            <div className="text-[11px] text-white/30">{card.micro_market}</div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-bold text-white">
              {formatPrice(card.price_min, card.price_max)}
            </div>
            <div className="text-[10px] text-mint mt-1">MahaRERA ✓</div>
          </div>
        </a>
      ))}

      {/* Savings banner */}
      <div
        className="rounded-[14px] p-4 flex items-center justify-between"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(240,165,0,0.06))',
          border: '1px solid rgba(255,107,53,0.18)',
        }}
      >
        <div>
          <div className="text-[10px] text-white/30 uppercase tracking-[1px] mb-1">Best savings achieved</div>
          <div className="text-[26px] font-extrabold text-saffron">₹12L / buyer</div>
        </div>
        <div
          className="text-[10px] font-bold text-mint text-right px-3 py-2 rounded-xl"
          style={{ background: 'rgba(46,204,138,0.12)', border: '1px solid rgba(46,204,138,0.25)' }}
        >
          Zero<br />brokerage
        </div>
      </div>
    </div>
  )
}
