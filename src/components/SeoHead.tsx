import { useEffect, useMemo } from 'react'
import {
  OFFICE_ADDRESS_LINE,
  PHONES_SEO_LINE,
  SITE_URL,
  productPageByPath,
} from '../config/siteData'
import { interpolate, translate } from '../i18n/dictionary'

const BASE = SITE_URL.replace(/\/$/, '')

/** Arama motorları ve paylaşım önizlemesi için her zaman Türkçe meta */
function seoT(key: string, vars?: Record<string, string | number>): string {
  const raw = translate('tr', key)
  return vars ? interpolate(raw, vars) : raw
}

const STATIC_SEO: Record<
  string,
  {
    titleKey: string
    ogTitleKey?: string
    descKey: string
    descVars?: 'home' | 'contact'
  }
> = {
  '/': {
    titleKey: 'seo.home.title',
    ogTitleKey: 'seo.home.ogTitle',
    descKey: 'seo.home.description',
    descVars: 'home',
  },
  '/hakkimizda': {
    titleKey: 'seo.about.title',
    descKey: 'seo.about.description',
  },
  '/uretim': {
    titleKey: 'seo.production.title',
    descKey: 'seo.production.description',
  },
  '/kalite-politikasi': {
    titleKey: 'seo.quality.title',
    descKey: 'seo.quality.description',
  },
  '/sertifikalarimiz': {
    titleKey: 'seo.certificates.title',
    descKey: 'seo.certificates.description',
  },
  '/iletisim': {
    titleKey: 'seo.contact.title',
    descKey: 'seo.contact.description',
    descVars: 'contact',
  },
  '/teknik-kasa': {
    titleKey: 'seo.kasa.title',
    descKey: 'seo.kasa.description',
  },
  '/teknik-kanat': {
    titleKey: 'seo.kanat.title',
    descKey: 'seo.kanat.description',
  },
  '/teknik-kilit': {
    titleKey: 'seo.kilit.title',
    descKey: 'seo.kilit.description',
  },
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function buildDescription(
  descKey: string,
  descVars?: 'home' | 'contact',
): string {
  const urlShort = SITE_URL.replace(/^https:\/\//, '')
  if (descVars === 'home' || descVars === 'contact') {
    return seoT(descKey, {
      phones: PHONES_SEO_LINE,
      address: OFFICE_ADDRESS_LINE,
      url: urlShort,
    })
  }
  return seoT(descKey)
}

export function SeoHead({ pathname }: { pathname: string }) {
  const meta = useMemo(() => {
    const prod = productPageByPath(pathname)
    if (prod) {
      const title = seoT(`product.${prod.dict}.seoTitle`)
      const description = seoT(`product.${prod.dict}.seoDesc`)
      return {
        title,
        description,
        shareTitle: title,
        canonicalPath: pathname,
        keywords: seoT('seo.home.keywords'),
      }
    }
    const cfg = STATIC_SEO[pathname as keyof typeof STATIC_SEO]
    if (cfg) {
      const title = seoT(cfg.titleKey)
      const description = buildDescription(cfg.descKey, cfg.descVars)
      const shareTitle = cfg.ogTitleKey ? seoT(cfg.ogTitleKey) : title
      return {
        title,
        description,
        shareTitle,
        canonicalPath: pathname,
        keywords: seoT('seo.home.keywords'),
      }
    }
    const home = STATIC_SEO['/']
    const title = seoT(home.titleKey)
    const description = buildDescription(home.descKey, home.descVars)
    const shareTitle = home.ogTitleKey ? seoT(home.ogTitleKey) : title
    return {
      title,
      description,
      shareTitle,
      canonicalPath: '/',
      keywords: seoT('seo.home.keywords'),
    }
  }, [pathname])

  const { title, description, shareTitle, canonicalPath, keywords } = meta

  useEffect(() => {
    document.title = title

    setMetaName('description', description)
    setMetaName('keywords', keywords)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    const href = canonicalPath === '/' ? `${BASE}/` : `${BASE}${canonicalPath}`
    canonical.href = href

    setMetaProperty('og:title', shareTitle)
    setMetaProperty('og:description', description)
    setMetaProperty('og:url', href)
    setMetaProperty('og:locale', 'tr_TR')

    setMetaName('twitter:title', shareTitle)
    setMetaName('twitter:description', description)
  }, [title, description, shareTitle, canonicalPath, keywords])

  return null
}
