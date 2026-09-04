/**
 * Çelik kapı / metal giriş / güvenlik / bina girişi temalı Unsplash görselleri.
 * CDN: ixlib=rb-4.1.0 ile istek (Unsplash hotlink önerisi — aksi halde bazı bölgelerde 404).
 * Kendi çekimleriniz için: public/media/ altına koyup burada `/media/...` kullanın.
 */
import kapi1 from '../assets/media/doors/erd-20-villa.jpg'
import kapi2 from '../assets/media/doors/kompozit-canli-villa.jpg'
import kapi3 from '../assets/media/unnamed-design.svg'
import introCarouselImage from '../assets/media/genel/carousel.jpeg'
import introBannerHero from '../assets/media/pivot/pivot-kompakt.jpeg'
import introBanner24 from '../assets/media/pivot/pivot-kompozit-yuzey.jpeg'
import heroBanner21 from '../assets/media/genel/dogal-kaplama.jpeg'
import heroBanner22 from '../assets/media/genel/erd-20serisikompozitkaplama.jpeg'
import heroCarouselGenelKapi from '../assets/media/genel/carousel-kapi.jpeg'
import heroBanner23 from '../assets/media/genel/hakkimizda-foto.jpeg'
import heroBanner25 from '../assets/media/genel/hakkimizda-foto2.jpeg'
import heroBanner26 from '../assets/media/iroko/iroko-pivot.jpeg'
import heroBanner27 from '../assets/media/villa-kapisi/villa-kapisi-masif.jpeg'
import heroCarouselVillaLakeBoyali from '../assets/media/villa-kapisi/vila-kapisi-lake-boyali.jpeg'
import introCarouselAslanBasli from '../assets/media/villa-kapisi/villa-kapisi.aslan-basli.jpeg'
import introCarouselPivotMasif from '../assets/media/pivot/pivot-masif.jpeg'
import introCarouselPvcKaplamaVilla from '../assets/media/pvc/pvc-kaplama-villa.jpeg'
import doorShowcaseTravertino from '../assets/media/villa-kapisi/villa-kapisi-travertino.jpeg'
import doorShowcasePvcKabartma from '../assets/media/pvc/pvc-kabartma.jpeg'
import doorShowcasePvcKaplamaProje from '../assets/media/pvc/pvc-kaplama-proje.jpeg'
import doorShowcaseCamYuzey from '../assets/media/genel/cam-yuzey.jpeg'
import doorShowcaseDisIklimTasYuzey from '../assets/media/dis-cephe/dis-iklim-tas-yuzey.jpeg'
import doorShowcaseDisIklimTasyuzey from '../assets/media/dis-cephe/dis-iklim-tasyuzey.jpeg'
import referenceDisIklimSacKabartma from '../assets/media/dis-cephe/dis-iklim-sac-kabartma.jpeg'
import yanginAcilCikisKapi from '../assets/media/yangin-cikisi/acil-cikis-kapi.jpeg'
import yanginAcilCikisKapisi from '../assets/media/yangin-cikisi/acil-cikis-kapisi.jpeg'
import yanginAcilCikisYangin from '../assets/media/yangin-cikisi/acil-cikis-yangin.jpeg'
import yanginKapisiImg from '../assets/media/yangin-cikisi/yangin-kapisi.jpeg'

/** Giriş metni yanı — sağ swiper (üç görsel) */
export const introCarouselSrcs: string[] = [
  introCarouselAslanBasli,
  introCarouselPivotMasif,
  introCarouselPvcKaplamaVilla,
]

export type IntroCarouselSlide = { kind: 'image'; src: string }

/** Giriş swiper — aslan başlı villa / pivot masif / PVC kaplama (video yok) */
export const introCarouselSlides: IntroCarouselSlide[] = introCarouselSrcs.map((src) => ({
  kind: 'image' as const,
  src,
}))

export type CarouselMediaItem = {
  src: string
  type: 'image' | 'video'
  poster?: string
}

function u(photoPath: string, w: number, h: number) {
  const q = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    h: String(h),
    q: '85',
    ixlib: 'rb-4.1.0',
  })
  return `https://images.unsplash.com/${photoPath}?${q.toString()}`
}

