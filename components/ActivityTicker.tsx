const ACTIVITIES = [
  '🟢 Ananya from Baner joined a group for Rohan Ananta — 2 seats left',
  '🟠 Group for Lodha Belmondo FULL — negotiation starts today',
  '🟢 Rahul from Kharadi matched to Gera Isle of Joy in 4 min',
  '🟢 Priya AI matched 5 buyers in Wakad — group forming now',
  '🟠 VTP Belair group saved ₹7.8L per buyer — booking confirmed',
  '🟢 Sneha from Wakad joined — 1 seat left in Lodha group',
  '🟢 New group opened: Kolte Patil 24K, Kharadi — 5 seats available',
  '🟠 Godrej Woodsville group negotiation complete — ₹9.1L saved each',
  '🟢 3 buyers matched to Moshi projects in last 10 minutes',
  '🟢 Amit from Baner: first AI match in under 5 minutes',
]

export function ActivityTicker() {
  return (
    <div
      className="relative z-[1] overflow-hidden py-3"
      style={{ borderTop: '1px solid rgba(255,107,53,0.1)', borderBottom: '1px solid rgba(255,107,53,0.1)', background: 'rgba(255,107,53,0.03)' }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, #07070f, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, #07070f, transparent)' }} />

      <div className="ticker-track flex gap-12 whitespace-nowrap">
        {[...ACTIVITIES, ...ACTIVITIES].map((item, i) => (
          <span key={i} className="text-[12px] text-white/50 flex-shrink-0">
            {item}
          </span>
        ))}
      </div>

    </div>
  )
}
