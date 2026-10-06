import { useEffect, useRef } from 'react'

// Soft glow that follows the cursor on pointer devices.
function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const move = (event) => {
      ref.current?.style.setProperty('--x', `${event.clientX}px`)
      ref.current?.style.setProperty('--y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={ref} className="spotlight" aria-hidden="true" />
}

export default Spotlight
