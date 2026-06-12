'use client'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-serif italic text-white mb-2" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          What buyers say
        </h2>
        <p className="text-white/40 text-[15px]">Real savings. Real buyers. Pune.</p>
      </motion.div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            <p className="text-white/60 text-[13px] leading-relaxed italic">"{t.quote}"</p>
            <div className="flex items-center justify-between mt-auto">
              <div>
                <div className="text-white font-semibold text-[13px]">{t.name}</div>
                <div className="text-white/30 text-[11px]">{t.locality}</div>
              </div>
              <div
                className="text-mint text-[12px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(46,204,138,0.1)', border: '1px solid rgba(46,204,138,0.2)' }}
              >
                Saved ₹{t.savingLakhs}L
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile scroll-snap */}
      <div className="md:hidden snap-scroll">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="snap-item glass-card p-5 flex flex-col gap-4" style={{ width: '80vw' }}>
            <p className="text-white/60 text-[13px] leading-relaxed italic">"{t.quote}"</p>
            <div className="flex items-center justify-between mt-auto">
              <div>
                <div className="text-white font-semibold text-[13px]">{t.name}</div>
                <div className="text-white/30 text-[11px]">{t.locality}</div>
              </div>
              <div
                className="text-mint text-[12px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(46,204,138,0.1)', border: '1px solid rgba(46,204,138,0.2)' }}
              >
                Saved ₹{t.savingLakhs}L
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
