import { Link, Route, Routes, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import BridgesPage from './pages/BridgesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

import ImprentaPage from './pages/ImprentaPage.jsx'
import AcademicaPage from './pages/AcademicaPage.jsx'
import CorporativaPage from './pages/CorporativaPage.jsx'

import tenants from './data/tenants.json'


const tenantKeys = Object.keys(tenants)
import { getTenantSlugFromHost } from './lib/tenantResolver.js'

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
  if (!tenantSlug) return <NotFoundPage />

  const tenant = tenants[tenantSlug]
  const Page = getTenantPage(tenantSlug)

  useEffect(() => {
    if (!tenant) return

    document.title = tenant.companyName

    const favicon = document.querySelector("link[rel='icon']")
    if (favicon && tenant.favicon) {
      favicon.href = tenant.favicon
    }
  }, [tenant])

  if (!tenant || !Page) return <NotFoundPage />

  return <Page tenant={tenant} />
}

function TenantSelection() {
  const hostTenant =
    typeof window !== 'undefined'
      ? getTenantSlugFromHost(window.location.hostname)
      : null

  if (hostTenant) {
    return <TenantPageRenderer tenantSlug={hostTenant} />
  }

  return (
    <div className="min-h-screen bg-white text-white-900 py-24 px-6">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white-200 bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-semibold">Selecciona tu sitio</h1>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {tenantKeys.map((slug) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="rounded-[1.5rem] border px-6 py-6 text-center font-semibold"
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