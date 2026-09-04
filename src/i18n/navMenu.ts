import {
  CATALOG_PDFS,
  PRODUCT_PAGES,
  type NavItem,
  type ProductDictId,
} from '../config/siteData'

const PRODUCT_NAV_LABEL: Record<ProductDictId, string> = {
  celik: 'nav.prodSteel',
  villaKapi: 'nav.prodVillaDoor',
  acilCikis: 'nav.prodEmergency',
  kompozit: 'nav.prodComposite',
  iroko: 'nav.prodIroko',
}

/** `t` ana sayfa / statik sayfa menüsü için çeviri anahtarlarını çözer */
export function buildNavMenu(t: (key: string) => string): NavItem[] {
  const productNavChildren: NavItem[] = PRODUCT_PAGES.map((p) => ({
    label: t(PRODUCT_NAV_LABEL[p.dict]),
    href: p.path,
  }))

  return [
    { label: t('nav.corporate'), href: '/' },
    { label: t('nav.about'), href: '/hakkimizda' },
    {
      label: t('nav.products'),
      href: '/#seriler-kapi',
      children: productNavChildren,
    },
    {
      label: t('nav.projects'),
      href: '#proje-hizmetler',
    },
    { label: t('nav.references'), href: '#referanslar' },
    {
      label: t('nav.technical'),
      href: '#',
      children: [
        { label: t('nav.frames'), href: '/teknik-kasa' },
        { label: t('nav.locks'), href: '/teknik-kilit' },
        { label: t('nav.leaf'), href: '/teknik-kanat' },
      ],
    },
    {
      label: t('nav.catalog'),
      href: '#catalogs',
      navAccent: true,
      children: CATALOG_PDFS.map((c) => ({ label: c.title, href: c.href })),
    },
    { label: t('nav.contact'), href: '/iletisim' },
  ]
}
