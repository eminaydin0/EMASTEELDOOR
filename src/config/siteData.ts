/** Ema Steel Door — çelik kapı, villa girişi ve yangın çıkış. */

import flagTr from '../assets/Flag_of_Turkey.svg'
import flagGb from '../assets/united-kingdom.svg'
import flagAr from '../assets/Flag_of_Saudi_Arabia.svg'
import flagDe from '../assets/flag-germany.svg'
import flagFr from '../assets/flag-france.svg'
import flagSq from '../assets/flag-albania.svg'
import flagKa from '../assets/flag-georgia.svg'
import {
  DOOR_SHOWCASE_SRCS,
  introCarouselSlides,
  media,
  REFERENCE_FEED_SRCS,
  sortedDisCepheSrcs,
  sortedIrokoSrcs,
  sortedPivotSrcs,
  sortedPvcSrcs,
  sortedVillaKapisiSrcs,
  sortedYanginCikisiSrcs,
} from './media'
import doorShowcaseDisIklimTasyuzey from '../assets/media/dis-cephe/dis-iklim-tasyuzey.jpeg'
import projKitchenClosed from '../assets/media/showcase/kapali.jpeg'
import projKitchenOpen from '../assets/media/showcase/acik.jpeg'
import projHotelClosed from '../assets/media/showcase/kapali2.jpeg'
import projHotelOpen from '../assets/media/showcase/acik2.jpeg'
import projVillaClosed from '../assets/media/showcase/kapali3.jpeg'
import projVillaOpen from '../assets/media/showcase/acik3.jpeg'
import siteLogo from '../assets/ema-logo.png'

export const BRAND_NAME = 'Ema Steel Door'
export const BRAND_HANDLE = 'emasteeldoor'

/** Logo dosyası */
export const LOGO_PDF = '/ema-logo.png'

/** Logo — üst çubuk ve sayfa içi ortak kullanım */
export const LOGO = siteLogo

/** Dil seçici bayrakları (`src/assets`) */
export const LANG_FLAG_TR = flagTr
export const LANG_FLAG_EN = flagGb
/** Arapça — Suudi Arabistan bayrağı (dil göstergesi) */
export const LANG_FLAG_AR = flagAr
export const LANG_FLAG_DE = flagDe
export const LANG_FLAG_FR = flagFr
export const LANG_FLAG_SQ = flagSq
export const LANG_FLAG_KA = flagKa

/** Kapak (PDF sayfa 1) — PDF metin katmanında geçtiği şekliyle */
export const COVER_SLOGAN = 'Fark Yartmayı Seven Herkesin, Hayal Gücüne Hitap Ediyoruz...'

/** Kapak — PDF’teki üst başlık */
export const COVER_PREMIUM_BADGE = 'PREMIUM CONCEPT 2026'

/** Giriş bloğu — referans sitedeki ana vurgu cümlesi (Erdo metni) */
export const INTRO_STRAPLINE = 'Güvenliğiniz en üst noktada!'

/** Ana slider — büyük başlık / alt satır (giriş görünümü) */
export const HERO_HEADLINE = 'Seven Herkesin, Hayal Gücüne Hitap Ediyoruz.'
/** Referanstaki gibi: uçlar kalın, orta kısım daha hafif */
export const HERO_HEADLINE_SPLIT = {
  strongBefore: 'Seven Herkesin, ',
  lightMid: 'Hayal Gücüne ',
  strongAfter: 'Hitap Ediyoruz.',
} as const
export const HERO_SUBTITLE = 'Çelik kapı, villa giriş ve yangın çıkış çözümleri'

/** PDF ve sitede geçen adres */
export const SITE_LABEL = 'www.emasteeldoor.com.tr'
export const SITE_URL = 'https://emasteeldoor.com.tr'

/** Fabrika / ofis (footer ve iletişim sayfası) */
export const LEGAL_NAME = 'Özyurt Yapı Elemanları Ticaret ve Sanayi A.Ş.'
export const OFFICE_STREET_LINE =
  'Kayseri OSB, 16. Cd No:48, 38070 Melikgazi/Kayseri'
export const OFFICE_ADDRESS_LINE = `${LEGAL_NAME}, ${OFFICE_STREET_LINE}`

