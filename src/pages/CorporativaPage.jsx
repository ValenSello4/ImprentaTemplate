import { getAccentStyles } from './pageStyles.js'

function CorporativaPage({ tenant }) {
  const accent = getAccentStyles(tenant.accent)

  return (
    <div className="min-h-screen bg-white-950 text-white" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.94)), url('${tenant.assetPath}/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 sm:px-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden rounded-[2rem] border border-white/10 bg-white-950/95 p-8 text-white shadow-2xl lg:flex lg:flex-col lg:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={`${tenant.assetPath}/logo.png`} alt="Logo" className="h-14 w-14 rounded-3xl border border-white/15 bg-white-900/70" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white-400">Corporativa</p>
                <p className="text-2xl font-semibold">{tenant.companyName}</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-white-300">Diseños sobrios para empresas que necesitan presencia, elegancia y orden en cada pieza impresa.</p>
          </div>

          <nav className="space-y-3 text-sm uppercase tracking-[0.25em] text-white-300">
            {tenant.menu.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto rounded-[1.8rem] border border-white/10 bg-white/5 p-6 text-white-300">
            <p className="text-xs uppercase tracking-[0.35em] text-white-400">Insight</p>
            <p className="mt-4 text-lg font-semibold text-white">Experiencia corporativa sin sobrecarga visual.</p>
          </div>
        </aside>

        <main className="space-y-10">
          <header className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white-950/95 px-6 py-5 shadow-2xl lg:hidden">
            <div className="flex items-center gap-3">
              <img src={`${tenant.assetPath}/logo.png`} alt="Logo" className="h-12 w-12 rounded-3xl border border-white/15 bg-white-900/70" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white-400">Corporativa</p>
                <p className="text-lg font-semibold">{tenant.companyName}</p>
              </div>
            </div>
            <button className="text-sm uppercase tracking-[0.25em] text-white-300">Menú</button>
          </header>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ring-1 ${accent.badge}`}>
                  {tenant.heroBadge}
                </div>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  {tenant.heroTitle}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-white-300">{tenant.heroText}</p>
                <p className={`max-w-xl text-lg leading-8 ${accent.highlight}`}>{tenant.heroHighlight}</p>
                <div className="flex flex-wrap gap-4">
                  {tenant.buttons.map((button) => (
                    <a key={button.href} href={button.href} className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition ${button.primary ? accent.button : `border border-white/20 bg-white-900/90 text-white ${accent.secondary}`}`}>
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] bg-white-900/80 p-8 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white-400">Ventaja empresarial</p>
                <p className="mt-4 text-4xl font-semibold">Impresión premium</p>
                <p className="mt-3 text-white-300">Resultados diseñados para ferias, lanzamientos y folletos corporativos con impacto visual.</p>
                <div className="mt-8 grid gap-4">
                  {tenant.stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-white/10 p-5">
                      <p className="text-sm uppercase tracking-[0.3em] text-white-300">{stat.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 md:grid-cols-3">
            {tenant.cards.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-white-900/80 p-8 shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
                <p className="text-sm uppercase tracking-[0.3em] text-white-400">{item.subtitle}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-white-300">Soluciones de impresión con estilo corporativo y acabados de alto impacto.</p>
              </article>
            ))}
          </section>

          <section className="mt-20 space-y-8">
            <div className="max-w-3xl">
              <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${accent.highlight}`}>Servicios</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Soluciones impresas para tu negocio</h2>
              <p className="mt-5 text-lg leading-8 text-white-300">Desarrollamos catálogos, tarjetas y materiales publicitarios de calidad premium para empresas.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {tenant.services.map((service) => (
                <div key={service.title} className="rounded-xl border border-white/10 bg-white-900/80 p-7 shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.28)]">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-white-300">{service.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-white/10 bg-white-950/90 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.4)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white-400">Dónde estamos</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Nuestra oficina corporativa</h2>
                <p className="mt-4 text-lg leading-8 text-white-300">{tenant.mapAddress}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tenant.mapAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Ver en Google Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white-900">
                <iframe src={tenant.mapEmbedUrl} title="Ubicación corporativa" className="h-[320px] w-full border-0" loading="lazy" />
              </div>
            </div>
          </section>
        </main>
      </div>

      <a
        href={`https://wa.me/${tenant.contact.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-rose-600/30 transition hover:bg-rose-500"
      >
        <span aria-hidden="true">💬</span>
        WhatsApp
      </a>
    </div>
  )
}

export default CorporativaPage
