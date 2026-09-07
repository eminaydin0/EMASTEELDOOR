import { useEffect, useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import '../styles/home.css'
import { useI18n } from '../i18n/context'
import {
  BRAND_HANDLE,
  BRAND_NAME,
  CATALOG_ITEMS,
  DOOR_SHOWCASE_SRCS,
  DOOR_SYSTEM_CARDS,
  HERO_PHOTO_SLIDES,
  INTRO_CAROUSEL,
  INSTAGRAM_PROFILE_URL,
  LOGO,
  MAP_EMBED_URL,
  MAP_EXTERNAL_URL,
  OFFICE_ADDRESS_LINE,
  PRODUCT_SECTION_ANCHORS,
  PROJECT_HOTEL_DOOR_PHOTOS,
  PROJECT_KITCHEN_DOOR_PHOTOS,
  PROJECT_MUTFAK_IMG,
  PROJECT_OTEL_IMG,
  PROJECT_VILLA_DOOR_PHOTOS,
  PROJECT_VILLA_IMG,
  type ProjectDoorPhotoPair,
  PHONE_MOBILE_DISPLAY,
  PHONE_MOBILE_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
  REFERENCE_LOGOS,
  SITE_LABEL,
  SITE_URL,
  buildWhatsappChatUrl,
} from '../config/siteData'
import { CopyPhoneButton } from '../components/CopyPhoneButton'
import { FloatingActionPills } from '../components/FloatingActionPills'
import { FusionTitle } from '../components/FusionTitle'
import { SiteHeader } from '../components/SiteHeader'
import { Reveal, StaggerGrid, StaggerItem } from '../components/ui-motion'

const PROJECT_IMG_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750"><rect fill="#ece8e0" width="1200" height="750"/><rect fill="#c9a15b" fill-opacity=".12" width="1200" height="750"/><text x="600" y="375" text-anchor="middle" dominant-baseline="middle" fill="#c9a15b" font-family="system-ui,sans-serif" font-size="20" font-weight="600">Ema · Görsel</text></svg>',
  )

function ProjectCardDoorToggle({
  photos,
  fallbackClosed,
  fallbackOpen,
  altClosed,
  altOpen,
}: {
  photos: ProjectDoorPhotoPair
  fallbackClosed: string
  fallbackOpen: string
  altClosed: string
  altOpen: string
}) {
  const { t } = useI18n()
  const [view, setView] = useState<'closed' | 'open'>('closed')
  const [closedSrc, setClosedSrc] = useState(photos.closed)
  const [openSrc, setOpenSrc] = useState(photos.open)

  const src = view === 'closed' ? closedSrc : openSrc
  const alt = view === 'closed' ? altClosed : altOpen

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer-when-downgrade"
        onError={() => {
          if (view === 'closed') {
            setClosedSrc((s) => {
              if (s === photos.closed) return fallbackClosed
              if (s === fallbackClosed) return PROJECT_IMG_PLACEHOLDER
              return s
            })
          } else {
            setOpenSrc((s) => {
              if (s === photos.open) return fallbackOpen
              if (s === fallbackOpen) return PROJECT_IMG_PLACEHOLDER
              return s
            })
          }
        }}
      />
      <div
        className="ema-field__toggle"
        role="group"
        aria-label={t('projects.doorToggleAria')}
      >
        <button
          type="button"
          className={view === 'closed' ? 'is-on' : undefined}
          aria-pressed={view === 'closed'}
          onClick={() => setView('closed')}
        >
          {t('projects.doorClosed')}
        </button>
        <button
          type="button"
          className={view === 'open' ? 'is-on' : undefined}
          aria-pressed={view === 'open'}
          onClick={() => setView('open')}
        >
          {t('projects.doorOpen')}
        </button>
      </div>
    </>
  )
}

