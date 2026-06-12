import { SeatProgressBar } from '@/components/ui/SeatProgressBar'
import { LINKS } from '@/lib/analytics'

const SMALL_CARDS = [
  { name: 'Godrej Woodsville', loc: 'Baner · 2/3BHK', price: '₹58–78L', filled: 3 },
  { name: 'Kolte Patil 24K',   loc: 'Kharadi · 3BHK',  price: '₹1.1Cr+',  filled: 2 },
  { name: 'VTP Belair',        loc: 'Moshi · 1/2BHK',  price: '₹45–62L', filled: 1 },
]

export function HeroRight() {
  return (
    <div className="relative flex flex-col gap-2.5">
      <div className="data-flow-line" />

      {/* AI Match Card */}
      <div className="glass-card-saffron p-[18px] relative overflow-hidden">
        <div className="ai-scan" />

        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-white/40">
            // AI_MATCH_RESULT
          </span>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 bg-mint rounded-full"
              style={{ animation: 'pulseDot 1s infinite', boxShadow: '0 0 6px #2ECC8A' }}
            />
            <span className="font-mono text-[9px] tracking-[1px] text-mint">LIVE</span>
          </div>
        </div>

        <div className="text-base font-bold text-white mb-0.5">Lodha Belmondo</div>
        <div className="text-[11px] text-white/30 mb-3.5">Wakad, West Pune · 2BHK / 3BHK</div>

        <div className="flex justify-between items-center mb-2.5">
          <div className="text-[22px] font-extrabold text-white">₹82L</div>
          <div
            className="text-[11px] font-bold text-mint px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(46,204,138,0.12)', border: '1px solid rgba(46,204,138,0.25)' }}
          >
            Save ₹8.4L
          </div>
        </div>

        <div className="flex justify-between text-[10px] text-white/30 mb-1.5">
          <span>Group seats</span><span>4 / 5 filled</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden mb-2" style={{ background: 'rgba(255,255,255,0.07)' }}>
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg,#2ECC8A,#FF6B35)',
              animation: 'seatFillAnim 1.5s 1.5s ease both',
              width: 0,
            }}
          />
        </div>
        <SeatProgressBar total={5} filled={4} />

        <div className="flex items-center gap-2.5 mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="relative w-10 h-10 flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
              <circle
                cx="20" cy="20" r="16" fill="none" stroke="#FF6B35" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="15" strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 4px rgba(255,107,53,0.6))' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-saffron">95%</div>
          </div>
          <div className="text-[11px] text-white/35 leading-relaxed">
            <strong className="text-white/75">95% match score</strong><br />
            Based on your budget, location &amp; BHK
          </div>
        </div>
      </div>

      {/* Small project cards */}
      {SMALL_CARDS.map(card => (
        <a
          key={card.name}
          href={LINKS.register}
          className="glass-card p-3.5 flex items-center justify-between cursor-pointer transition-all hover:-translate-x-1.5 group"
          style={{ textDecoration: 'none' }}
        >
          <div>
            <div className="text-[13px] font-bold text-white mb-0.5">{card.name}</div>
            <div className="text-[11px] text-white/30">{card.loc}</div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-bold text-white mb-1.5">{card.price}</div>
            <SeatProgressBar total={5} filled={card.filled} />
          </div>
        </a>
      ))}

      {/* Saving banner */}
      <div
        className="rounded-[14px] p-4 flex items-center justify-between"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(240,165,0,0.06))',
          border: '1px solid rgba(255,107,53,0.18)',
        }}
      >
        <div>
          <div className="text-[10px] text-white/30 uppercase tracking-[1px] mb-1">Last group saved</div>
          <div className="text-[26px] font-extrabold text-saffron">₹9.2L / buyer</div>
        </div>
        <div
          className="text-[10px] font-bold text-mint text-right px-3 py-2 rounded-xl"
          style={{ background: 'rgba(46,204,138,0.12)', border: '1px solid rgba(46,204,138,0.25)' }}
        >
          12 groups<br />forming now
        </div>
      </div>
    </div>
  )
}
