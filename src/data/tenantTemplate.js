export const tenantTemplate = (slug) => ({
  slug,

  companyName: "Nuevo Cliente",

  domains: [`${slug}.com`, `www.${slug}.com`],

  assetPath: `/tenants/${slug}`,

  accent: "emerald",

  menu: [
    { href: "#servicios", label: "Servicios" },
    { href: "#casos", label: "Casos" },
    { href: "#contacto", label: "Contacto" }
  ],

  heroBadge: "Nuevo negocio",
  heroTitle: "Tu negocio ahora online con presencia profesional.",
  heroText:
    "Sitio de presentación moderno listo para atraer clientes y generar confianza.",
  heroHighlight:
    "Personalizá este contenido y reemplazá imágenes en /public/tenants/" +
    slug,

  buttons: [
    { href: "#contacto", label: "Contactar", primary: true },
    { href: "#servicios", label: "Ver servicios" }
  ],

  stats: [
    {
      label: "Velocidad",
      value: "Rápido",
      detail: "Sitio listo para publicar en minutos"
    },
    {
      label: "Calidad",
      value: "Profesional",
      detail: "Diseño moderno y adaptable"
    }
  ],

  cards: [
    {
      title: "Servicio destacado",
      subtitle: "Soluciones para tu negocio"
    },
    {
      title: "Atención personalizada",
      subtitle: "Soporte directo con el cliente"
    },
    {
      title: "Entrega rápida",
      subtitle: "Optimizado para resultados"
    }
  ],

  services: [
    {
      title: "Servicio básico",
      detail: "Descripción del servicio principal"
    },
    {
      title: "Servicio intermedio",
      detail: "Más valor agregado para clientes"
    },
    {
      title: "Servicio premium",
      detail: "Solución completa personalizada"
    }
  ],

  cases: {
    title: "Casos de éxito",
    description:
      "Ejemplos de trabajos realizados para distintos clientes y rubros.",
    stats: [
      {
        label: "Impacto",
        value: "Alto",
        detail: "Resultados visibles en pocos días"
      }
    ]
  },

  gallery: [
    {
      src: `/tenants/${slug}/image1.jpg`,
      alt: "Imagen de ejemplo 1",
      caption: "Trabajo destacado"
    },
    {
      src: `/tenants/${slug}/image2.jpg`,
      alt: "Imagen de ejemplo 2",
      caption: "Proyecto realizado"
    },
    {
      src: `/tenants/${slug}/image3.jpg`,
      alt: "Imagen de ejemplo 3",
      caption: "Resultado final"
    }
  ],

  contact: {
    headline: "Contactanos hoy",
    lead: "Escribinos para recibir más información",
    phone: "+54 9 11 0000 0000",
    email: `contacto@${slug}.com`,
    whatsappNumber: "5491100000000"
  },

  mapAddress: "Dirección del cliente",
  mapEmbedUrl: "https://www.google.com/maps?q=Argentina&output=embed",
  locationTitle: "Ubicación"
})