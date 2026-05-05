import fs from "fs"
import path from "path"
import { tenantTemplate } from "../src/data/tenantTemplate.js"

const slug = process.argv[2]

if (!slug) {
  console.error("❌ Usá: node scripts/createTenant.js mi-cliente")
  process.exit(1)
}

const filePath = path.resolve("src/data/tenants.json")

const raw = fs.readFileSync(filePath, "utf-8")
const tenants = JSON.parse(raw)

if (tenants[slug]) {
  console.error("❌ Ese tenant ya existe")
  process.exit(1)
}

// 🔥 acá generás tenant completo con defaults reales
const newTenant = tenantTemplate(slug)

tenants[slug] = newTenant

fs.writeFileSync(filePath, JSON.stringify(tenants, null, 2))

console.log(`✅ Tenant '${slug}' creado con datos completos`)