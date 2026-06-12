'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

const FILTERS = ['All', 'Baner', 'Wakad', 'Kharadi', 'Moshi']

export function FeaturedProjects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter(p => p.locality === active)

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
        <p className="text-white/40 text-[15px]">All MahaRERA verified. Groups forming now.</p>
      </motion.div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {FILTERS.map(f => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