/** Google Haritalar — tek kaynak sorgu (embed + harici link) */
const MAP_SEARCH_QUERY =
  'Özyurt Yapı Elemanları, Kayseri OSB 16. Cadde No:48, 38070 Melikgazi, Kayseri, Turkey'

export const MAP_EXTERNAL_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_SEARCH_QUERY)}`

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_SEARCH_QUERY)}&output=embed`

/** Cep hattı — doğrudan arama */
export const PHONE_MOBILE_TEL = '+905313494639'
export const PHONE_MOBILE_DISPLAY = '+90 531 349 46 39'
/** İkinci hat — WhatsApp */
export const PHONE_SECONDARY_TEL = '+905355564925'
export const PHONE_SECONDARY_DISPLAY = '+90 535 556 49 25'

/** Meta / açıklama metinleri için kısa satır */
export const PHONES_SEO_LINE = `${PHONE_MOBILE_DISPLAY}, ${PHONE_SECONDARY_DISPLAY}`
const WHATSAPP_PREFILL_TR = 'Merhaba, Ema Steel Door hakkında bilgi almak istiyorum.'
const WHATSAPP_E164 = PHONE_SECONDARY_TEL.replace(/^\+/, '')
/** Dil seçimine göre `contact.waPrefill` ile `buildWhatsappChatUrl(t(...))` kullanın */
export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL_TR)}`

export function buildWhatsappChatUrl(prefillMessage: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(prefillMessage)}`
}

/** Üst arama kutusu — anahtar kelime → sayfa içi bölüme kaydır */
export const SEARCH_ROUTES: { keys: string[]; hash: string }[] = [
  { keys: ['katalog', 'pdf', 'e-katalog'], hash: '#catalogs' },
  { keys: ['iletisim', 'mail', 'adres', 'telefon', 'ulaş', 'ulas'], hash: '#iletisim' },
  { keys: ['referans'], hash: '#referanslar' },
  { keys: ['mutfak'], hash: '#mutfak-proje' },
  { keys: ['otel'], hash: '#otel-proje' },
  { keys: ['konut', 'rezidans', 'site'], hash: '#villa-proje' },
  {
    keys: ['kapı', 'kapi', 'seri', 'sistem', 'çelik', 'celik', 'yangın', 'yangin', 'villa'],
    hash: '#seriler-kapi',
  },
]

/** İçindekiler / ürün serileri (PDF sayfa 3 ve ürün sayfaları) */
export const CATALOG_SERIES_LINES: string[] = [
  'Lüks Kabartma Seri / Luxury Embossed Serie',
  'Özel Proje Seri / Special Project Serie',
  'Granit Taş Yüzey Serisi / Granite Stone Surface Serie',
  'Kompozit Yüzey Serisi / Composite Surface Serie',
  'Sac Panel Yüzey Serisi / Sheet Panel Surface Serie',
  'İnce Panel & Villa Giriş Serisi / Build & Villa Entrance Serie',
  'Yangın Çıkış Serisi / Fire Exit Serie',
  'Teknik şartnameler / Technical Specifications',
]

/** Giriş — kısa özet (PDF seri listesi `CATALOG_SERIES_LINES`; tam metin i18n `intro.body1`, `intro.body2`) */
export const INTRO_PARAGRAPH =
  'Ema Steel Door; çelik kapı ve giriş sistemlerinde güvenilir iş, titiz üretim ve yenilikçi çözümler sunar. Ürün ve teknik özetler PREMIUM CONCEPT 2026 kataloğunda.'

/** Öne çıkan / varsayılan katalog */
export const PRIMARY_CATALOG_PDF = '/EMASTEELDOOR_EXPORT.pdf'
export const PRIMARY_CATALOG_TITLE = 'EMASTEELDOOR Katalog'

export const CATALOG_PDFS: { title: string; href: string }[] = [
  { title: PRIMARY_CATALOG_TITLE, href: PRIMARY_CATALOG_PDF },
]

const HERO_ALTS = [
  'Ema Steel Door — tanıtım filmi',
  'Ema Steel Door — üretim ve showroom',
  'Ema Steel Door — marka görseli',
]

/** Slayt — çelik kapı / giriş temalı görseller (eski vitrin; artık hero’da kullanılmıyor) */
export const HERO_SLIDES: { src: string; alt: string; type: 'image' | 'video'; poster?: string }[] = media.hero.map(
  (slide, i) => ({
    src: slide.src,
    type: slide.type,
    poster: slide.poster,
    alt: HERO_ALTS[i] ?? 'Ema Steel Door',
  }),
)

