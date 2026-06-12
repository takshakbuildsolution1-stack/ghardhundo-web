import { TypewriterText } from '@/components/ui/TypewriterText'
import { RotatingBorderButton } from '@/components/ui/RotatingBorderButton'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { LINKS } from '@/lib/analytics'

const STATS = [
  { prefix: '₹', suffix: 'L', to: 84, label: 'Avg. group saving', green: false },
  { prefix: '',  suffix: '+', to: 100, label: 'Live projects', green: false },
  { prefix: '',  suffix: ' min', to: 5, label: 'AI match time', green: false },
  { prefix: '',  suffix: '%', to: 0, label: 'Brokerage', green: true },
]

const TRUST_PILLS = [
  '✓ MahaRERA verified',
  '✓ Zero brokerage',
  '✓ AI-matched',
  '✓ Group discount',
]

export function HeroLeft() {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-6 h-px bg-saffron" />
        <TypewriterText />
      </div>

      <div
        className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full"
        style={{ background: 'rgba(255,107,53,0.07)', border: '1px solid rgba(255,107,53,0.2)' }}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="w-[7px] h-[7px] bg-saffron rounded-full relative z-[2]" />
          <div
            className="absolute inset-[-3px] rounded-full border border-[rgba(255,107,53,0.5)]"
            style={{ animation: 'ripple1 2s ease-out infinite' }}
          />
          <div
            className="absolute inset-[-7px] rounded-full border border-[rgba(255,107,53,0.25)]"
            style={{ animation: 'ripple2 2s 0.4s ease-out infinite' }}
          />
        </div>
        <span className="text-[11px] font-semibold text-white/70">
          <span className="text-saffron">Priya AI</span> is matching buyers right now
        </span>
      </div>

      <h1
        className="font-extrabold text-white leading-[1.04] tracking-[-2px] mb-5"
        style={{ fontSize: 'clamp(40px, 5vw, 66px)' }}
      >
        Buy smarter.<br />
        Save <span className="gradient-text">₹10 lakhs.</span><br />
        Together.
      </h1>

      <p className="text-[15px] text-white/40 leading-relaxed max-w-[440px] mb-9">
        Priya AI shortlists MahaRERA-verified projects for you in 5 minutes.
        Join a group of 5, unlock developer discounts. Zero brokerage.
      </p>

      <div className="flex items-center gap-3.5">
        <RotatingBorderButton href={LINKS.register}>
          Find My Home
          <div className="flex items-center gap-0.5 overflow-hidden w-8">
            <div className="flex gap-1.5" style={{ animation: 'arrowScroll 1s linear infinite' }}>
              {['›', '›', '›', '›'].map((c, i) => (
                <span key={i} className="text-saffron text-base leading-none">{c}</span>
              ))}
            </div>
          </div>
        </RotatingBorderButton>

        <a
          href="#how-it-works"
          className="flex items-center gap-2 text-[13px] font-medium text-white/35 hover:text-white/70 transition-colors py-[15px]"
        >
          <div className="w-[38px] h-[38px] rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-white/30 hover:bg-white/5 transition-all">
            ▷
          </div>
          See how it works
        </a>
      </div>

      <div className="flex mt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex-1 py-5"
            style={i < STATS.length - 1 ? { borderRight: '1px solid rgba(255,255,255,0.05)' } : {}}
          >
            <div className="text-[26px] font-extrabold tabular-nums text-white">
              {s.prefix && <span className="text-saffron">{s.prefix}</span>}
              <AnimatedCounter to={s.to} />
              <span className={s.green ? 'text-mint' : 'text-saffron'}>{s.suffix}</span>
            </div>
            <div className="text-[10px] text-white/20 uppercase tracking-[1.5px] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-1.5 mt-4 flex-wrap">
        {TRUST_PILLS.map(pill => (
          <div
            key={pill}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-[10px] text-white/40 hover:text-white/70 transition-all"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span className="text-mint">{pill.slice(0, 1)}</span>
            {pill.slice(1)}
          </div>
        ))}
      </div>
    </div>
  )
}
