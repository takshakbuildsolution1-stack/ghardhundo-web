'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ_ITEMS } from '@/lib/data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="relative z-[1] px-8 lg:px-16 py-24 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-serif italic text-white mb-2" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Common questions
        </h2>
        <p className="text-white/40 text-[15px]">Everything you need to know before joining.</p>
      </motion.div>

      <div className="flex flex-col gap-2">
        {FAQ_ITEMS.map(item => {
          const isOpen = openId === item.id
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="text-white font-semibold text-[14px] pr-4">{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-saffron text-xl font-light flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      className="px-5 pb-5 text-[13px] text-white/50 leading-relaxed"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
