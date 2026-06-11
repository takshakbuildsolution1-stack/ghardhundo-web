export function ScanLine() {
  return (
    <div
      className="fixed left-0 right-0 h-px pointer-events-none z-[1]"
      style={{
        background:
          'linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.5) 20%, rgba(255,107,53,0.8) 50%, rgba(255,107,53,0.5) 80%, transparent 100%)',
        animation: 'scanSweep 6s linear infinite',
        boxShadow: '0 0 12px rgba(255,107,53,0.4)',
      }}
    />
  )
}
