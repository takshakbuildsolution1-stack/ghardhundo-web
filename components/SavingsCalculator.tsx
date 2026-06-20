'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { RotatingBorderButton } from '@/components/ui/RotatingBorderButton'
import { LINKS } from '@/lib/analytics'

const MIN = 40
const MAX = 200
const NEGOTIATION_RATE = 0.10
const BROKER_RATE = 0.02

function formatLakhs(val: number) {
  if (val >= 100) return `₹${(val / 100).toFixed(1)}Cr`
  return `₹${val}L`
}

export function SavingsCalculator() {
  const [budget, setBudget] = useState(80)

  const negotiationSaving = Math.round(budget * NEGOTIATION_RATE)
  const brokerageSaving = Math.round(budget * BROKER_RATE)
  const totalSaving = negotiationSaving + brokerageSaving
  const pct = ((budget - MIN) / (MAX - MIN)) * 100

  return (
    <section className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            How much will you save?
          </h2>
          <p className="text-white/40 text-[15px]">Move the slider to your budget. See your potential saving instantly.</p>
        </div>

        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <div className="text-[13px] text-white/30 uppercase tracking-widest mb-2">Your budget</div>
            <div className="text-5xl font-extrabold text-white">{formatLakhs(budget)}</div>
          </div>

          <div className="relative mb-10">
            <input
              type="range"
              min={MIN}
              max={MAX}
              step={5}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="w-full appearance-none h-1.5 rounded-full outline-none cursor-pointer"
              style={{
                background: `linear-gradient(90deg, #FF6B35 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
              }}
            />
            <div className="flex justify-between text-[10px] text-white/20 mt-2">
              <span>₹40L</span><span>₹2Cr</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <motion.div
              key={negotiationSaving}
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Best offer saving</div>
              <div className="text-2xl font-extrabold text-saffron">₹{negotiationSaving}L</div>
              <div className="text-[10px] text-white/20 mt-1">~10% off price</div>
            </motion.div>

            <motion.div
              key={`b${brokerageSaving}`}
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Zero brokerage</div>
              <div className="text-2xl font-extrabold text-mint">₹{brokerageSaving}L</div>
              <div className="text-[10px] text-white/20 mt-1">2% saved</div>
            </motion.div>

            <motion.div
              key={`t${totalSaving}`}
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-[14px] p-4 text-center"
              style={{ background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.3)' }}
            >
              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Total saving</div>
              <div className="text-2xl font-extrabold text-saffron">₹{totalSaving}L</div>
              <div className="text-[10px] text-white/20 mt-1">net in pocket</div>
            </motion.div>
          </div>

          <div className="text-center">
            <RotatingBorderButton href={LINKS.register} className="mx-auto">
              Get my ₹{totalSaving}L saving
            </RotatingBorderButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
