'use client'
import { motion } from 'framer-motion'

const LOCALITIES = [
  { name: 'Baner',    x: 22, y: 35, projects: 2, active: true },
  { name: 'Wakad',   x: 14, y: 30, projects: 1, active: true },
  { name: 'Hinjewadi',x: 8, y: 28, projects: 0, active: false },
  { name: 'Kothrud',  x: 30, y: 50, projects: 0, active: false },
  { name: 'Kharadi',  x: 72, y: 38, projects: 2, active: true },
  { name: 'Viman Nagar',x:65, y: 30, projects: 0, active: false },
  { name: 'Hadapsar', x: 68, y: 60, projects: 0, active: false },
  { name: 'Moshi',    x: 55, y: 12, projects: 1, active: true },
  { name: 'Pimpri',   x: 35, y: 18, projects: 0, active: false },
  { name: 'Aundh',    x: 28, y: 26, projects: 0, active: false },
  { name: 'Koregaon', x: 50, y: 42, projects: 0, active: false },
]

const CONNECTIONS = [
  [0, 1], [0, 9], [0, 4], [1, 2], [3, 9], [4, 5], [4, 6], [7, 8],
]

export function PuneMap() {
  return (
    <section className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-serif italic text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Active across Pune
        </h2>
        <p className="text-white/40 text-[15px]">Groups forming in all major localities right now.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <div
          className="glass-card relative overflow-hidden"
          style={{ paddingBottom: '56%' }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 75"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background grid */}
            <defs>
              <pattern id="mapGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3"/>
              </pattern>
              <radialGradient id="activeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="100" height="75" fill="url(#mapGrid)"/>

            {/* Connection lines between active localities */}
            {CONNECTIONS.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={LOCALITIES[a].x} y1={LOCALITIES[a].y}
                x2={LOCALITIES[b].x} y2={LOCALITIES[b].y}
                stroke="rgba(255,107,53,0.15)"
                strokeWidth="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            ))}

            {/* Locality nodes */}
            {LOCALITIES.map((loc, i) => (
              <g key={loc.name}>
                {loc.active && (
                  <>
                    {/* Glow ring */}
                    <motion.circle
                      cx={loc.x} cy={loc.y} r="4"
                      fill="url(#activeGlow)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    />
                    {/* Pulse ring */}
                    <motion.circle
                      cx={loc.x} cy={loc.y} r="2.5"
                      fill="none"
                      stroke="#FF6B35"
                      strokeWidth="0.4"
                      opacity="0.6"
                      animate={{ r: [2.5, 5], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </>
                )}
                {/* Dot */}
                <motion.circle
                  cx={loc.x} cy={loc.y}
                  r={loc.active ? 1.5 : 0.8}
                  fill={loc.active ? '#FF6B35' : 'rgba(255,255,255,0.2)'}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                />
                {/* Label */}
                <motion.text
                  x={loc.x + 2.5} y={loc.y + 0.8}
                  fontSize="3.5"
                  fill={loc.active ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)'}
                  fontFamily="Sora, sans-serif"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                >
                  {loc.name}
                </motion.text>
                {loc.active && loc.projects > 0 && (
                  <motion.text
                    x={loc.x + 2.5} y={loc.y + 4.5}
                    fontSize="2.8"
                    fill="#FF6B35"
                    fontFamily="Sora, sans-serif"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                  >
                    {loc.projects} group{loc.projects > 1 ? 's' : ''} forming
                  </motion.text>
                )}
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-saffron" style={{ boxShadow: '0 0 6px #FF6B35' }} />
              <span className="text-[10px] text-white/40">Active group</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <span className="text-[10px] text-white/40">Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
