const YEAR = new Date().getFullYear()

const QUICK_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'MahaRERA No. P52100012345', href: '#' },
]

const SOCIAL = [
  { label: 'Twitter/X', href: 'https://x.com/ghardhundo' },
  { label: 'Instagram', href: 'https://instagram.com/ghardhundo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/ghardhundo' },
]

export function Footer() {
  return (
    <footer className="relative z-[1] px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="text-lg font-extrabold mb-3">
            Ghar<span className="text-saffron">Dhundo</span>
          </div>
          <p className="text-white/30 text-[13px] leading-relaxed">
            AI-powered group buying for Pune homes. Zero brokerage. Powered by Priya AI.
          </p>
        </div>

        <div>
          <div className="text-[11px] text-white/30 uppercase tracking-widest mb-4">Quick Links</div>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/50 text-[13px] hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] text-white/30 uppercase tracking-widest mb-4">Legal</div>
          <ul className="flex flex-col gap-2.5">
            {LEGAL_LINKS.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-white/50 text-[13px] hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] text-white/30 uppercase tracking-widest mb-4">Connect</div>
          <ul className="flex flex-col gap-2.5">
            {SOCIAL.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/50 text-[13px] hover:text-saffron transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="mailto:hello@ghardhundo.com" className="mt-4 block text-white/30 text-[12px] hover:text-white/60 transition-colors">
            hello@ghardhundo.com
          </a>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 text-[11px] text-white/20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span>© {YEAR} GharDhundo. All rights reserved.</span>
        <span>Built with Priya AI</span>
      </div>
    </footer>
  )
}
