'use client'
import { useEffect, useState } from 'react'

const PHRASES = [
  'GROUP BUYING PLATFORM',
  'AI-POWERED MATCHING',
  'ZERO BROKERAGE',
  'MAHARERA VERIFIED',
]

export function TypewriterText() {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = PHRASES[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (charIdx < cur.length) {
        timeout = setTimeout(() => {
          setDisplay(cur.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(cur.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 40)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % PHRASES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return (
    <span className="font-mono text-[11px] font-medium tracking-[2px] uppercase text-saffron">
      {display}
      <span className="cursor-blink">|</span>
    </span>
  )
}
