export function getTenantSlugFromHost(hostname, tenants) {
  if (!hostname) return null

  const cleaned = hostname.toLowerCase().replace(/^www\./, '')

  return Object.keys(tenants).find((slug) =>
    tenants[slug].domains.includes(cleaned)
  ) || null
}