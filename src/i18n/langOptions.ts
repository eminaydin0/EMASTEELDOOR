import {
  LANG_FLAG_AR,
  LANG_FLAG_DE,
  LANG_FLAG_EN,
  LANG_FLAG_FR,
  LANG_FLAG_KA,
  LANG_FLAG_SQ,
  LANG_FLAG_TR,
} from '../config/siteData'
import type { LangCode } from './types'

export const LANG_OPTIONS: { code: LangCode; label: string; flag: string }[] = [
  { code: 'tr', label: 'Türkçe', flag: LANG_FLAG_TR },
  { code: 'en', label: 'English', flag: LANG_FLAG_EN },
  { code: 'ar', label: 'العربية', flag: LANG_FLAG_AR },
  { code: 'de', label: 'Deutsch', flag: LANG_FLAG_DE },
  { code: 'fr', label: 'Français', flag: LANG_FLAG_FR },
  { code: 'sq', label: 'Shqip', flag: LANG_FLAG_SQ },
  { code: 'ka', label: 'ქართული', flag: LANG_FLAG_KA },
]

export const LANG_HTML: Record<LangCode, string> = {
  tr: 'tr',
  en: 'en',
  ar: 'ar',
  de: 'de',
  fr: 'fr',
  sq: 'sq',
  ka: 'ka',
}

/** GB bayrağı kare; diğerleri ~3:2 */
export function langFlagClass(code: LangCode): string {
  return code === 'en'
    ? 'ev-lang__flag-img ev-lang__flag-img--en'
    : 'ev-lang__flag-img ev-lang__flag-img--wide'
}