/** Ana hero — 3’lü şerit carousel (dikey kapı fotoğrafları) */
export const HERO_PHOTO_SLIDES: readonly string[] = [...DOOR_SHOWCASE_SRCS]

export type NavItem = {
  label: string
  href?: string
  /** Ana menüde hafif vurgu (ör. KATALOG) */
  navAccent?: boolean
  children?: NavItem[]
}

export const CATALOG_ITEMS: { title: string; img: string; href: string }[] =
  CATALOG_PDFS.map((c) => ({
    title: c.title,
    img: DOOR_SHOWCASE_SRCS[0] ?? siteLogo,
    href: c.href,
  }))

/** Ürünler menüsü — #seriler-kapi kartlarıyla aynı sıra (sayfa içi kaydırma) */
export const PRODUCT_SECTION_ANCHORS: readonly string[] = [
  'urun-celik-kapi',
  'urun-villa-kapisi',
  'urun-yangin-acil-cikis',
  'urun-kompozit-dis-cephe',
  'urun-iroko-masif',
]

/** i18n `product.{dict}.*` ile eşleşir */
export const PRODUCT_DICT_IDS = [
  'celik',
  'villaKapi',
  'acilCikis',
  'kompozit',
  'iroko',
] as const

export type ProductDictId = (typeof PRODUCT_DICT_IDS)[number]

export type ProductPageDef = {
  path: string
  anchor: string
  dict: ProductDictId
}

/** Ayrı ürün sayfaları — `/urun/...` */
export const PRODUCT_PAGES: readonly ProductPageDef[] = PRODUCT_SECTION_ANCHORS.map(
  (anchor, i) => ({
    path: `/${anchor.replace(/^urun-/, 'urun/')}`,
    anchor,
    dict: PRODUCT_DICT_IDS[i]!,
  }),
)

export function productPageByPath(pathname: string): ProductPageDef | undefined {
  return PRODUCT_PAGES.find((p) => p.path === pathname)
}

/** Ürün sayfası grid — seri başlıkları `product.serie.*` i18n */
export const PRODUCT_SERIES_TITLE_KEYS: Record<ProductDictId, readonly string[]> = {
  celik: ['product.serie.exclusive', 'product.serie.luxury', 'product.serie.special', 'product.serie.sheet'],
  villaKapi: [
    'product.serie.villaLine',
    'product.serie.exclusive',
    'product.serie.luxury',
    'product.serie.granite',
  ],
  acilCikis: ['product.serie.fire', 'product.serie.special', 'product.serie.exclusive', 'product.serie.sheet'],
  kompozit: [
    'product.serie.compositeLine',
    'product.serie.exclusive',
    'product.serie.luxury',
    'product.serie.sheet',
  ],
  iroko: ['product.serie.irokoNatural', 'product.serie.luxury', 'product.serie.special', 'product.serie.exclusive'],
}

/** Vite çıktısındaki `dosya-hash.jpeg` sonekini kırpıp dosya kökünü döndürür */
function jpegAssetStemFromSrc(src: string): string {
  const base = decodeURIComponent(src.split('/').pop()?.split('?')[0] ?? '')
  const noExt = base.replace(/\.jpe?g$/i, '')
  return noExt.replace(/-([a-f0-9]{4,12})$/i, '')
}

/** `src/assets/media/pvc/pvc-*.jpeg` dosya adı → i18n anahtarı */
const PVC_STEM_TO_TITLE_KEY: Record<string, string> = {
  'pvc-kabartma': 'product.serie.pvc.kabartma',
  'pvc-kaplama-proje': 'product.serie.pvc.kaplamaProje',
  'pvc-kaplama-villa': 'product.serie.pvc.kaplamaVilla',
  'pvc-proje': 'product.serie.pvc.proje',
  'pvc-proje2': 'product.serie.pvc.proje2',
}

