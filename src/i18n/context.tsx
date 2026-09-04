import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { interpolate, translate } from './dictionary'
import { LANG_HTML } from './langOptions'
import { LANG_CODES, LANG_STORAGE_KEY, type LangCode } from './types'

export type I18nContextValue = {
  lang: LangCode
  setLang: (lang: LangCode) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function detectBrowserLang(): LangCode {
  if (typeof navigator === 'undefined') return 'tr'
  const raw = (navigator.languages?.[0] ?? navigator.language ?? 'tr').toLowerCase()
  if (raw.startsWith('ar')) return 'ar'
  if (raw.startsWith('de')) return 'de'
  if (raw.startsWith('fr')) return 'fr'
  if (raw.startsWith('sq')) return 'sq'
  if (raw.startsWith('ka')) return 'ka'
  if (raw.startsWith('en')) return 'en'
  return 'tr'
}

function readStoredLang(): LangCode {
  try {
    const v = localStorage.getItem(LANG_STORAGE_KEY) as LangCode | null
    if (v && LANG_CODES.includes(v)) return v
  } catch {
    /* ignore */
  }
  return detectBrowserLang()
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() =>
    typeof window !== 'undefined' ? readStoredLang() : 'tr',
  )

  const setLang = useCallback((next: LangCode) => {
    setLangState(next)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = LANG_HTML[lang]
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const raw = translate(lang, key)
      return vars ? interpolate(raw, vars) : raw
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return ctx
}
