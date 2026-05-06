import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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
        const { email, description, name, company } = req.body

        if (!email || !description || !name || !company) {
            return res.status(400).json({ error: "Missing fields" })
        }

        await resend.emails.send({
            from: 'Bridges <contacto@bridges.lat>',
            to: 'valensello4444@gmail.com', // donde querés recibir
            reply_to: email,
            subject: 'Nuevo lead 🚀',
            html: `
                <p><strong>Email:</strong>   ${email}</p>
                <p><strong>Nombre:</strong>   ${name}</p>
                <p><strong>Nombre de la empresa:</strong>   ${company}</p>
                <p>${description}</p>
            `,
        })

        return res.status(200).json({ ok: true })

    } catch (err) {
        console.error("API ERROR:", err)
        return res.status(500).json({ error: err.message })
    }
}