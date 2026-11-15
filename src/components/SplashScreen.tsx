import { useCallback, useEffect, useState } from 'react'
import { AnimatedLogo } from './AnimatedLogo'
import { site } from '../data/site'

const DURATION_MS = 3600

export function SplashScreen() {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  const finish = useCallback(() => {
    setLeaving(true)
    window.setTimeout(() => setGone(true), 480)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(finish, DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [finish])

  if (gone) return null

  return (
    <div
      aria-label="SIVIQ loading"
      className={`splash-screen${leaving ? ' leaving' : ''}`}
      onClick={finish}
      role="status"
    >
      <div className="splash-stage">
        <AnimatedLogo className="splash-icon" />
        <div aria-hidden className="splash-word">
          <span>S</span>
          <span>I</span>
          <span>V</span>
          <span>I</span>
          <span>Q</span>
        </div>
        <p className="splash-tag">{site.tagline}</p>
        <div aria-hidden className="splash-dots">
          <i />
          <i />
          <i />
        </div>
      </div>
      <span className="splash-hint">Tap to continue</span>
    </div>
  )
}
