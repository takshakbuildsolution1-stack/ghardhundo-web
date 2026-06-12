import { LINKS } from '@/lib/analytics'

export function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] md:hidden p-4"
      style={{ background: 'rgba(7,7,15,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,107,53,0.15)' }}
    >
      <a
        href={LINKS.register}
        className="block w-full text-center py-3.5 rounded-xl font-bold text-[14px] text-white"
        style={{ background: 'linear-gradient(135deg, #FF6B35, #F0A500)' }}
      >
        Find My Home · Join Free
      </a>
      <div className="text-center text-[10px] text-white/25 mt-2">
        Zero brokerage · AI match in 5 min · MahaRERA verified
      </div>
    </div>
  )
}
