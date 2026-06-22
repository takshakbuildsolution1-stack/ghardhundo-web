'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PublicProject } from '@/lib/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { LINKS } from '@/lib/analytics'

interface Props {
  projects: PublicProject[]
}

const BHK_OPTIONS = ['All', '1 BHK', '2 BHK', '3 BHK', '4 BHK+']
const PRICE_OPTIONS = [
  { label: 'All prices', min: 0, max: Infinity },
  { label: 'Under ₹50L', min: 0, max: 50 },
  { label: '₹50L – ₹1Cr', min: 50, max: 100 },
  { label: '₹1Cr – ₹1.5Cr', min: 100, max: 150 },
  { label: '₹1.5Cr+', min: 150, max: Infinity },
]
const INITIAL_SHOW = 6

export function FeaturedProjects({ projects }: Props) {
  const microMarkets = ['All', ...Array.from(new Set(projects.map(p => p.micro_market)))]
  const [market, setMarket] = useState('All')
  const [bhk, setBhk] = useState('All')
  const [priceIdx, setPriceIdx] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const priceFilter = PRICE_OPTIONS[priceIdx]

  const filtered = projects.filter(p => {
    if (market !== 'All' && p.micro_market !== market) return false
    if (bhk !== 'All') {
      const n = parseInt(bhk)
      if (bhk === '4 BHK+') {
        if (!p.bhk_types.some(b => parseInt(b) >= 4)) return false
      } else {
        if (!p.bhk_types.some(b => parseInt(b) === n)) return false
      }
    }
    const mid = (p.price_min + p.price_max) / 2
    if (mid < priceFilter.min || mid > priceFilter.max) return false
    return true
  })

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW)
  const hasMore = filtered.length > INITIAL_SHOW

  return (
    <section id="projects" className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <h2 className="font-serif italic text-white mb-2" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Live projects in Pune
          </h2>
          <p className="text-white/40 text-[15px]">All MahaRERA verified. AI-matched to your profile.</p>
        </div>
        <a
          href={LINKS.register}
          className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-white/60 hover:text-saffron transition-colors"
        >
          Get matched →
        </a>
      </motion.div>

      {/* Filters */}
      <div className="space-y-3 mb-8">
        {/* Micro-market */}
        <div className="flex gap-2 flex-wrap">
          {microMarkets.map(f => (
            <button
              key={f}
              onClick={() => setMarket(f)}
              className="px-4 py-2 rounded-full text-[12px] font-semibold transition-all"
              style={
                market === f
                  ? { background: '#FF6B35', color: '#07070f' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* BHK + Price row */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-white/20 text-[11px] uppercase tracking-wider mr-1">BHK</span>
          {BHK_OPTIONS.map(b => (
            <button
              key={b}
              onClick={() => setBhk(b)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
              style={
                bhk === b
                  ? { background: 'rgba(255,107,53,0.18)', border: '1px solid rgba(255,107,53,0.5)', color: '#FF6B35' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }
              }
            >
              {b}
            </button>
          ))}

          <span className="text-white/10 mx-2">|</span>
          <span className="text-white/20 text-[11px] uppercase tracking-wider mr-1">Price</span>
          {PRICE_OPTIONS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setPriceIdx(i)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
              style={
                priceIdx === i
                  ? { background: 'rgba(255,107,53,0.18)', border: '1px solid rgba(255,107,53,0.5)', color: '#FF6B35' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }
              }
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-white/25 text-[12px] mb-5">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
      </p>

      {filtered.length === 0 ? (
        <div className="text-white/30 text-[14px] py-12 text-center">No projects match these filters.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((project, i) => (
              <motion.div
                key={project.project_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(v => !v)}
                className="px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                {showAll ? 'Show less ↑' : `Show all ${filtered.length} projects ↓`}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}
