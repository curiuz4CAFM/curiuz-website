'use client'

import { useEffect, useRef } from 'react'

/**
 * Full-bleed background video for the hero.
 * - Loops forever, muted + playsInline so browsers allow autoplay.
 * - Plays SLOWER than the source via playbackRate (default 0.5×). This can only
 *   be set in JS — there's no HTML attribute — and some browsers reset it on
 *   play/loadedmetadata, so we re-apply it on those events.
 * - Pauses when the visitor prefers reduced motion.
 */
export function HeroVideo({
  src,
  playbackRate = 0.5,
  className = '',
}: {
  src: string
  playbackRate?: number
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      v.pause()
      return
    }

    const applyRate = () => {
      v.playbackRate = playbackRate
    }
    applyRate()
    v.addEventListener('loadedmetadata', applyRate)
    v.addEventListener('play', applyRate)
    return () => {
      v.removeEventListener('loadedmetadata', applyRate)
      v.removeEventListener('play', applyRate)
    }
  }, [playbackRate])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}
