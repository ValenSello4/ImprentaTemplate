import { getAccentStyles } from './pageStyles.js'

function CorporativaPage({ tenant }) {
  const accent = getAccentStyles(tenant.accent)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-3xl" />
          {tenant.companyName}
        </div>
        <nav className="hidden gap-8 text-slate-600 md:flex">
          {tenant.menu.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative mx-auto px-6 pb-24 sm:px-10 lg:max-w-7xl">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_transparent_35%)]" />
          <div className="relative grid gap-10 py-20 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
            <div className="space-y-6">
              <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ring-1 ${accent.badge}`}>
                {tenant.heroBadge}
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                {tenant.heroTitle}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">{tenant.heroText}</p>
              <p className={`max-w-xl text-lg leading-8 ${accent.highlight}`}>{tenant.heroHighlight}</p>
              <div className="flex flex-wrap gap-4">
                {tenant.buttons.map((button) => (
                  <a key={button.href} href={button.href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-glow transition ${button.primary ? accent.button : `border border-slate-300 bg-white text-slate-700 ${accent.secondary}`}`}>
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ventaja empresarial</p>
              <p className="mt-4 text-4xl font-semibold">Impresión premium</p>
              <p className="mt-3 text-slate-300">Resultados diseñados para ferias, lanzamientos y folletos corporativos con impacto visual.</p>
              <div className="mt-8 grid gap-4">
                {tenant.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">{stat.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {tenant.cards.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.subtitle}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-slate-600">Soluciones de impresión con estilo corporativo y acabados de alto impacto.</p>
            </article>
          ))}
        </section>

        <section id="servicios" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${accent.highlight}`}>Servicios</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Soluciones impresas para tu negocio</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Desarrollamos catálogos, tarjetas y materiales publicitarios de calidad premium para empresas.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tenant.services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default CorporativaPage
