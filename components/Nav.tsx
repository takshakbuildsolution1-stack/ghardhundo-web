'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotatingBorderButton } from '@/components/ui/RotatingBorderButton'
import { LINKS } from '@/lib/analytics'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-6 lg:px-16"
        style={{
          background: 'rgba(7,7,15,0.7)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,107,53,0.12)',
        }}
      >
        <div className="text-lg font-extrabold tracking-tight">
          Ghar<span className="text-saffron">Dhundo</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-7">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-xs font-medium text-white/35 hover:text-white/80 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <RotatingBorderButton href={LINKS.registerNav} size="sm" className="hidden md:inline-block">
            Get Started
          </RotatingBorderButton>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white"
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-16 left-0 right-0 z-[99] md:hidden flex flex-col"
            style={{ background: 'rgba(7,7,15,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,107,53,0.12)' }}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-[15px] font-medium text-white/60 hover:text-white border-b border-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="p-4">
              <a
                href={LINKS.registerNav}
                className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] text-white"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #F0A500)' }}
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
