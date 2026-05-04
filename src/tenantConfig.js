export const tenants = {
  imprenta: {
    slug: 'imprenta',
    assetPath: '/tenants/imprenta',
    companyName: 'Imprenta Rápida',
    domains: ['imprenta.localhost', 'imprenta.com', 'www.imprenta.com'],
    accent: 'cyan',
    menu: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#casos', label: 'Casos' },
      { href: '#contacto', label: 'Contacto' },
    ],
    heroBadge: 'Imprenta y fotocopias',
    heroTitle: 'Impresiones coloridas, materiales escolares y trabajos profesionales.',
    heroText: 'Crea flyers, catálogos, carpetas, cuadernillos y útiles escolares con un servicio rápido y una estética moderna.',
    heroHighlight: 'Personaliza este sitio con imágenes en /public/tenants/imprenta/: hero.jpg, background.jpg, logo.png e image1.jpg/image2.jpg/image3.jpg.',
    buttons: [
      { href: '#contacto', label: 'Pide tu presupuesto', primary: true },
      { href: '#servicios', label: 'Ver servicios' },
    ],
    stats: [
      { label: 'Entrega', value: '2 horas', detail: 'Trabajo rápido para pedidos urgentes de estudiantes y emprendedores.' },
      { label: 'Calidad', value: 'Papel premium', detail: 'Acabados mate, brillante y barniz UV para un resultado profesional.' },
    ],
    cards: [
      { title: 'Fotocopias a color', subtitle: 'Apuntes, trabajos y guías' },
      { title: 'Diseño gráfico', subtitle: 'Logos, flyers y catálogos' },
      { title: 'Impresión comercial', subtitle: 'Posters y material publicitario' },
    ],
    services: [
      { title: 'Flyers y volantes', detail: 'Diseño + impresión digital' },
      { title: 'Encuadernados', detail: 'Tesis, informes y manuales' },
      { title: 'Tarjetas personales', detail: 'Cartulina premium y barniz UV' },
      { title: 'Etiquetas', detail: 'Autoadhesivas y troqueladas' },
      { title: 'Posters', detail: 'Gran formato para eventos' },
      { title: 'Restauración', detail: 'Escaneo y reproducción fiel' },
    ],
    cases: {
      title: 'Proyectos recientes',
      description: 'Resaltamos trabajos de impresión para librerías, academias y marcas locales con acabados profesionales y plazos cortos.',
      stats: [
        { label: 'Rapidez', value: '2h', detail: 'Cobertura flash para trabajos urgentes.' },
        { label: 'Garantía', value: '100%', detail: 'Calidad en color, papel y diseño.' },
      ],
    },
    gallery: [
      { src: '/tenants/imprenta/image1.jpg', alt: 'Impresora profesional en acción', caption: 'Prensas e impresoras' },
      { src: '/tenants/imprenta/image2.jpg', alt: 'Cuadernos y útiles escolares', caption: 'Cuadernillos y papelería' },
      { src: '/tenants/imprenta/image3.jpg', alt: 'Material impreso y diseño gráfico', caption: 'Piezas terminadas' },
    ],
    contact: {
      headline: 'Arma tu pedido de impresión hoy',
      lead: 'Cotización rápida, asesoría de papeles y acabados, y entrega express.',
      phone: '+54 9 11 1234 5678',
      email: 'juancito20@gmail.com',
      whatsappNumber: '5491112345678',
    },
    mapAddress: 'Av. Corrientes 123, Buenos Aires',
    mapEmbedUrl: 'https://www.google.com/maps?q=-34.603738,-58.381570&z=15&output=embed',
    locationTitle: 'Nuestra ubicación',
  },
  academica: {
    slug: 'academica',
    assetPath: '/tenants/academica',
    companyName: 'Imprenta Escolar',
    domains: ['academica.localhost', 'academica.com', 'www.academica.com'],
    accent: 'emerald',
    menu: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#casos', label: 'Casos' },
      { href: '#contacto', label: 'Contacto' },
    ],
    heroBadge: 'Material escolar',
    heroTitle: 'Todo para el regreso a clases con diseños pensados para estudiantes.',
    heroText: 'Cuadernillos, apuntes y material didáctico con producción express y acabados resistentes.',
    heroHighlight: 'Personaliza este sitio con imágenes en /public/tenants/academica/: hero.jpg, background.jpg, logo.png e image1.jpg/image2.jpg/image3.jpg.',
    buttons: [
      { href: '#contacto', label: 'Solicitar cotización', primary: true },
      { href: '#servicios', label: 'Ver opciones' },
    ],
    stats: [
      { label: 'Tiempo', value: '3h', detail: 'Producción veloz para pedidos escolares.' },
      { label: 'Durabilidad', value: 'Papel resistente', detail: 'Acabados duraderos para uso diario.' },
    ],
    cards: [
      { title: 'Apuntes impresos', subtitle: 'Listos para estudiar' },
      { title: 'Guías educativas', subtitle: 'Claras y coloridas' },
      { title: 'Cuadernillos', subtitle: 'Encuadernación profesional' },
    ],
    services: [
      { title: 'Cuadernillos escolares', detail: 'Encuadernado y corte profesional' },
      { title: 'Portadas personalizadas', detail: 'Diseño con los colores del curso' },
      { title: 'Kits de estudio', detail: 'Paquetes completos en un solo pedido' },
      { title: 'Posters didácticos', detail: 'Para aulas y proyectos' },
      { title: 'Folletos informativos', detail: 'Contenido organizado y legible' },
      { title: 'Folders', detail: 'Carpetas resistentes para entregas' },
    ],
    cases: {
      title: 'Casos de éxito escolar',
      description: 'Trabajamos con colegios y academias para producir material educativo rápido y con calidad.',
      stats: [
        { label: 'Satisfacción', value: '98%', detail: 'Docentes y alumnos felices con el resultado.' },
        { label: 'Entrega', value: 'Mismo día', detail: 'Pedidos urgentes sin perder calidad.' },
      ],
    },
    gallery: [
      { src: '/tenants/academica/image1.jpg', alt: 'Cuadernos y útiles escolares', caption: 'Material escolar' },
      { src: '/tenants/academica/image2.jpg', alt: 'Impresora profesional en acción', caption: 'Impresión rápida' },
      { src: '/tenants/academica/image3.jpg', alt: 'Material impreso y diseño gráfico', caption: 'Proyectos terminados' },
    ],
    contact: {
      headline: 'Prepara tus materiales para el ciclo escolar',
      lead: 'Cotiza ahora y recibe una propuesta rápida para tu curso o academia.',
      phone: '+54 9 11 1234 5678',
      email: 'academico@imprenta.com',
      whatsappNumber: '5491176543210',
    },
    mapAddress: 'Córdoba 456, Córdoba',
    mapEmbedUrl: 'https://www.google.com/maps?q=-31.420083,-64.188776&z=15&output=embed',
    locationTitle: 'Nuestra ubicación',
  },
  corporativa: {
    slug: 'corporativa',
    assetPath: '/tenants/corporativa',
    companyName: 'Imprenta Corporativa',
    domains: ['corporativa.localhost', 'corporativa.com', 'www.corporativa.com'],
    accent: 'fuchsia',
    menu: [
      { href: '#servicios', label: 'Servicios' },
      { href: '#casos', label: 'Casos' },
      { href: '#contacto', label: 'Contacto' },
    ],
    heroBadge: 'Impresión corporativa',
    heroTitle: 'Material publicitario y papelería corporativa con estilo profesional.',
    heroText: 'Catálogos, tarjetas y posters con acabados premium para empresas y eventos.',
    heroHighlight: 'Personaliza este sitio con imágenes en /public/tenants/corporativa/: hero.jpg, background.jpg, logo.png e image1.jpg/image2.jpg/image3.jpg.',
    buttons: [
      { href: '#contacto', label: 'Solicitar presupuesto', primary: true },
      { href: '#servicios', label: 'Ver servicios' },
    ],
    stats: [
      { label: 'Acabados', value: 'Barniz UV', detail: 'Texturas y detalles que elevan tu marca.' },
      { label: 'Impacto', value: 'Alto', detail: 'Diseños listos para eventos, ferias y lanzamientos.' },
    ],
    cards: [
      { title: 'Catálogos', subtitle: 'Presentaciones corporativas' },
      { title: 'Tarjetas de visita', subtitle: 'Acabados de lujo' },
      { title: 'Señalética', subtitle: 'Espacios con identidad' },
    ],
    services: [
      { title: 'Catálogos personalizados', detail: 'Papel y encuadernado premium' },
      { title: 'Tarjetas de visita', detail: 'Cortes especiales y barniz' },
      { title: 'Stands y posters', detail: 'Material de feria y eventos' },
      { title: 'Packaging', detail: 'Cajas y etiquetas corporativas' },
      { title: 'Folletos corporativos', detail: 'Contenido claro y elegante' },
      { title: 'Identidad de marca', detail: 'Soportes impresos coherentes' },
    ],
    cases: {
      title: 'Proyectos corporativos',
      description: 'Apoyamos eventos y campañas con piezas impresas que marcan una diferencia profesional.',
      stats: [
        { label: 'Entrega', value: '48h', detail: 'Plazos competitivos para empresas.' },
        { label: 'Confianza', value: '5 estrellas', detail: 'Clientes satisfechos con el acabado.' },
      ],
    },
    gallery: [
      { src: '/tenants/corporativa/image3.jpg', alt: 'Material impreso y diseño gráfico', caption: 'Proyectos corporativos' },
      { src: '/tenants/corporativa/image1.jpg', alt: 'Impresora profesional en acción', caption: 'Producción de calidad' },
      { src: '/tenants/corporativa/image2.jpg', alt: 'Cuadernos y útiles escolares', caption: 'Ejemplos de material' },
    ],
    contact: {
      headline: 'Coordina tu próximo pedido corporativo',
      lead: 'Hacemos campañas, folletos y papelería con entrega segura y acabados premium.',
      phone: '+54 9 11 1234 5678',
      email: 'corporativo@imprenta.com',
      whatsappNumber: '5491187654321',
    },
    mapAddress: 'Av. Libertador 789, Mendoza',
    mapEmbedUrl: 'https://www.google.com/maps?q=-32.889458,-68.845839&z=15&output=embed',
    locationTitle: 'Nuestra ubicación',
  },
}

export const tenantKeys = Object.keys(tenants)

export function getTenantSlugFromHost(hostname) {
  if (!hostname) {
    return null
  }

  const cleaned = hostname.toLowerCase().replace(/^www\./, '')
  return tenantKeys.find((slug) => tenants[slug].domains.includes(cleaned)) || null
}

