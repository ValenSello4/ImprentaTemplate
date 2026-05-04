import { Link, Route, Routes, useParams } from 'react-router-dom'
import { getTenantSlugFromHost, tenantKeys, tenants } from './tenantConfig.js'
import BridgesPage from './pages/BridgesPage.jsx'
import ImprentaPage from './pages/ImprentaPage.jsx'
import AcademicaPage from './pages/AcademicaPage.jsx'
import CorporativaPage from './pages/CorporativaPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { useEffect } from 'react'


function getTenantPage(tenantSlug) {
  switch (tenantSlug) {
    case 'imprenta':
      return ImprentaPage
    case 'academica':
      return AcademicaPage
    case 'corporativa':
      return CorporativaPage
    default:
      return null
  }
}

function TenantPageRenderer({ tenantSlug }) {
  if (!tenantSlug) {
    return <NotFoundPage />
  }

  const tenant = tenants[tenantSlug]
  const Page = getTenantPage(tenantSlug)

  useEffect(() => {
    if (tenant) {
      // 🔤 Cambiar título
      document.title = tenant.companyName

      // 🖼️ Cambiar favicon
      const favicon = document.querySelector("link[rel='icon']")

      if (favicon) {
        favicon.href = tenant.favicon // ej: "/favicons/imprenta.png"
      }
    }
  }, [tenant])

  if (!tenant || !Page) {
    return <NotFoundPage />
  }

  return <Page tenant={tenant} />
}

function TenantSelection() {
  const hostTenant = typeof window !== 'undefined' ? getTenantSlugFromHost(window.location.hostname) : null

  if (hostTenant) {
    return <TenantPageRenderer tenantSlug={hostTenant} />
  }

  return (
    <div className="min-h-screen bg-white text-white-900 py-24 px-6">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white-200 bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-semibold text-white-950">Selecciona tu sitio</h1>
        <p className="mt-4 text-lg text-white-600">En un futuro cada tenant tendrá su propio dominio, pero por ahora puedes probarlos con estas rutas.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {tenantKeys.map((slug) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="rounded-[1.5rem] border border-white-200 bg-white-100 px-6 py-6 text-center text-lg font-semibold text-white-900 transition hover:-translate-y-1 hover:bg-white-50"
            >
              {tenants[slug].companyName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function TenantPathPage() {
  const { tenantSlug } = useParams()
  return <TenantPageRenderer tenantSlug={tenantSlug} />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<BridgesPage />} />
      <Route path="/tenants" element={<TenantSelection />} />
      <Route path="/tenants/:tenantSlug" element={<TenantPathPage />} />
      <Route path="/:tenantSlug" element={<TenantPathPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
