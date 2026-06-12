'use client'
import { motion } from 'framer-motion'

const DEVELOPERS = [
  { name: 'Lodha', tagline: 'Group · 4 projects' },
  { name: 'Godrej', tagline: 'Properties · 3 projects' },
  { name: 'Kolte Patil', tagline: 'Developers · 5 projects' },
  { name: 'VTP', tagline: 'Realty · 2 projects' },
  { name: 'Rohan', tagline: 'Builders · 3 projects' },
  { name: 'Gera', tagline: 'Developments · 2 projects' },
]

export function DeveloperLogos() {
  return (
    <section className="relative z-[1] px-8 lg:px-16 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="text-[11px] text-white/25 uppercase tracking-[3px]">
          Trusted by Pune's top developers
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {DEVELOPERS.map((dev, i) => (
          <motion.div
            key={dev.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="glass-card px-6 py-4 flex flex-col items-center gap-1 hover:border-saffron/20 transition-all"
          >
            <div className="text-white font-bold text-[15px] tracking-tight">{dev.name}</div>
            <div className="text-white/25 text-[10px]">{dev.tagline}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