/** Kapı ve giriş odaklı — Unsplash arama sonuçlarından seçilmiş güncel photo-* kimlikleri */
const D = {
  modernKonutCephe: 'photo-1600585154340-be6161a56a0c',
  villaGiris: 'photo-1600585154526-990dced4db0d',
  beyazKapiKolu: 'photo-1601835895382-3d7854422c04',
  griKapaliKapi: 'photo-1517442847530-9bfced8783cf',
  tuglaDuvarKapi: 'photo-1659385399211-d0661b9725cd',
  griKapiBitki: 'photo-1613544723301-176686aa9f09',
  tuglaEvMetalKapi: 'photo-1704336041724-05a3cacafba4',
  guvenlikSifre: 'photo-1558618666-fcd25c85cd64',
  kapiDetayKolu: 'photo-1600210492486-724fe5c67fb0',
  icHol: 'photo-1600607687939-ce8a6c25118c',
  icKapiKoridor: 'photo-1600210492496-931e0e5e3e5b',
  koyuGiris: 'photo-1600607687920-4e2a09cf159d',
  sacMetalLevha: 'photo-1615876230912-36480a48f9c0',
  metalYuzey: 'photo-1589939705384-5185137a7f0f',
  endustriCephe: 'photo-1513467535987-fca6d076ad20',
  ofisBinasi: 'photo-1497366216548-37526070297c',
  mimariCephe: 'photo-1487958449943-2423d0dcca35',
  kilitDetay: 'photo-1635602739175-bab409a6e94c',
  siyahKapi: 'photo-1560787338-43fcd3b87500',
  beyazSiyahKapi: 'photo-1589874616100-ee6cdb547545',
  desenliKapi: 'photo-1670455489403-e33fb9ba84be',
  maviKapiBina: 'photo-1669049765494-922fdf62828e',
  bwKapi: 'photo-1705776919715-fa052f797923',
  mutfakIc: 'photo-1560185007-c5ca9d6c7928',
  maviKapiYan: 'photo-1676574222520-960226cd4100',
  yesilKapiPosta: 'photo-1770816341375-f17f01705030',
  /** Otel / modern yatak odası — referans hero görünümü */
  otelOdaModern: 'photo-1618773928121-c32242e63f39',
  /** Beton duvarda çelik/teknik kapı — mutfak & gıda tesisi kartı */
  betonCelikKapi: 'photo-1505128328732-7cc68117d91d',
  /** Uzun koridor, çift sıra kapı, yangın çıkış işareti — otel / ticari */
  otelKoridorKapilar: 'photo-1750189953388-5ef155c12369',
}

export const media = {
  hero: [
    { src: introCarouselImage, type: 'image' },
    { src: heroBanner21, type: 'image' },
    { src: introCarouselImage, type: 'image' },
  ] as CarouselMediaItem[],
  doorSeries: [
    kapi1,
    kapi2,
    kapi3,
    u(D.endustriCephe, 800, 520),
    u(D.sacMetalLevha, 800, 520),
    u(D.villaGiris, 800, 520),
    u(D.mimariCephe, 800, 520),
    u(D.guvenlikSifre, 800, 520),
  ],
  /** Proje kartı — teknik/çelik kapı (mutfak & gıda tesisi bölümü) */
  projectKitchen: u(D.betonCelikKapi, 1200, 800),
  /** Proje kartı — otel / konaklama koridoru ve kapı sıraları */
  projectHotel: u(D.otelKoridorKapilar, 1200, 800),
  /** Konut / villa giriş projeleri kartı */
  projectVilla: u(D.villaGiris, 1200, 800),
  /** Yükleme hatasında sırayla denenecek yedekler (aynı tema) */
  projectKitchenFallback: u(D.tuglaEvMetalKapi, 1200, 800),
  projectHotelFallback: u(D.icKapiKoridor, 1200, 800),
  projectVillaFallback: u(D.modernKonutCephe, 1200, 800),
  /** Hakkımızda — tek referans görseli */
  about: {
    hero: u(D.modernKonutCephe, 1200, 675),
  },
}

/** `assets/media/{pivot,villa-kapisi,pvc,iroko,dis-cephe,genel}/*.jpeg` — Kapı Tasarım Vitrini grid */
const bannerModules = import.meta.glob<{ default: string }>(
  [
    '../assets/media/pivot/*.jpeg',
    '../assets/media/villa-kapisi/*.jpeg',
    '../assets/media/pvc/*.jpeg',
    '../assets/media/iroko/*.jpeg',
    '../assets/media/dis-cephe/*.jpeg',
    '../assets/media/genel/*.jpeg',
  ],
  { eager: true },
)

/** Vite `dosya-hash.jpeg` → dosya kökü (siteData `jpegAssetStemFromSrc` ile aynı mantık) */
function jpegAssetStemFromSrc(src: string): string {
  const base = decodeURIComponent(src.split('/').pop()?.split('?')[0] ?? '')
  const noExt = base.replace(/\.jpe?g$/i, '')
  return noExt.replace(/-([a-f0-9]{4,12})$/i, '')
}

