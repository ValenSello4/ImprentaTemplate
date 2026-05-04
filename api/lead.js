import nodemailer from "nodemailer"

export default async function handler(req, res) {
  const allowedOrigins = [
    "https://www.bridges.lat",
    "https://bridges.lat"
  ]

  const origin = req.headers.origin

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin)
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" })
  }

  const { email, description } = req.body

  try {
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
      subject: "Nuevo lead 🚀",
      text: `Email: ${email}\n\n${description}`,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: "Mail error" })
  }
}