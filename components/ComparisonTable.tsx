'use client'
import { motion } from 'framer-motion'

const ROWS = [
  { label: 'Brokerage',            gd: '0%',           broker: '2% of price', direct: '0%',     gdWin: true },
  { label: 'Best offer guarantee', gd: '8–12% off',    broker: 'None',        direct: 'None',   gdWin: true },
  { label: 'AI matching',          gd: '5 min',        broker: 'Weeks',       direct: 'DIY',    gdWin: true },
  { label: 'MahaRERA verified',    gd: '100%',         broker: 'Sometimes',   direct: 'Manual', gdWin: true },
  { label: 'Upfront cost',         gd: '₹0',           broker: '₹0',          direct: '₹0',     gdWin: false },
  { label: 'Negotiating power',    gd: 'Expert team',  broker: 'Solo',        direct: 'Solo',   gdWin: true },
  { label: 'Net saving on ₹80L',   gd: '~₹10L',        broker: '–₹1.6L',     direct: '₹0',     gdWin: true },
]

export function ComparisonTable() {
  return (
    <section className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Why GharDhundo wins
          </h2>
          <p className="text-white/40 text-[15px]">Side-by-side against a broker and going alone.</p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-4 text-[11px] font-bold uppercase tracking-wider" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="p-4 text-white/30">Feature</div>
            <div className="p-4 text-center" style={{ background: 'rgba(255,107,53,0.08)' }}>
              <span className="text-saffron">GharDhundo</span>
            </div>
            <div className="p-4 text-center text-white/30">Broker</div>
            <div className="p-4 text-center text-white/30">Buy direct</div>
          </div>

          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="grid grid-cols-4 text-[13px]"
              style={{ borderBottom: i < ROWS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
            >
              <div className="p-4 text-white/50 font-medium">{row.label}</div>
              <div
                className="p-4 text-center font-bold"
                style={{
                  background: 'rgba(255,107,53,0.05)',
                  color: row.gdWin ? '#FF6B35' : 'rgba(255,255,255,0.7)',
                }}
              >
                {row.gdWin && <span className="mr-1">✓</span>}{row.gd}
              </div>
              <div className="p-4 text-center text-white/30">{row.broker}</div>
              <div className="p-4 text-center text-white/30">{row.direct}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