/** Tabela / sokak fotoğrafı — ürün vitrininde kullanılmaz (`dis-cekim.jpeg`) */
const EXCLUDED_DIS_CEPHE_STEMS = new Set<string>(['dis-cekim'])

function includeDisCepheAssetSrc(src: string): boolean {
  return !EXCLUDED_DIS_CEPHE_STEMS.has(jpegAssetStemFromSrc(src))
}

export const bannerShowcaseSrcs: string[] = Object.entries(bannerModules)
  .sort((a, b) => a[0].localeCompare(b[0], 'tr'))
  .map(([, mod]) => mod.default)
  .filter(includeDisCepheAssetSrc)

function sortGlobModules(modules: Record<string, { default: string }>): string[] {
  return Object.entries(modules)
    .sort((a, b) => a[0].localeCompare(b[0], 'tr'))
    .map(([, mod]) => mod.default)
}

/** Ürün sayfaları — klasör bazlı (path sırası sabit) */
const pivotGlob = import.meta.glob<{ default: string }>('../assets/media/pivot/*.jpeg', { eager: true })
const villaKapisiGlob = import.meta.glob<{ default: string }>('../assets/media/villa-kapisi/*.jpeg', {
  eager: true,
})
const irokoGlob = import.meta.glob<{ default: string }>('../assets/media/iroko/*.jpeg', { eager: true })
const disCepheGlob = import.meta.glob<{ default: string }>('../assets/media/dis-cephe/*.jpeg', { eager: true })
const pvcGlob = import.meta.glob<{ default: string }>('../assets/media/pvc/*.jpeg', { eager: true })

export const sortedPivotSrcs: string[] = sortGlobModules(pivotGlob)
export const sortedVillaKapisiSrcs: string[] = sortGlobModules(villaKapisiGlob)
export const sortedIrokoSrcs: string[] = sortGlobModules(irokoGlob)
export const sortedDisCepheSrcs: string[] = sortGlobModules(disCepheGlob).filter(includeDisCepheAssetSrc)
export const sortedPvcSrcs: string[] = sortGlobModules(pvcGlob)

/** Yangın & acil çıkış ürün sayfası — `yangin-cikisi/*.jpeg` (sabit sıra) */
export const sortedYanginCikisiSrcs: readonly string[] = [
  yanginAcilCikisKapi,
  yanginAcilCikisKapisi,
  yanginAcilCikisYangin,
  yanginKapisiImg,
]

/** Ana sayfa hero — video yanındaki görsel + sonraki slayttaki üçlü sıra (sıra sabit) */
export const heroCarouselFeatured = {
  /** Video ile 3|2 düzeninde yan yana */
  besideVideo: heroBanner26,
  /** İkinci slayt: pivot kompozit yüzey + erd-20 kompozit kaplama + carousel-kapi */
  rowTriple: [introBanner24, heroBanner22, heroCarouselGenelKapi] as const,
}

/** Ana sayfa üst carousel — sırayla bu banner’lar (video slaytı + 3’lü satırlar) */
export const heroCarouselBannerSrcs: readonly string[] = [
  heroBanner22,
  heroBanner21,
  heroBanner23,
  introBanner24,
  heroBanner25,
  heroBanner26,
  heroBanner27,
]

/** Ana sayfa «Kapı Tasarım Vitrini» — sabit sıra (kürasyon) */
export const DOOR_SHOWCASE_SRCS: readonly string[] = [
  heroBanner22,
  heroCarouselVillaLakeBoyali,
  introCarouselAslanBasli,
  doorShowcaseTravertino,
  doorShowcasePvcKabartma,
  doorShowcasePvcKaplamaProje,
  heroBanner21,
  doorShowcaseCamYuzey,
  introBannerHero,
  doorShowcaseDisIklimTasYuzey,
  doorShowcaseDisIklimTasyuzey,
]

/** #referanslar — seçili JPEG’ler, klasör sırasından farklı sabit karışık sıra */
export const REFERENCE_FEED_SRCS: readonly string[] = [
  doorShowcasePvcKabartma,
  heroCarouselVillaLakeBoyali,
  doorShowcaseDisIklimTasYuzey,
  heroBanner22,
  doorShowcaseCamYuzey,
  introCarouselAslanBasli,
  referenceDisIklimSacKabartma,
  doorShowcaseTravertino,
  heroBanner21,
  doorShowcasePvcKaplamaProje,
  introBannerHero,
]

export { introCarouselImage }
