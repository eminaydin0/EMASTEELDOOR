import { useEffect, useState } from 'react'
import { LanguageSwitcher } from '../i18n/LanguageSwitcher'
import { useI18n } from '../i18n/context'
import { buildNavMenu } from '../i18n/navMenu'
import { PHONE_MOBILE_DISPLAY, PHONE_MOBILE_TEL, LOGO, type NavItem } from '../config/siteData'

export function NavDropdown({ items, depth = 0 }: { items: NavItem[]; depth?: number }) {
  return (
    <ul className={depth === 0 ? 'ema-nav' : 'ema-sub'}>
      {items.map((item) => (
        <li
          key={item.label + depth}
          className={item.children?.length ? 'ema-nav__has-children' : undefined}
        >
          <a href={item.href ?? '#'} className={depth === 0 && item.navAccent ? 'is-accent' : undefined}>
            {item.label}
          </a>
          {item.children && item.children.length > 0 && (
            <NavDropdown items={item.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  )
}

function flattenNav(items: NavItem[], prefix = ''): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = []
  for (const item of items) {
    const label = prefix + item.label
    if (item.href && item.href !== '#') out.push({ label, href: item.href })
    if (item.children) out.push(...flattenNav(item.children, '› '))
  }
  return out
}

export function SiteHeader({ scrolled = false }: { scrolled?: boolean }) {
  const { t } = useI18n()
  const navMenu = buildNavMenu(t)
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(scrolled)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className={`ema-head${compact ? ' is-scrolled' : ''}`}>
      <div className="ema-head__rail">
        <a className="ema-head__phone" href={`tel:${PHONE_MOBILE_TEL}`}>
          {PHONE_MOBILE_DISPLAY}
        </a>
        <span className="ema-head__rail-mid">{t('header.rail')}</span>
        <LanguageSwitcher variant="desktop" />
      </div>

      <div className="ema-head__main">
        <a href="/" className="ema-mark" aria-label={t('common.homeAria')}>
          <img src={LOGO} alt="" className="ema-mark__img" />
        </a>

        <nav className="ema-head__nav" aria-label={t('common.mainNav')}>
          <NavDropdown items={navMenu} />
        </nav>

        <div className="ema-head__lang">
          <LanguageSwitcher variant="desktop" />
        </div>

        <a className="ema-head__cta" href="/iletisim">
          {t('header.quote')}
        </a>

        <button
          type="button"
          className={`ema-burger${menuOpen ? ' is-on' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="ema-mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
          <span className="visually-hidden">{t('common.mobileMenu')}</span>
        </button>
      </div>

      <div id="ema-mobile-nav" className={`ema-drawer${menuOpen ? ' is-open' : ''}`}>
        <div className="ema-drawer__lang">
          <LanguageSwitcher variant="mobile" mobileNavOpen={menuOpen} />
        </div>
        <ul className="ema-drawer__list">
          {flattenNav(navMenu).map((l) => (
            <li key={l.label + l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
