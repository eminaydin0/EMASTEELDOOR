import { useEffect, useMemo, useState } from 'react'
import '../styles/home.css'
import cornerKasa from '../assets/media/teknik detay/Corner-Kasa.jpg'
import italianKasa from '../assets/media/teknik detay/Italyan-Kasa.jpg'
import ayarliKasa from '../assets/media/teknik detay/Ayarli-Kasa.jpg'
import teknikArka2 from '../assets/media/teknik detay/TEKNIK-ARKA2.jpg'
import teknikOn2 from '../assets/media/teknik detay/TEKNIK-O\u0308N2.jpg'
import kilitKancali from '../assets/media/teknik detay/KILIT-KANCALI.jpg'
import kilitMerkezi from '../assets/media/teknik detay/KILIT-MERKEZI.jpg'
import kilitMonoblock from '../assets/media/teknik detay/KILIT-MONOBLOCK.jpg'
import kilitYariMerkezi from '../assets/media/teknik detay/KILIT-YARI-MERKEZI\u0307.jpg'
import { CopyPhoneButton } from '../components/CopyPhoneButton'
import { FloatingActionPills } from '../components/FloatingActionPills'
import { SiteHeader } from '../components/SiteHeader'
import { useI18n } from '../i18n/context'
import {
  ABOUT_PAGE,
  CORPORATE_SECTIONS,
  LOGO,
  MAP_EMBED_URL,
  MAP_EXTERNAL_URL,
  LEGAL_NAME,
  OFFICE_STREET_LINE,
  PHONE_MOBILE_DISPLAY,
  PHONE_MOBILE_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
  PRIMARY_CATALOG_PDF,
  SITE_LABEL,
  SITE_URL,
  buildWhatsappChatUrl,
} from '../config/siteData'

type TechSpecItem = { src: string; title: string; alt: string }
type TechSpecColumns = 2 | 3 | 4

