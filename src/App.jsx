

function App() {
  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-3xl" />
          Imprenta Rápida
        </div>
        <nav className="hidden gap-8 text-slate-600 md:flex">
          <a href="#servicios" className="transition hover:text-slate-900">Servicios</a>
          <a href="#casos" className="transition hover:text-slate-900">Casos</a>
          <a href="#contacto" className="transition hover:text-slate-900">Contacto</a>
        </nav>
      </header>

      <main className="relative mx-auto px-6 pb-24 sm:px-10 lg:max-w-7xl">
        <section
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.95)), url('/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_35%)]" />
          <div className="relative grid gap-10 py-20 px-8 lg:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 ring-1 ring-cyan-500/20">
                Imprenta y fotocopias
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Impresiones coloridas, materiales escolares y trabajos profesionales.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Crea flyers, catálogos, carpetas, cuadernillos y útiles escolares con un servicio rápido y una estética moderna. Reemplaza la imagen de fondo del hero subiendo tu foto a <span className="font-semibold text-cyan-700">/public/hero.jpg</span>, del fondo de página a <span className="font-semibold text-cyan-700">/public/background.jpg</span>, el logo a <span className="font-semibold text-cyan-700">/public/logo.png</span> y las imágenes de la galería a <span className="font-semibold text-cyan-700">/public/image1.jpg</span>, <span className="font-semibold text-cyan-700">/public/image2.jpg</span>, <span className="font-semibold text-cyan-700">/public/image3.jpg</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-cyan-500">
                  Pide tu presupuesto
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-slate-900">
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200 backdrop-blur-sm">
              <div className="rounded-3xl bg-cyan-600/5 p-6 ring-1 ring-cyan-600/15">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Entrega</p>
                <p className="mt-4 text-4xl font-bold text-slate-950">2 horas</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Trabajo rápido para pedidos urgentes de estudiantes y emprendedores.</p>
              </div>
              <div className="rounded-3xl bg-fuchsia-500/10 p-6 ring-1 ring-fuchsia-500/15">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-700">Calidad</p>
                <p className="mt-4 text-4xl font-bold text-slate-950">Papel premium</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Acabados mate, brillante y barniz UV para un resultado profesional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Fotocopias a color', subtitle: 'Apuntes, trabajos y guías' },
            { title: 'Diseño gráfico', subtitle: 'Logos, flyers y catálogos' },
            { title: 'Impresión comercial', subtitle: 'Posters y material publicitario' },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.subtitle}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-slate-600">Diseños completos con papeles y acabados cuidados para comunicar tu marca con impacto.</p>
            </article>
          ))}
        </section>

        <section id="servicios" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Servicios</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Impresión, copias y librería en un solo lugar</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Elaboramos material impreso, encuadernados, stickers y cuadernillos con atención personalizada para estudiantes, tiendas y emprendedores.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Flyers y volantes', detail: 'Diseño + impresión digital' },
              { title: 'Encuadernados', detail: 'Tesis, informes y manuales' },
              { title: 'Tarjetas personales', detail: 'Cartulina premium y barniz UV' },
              { title: 'Etiquetas', detail: 'Autoadhesivas y troqueladas' },
              { title: 'Posters', detail: 'Gran formato para eventos' },
              { title: 'Restauración', detail: 'Escaneo y reproducción fiel' },
            ].map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="casos" className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h3 className="text-3xl font-semibold text-slate-950">Proyectos recientes</h3>
            <p className="mt-4 text-slate-600">Resaltamos trabajos de impresión para librerías, academias y marcas locales con acabados profesionales y plazos cortos.</p>
            <ul className="mt-8 space-y-4 text-slate-600">
              <li>• Flyers para un emprendimiento de cocina con entrega express.</li>
              <li>• Cuadernillos escolares personalizados para colonia.</li>
              <li>• Catálogo corporativo con barniz UV y corte perfecto.</li>
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-cyan-50 p-8 ring-1 ring-cyan-100">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Rapidez</p>
              <p className="mt-4 text-4xl font-semibold text-slate-950">2h</p>
              <p className="mt-3 text-slate-600">Cobertura flash para trabajos urgentes.</p>
            </div>
            <div className="rounded-[2rem] bg-fuchsia-50 p-8 ring-1 ring-fuchsia-100">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-700">Garantía</p>
              <p className="mt-4 text-4xl font-semibold text-slate-950">100%</p>
              <p className="mt-3 text-slate-600">Calidad en color, papel y diseño.</p>
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-10 shadow-xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                src: '/image1.jpg',
                alt: 'Impresora profesional en acción',
                caption: 'Prensas e impresoras',
              },
              {
                src: '/image2.jpg',
                alt: 'Cuadernos y útiles escolares',
                caption: 'Cuadernillos y papelería',
              },
              {
                src: '/image3.jpg',
                alt: 'Material impreso y diseño gráfico',
                caption: 'Piezas terminadas',
              },
            ].map((item) => (
              <div key={item.src} className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
                <img src={item.src} alt={item.alt} className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mt-24 space-y-8">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contacto</p>
                <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Arma tu pedido de impresión hoy</h2>
                <p className="mt-4 text-slate-600">Cotización rápida, asesoría de papeles y acabados, y entrega express.</p>
              </div>
              <div className="space-y-4 rounded-[2rem] bg-slate-950 p-8 text-white ring-1 ring-slate-900/10 shadow-glow">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Teléfono</p>
                <p className="text-2xl font-semibold">+54 9 11 1234 5678</p>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
                <p className="text-2xl font-semibold">juancito20@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-950 mb-6">Nuestra ubicación</h3>
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889!2d-58.38159238477031!3d-34.60373446487628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf9b6c6b8f%3A0x1a6a8b9b9b9b9b9b!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1640995200000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Imprenta Rápida"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/543413135712?text=Hola,%20me%20gustaría%20hacer%20una%20consulta%20sobre%20impresiones"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </main>
    </div>
  )
}

export default App
