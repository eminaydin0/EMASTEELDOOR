import { AnimatePresence, motion } from 'framer-motion'
import type { MouseEvent } from 'react'

type TFn = (key: string) => string

function scrollDocumentToTop(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, left: 0, behavior: instant ? 'auto' : 'smooth' })
}

export function FloatingActionPills({
  waUrl,
  phoneTel,
  showTop,
  t,
}: {
  waUrl: string
  phoneTel: string
  showTop: boolean
  t: TFn
}) {
  return (
    <>
      <a
        href={waUrl}
        className="ev-wa-pill ev-wa-pill--light"
        target="_blank"
        rel="noreferrer"
        aria-label={t('footer.waAria')}
      >
        <span className="ev-wa-ico" aria-hidden="true" />
        {t('footer.wa')}
      </a>
      <a
        href={`tel:${phoneTel}`}
        className="ev-wa-pill ev-wa-pill--accent"
        aria-label={t('footer.callAria')}
      >
        <span className="ev-call-ico" aria-hidden="true" />
        {t('footer.quick.call')}
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#"
            className="ev-to-top"
            aria-label={t('footer.toTop')}
            onClick={scrollDocumentToTop}
            initial={{ opacity: 0, y: 16, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            ↑
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
