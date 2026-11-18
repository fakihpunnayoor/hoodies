import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ComingSoonDrawer.css'

const WHATSAPP_NUMBER = '918848289078'
const WHATSAPP_MESSAGE = 'Hi, I want early access to Sunny Hoodies!'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const MOBILE_QUERY = '(max-width: 600px)'

const ComingSoonDrawer = ({ open, onClose }) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cs-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          data-lenis-prevent
        >
          <motion.aside
            className="cs-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cs-title"
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={{ x: 0, y: 0 }}
            exit={isMobile ? { y: '100%' } : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cs-close" onClick={onClose} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="cs-body">
              <span className="cs-eyebrow">Sunny Hoodies</span>
              <h2 id="cs-title" className="cs-title">Coming Soon</h2>
              <p className="cs-text">Something cozy is on the way</p>

              <a
                className="cs-whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.08.88.9-3-.2-.31a8.2 8.2 0 1 1 6.88 3.76Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.7 2.6 4.12 3.65 1.53.66 2.13.72 2.9.6.47-.07 1.46-.6 1.66-1.18.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.47-.28Z" />
                </svg>
                Notify Me via WhatsApp
              </a>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ComingSoonDrawer