/** `src/assets/media/villa-kapisi/*.jpeg` dosya adı → i18n anahtarı (villa kapısı sayfası) */
const VILLA_KAPISI_STEM_TO_TITLE_KEY: Record<string, string> = {
  'vila-kapisi-lake-boyali': 'product.serie.villaKapisi.lakeBoyali',
  'villa-kapisi-kompozit-yuz-tanima': 'product.serie.villaKapisi.kompozitYuzTanima',
  'villa-kapisi-masif': 'product.serie.villaKapisi.masif',
  'villa-kapisi-travertino-kaplamali': 'product.serie.villaKapisi.travertinoKaplamali',
  'villa-kapisi-travertino': 'product.serie.villaKapisi.travertino',
  'villa-kapisi.aslan-basli': 'product.serie.villaKapisi.aslanBasli',
}

/** `src/assets/media/dis-cephe/*.jpeg` — dosya adı kökü → i18n anahtarı */
const DIS_CEPHE_STEM_TO_TITLE_KEY: Record<string, string> = {
  'dis-iklim-tas-yuzey': 'product.serie.disCephe.iklimTasYuzey',
  'dis-iklim-sac-kabartma': 'product.serie.disCephe.disIklimSacKabartma',
  'dis-iklim-tasyuzey': 'product.serie.disCephe.disIklimTasYuzey',
}

/** İroko-masif ürün sayfası — `iroko` + `pivot` sırayla (çift slot: iroko, pivot, …) */
function mergeIrokoPivotSeriesSrcs(): string[] {
  const i = sortedIrokoSrcs
  const p = sortedPivotSrcs
  const out: string[] = []
  let ii = 0
  let pi = 0
  while (ii < i.length || pi < p.length) {
    const slot = out.length
    if (slot % 2 === 0) {
      if (ii < i.length) out.push(i[ii++]!)
      else if (pi < p.length) out.push(p[pi++]!)
    } else {
      if (pi < p.length) out.push(p[pi++]!)
      else if (ii < i.length) out.push(i[ii++]!)
    }
  }
  return out
}

/** `iroko/*.jpeg` + `pivot/*.jpeg` — İroko-masif sayfa kartları */
const IROKO_PAGE_STEM_TO_TITLE_KEY: Record<string, string> = {
  'iroko-pivot': 'product.serie.irokoPage.irokoPivot',
  'iroko-pivot2': 'product.serie.irokoPage.irokoPivot2',
  'iroko-pivot3': 'product.serie.irokoPage.irokoPivot3',
  'iroko-pivot4': 'product.serie.irokoPage.irokoPivot4',
  'iroko-pivot5': 'product.serie.irokoPage.irokoPivot5',
  'pivot-kompakt': 'product.serie.irokoPage.pivotKompakt',
  'pivot-kompozit-yuzey': 'product.serie.irokoPage.pivotKompozitYuzey',
  'pivot-masif': 'product.serie.irokoPage.pivotMasif',
  'pivot-pvc-yuztanima': 'product.serie.irokoPage.pivotPvcYuzTanima',
}

/** Dropdown ürün sayfaları — çelik = pvc; villa = villa-kapisi; iroko-masif = iroko + pivot; diğerleri pivot / iroko / dış cephe (adet sınırı yok) */
function productSeriesSrcsForDict(dict: ProductDictId): string[] {
  switch (dict) {
    case 'celik':
      return [...sortedPvcSrcs]
    case 'villaKapi':
      return [...sortedVillaKapisiSrcs]
    case 'acilCikis':
      return [...sortedYanginCikisiSrcs]
    case 'kompozit':
      return [...sortedDisCepheSrcs]
    case 'iroko':
      return mergeIrokoPivotSeriesSrcs()
    default:
      return [...sortedPivotSrcs]
  }
}

export function productSeriesCards(dict: ProductDictId): { src: string; titleKey: string }[] {
  const imgs = productSeriesSrcsForDict(dict)
  const keys = PRODUCT_SERIES_TITLE_KEYS[dict]
  return imgs.map((src, i) => {
    const stem = jpegAssetStemFromSrc(src)
    if (dict === 'celik' && stem.startsWith('pvc-')) {
      const titleKey = PVC_STEM_TO_TITLE_KEY[stem]
      if (titleKey) return { src, titleKey }
    }
    if (dict === 'villaKapi') {
      const titleKey = VILLA_KAPISI_STEM_TO_TITLE_KEY[stem]
      if (titleKey) return { src, titleKey }
    }
    if (dict === 'kompozit') {
      const titleKey = DIS_CEPHE_STEM_TO_TITLE_KEY[stem]
      if (titleKey) return { src, titleKey }
    }
    if (dict === 'iroko') {
      const titleKey = IROKO_PAGE_STEM_TO_TITLE_KEY[stem]
      if (titleKey) return { src, titleKey }
    }
    return { src, titleKey: keys[i % keys.length]! }
  })
}

