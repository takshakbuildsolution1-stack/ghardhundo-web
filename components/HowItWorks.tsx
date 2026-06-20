'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function ChatIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <motion.rect x="4" y="5" width="24" height="17" rx="4" stroke="#FF6B35" strokeWidth="1.8"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
      <motion.path d="M4 22l4-5" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.7 }} />
      <motion.line x1="10" y1="13" x2="22" y2="13" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.9 }} style={{ transformOrigin: 'left' }} />
      <motion.line x1="10" y1="17" x2="18" y2="17" stroke="rgba(255,107,53,0.4)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.1 }} style={{ transformOrigin: 'left' }} />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <motion.circle cx="16" cy="16" r="10" stroke="#FF6B35" strokeWidth="1.8"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
      <motion.circle cx="16" cy="16" r="4" fill="#FF6B35"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.7 }} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 16 + 5 * Math.cos(rad), y1 = 16 + 5 * Math.sin(rad)
        const x2 = 16 + 9 * Math.cos(rad), y2 = 16 + 9 * Math.sin(rad)
        return (
          <motion.line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,107,53,0.6)" strokeWidth="1.2" strokeLinecap="round"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.9 + i * 0.07 }} />
        )
      })}
    </svg>
  )
}

function OfferIcon() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <motion.path d="M6 16 L16 6 L26 16 L16 26 Z" stroke="#FF6B35" strokeWidth="1.8" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
      <motion.path d="M12 16.5 L14.5 19 L20 13" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} />
    </svg>
  )
}

const STEPS = [
  {
    number: '01',
    Icon: ChatIcon,
    title: 'Tell Priya AI',
    desc: 'Share your budget, preferred locality, and BHK. Takes 5 minutes — no forms, just a chat.',
  },
  {
    number: '02',
    Icon: AIIcon,
    title: 'AI Shortlists',
    desc: 'Priya shortlists 3–5 MahaRERA-verified projects matched to your exact profile.',
  },
  {
    number: '03',
    Icon: OfferIcon,
    title: 'Get Best Offer',
    desc: 'Our advisors negotiate the best price with the developer on your behalf. Zero brokerage, guaranteed.',
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif italic text-white mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          How GharDhundo works
        </h2>
        <p className="text-white/40 text-[15px] max-w-[480px] mx-auto">
          From first chat to best offer — usually under 48 hours.
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className="connector-line hidden md:block">
          {inView && <div className="connector-fill" />}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map(({ number, Icon, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-start md:items-center md:text-center"
            >
              <div
                className="relative w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'rgba(255,107,53,0.07)', border: '1.5px solid rgba(255,107,53,0.35)' }}
              >
                <Icon />
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: '#FF6B35', fontSize: '9px', fontWeight: 700, color: '#07070f' }}
                >
                  {number}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/40 text-[13px] leading-relaxed max-w-[220px]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
