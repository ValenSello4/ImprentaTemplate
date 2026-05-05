import academica from "./academica.json";

function AcademicaPage() {
  const tenant = academica;

  // 🔥 Colores directos (sin pageStyles)
  const accent = {
    badge: "bg-emerald-100 text-emerald-800 ring-emerald-300",
    highlight: "text-emerald-700",
    button: "bg-emerald-700 text-white hover:bg-emerald-600",
    secondary: "hover:bg-emerald-50",
    card: "bg-emerald-50 text-emerald-900 ring-emerald-200",
  };

  return (
    <div
      className="min-h-screen text-white-950"
      style={{
        backgroundImage: `url('${tenant.assetPath}/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* HEADER */}
      <header className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-10">
        <div className="rounded-[2rem] border border-white-200 bg-white/90 p-6 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img
                src={`${tenant.assetPath}/logo.png`}
                alt="Logo"
                className="h-14 w-14 rounded-3xl border border-white-200 bg-white/80"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  Academia
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {tenant.companyName}
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.25em] text-gray-600">
              {(tenant.menu ?? []).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-gray-200 bg-white px-4 py-3 transition hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative mx-auto px-6 pb-24 sm:px-10 lg:max-w-7xl">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[1.8rem] border border-white-200 bg-white/90 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_30%)]" />

          <div className="relative grid gap-10 py-20 px-8 lg:grid-cols-2 lg:items-center lg:px-12">
            {/* TEXT */}
            <div className="space-y-6">
              <div
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] ring-1 ${accent.badge}`}
              >
                {tenant.heroBadge}
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                {tenant.heroTitle}
              </h1>

              <p className="text-lg leading-8 text-gray-700">
                {tenant.heroText}
              </p>

              <p className={`text-lg leading-8 ${accent.highlight}`}>
                {tenant.heroHighlight}
              </p>

              <div className="flex flex-wrap gap-4">
                {(tenant.buttons ?? []).map((button) => (
                  <a
                    key={button.href}
                    href={button.href}
                    className={`rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg transition ${
                      button.primary
                        ? accent.button
                        : "border border-gray-300 bg-white text-gray-900"
                    }`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CARDS HERO */}
            <div className="grid gap-6 rounded-[1.75rem] border border-gray-200 bg-white/95 p-6 shadow-lg">
              <div className={`rounded-[1.5rem] p-6 ring-1 ${accent.card}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em]">
                  Pedidos por curso
                </p>
                <p className="mt-4 text-4xl font-bold">Paquetes completos</p>
                <p className="mt-2 text-sm text-gray-600">
                  Kits para alumnos y cuadernillos listos para entregar.
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Fácil de adaptar
                </p>
                <p className="mt-4 text-4xl font-bold">Material escolar</p>
                <p className="mt-2 text-sm text-gray-600">
                  Diseños pensados para clases y proyectos educativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {(tenant.cards ?? []).map((item) => (
            <article
              key={item.title}
              className="rounded-[1.25rem] border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {item.subtitle}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>
            </article>
          ))}
        </section>

        {/* SERVICES */}
        <section id="servicios" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p
              className={`text-sm font-semibold uppercase tracking-[0.3em] ${accent.highlight}`}
            >
              Servicios
            </p>

            <h2 className="mt-3 text-4xl font-semibold">
              Impresos para colegios y estudiantes
            </h2>

            <p className="mt-5 text-lg text-gray-700">
              Cuadernillos, guías y carpetas con producción express.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {(tenant.services ?? []).map((service) => (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-gray-200 bg-white p-7 shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-gray-700">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MAPA */}
        <section className="mt-16 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Ubicación
              </p>

              <h2 className="mt-3 text-3xl font-semibold">Encuéntranos</h2>

              <p className="mt-4 text-gray-700">{tenant.mapAddress}</p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  tenant.mapAddress,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Ver en Google Maps
              </a>
            </div>

            <iframe
              src={tenant.mapEmbedUrl}
              title="Mapa"
              className="h-[320px] w-full rounded-[1.75rem] border"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${tenant.contact?.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-700 px-4 py-3 text-white shadow-xl"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}

export default AcademicaPage;