/** Kapı Sistemlerimiz — her satır `productSeriesSrcsForDict` ile aynı klasörden tek önizleme (kompozit = dış cephe) */
function doorSystemBannerSrcs(): string[] {
  return PRODUCT_DICT_IDS.map((dict) => {
    if (dict === 'kompozit') {
      // Dar şeritte koyu gri kapı kaybolmasın — canlı dış cephe görseli
      return doorShowcaseDisIklimTasyuzey
    }
    const imgs = productSeriesSrcsForDict(dict)
    const first = imgs[0]
    if (first) return first
    const idx = PRODUCT_DICT_IDS.indexOf(dict)
    return media.doorSeries[idx % media.doorSeries.length]!
  })
}

/** Giriş — metnin sağındaki swiper (pivot + genel görseller) */
export const INTRO_CAROUSEL = introCarouselSlides

/** Kapı tasarım vitrini — görsel listesi `media.ts` içinde sabit sıra */
export { DOOR_SHOWCASE_SRCS } from './media'

const doorSystemSrcs = doorSystemBannerSrcs()

/** Kapı Sistemlerimiz — her kart bir ürün kategorisi; görsel + `/urun/...` (sıra `PRODUCT_PAGES` ile aynı) */
export const DOOR_SYSTEM_CARDS: { src: string; href: string }[] = doorSystemSrcs.map((src, i) => ({
  src,
  href: PRODUCT_PAGES[i]!.path,
}))

/** Referans / sosyal akış — `media.ts` içindeki sabit karışık sıra */
export const REFERENCE_LOGOS: string[] = [...REFERENCE_FEED_SRCS]

/** Referans akışı — Instagram profili (kendi hesabınızla değiştirin) */
export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/emasteeldoor/'

/** Gönderi altı kısa metinler (sırayla döner) */
export const REFERENCE_FEED_CAPTIONS: string[] = [
  'Üretim ve montajdan kareler 🏗️',
  'Yeni teslim, yeni referans.',
  'Çelik kapı & villa giriş çözümleri.',
  'Projeye özel yüzey ve donanım.',
  'Kalite kontrol sonrası sahada.',
  'Mekâna uyumlu tasarım ✨',
  'Premium detay, güçlü kasa.',
  'Teknik şartnameye uygun üretim.',
]

/** Statik kurumsal alt sayfalar — metinler i18n */
export const CORPORATE_SECTIONS: { id: string }[] = [
  { id: 'hakkimizda' },
  { id: 'uretim' },
  { id: 'kalite-politikasi' },
  { id: 'sertifikalarimiz' },
]

/** Hakkımızda — tek görsel; metinler i18n */
export const ABOUT_PAGE = {
  image: media.about.hero,
} as const

export const PROJECT_MUTFAK_IMG = media.projectKitchen
export const PROJECT_OTEL_IMG = media.projectHotel
export const PROJECT_VILLA_IMG = media.projectVilla

/** Proje kartları — çekimlerinizden kapalı / açık eşleşmeleri */
export type ProjectDoorPhotoPair = { closed: string; open: string }

export const PROJECT_KITCHEN_DOOR_PHOTOS: ProjectDoorPhotoPair = {
  closed: projKitchenClosed,
  open: projKitchenOpen,
}
export const PROJECT_HOTEL_DOOR_PHOTOS: ProjectDoorPhotoPair = {
  closed: projHotelClosed,
  open: projHotelOpen,
}
export const PROJECT_VILLA_DOOR_PHOTOS: ProjectDoorPhotoPair = {
  closed: projVillaClosed,
  open: projVillaOpen,
}

/** Yerel görsel yüklenmezse Unsplash yedekleri */
export const PROJECT_MUTFAK_IMG_FALLBACK =
  'https://picsum.photos/seed/erdosteeldoor-mutfak/1200/800.jpg'
export const PROJECT_OTEL_IMG_FALLBACK =
  'https://picsum.photos/seed/erdosteeldoor-otel/1200/800.jpg'
export const PROJECT_VILLA_IMG_FALLBACK = media.projectVillaFallback
