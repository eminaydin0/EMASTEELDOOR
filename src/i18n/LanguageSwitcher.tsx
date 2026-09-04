import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { useI18n } from './context'
import { LANG_OPTIONS, langFlagClass } from './langOptions'

export function LanguageSwitcher({
  variant,
  mobileNavOpen,
}: {
  variant: 'desktop' | 'mobile'
  mobileNavOpen?: boolean
}) {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const btnId = useId()
  const listId = useId()

  useEffect(() => {
    if (variant === 'mobile' && mobileNavOpen === false) setOpen(false)
  }, [variant, mobileNavOpen])

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANG_OPTIONS.find((l) => l.code === lang) ?? LANG_OPTIONS[0]

  return (
    <div
      ref={rootRef}
      className={`ev-lang-switch ev-lang-switch--${variant}${open ? ' ev-lang-switch--open' : ''}`}
    >
      <button
        id={btnId}
        type="button"
        className="ev-lang-switch__trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="ev-lang-switch__label">{t('common.langLabel')}</span>
        <img
          src={current.flag}
          alt=""
          width={current.code === 'en' ? 20 : 22}
          height={current.code === 'en' ? 20 : 15}
          className={langFlagClass(current.code)}
          decoding="async"
        />
        <svg className="ev-lang-switch__chev" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
          <path
            d="M2.5 4.25L6 7.75l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={listId}
            role="listbox"
            aria-labelledby={btnId}
            className="ev-lang-switch__dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: variant === 'desktop' ? 'top right' : 'top center' }}
          >
            <div className="ev-lang-switch__hint">{t('common.langHint')}</div>
            {LANG_OPTIONS.map((item) => (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={lang === item.code}
                className={`ev-lang-switch__opt${lang === item.code ? ' ev-lang-switch__opt--active' : ''}`}
                onClick={() => {
                  setLang(item.code)
                  setOpen(false)
                }}
              >
                <img
                  src={item.flag}
                  alt=""
                  width={item.code === 'en' ? 20 : 22}
                  height={item.code === 'en' ? 20 : 15}
                  className={langFlagClass(item.code)}
                  decoding="async"
                />
                <span className="ev-lang-switch__opt-label">{item.label}</span>
                {lang === item.code ? (
                  <span className="ev-lang-switch__tick" aria-hidden="true">
                    ✓
                  </span>
                ) : null}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
