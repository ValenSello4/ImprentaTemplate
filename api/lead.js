import nodemailer from "nodemailer"

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
        const body = typeof req.body === "string"
            ? JSON.parse(req.body)
            : req.body

        const { email, description } = body

        if (!email || !description) {
            return res.status(400).json({ error: "Missing fields" })
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        })

        await transporter.sendMail({
            from: `"Bridges" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            replyTo: email,
            subject: "Nuevo lead 🚀",
            text: `Email: ${email}\n\n${description}`,
        })

        return res.status(200).json({ ok: true })

    } catch (err) {
        console.error("API ERROR:", err)
        return res.status(500).json({ error: err.message })
    }
}