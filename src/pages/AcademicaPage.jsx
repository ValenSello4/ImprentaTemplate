import { getAccentStyles } from './pageStyles.js'

function AcademicaPage({ tenant }) {
  const accent = getAccentStyles(tenant.accent)

  return (
    <div className="min-h-screen bg-[#eef6f1] text-white-950" style={{ backgroundImage: `url('${tenant.assetPath}/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <header className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-10">
        <div className="rounded-[2rem] border border-white-200 bg-white/90 p-6 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img src={`${tenant.assetPath}/logo.png`} alt="Logo" className="h-14 w-14 rounded-3xl border border-white-200 bg-white/80" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white-500">Academia</p>
                <p className="text-2xl font-semibold text-white-950">{tenant.companyName}</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.25em] text-white-600">
              {tenant.menu.map((item) => (
                <a key={item.href} href={item.href} className="rounded-full border border-white-200 bg-white-50 px-4 py-3 transition hover:border-white-300 hover:bg-white-100">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative mx-auto px-6 pb-24 sm:px-10 lg:max-w-7xl">
        <section className="relative overflow-hidden rounded-[1.8rem] border border-white-200 bg-white/90 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_30%)]" />
          <div className="relative grid gap-10 py-20 px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-12">
            <div className="space-y-6">
              <div className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ring-1 ${accent.badge}`}>
                {tenant.heroBadge}
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white-950 sm:text-6xl">
                {tenant.heroTitle}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-white-700">{tenant.heroText}</p>
              <p className={`max-w-xl text-lg leading-8 ${accent.highlight}`}>{tenant.heroHighlight}</p>
              <div className="flex flex-wrap gap-4">
                {tenant.buttons.map((button) => (
                  <a key={button.href} href={button.href} className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg transition ${button.primary ? accent.button : `border border-emerald-700 bg-white-50 text-white-900 ${accent.secondary}`}`}>
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="grid gap-6 rounded-[1.75rem] border border-white-200 bg-white-50/95 p-6 shadow-lg backdrop-blur-sm">
              <div className={`rounded-[1.5rem] p-6 ring-1 ${accent.card}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">Pedidos por curso</p>
                <p className="mt-4 text-4xl font-bold text-white-950">Paquetes completos</p>
                <p className="mt-2 text-sm leading-6 text-white-600">Kits para alumnos, apuntes y cuadernillos listos para entregar.</p>
              </div>
              <div className="rounded-[1.5rem] bg-white-100 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white-500">Fácil de adaptar</p>
                <p className="mt-4 text-4xl font-bold text-white-950">Material escolar</p>
                <p className="mt-2 text-sm leading-6 text-white-600">Diseños pensados para clases, tutorías y proyectos educativos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {tenant.cards.map((item) => (
            <article key={item.title} className="rounded-[1.25rem] border border-white-200 bg-white-50 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white-500">{item.subtitle}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white-950">{item.title}</h3>
              <p className="mt-4 text-white-700">Material didáctico con entrega rápida y diseño ajustado al ciclo escolar.</p>
            </article>
          ))}
        </section>

        <section id="servicios" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${accent.highlight}`}>Servicios</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white-950 sm:text-5xl">Impresos para colegios y estudiantes</h2>
            <p className="mt-5 text-lg leading-8 text-white-700">Creamos cuadernillos, guías y carpetas con producción express y atención al detalle académico.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tenant.services.map((service) => (
              <div key={service.title} className="rounded-[1.5rem] border border-white-200 bg-white-50 p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-white-950">{service.title}</h3>
                <p className="mt-3 text-white-700">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-emerald-400/40 bg-emerald-50/90 p-8 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Nuestra ubicación</p>
              <h2 className="mt-3 text-3xl font-semibold text-white-950">Encuéntranos en el barrio educativo</h2>
              <p className="mt-4 text-lg leading-8 text-white-700">{tenant.mapAddress}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tenant.mapAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-emerald-600 bg-emerald-600/10 px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-600/15"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-emerald-200 bg-white">
              <iframe src={tenant.mapEmbedUrl} title="Ubicación de la imprenta académica" className="h-[320px] w-full border-0" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${tenant.contact.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-700/30 transition hover:bg-emerald-600"
      >
        <span aria-hidden="true">💬</span>
        WhatsApp
      </a>
    </div>
  )
}

export default AcademicaPage
