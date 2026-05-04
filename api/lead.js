import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" })
  }

  const { email, description } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS, // app password de Gmail
      },
    })

    await transporter.sendMail({
      from: `"Bridges Lead" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: "BRIDGES --- Nuevo cliente desde Bridges 🚀",
      text: `
Email: ${email}

Descripción:
${description}
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Error sending email" })
  }
}