export function HomePage() {
  const { t, lang } = useI18n()
  const swiperDir = lang === 'ar' ? 'rtl' : 'ltr'
  const waUrl = useMemo(() => buildWhatsappChatUrl(t('contact.waPrefill')), [t])

  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showcaseLightbox, setShowcaseLightbox] = useState<number | null>(null)

  const heroSlideCount = HERO_PHOTO_SLIDES.length

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      setShowTop(y > 420)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const showcaseCount = DOOR_SHOWCASE_SRCS.length

  useEffect(() => {
    if (showcaseLightbox === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [showcaseLightbox])

  useEffect(() => {
    if (showcaseLightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowcaseLightbox(null)
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setShowcaseLightbox((i) =>
          i === null ? null : (i - 1 + showcaseCount) % showcaseCount,
        )
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setShowcaseLightbox((i) =>
          i === null ? null : (i + 1) % showcaseCount,
        )
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showcaseLightbox, showcaseCount])

  return (
    <div className="ev">
      <a className="ev-skip" href="#content">
        {t('common.skip')}
      </a>

      <div className={`ema-head-wrap${scrolled ? ' is-scrolled' : ''}`}>
        <SiteHeader scrolled={scrolled} />
      </div>

      <section id="sliders-container" className="ema-hero" aria-label={t('hero.alt0')}>
        <div className="ema-hero__stage">
          <Swiper
            key={`hero-${swiperDir}`}
            className="ema-hero__swiper"
            dir={swiperDir}
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              720: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            autoplay={
              heroSlideCount > 1
                ? {
                    delay: 2800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }
                : false
            }
            loop={heroSlideCount > 3}
            loopAdditionalSlides={3}
            speed={800}
            grabCursor
            allowTouchMove
            navigation={{
              prevEl: '.ema-hero__prev',
              nextEl: '.ema-hero__next',
            }}
          >
            {HERO_PHOTO_SLIDES.map((src, i) => (
              <SwiperSlide key={src}>
                <figure className="ema-hero__slide">
                  <img
                    src={src}
                    alt={t('hero.bannerAlt', { n: i + 1 })}
                    className="ema-hero__img"
                    loading={i < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={i === 0 ? 'high' : undefined}
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {heroSlideCount > 1 ? (
            <>
              <button type="button" className="ema-hero__prev" aria-label={t('showcase.prev')}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 5 8 12.5 15.5 20" />
                </svg>
              </button>
              <button type="button" className="ema-hero__next" aria-label={t('showcase.next')}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.5 5 16 12.5 8.5 20" />
                </svg>
              </button>
            </>
          ) : null}
        </div>

        <div className="ema-ticker" role="marquee" aria-label={`${BRAND_NAME} · ${PHONE_MOBILE_DISPLAY}`}>
          <div className="ema-ticker__track">
            {Array.from({ length: 8 }, (_, i) => (
              <span className="ema-ticker__item" key={i}>
                <b>EMASTEELDOOR</b>
                <i />
                <a href={`tel:${PHONE_MOBILE_TEL}`}>{PHONE_MOBILE_DISPLAY}</a>
                <i />
                <a href={`tel:${PHONE_SECONDARY_TEL}`}>{PHONE_SECONDARY_DISPLAY}</a>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ema-studio" aria-labelledby="ema-studio-title">
        <div className="ema-studio__facts" aria-label={t('stats.title')}>
          <div className="ema-studio__fact">
            <em>01</em>
            <strong>25+</strong>
            <span>{t('stats.years')}</span>
          </div>
          <div className="ema-studio__fact">
            <em>02</em>
            <strong>5</strong>
            <span>{t('stats.series')}</span>
          </div>
          <div className="ema-studio__fact">
            <em>03</em>
            <strong>Kayseri</strong>
            <span>{t('stats.city')}</span>
          </div>
          <div className="ema-studio__fact">
            <em>04</em>
            <strong>OSB</strong>
            <span>{t('stats.factory')}</span>
          </div>
        </div>

        <div className="ema-pair">
          <div className="ema-studio__media">
            <img
              src={INTRO_CAROUSEL[0]?.src}
              alt={t('intro.carouselAlt', { n: 1 })}
              loading="lazy"
            />
          </div>

          <div className="ema-pair__copy">
            <p className="ema-pair__kicker">{t('intro.sec1.kicker')}</p>
            <h2 id="ema-studio-title" className="ema-pair__title">
              {t('intro.strapline')}
            </h2>
            <p className="ema-pair__text">{t('intro.sec1.text')}</p>
          </div>
        </div>
      </section>

      <section className="ema-make" aria-labelledby="ema-make-title">
        <div className="ema-pair ema-pair--flip">
          <div className="ema-pair__copy">
            <p className="ema-pair__kicker">{t('intro.sec2.kicker')}</p>
            <h2 id="ema-make-title" className="ema-pair__title">
              {t('intro.sec2.title')}
            </h2>
            <p className="ema-pair__text">{t('intro.sec2.text')}</p>
            <div className="ema-studio__actions">
              <a className="ema-btn ema-btn--solid" href="#seriler-kapi">
                {t('nav.products')}
              </a>
              <a className="ema-btn ema-btn--ghost" href="/iletisim">
                {t('header.quote')}
              </a>
            </div>
          </div>
          <div className="ema-make__shot">
            <img
              src={INTRO_CAROUSEL[1]?.src ?? INTRO_CAROUSEL[0]?.src}
              alt={t('intro.carouselAlt', { n: 2 })}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <main id="content">
        <section className="ema-field" id="proje-hizmetler">
          <div className="ema-field__inner">
            <header className="ema-field__head">
              <p className="ema-pair__kicker">01 — 03</p>
              <h2 className="ema-pair__title">{t('projects.title')}</h2>
            </header>

            {(
              [
                {
                  id: 'mutfak-proje',
                  photos: PROJECT_KITCHEN_DOOR_PHOTOS,
                  fallback: PROJECT_MUTFAK_IMG,
                  kicker: t('projects.kitchenKicker'),
                  title: t('projects.kitchenTitle'),
                  text: t('projects.kitchenP'),
                  altClosed: t('projects.kitchenAltClosed'),
                  altOpen: t('projects.kitchenAltOpen'),
                },
                {
                  id: 'otel-proje',
                  photos: PROJECT_HOTEL_DOOR_PHOTOS,
                  fallback: PROJECT_OTEL_IMG,
                  kicker: t('projects.hotelKicker'),
                  title: t('projects.hotelTitle'),
                  text: t('projects.hotelP'),
                  altClosed: t('projects.hotelAltClosed'),
                  altOpen: t('projects.hotelAltOpen'),
                },
                {
                  id: 'villa-proje',
                  photos: PROJECT_VILLA_DOOR_PHOTOS,
                  fallback: PROJECT_VILLA_IMG,
                  kicker: t('projects.villaKicker'),
                  title: t('projects.villaTitle'),
                  text: t('projects.villaP'),
                  altClosed: t('projects.villaAltClosed'),
                  altOpen: t('projects.villaAltOpen'),
                },
              ] as const
            ).map((item, i) => (
              <article
                key={item.id}
                id={item.id}
                className={`ema-field__row${i % 2 ? ' is-flip' : ''}`}
              >
                <div className="ema-field__media">
                  <ProjectCardDoorToggle
                    photos={item.photos}
                    fallbackClosed={item.fallback}
                    fallbackOpen={item.fallback}
                    altClosed={item.altClosed}
                    altOpen={item.altOpen}
                  />
                </div>
                <div className="ema-field__copy">
                  <em>{String(i + 1).padStart(2, '0')}</em>
                  <p className="ema-pair__kicker">{item.kicker}</p>
                  <h3 className="ema-field__title">{item.title}</h3>
                  <p className="ema-pair__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ev-section ev-door-showcase" id="kapi-vitrin">
          <Reveal className="ev-inner" as="div">
            <header className="ev-door-showcase__head">
              <p className="ev-door-showcase__kicker">{t('showcase.kicker')}</p>
              <h2 className="ev-door-showcase__title">{t('showcase.title')}</h2>
              <p className="ev-door-showcase__sub">
                {t('showcase.sub')}
              </p>
            </header>
            <StaggerGrid className="ev-showcase-grid">
              {DOOR_SHOWCASE_SRCS.map((src, i) => {
                const doorTitle = t('intro.carouselAlt', { n: i + 1 })
                return (
                <StaggerItem key={`showcase-${src}`} className="ev-showcase-grid__item">
                  <article
                    className="ev-showcase-card ev-showcase-card--interactive"
                    tabIndex={0}
                    role="button"
                    aria-label={t('showcase.ariaOpen', { title: doorTitle })}
                    onClick={() => setShowcaseLightbox(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setShowcaseLightbox(i)
                      }
                    }}
                  >
                    <div className="ev-showcase-card__media">
                      <img src={src} alt={doorTitle} loading="lazy" sizes="(max-width:680px) 100vw, (max-width:1024px) 50vw, 25vw" />
                      <div className="ev-showcase-card__veil" aria-hidden="true" />
                      <span className="ev-showcase-card__mark" aria-hidden="true">
                        {BRAND_HANDLE}
                      </span>
                    </div>
                  </article>
                </StaggerItem>
                )
              })}
            </StaggerGrid>
          </Reveal>
        </section>
        
        <section className="ev-section ev-section--catalogs" id="catalogs">
          <Reveal className="ev-inner ev-inner--catalogs" as="div">
            <FusionTitle center as="h1">
              {t('catalog.title')}
            </FusionTitle>
            <StaggerGrid className="ev-catalog-grid">
              {CATALOG_ITEMS.map((c) => (
                <StaggerItem key={c.title} className="ev-catalog-item">
                  <a
                    href={c.href}
                    className="ev-catalog-item__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="ev-catalog-item__card">
                      <div className="ev-catalog-item__img-wrap">
                        <div className="ev-catalog-item__img">
                          <img src={c.img} alt="" loading="lazy" />
                        </div>
                        <div className="ev-catalog-item__logo" aria-hidden="true">
                          <img src={LOGO} className="ev-catalog-item__logo-img ev-logo-mark" alt="" />
                        </div>
                      </div>
                      <div className="ev-catalog-item__body">
                        <h3 className="ev-catalog-item__title">{c.title}</h3>
                        <span className="ev-catalog-item__meta">{t('catalog.pdf')}</span>
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Reveal>
        </section>

        <section className="ev-section ev-door-systems" id="seriler-kapi">
          <Reveal className="ev-inner ev-inner--door-systems" as="div">
            <header className="ev-door-systems__header">
              <FusionTitle center as="h1">
                {t('doors.title')}
              </FusionTitle>
              <p className="ev-door-systems__lead">
                {t('doors.lead')}
              </p>
            </header>
          </Reveal>
          <div className="ev-door-strip" role="list">
            {DOOR_SYSTEM_CARDS.map((d, i) => {
              const line = t(`door.line${i}`)
              return (
                <a
                  key={d.src}
                  id={PRODUCT_SECTION_ANCHORS[i]}
                  href={d.href}
                  className="ev-door-strip__panel"
                  role="listitem"
                  aria-label={`${line} — ${t('doors.openCategory')}`}
                >
                  <span className="ev-door-strip__media">
                    <img
                      src={d.src}
                      alt=""
                      loading="lazy"
                      sizes="(max-width:800px) 100vw, 40vw"
                    />
                    <span className="ev-door-strip__shade" aria-hidden="true" />
                    <span className="ev-door-strip__label">{line}</span>
                    <span className="ev-door-strip__copy">
                      <p>{t(`door.blurb${i}`)}</p>
                      <em>{t('doors.goProduct')}</em>
                    </span>
                  </span>
                  <span className="ev-door-strip__mark" aria-hidden="true">
                    {BRAND_HANDLE}
                  </span>
                </a>
              )
            })}
          </div>
        </section>

        <section className="ev-section ev-social-feed" id="referanslar">
          <Reveal className="ev-inner" as="div">
            <header className="ev-social-feed__band">
              <div className="ev-social-feed__intro">
                <p className="ev-social-feed__kicker">{t('refs.kicker')}</p>
                <h2 className="ev-social-feed__title">{t('refs.title')}</h2>
                <p className="ev-social-feed__lead">{t('refs.lead')}</p>
              </div>
              <a
                href={INSTAGRAM_PROFILE_URL}
                className="ev-social-feed__profile"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ev-social-feed__avatar" aria-hidden="true">
                  <img src={LOGO} alt="" />
                </span>
                <span className="ev-social-feed__profile-copy">
                  <strong>@{BRAND_HANDLE}</strong>
                  <em>{t('refs.follow')}</em>
                </span>
                <span className="ev-social-feed__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </header>
            <div className="ev-social-feed__grid" role="list">
              {REFERENCE_LOGOS.map((src, i) => (
                <article key={src} className="ev-social-post" role="listitem">
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    className="ev-social-post__link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`@${BRAND_HANDLE} — ${t(`refs.cap${i % 8}`)}`}
                  >
                    <img src={src} alt="" loading="lazy" sizes="(max-width:520px) 50vw, (max-width:900px) 33vw, 25vw" />
                    <span className="ev-social-post__veil" aria-hidden="true" />
                    <span className="ev-social-post__tag">@{BRAND_HANDLE}</span>
                  </a>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <section className="ema-quote">
        <div className="ema-quote__inner">
          <h2>{t('quote.title')}</h2>
          <p>{t('quote.lead')}</p>
          <div className="ema-quote__actions">
            <a className="ema-btn ema-btn--solid" href="/iletisim">
              {t('header.quote')}
            </a>
            <a className="ema-btn ema-btn--ghost" href={waUrl} target="_blank" rel="noreferrer">
              {t('footer.wa')}
            </a>
          </div>
        </div>
      </section>

      <footer className="ema-foot" id="iletisim">
        <div className="ema-foot__mega">
          <div className="ema-foot__brand">
            <a href="/" className="ema-mark ema-mark--foot" aria-label={t('common.homeAria')}>
              <img src={LOGO} alt="" className="ema-mark__img" />
            </a>
            <p className="ema-foot__tag">{t('footer.tagline')}</p>
            <p>{OFFICE_ADDRESS_LINE}</p>
            <p className="ema-foot__phones">
              <a href={`tel:${PHONE_MOBILE_TEL}`}>{PHONE_MOBILE_DISPLAY}</a>
              <a href={`tel:${PHONE_SECONDARY_TEL}`}>{PHONE_SECONDARY_DISPLAY}</a>
            </p>
            <div className="ema-foot__copyrow">
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
          </div>

          <div>
            <h4>{t('nav.products')}</h4>
            <a href="/urun/celik-kapi">{t('nav.prodSteel')}</a>
            <a href="/urun/villa-kapisi">{t('nav.prodVillaDoor')}</a>
            <a href="/urun/yangin-acil-cikis">{t('nav.prodEmergency')}</a>
            <a href="/urun/kompozit-dis-cephe">{t('nav.prodComposite')}</a>
            <a href="/urun/iroko-masif">{t('nav.prodIroko')}</a>
          </div>

          <div>
            <h4>{t('nav.corporate')}</h4>
            <a href="/hakkimizda">{t('footer.quick.about')}</a>
            <a href="/uretim">{t('footer.quick.production')}</a>
            <a href="/kalite-politikasi">{t('footer.quick.quality')}</a>
            <a href="/sertifikalarimiz">{t('footer.quick.certs')}</a>
            <a href="/#catalogs">{t('footer.quick.ecatalog')}</a>
          </div>

          <div>
            <h4>{t('nav.contact')}</h4>
            <a href={waUrl} target="_blank" rel="noreferrer">
              {t('footer.wa')}
            </a>
            <a href={`tel:${PHONE_MOBILE_TEL}`}>{t('footer.quick.call')}</a>
            <a href={SITE_URL} target="_blank" rel="noreferrer">
              {SITE_LABEL}
            </a>
            <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noreferrer">
              @{BRAND_HANDLE}
            </a>
            <a href={MAP_EXTERNAL_URL} target="_blank" rel="noreferrer">
              {t('footer.openMaps')}
            </a>
          </div>
        </div>

        <p className="ema-foot__giant" aria-hidden="true">
          EMASTEELDOOR
        </p>

        <div className="ema-foot__map">
          <iframe
            title={t('footer.mapIframe')}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAP_EMBED_URL}
          />
        </div>

        <div className="ema-foot__legal">
          <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          <span>{BRAND_NAME}</span>
        </div>
      </footer>

      <FloatingActionPills
        waUrl={waUrl}
        phoneTel={PHONE_MOBILE_TEL}
        showTop={showTop}
        t={t}
      />

      {showcaseLightbox !== null && (
        <div
          className="ev-showcase-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t('showcase.lightbox')}
          onClick={() => setShowcaseLightbox(null)}
        >
          <div
            className="ev-showcase-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="ev-showcase-lightbox__close"
              onClick={() => setShowcaseLightbox(null)}
              aria-label={t('showcase.close')}
            >
              ×
            </button>
            <button
              type="button"
              className="ev-showcase-lightbox__nav ev-showcase-lightbox__nav--prev"
              onClick={() =>
                setShowcaseLightbox((i) =>
                  i === null ? null : (i - 1 + showcaseCount) % showcaseCount,
                )
              }
              aria-label={t('showcase.prev')}
            >
              ‹
            </button>
            <img
              src={DOOR_SHOWCASE_SRCS[showcaseLightbox]}
              alt={t('intro.carouselAlt', { n: showcaseLightbox + 1 })}
              className="ev-showcase-lightbox__img"
            />
            <button
              type="button"
              className="ev-showcase-lightbox__nav ev-showcase-lightbox__nav--next"
              onClick={() =>
                setShowcaseLightbox((i) =>
                  i === null ? null : (i + 1) % showcaseCount,
                )
              }
              aria-label={t('showcase.next')}
            >
              ›
            </button>
            <p className="ev-showcase-lightbox__counter" aria-live="polite">
              {showcaseLightbox + 1} / {showcaseCount}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
