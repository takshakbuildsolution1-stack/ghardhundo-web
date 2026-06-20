'use client'
import { motion } from 'framer-motion'

interface Props {
  developers: string[]
}

export function DeveloperLogos({ developers }: Props) {
  if (developers.length === 0) return null

  return (
    <section className="relative z-[1] px-8 lg:px-16 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="text-[11px] text-white/25 uppercase tracking-[3px]">
          Projects from Pune&apos;s top developers
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {developers.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="glass-card px-6 py-4 flex items-center justify-center hover:border-saffron/20 transition-all"
          >
            <div className="text-white font-bold text-[15px] tracking-tight">{name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
