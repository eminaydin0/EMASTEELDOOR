import { productPageByPath } from './config/siteData'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { SeoHead } from './components/SeoHead'
import { I18nProvider } from './i18n/context'
import { StaticPage } from './pages/StaticPage'

export default function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isStatic =
    pathname === '/hakkimizda' ||
    pathname === '/uretim' ||
    pathname === '/kalite-politikasi' ||
    pathname === '/sertifikalarimiz' ||
    pathname === '/iletisim' ||
    pathname === '/teknik-kasa' ||
    pathname === '/teknik-kanat' ||
    pathname === '/teknik-kilit'
  const isProduct = productPageByPath(pathname) !== undefined

  return (
    <I18nProvider>
      <SeoHead pathname={pathname} />
      {isStatic ? (
        <StaticPage pathname={pathname} />
      ) : isProduct ? (
        <ProductPage pathname={pathname} />
      ) : (
        <HomePage />
      )}
    </I18nProvider>
  )
}
