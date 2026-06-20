'use client'
import { motion } from 'framer-motion'
import { RotatingBorderButton } from '@/components/ui/RotatingBorderButton'
import { LINKS } from '@/lib/analytics'

export function FooterCTA() {
  return (
    <section className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-serif italic text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Your best offer is one step away.
        </h2>
        <p className="text-white/40 text-[15px] mb-10 max-w-[440px] mx-auto">
          Join free. No upfront payment. Priya AI will match you to the right projects in minutes.
        </p>
        <RotatingBorderButton href={LINKS.registerFooter} className="mx-auto">
          Find My Home
          <div className="flex items-center gap-0.5 overflow-hidden w-8">
            <div className="flex gap-1.5" style={{ animation: 'arrowScroll 1s linear infinite' }}>
              {['›', '›', '›', '›'].map((c, i) => (
                <span key={i} className="text-saffron text-base leading-none">{c}</span>
              ))}
            </div>
          </div>
        </RotatingBorderButton>
      </motion.div>
    </section>
  )
}
