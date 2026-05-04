import { getAccentStyles } from './pageStyles.js'

function ImprentaPage({ tenant }) {
  const accent = getAccentStyles(tenant.accent)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-[#f3e0c1] to-[#f7e7c1] text-slate-950" style={{ backgroundImage: `url('${tenant.assetPath}/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3 text-lg font-semibold text-slate-950">
          <img src={`${tenant.assetPath}/logo.png`} alt="Logo" className="h-12 w-12 rounded-3xl border border-amber-300 bg-white/80" />
          {tenant.companyName}
        </div>
        <nav className="hidden gap-8 text-slate-700 md:flex">
          {tenant.menu.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full border border-amber-300 bg-white/90 px-4 py-2 text-slate-800 transition hover:bg-white">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative mx-auto px-6 pb-24 sm:px-10 lg:max-w-7xl">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-wood-panel bg-paper-surface shadow-rustic">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,64,32,0.16),_transparent_35%)]" />
          <div className="relative grid gap-10 py-20 px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
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
                  <a key={button.href} href={button.href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-rustic transition ${button.primary ? accent.button : `border border-amber-400 bg-paper-surface text-slate-900 ${accent.secondary}`}`}>
                    {button.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-6 rounded-[2rem] border border-wood-panel bg-paper-surface/95 p-6 shadow-rustic backdrop-blur-sm">
              {tenant.stats.map((stat) => (
                <div key={stat.label} className={`rounded-3xl p-6 ring-1 ${accent.card}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">{stat.label}</p>
                  <p className="mt-4 text-4xl font-bold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {tenant.cards.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-wood-panel bg-paper-surface p-8 shadow-rustic transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600">{item.subtitle}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-slate-700">Diseños completos con papeles y acabados cuidados para comunicar tu marca con impacto.</p>
            </article>
          ))}
        </section>

        <section id="servicios" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${accent.highlight}`}>Servicios</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Impresión, copias y librería en un solo lugar</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Elaboramos material impreso, encuadernados, stickers y cuadernillos con atención personalizada para estudiantes, tiendas y emprendedores.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tenant.services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-wood-panel bg-paper-surface p-7 shadow-rustic transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-slate-700">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-wood-panel bg-paper-surface p-8 shadow-rustic">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-900">Ubicación</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Visítanos en nuestra imprenta</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{tenant.mapAddress}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tenant.mapAddress)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full border border-amber-700 bg-amber-100 px-5 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-200"
              >
                Ver en Google Maps
              </a>
            </div>
            <div className="h-[320px] overflow-hidden rounded-[1.75rem] border border-wood-panel">
              <iframe src={tenant.mapEmbedUrl} title="Ubicación de la imprenta" className="h-full w-full border-0" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${tenant.contact.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-600/30 transition hover:bg-emerald-500"
      >
        <span aria-hidden="true">💬</span>
        WhatsApp
      </a>
    </div>
  )
}

export default ImprentaPage
