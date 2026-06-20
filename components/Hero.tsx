'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { HeroLeft } from '@/components/HeroLeft'
import { HeroRight } from '@/components/HeroRight'
import type { PublicProject } from '@/lib/data/projects'
import { formatPrice } from '@/lib/data/projects'
import { LINKS } from '@/lib/analytics'

interface Props {
  projects: PublicProject[]
}

function MobileHeroCard({ projects }: { projects: PublicProject[] }) {
  const main = projects[0] ?? null

  return (
    <div className="lg:hidden mt-10">
      <div className="glass-card-saffron p-5 relative overflow-hidden">
        <div className="ai-scan" />
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-white/40">// AI_MATCH_RESULT</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-mint rounded-full" style={{ animation: 'pulseDot 1s infinite', boxShadow: '0 0 6px #2ECC8A' }} />
            <span className="font-mono text-[9px] tracking-[1px] text-mint">LIVE</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="text-white font-bold text-[15px]">{main ? main.project_name : 'Top AI match'}</div>
            <div className="text-white/30 text-[11px]">{main ? `${main.micro_market} · ${main.bhk_types.slice(0, 2).join('/')}` : 'West Pune · 2BHK / 3BHK'}</div>
          </div>
          <div>
            <div className="text-white font-extrabold text-xl">{main ? formatPrice(main.price_min, main.price_max) : '₹65–90L'}</div>
            <div className="text-[11px] font-bold text-mint text-right">Best Offer</div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-white/30 mt-1.5">
          <span>MahaRERA Verified</span>
          <a href={LINKS.register} className="text-saffron font-semibold">Get Best Offer →</a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        {[
          { label: '₹12L', sub: 'Max. saving' },
          { label: '0%', sub: 'Brokerage' },
          { label: '5 min', sub: 'AI match' },
          { label: '100+', sub: 'Projects' },
        ].map(s => (
          <div key={s.label} className="glass-card p-3 text-center">
            <div className="text-saffron font-extrabold text-xl">{s.label}</div>
            <div className="text-white/30 text-[10px] uppercase tracking-wider mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero({ projects }: Props) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -80])
  const y2 = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <section className="relative z-[1] min-h-screen px-8 lg:px-16 pt-[130px] pb-20">
      <motion.div style={{ y: y1 }} className="absolute pointer-events-none" aria-hidden />
      <motion.div style={{ y: y2 }} className="absolute pointer-events-none" aria-hidden />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
        <HeroLeft />
        <MobileHeroCard projects={projects} />
        <div className="hidden lg:block">
          <HeroRight projects={projects} />
        </div>
      </div>
    </section>
  )
}
