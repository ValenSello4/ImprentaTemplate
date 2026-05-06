import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ⚠️ memoria temporal (limitado en serverless)
const rateLimit = new Map()

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "https://www.bridges.lat")
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    if (req.method === "OPTIONS") {
        return res.status(200).end()
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" })
    }

    try {
        // 🧠 detectar IP real
        const ip =
            req.headers["x-forwarded-for"]?.split(",")[0] ||
            req.socket?.remoteAddress ||
            "unknown"

        const now = Date.now()
        const windowMs = 60 * 1000 // 1 minuto
        const maxRequests = 5

        if (!rateLimit.has(ip)) {
            rateLimit.set(ip, [])
        }

        const timestamps = rateLimit.get(ip).filter(ts => now - ts < windowMs)

        if (timestamps.length >= maxRequests) {
            return res.status(429).json({ error: "Too many requests" })
        }

        timestamps.push(now)
        rateLimit.set(ip, timestamps)

        // 📩 datos
        const { email, description, name, company } = req.body

        // 🔍 validaciones más sólidas
        if (!email || !description || !name || !company) {
            return res.status(400).json({ error: "Missing fields" })
        }

        if (description.length < 10) {
            return res.status(400).json({ error: "Description too short" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email" })
        }

        // 🐢 pequeño delay anti spam (opcional pero útil)
        await new Promise(res => setTimeout(res, 500))

        // 📧 envío
        await resend.emails.send({
            from: 'Bridges <contacto@bridges.lat>',
            to: 'valensello4444@gmail.com',
            reply_to: email,
            subject: 'Nuevo lead 🚀',
            html: `
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Empresa:</strong> ${company}</p>
                <p>${description}</p>
                <hr/>
                <p><small>IP: ${ip}</small></p>
            `,
        })

        return res.status(200).json({ ok: true })

    } catch (err) {
        console.error("API ERROR:", err)
        return res.status(500).json({ error: err.message })
    }
}