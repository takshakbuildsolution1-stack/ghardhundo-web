'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PublicProject } from '@/lib/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

interface Props {
  projects: PublicProject[]
}

export function FeaturedProjects({ projects }: Props) {
  const microMarkets = ['All', ...Array.from(new Set(projects.map(p => p.micro_market)))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.micro_market === active)

  return (
    <section id="projects" className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="font-serif italic text-white mb-2" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Live projects in Pune
        </h2>
        <p className="text-white/40 text-[15px]">All MahaRERA verified. AI-matched to your profile.</p>
      </motion.div>

      {microMarkets.length > 1 && (
        <div className="flex gap-2 mb-8 flex-wrap">
          {microMarkets.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-full text-[12px] font-semibold transition-all"
              style={
                active === f
                  ? { background: '#FF6B35', color: '#07070f' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }
              }
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-white/30 text-[14px] py-12 text-center">Loading projects…</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.project_id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