function TechnicalSpecSection({
  heading,
  lead,
  items,
  columns,
}: {
  heading: string
  lead: string
  items: readonly TechSpecItem[]
  columns: TechSpecColumns
}) {
  const colClass =
    columns === 4
      ? 'ev-technical-grid ev-technical-grid--cols-4'
      : columns === 3
        ? 'ev-technical-grid ev-technical-grid--cols-3'
        : 'ev-technical-grid ev-technical-grid--cols-2'

  return (
    <section className="ev-section ev-technical-spec">
      <div className="ev-inner ev-technical-frames">
        <div className="ev-fusion-title ev-fusion-title--center">
          <h1 className="ev-fusion-title__heading">{heading}</h1>
          <span className="ev-fusion-title__spacer" aria-hidden="true" />
          <div className="ev-fusion-title__sep ev-fusion-title__sep--motion" />
        </div>
        <p className="ev-technical-frames__lead">{lead}</p>
        <div className={colClass}>
          {items.map((item) => (
            <article key={item.title} className="ev-technical-item">
              <h2 className="ev-technical-item__label">{item.title}</h2>
              <div className="ev-technical-item__img">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { NavDropdown } from '../components/SiteHeader'

function KilitPage() {
  const { t } = useI18n()
  const items: TechSpecItem[] = [
    { src: kilitMerkezi, title: t('kilitPage.merkeziName'), alt: t('kilitPage.merkeziAlt') },
    { src: kilitYariMerkezi, title: t('kilitPage.yariMerkeziName'), alt: t('kilitPage.yariMerkeziAlt') },
    { src: kilitMonoblock, title: t('kilitPage.monoblockName'), alt: t('kilitPage.monoblockAlt') },
    { src: kilitKancali, title: t('kilitPage.kancaliName'), alt: t('kilitPage.kancaliAlt') },
  ]
  return (
    <TechnicalSpecSection
      heading={t('kilitPage.title')}
      lead={t('kilitPage.lead')}
      items={items}
      columns={4}
    />
  )
}

function KanatPage() {
  const { t } = useI18n()
  const items: TechSpecItem[] = [
    { src: teknikArka2, title: t('kanatPage.rearName'), alt: t('kanatPage.rearAlt') },
    { src: teknikOn2, title: t('kanatPage.frontName'), alt: t('kanatPage.frontAlt') },
  ]
  return (
    <TechnicalSpecSection
      heading={t('kanatPage.title')}
      lead={t('kanatPage.lead')}
      items={items}
      columns={2}
    />
  )
}

function KasaPage() {
  const { t } = useI18n()
  const items: TechSpecItem[] = [
    { src: cornerKasa, title: t('kasaPage.cornerName'), alt: t('kasaPage.cornerAlt') },
    { src: italianKasa, title: t('kasaPage.italianName'), alt: t('kasaPage.italianAlt') },
    { src: ayarliKasa, title: t('kasaPage.adjustableName'), alt: t('kasaPage.adjustableAlt') },
  ]
  return (
    <TechnicalSpecSection
      heading={t('kasaPage.title')}
      lead={t('kasaPage.lead')}
      items={items}
      columns={3}
    />
  )
}

function AboutPage() {
  const { t } = useI18n()
  return (
    <section className="ev-section">
      <div className="ev-inner">
        <div className="ev-fusion-title ev-fusion-title--center">
          <h1 className="ev-fusion-title__heading">{t('about.title')}</h1>
          <span className="ev-fusion-title__spacer" aria-hidden="true" />
          <div className="ev-fusion-title__sep ev-fusion-title__sep--motion" />
        </div>

        <article className="ev-shadow-col ev-corporate-card">
          <div className="ev-corporate-card__about-inner" style={{ padding: '1.2rem 1.1rem 1.35rem' }}>
            <p style={{ marginTop: 0 }}>{t('about.lead')}</p>
            <div className="ev-about-mv">
              <h2 className="ev-about-mv__title">{t('about.missionTitle')}</h2>
              <p className="ev-about-mv__text">{t('about.missionText')}</p>
            </div>
            <div className="ev-about-mv">
              <h2 className="ev-about-mv__title">{t('about.visionTitle')}</h2>
              <p className="ev-about-mv__text">{t('about.visionText')}</p>
            </div>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p className="ev-about-slogan">
              <em>{t('intro.slogan')}</em>
            </p>
            <ul className="ev-about-bullets">
              <li>{t('about.b1')}</li>
              <li>{t('about.b2')}</li>
              <li>{t('about.b3')}</li>
            </ul>
          </div>
        </article>

        <article className="ev-shadow-col ev-corporate-card ev-static-about-media">
          <div className="ev-project-card__img">
            <img
              src={ABOUT_PAGE.image}
              alt={t('about.imgAlt')}
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>

        <div className="ev-static-about-actions">
          <a className="ev-btn-primary" href="/#catalogs">
            {t('about.catalogsBtn')}
          </a>
          <a className="ev-btn-outline" href={PRIMARY_CATALOG_PDF} target="_blank" rel="noreferrer">
            {t('about.pdfBtn')}
          </a>
          <a className="ev-btn-outline" href="/iletisim">
            {t('about.contactBtn')}
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactPage({ waUrl }: { waUrl: string }) {
  const { t } = useI18n()

  return (
    <section className="ev-reach" id="iletisim" aria-labelledby="ev-reach-title">
      <div className="ev-reach__grid">
        <div className="ev-reach__copy">
          <p className="ev-reach__kicker">{t('contact.kicker')}</p>
          <h1 id="ev-reach-title" className="ev-reach__title">
            {t('contact.title')}
          </h1>
          <p className="ev-reach__lead">{t('contact.intro')}</p>

          <p className="ev-reach__firm">{LEGAL_NAME}</p>
          <p className="ev-reach__addr">{OFFICE_STREET_LINE}</p>

          <div className="ev-reach__lines">
            <a className="ev-reach__line" href={`tel:${PHONE_MOBILE_TEL}`}>
              <span>{t('contact.primaryLine')}</span>
              <strong>{PHONE_MOBILE_DISPLAY}</strong>
            </a>
            <a className="ev-reach__line" href={`tel:${PHONE_SECONDARY_TEL}`}>
              <span>{t('contact.secondaryLine')}</span>
              <strong>{PHONE_SECONDARY_DISPLAY}</strong>
            </a>
          </div>

          <div className="ev-reach__row">
            <CopyPhoneButton
              value={PHONE_MOBILE_TEL}
              idleLabel={t('footer.copyPhone')}
              copiedLabel={t('footer.copyPhoneDone')}
            />
            <CopyPhoneButton
              value={PHONE_SECONDARY_TEL}
              idleLabel={t('footer.copyPhoneOther')}
              copiedLabel={t('footer.copyPhoneDone')}
            />
          </div>

          <div className="ev-reach__cta">
            <a className="ev-reach__wa" href={waUrl} target="_blank" rel="noreferrer">
              {t('footer.wa')}
            </a>
            <a className="ev-reach__ghost" href="/#catalogs">
              {t('contact.catalogs')}
            </a>
            <a className="ev-reach__ghost" href={SITE_URL} target="_blank" rel="noreferrer">
              {SITE_LABEL}
            </a>
          </div>
        </div>

        <div className="ev-reach__map" aria-label={t('footer.location')}>
          <iframe
            title={t('footer.mapIframe')}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAP_EMBED_URL}
          />
          <a className="ev-reach__maps" href={MAP_EXTERNAL_URL} target="_blank" rel="noreferrer">
            {t('footer.openMaps')}
          </a>
        </div>
      </div>
    </section>
  )
}

function staticTitle(pathname: string, t: (key: string) => string) {
  switch (pathname) {
    case '/hakkimizda':
      return t('about.title')
    case '/uretim':
      return t('page.production')
    case '/kalite-politikasi':
      return t('page.quality')
    case '/sertifikalarimiz':
      return t('page.certificates')
    case '/iletisim':
      return t('contact.title')
    case '/teknik-kasa':
      return t('kasaPage.title')
    case '/teknik-kanat':
      return t('kanatPage.title')
    case '/teknik-kilit':
      return t('kilitPage.title')
    default:
      return t('page.corporate')
  }
}

function corporateCopy(
  pathname: string,
  t: (key: string) => string,
): { title: string; text: string } {
  const entry = CORPORATE_SECTIONS.find((item) => pathname.endsWith(item.id))
  if (!entry) {
    return { title: t('corp.uretimTitle'), text: t('corp.uretimText') }
  }
  switch (entry.id) {
    case 'uretim':
      return { title: t('corp.uretimTitle'), text: t('corp.uretimText') }
    case 'kalite-politikasi':
      return { title: t('corp.kaliteTitle'), text: t('corp.kaliteText') }
    case 'sertifikalarimiz':
      return { title: t('corp.sertifikaTitle'), text: t('corp.sertifikaText') }
    default:
      return { title: t('page.corporate'), text: '' }
  }
}

export function StaticPage({ pathname }: { pathname: string }) {
  const { t } = useI18n()
  const waUrl = useMemo(() => buildWhatsappChatUrl(t('contact.waPrefill')), [t])
  const [showTop, setShowTop] = useState(false)
  const title = staticTitle(pathname, t)
  const corp = corporateCopy(pathname, t)
  const isContact = pathname === '/iletisim'
  const isAbout = pathname === '/hakkimizda'
  const isKasa = pathname === '/teknik-kasa'
  const isKanat = pathname === '/teknik-kanat'
  const isKilit = pathname === '/teknik-kilit'

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="ev ev-static">
      <a className="ev-skip" href="#content">
        {t('common.skip')}
      </a>
      <SiteHeader />

      <main id="content">
        {isAbout ? (
          <AboutPage />
        ) : isContact ? (
          <ContactPage waUrl={waUrl} />
        ) : isKasa ? (
          <KasaPage />
        ) : isKanat ? (
          <KanatPage />
        ) : isKilit ? (
          <KilitPage />
        ) : (
          <section className="ev-section">
            <div className="ev-inner">
              <div className="ev-fusion-title ev-fusion-title--center">
                <h1 className="ev-fusion-title__heading">{title}</h1>
                <span className="ev-fusion-title__spacer" aria-hidden="true" />
                <div className="ev-fusion-title__sep ev-fusion-title__sep--motion" />
              </div>

              <article className="ev-shadow-col ev-corporate-card">
                <div style={{ padding: '1.2rem 1.1rem 1.35rem' }}>
                  <h3>{corp.title}</h3>
                  <p>{corp.text}</p>
                </div>
              </article>
            </div>
          </section>
        )}
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
