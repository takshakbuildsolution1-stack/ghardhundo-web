'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { PublicProject } from '@/lib/data/projects'

interface Props {
  projects: PublicProject[]
}

const ZONES = [
  { name: 'Baner',       x: 22, y: 35 },
  { name: 'Wakad',       x: 14, y: 30 },
  { name: 'Hinjewadi',   x:  8, y: 28 },
  { name: 'Balewadi',    x: 20, y: 27 },
  { name: 'Kharadi',     x: 72, y: 38 },
  { name: 'Viman Nagar', x: 65, y: 30 },
  { name: 'Hadapsar',    x: 68, y: 60 },
  { name: 'Punawale',    x: 11, y: 36 },
  { name: 'Tathawade',   x: 16, y: 22 },
  { name: 'Wagholi',     x: 78, y: 45 },
  { name: 'Aundh',       x: 28, y: 26 },
  { name: 'Undri',       x: 55, y: 65 },
]

const CONNECTIONS = [
  [0, 1], [0, 3], [0, 10], [1, 2], [1, 7], [3, 8], [4, 5], [4, 9], [4, 6],
]

export function PuneMap({ projects }: Props) {
  const [activeZone, setActiveZone] = useState<string | null>(null)

  // Count projects per micro_market
  const countByZone = new Map<string, number>()
  for (const p of projects) {
    countByZone.set(p.micro_market, (countByZone.get(p.micro_market) ?? 0) + 1)
  }

  // Enrich zones with real counts
  const zones = ZONES.map(z => ({
    ...z,
    count: countByZone.get(z.name) ?? 0,
    active: (countByZone.get(z.name) ?? 0) > 0,
  }))

  // Sidebar: all zones sorted by count desc, with count
  const sidebarZones = [...zones].sort((a, b) => b.count - a.count)
  const totalProjects = projects.length

  // Max count for bubble sizing
  const maxCount = Math.max(...zones.map(z => z.count), 1)

  return (
    <section className="relative z-[1] px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-serif italic text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Active across Pune
        </h2>
        <p className="text-white/40 text-[15px]">Groups forming in all major localities right now.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">
        {/* SVG Map — takes 2 cols */}
        <div className="lg:col-span-2">
          <div
            className="glass-card relative overflow-hidden"
            style={{ paddingBottom: '62%' }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 75"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern id="mapGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3"/>
                </pattern>
                <radialGradient id="activeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#FF6B35" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="panelGlow" cx="30%" cy="20%" r="60%">
                  <stop offset="0%" stopColor="rgba(255,107,53,0.06)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
              <rect width="100" height="75" fill="url(#mapGrid)"/>
              <rect width="100" height="75" fill="url(#panelGlow)"/>

              {/* Connection lines */}
              {CONNECTIONS.map(([a, b], i) => (
                <motion.line
                  key={i}
                  x1={zones[a].x} y1={zones[a].y}
                  x2={zones[b].x} y2={zones[b].y}
                  stroke={zones[a].active && zones[b].active ? 'rgba(255,107,53,0.18)' : 'rgba(255,255,255,0.04)'}
                  strokeWidth="0.4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 }}
                />
              ))}

              {/* Zone nodes */}
              {zones.map((zone, i) => {
                const r = zone.active ? 1.2 + (zone.count / maxCount) * 2 : 0.8
                const isSelected = activeZone === zone.name
                return (
                  <g
                    key={zone.name}
                    style={{ cursor: zone.active ? 'pointer' : 'default' }}
                    onClick={() => zone.active && setActiveZone(isSelected ? null : zone.name)}
                  >
                    {zone.active && (
                      <>
                        <motion.circle
                          cx={zone.x} cy={zone.y} r={r + 2.5}
                          fill="url(#activeGlow)"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                        />
                        <motion.circle
                          cx={zone.x} cy={zone.y} r={r + 1}
                          fill="none"
                          stroke={isSelected ? '#F0A500' : '#FF6B35'}
                          strokeWidth="0.4"
                          opacity="0.5"
                          animate={{ r: [r + 1, r + 4], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                        />
                      </>
                    )}
                    <motion.circle
                      cx={zone.x} cy={zone.y}
                      r={r}
                      fill={zone.active ? (isSelected ? '#F0A500' : '#FF6B35') : 'rgba(255,255,255,0.15)'}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    />
                    <motion.text
                      x={zone.x + r + 1} y={zone.y + 0.8}
                      fontSize="3"
                      fill={zone.active ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)'}
                      fontFamily="sans-serif"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    >
                      {zone.name}
                    </motion.text>
                    {zone.active && zone.count > 0 && (
                      <motion.text
                        x={zone.x + r + 1} y={zone.y + 4}
                        fontSize="2.5"
                        fill="#FF6B35"
                        fontFamily="sans-serif"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
                      >
                        {zone.count} project{zone.count > 1 ? 's' : ''}
                      </motion.text>
                    )}
                  </g>
                )
              })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-saffron" style={{ boxShadow: '0 0 6px #FF6B35' }} />
                <span className="text-[10px] text-white/40">Active projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <span className="text-[10px] text-white/40">Coming soon</span>
              </div>
            </div>

            {/* Compass */}
            <div className="absolute top-4 right-4 text-white/20 text-[9px] font-mono">N ↑</div>
          </div>
        </div>

        {/* Zone sidebar */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/40 text-[11px] uppercase tracking-wider">By locality</span>
            <span className="text-white font-bold text-[13px]">{totalProjects} total</span>
          </div>

          {sidebarZones.map((zone) => {
            const isSelected = activeZone === zone.name
            return (
              <button
                key={zone.name}
                onClick={() => zone.active && setActiveZone(isSelected ? null : zone.name)}
                className="w-full text-left rounded-xl px-4 py-3 transition-all"
                style={
                  isSelected
                    ? {
                        background: 'rgba(255,107,53,0.1)',
                        border: '1px solid rgba(255,107,53,0.35)',
                        boxShadow: '0 0 16px rgba(255,107,53,0.08)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-[13px] font-semibold">{zone.name}</div>
                    <div className="text-white/30 text-[10px] mt-0.5">
                      {zone.active ? 'Active groups' : 'Coming soon'}
                    </div>
                  </div>
                  {zone.count > 0 ? (
                    <span className="text-saffron font-bold text-[18px]">{zone.count}</span>
                  ) : (
                    <span className="text-white/20 font-bold text-[18px]">—</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
