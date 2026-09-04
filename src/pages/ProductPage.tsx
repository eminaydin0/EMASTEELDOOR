import { useEffect, useMemo, useState } from 'react'
import '../styles/home.css'
import { FloatingActionPills } from '../components/FloatingActionPills'
import { SiteHeader } from '../components/SiteHeader'
import { useI18n } from '../i18n/context'
import {
  PHONE_MOBILE_TEL,
  PRIMARY_CATALOG_PDF,
  productPageByPath,
  productSeriesCards,
  buildWhatsappChatUrl,
} from '../config/siteData'

function SeriesLinkIcon() {
  return (
    <svg
      className="ev-product-series-card__link-ico"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      />
    </svg>
  )
}

export function ProductPage({ pathname }: { pathname: string }) {
  const { t } = useI18n()
  const def = productPageByPath(pathname)
  const waUrl = useMemo(() => buildWhatsappChatUrl(t('contact.waPrefill')), [t])
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!def) return null

  const base = `product.${def.dict}`
  const series = productSeriesCards(def.dict)

  return (
    <div className="ev ev-static ev-product-layout">
      <a className="ev-skip" href="#content">
        {t('common.skip')}
      </a>
      <SiteHeader />

      <main id="content">
        <div className="ev-product-hero-bar">
          <div className="ev-inner ev-product-hero-bar__inner">
            <h1 className="ev-product-hero-bar__title">{t(`${base}.title`)}</h1>
            <p className="ev-product-hero-bar__subtitle">{t(`${base}.lead`)}</p>
          </div>
        </div>

        <section className="ev-product-series-section" aria-label={t(`${base}.title`)}>
          <div className="ev-inner ev-product-series-section__inner">
            <div className="ev-product-series-grid">
              {series.map((item, index) => (
                <a
                  key={`${item.src}-${index}`}
                  className="ev-product-series-card"
                  href={PRIMARY_CATALOG_PDF}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t(item.titleKey)} — ${t('product.seriesOpenPdf')}`}
                >
                  <div className="ev-product-series-card__media">
                    <img src={item.src} alt="" loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
                    <div className="ev-product-series-card__overlay">
                      <SeriesLinkIcon />
                      <span className="ev-product-series-card__label">{t(item.titleKey)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FloatingActionPills
        waUrl={waUrl}
        phoneTel={PHONE_MOBILE_TEL}
        showTop={showTop}
        t={t}
      />
    </div>
  )
}
