'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BridgesPage() {
    const [open, setOpen] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (!element) return

        const yOffset = -100
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({
            top: y,
            behavior: 'smooth',
        })
    }

    const services = [
        {
            title: 'Soluciones Digitales',
            description: 'Conectamos tus ideas con tecnología para escalar tu negocio.',
            icon: '🌐',
        },
        {
            title: 'Desarrollo Web',
            description: 'Experiencias rápidas, modernas y pensadas para convertir.',
            icon: '💻',
        },
        {
            title: 'Consultoría Estratégica',
            description: 'Optimizamos procesos y decisiones clave.',
            icon: '🎯',
        },
        {
            title: 'Soporte 24/7',
            description: 'Siempre disponibles para vos.',
            icon: '⚡',
        },
    ]

    const stats = [
        { number: '100+', label: 'Proyectos' },
        { number: '50+', label: 'Clientes' },
        { number: '8+', label: 'Años' },
    ]

    return (
        <div className="bg-white text-black overflow-hidden">

            {/* HEADER */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                    <span className="font-bold text-xl">Bridges</span>

                    {/* DESKTOP */}
                    <nav className="hidden md:flex gap-8 text-sm">
                        <button onClick={() => scrollToSection('servicios')} className="hover:text-gray-500 transition">
                            Servicios
                        </button>
                        <button onClick={() => scrollToSection('about')} className="hover:text-gray-500 transition">
                            Nosotros
                        </button>
                        <button onClick={() => scrollToSection('contacto')} className="hover:text-gray-500 transition">
                            Contacto
                        </button>
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm">
                        <button onClick={() => { scrollToSection('servicios'); setOpen(false) }}>Servicios</button>
                        <button onClick={() => { scrollToSection('about'); setOpen(false) }}>Nosotros</button>
                        <button onClick={() => { scrollToSection('contacto'); setOpen(false) }}>Contacto</button>
                    </div>
                )}
            </motion.header>

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-0 overflow-hidden bg-white">

                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                    {/* IMAGEN */}
                    <motion.img
                        src="/HeroBlack.png"
                        alt="background"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-[300px] sm:w-[450px] md:w-[650px] lg:w-[750px] object-contain grayscale mx-auto md:mx-0"
                    />

                    {/* CONTENIDO */}
                    <div className="text-center md:text-left text-black">

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight"
                        >
                            Bridges
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-lg sm:text-xl text-gray-600"
                        >
                            Conectamos ideas con tecnología para crear productos digitales.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                        >
                            <button
                                onClick={() => scrollToSection('servicios')}
                                className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition"
                            >
                                Explorar
                            </button>

                            <button
                                onClick={() => scrollToSection('contacto')}
                                className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
                            >
                                Contacto
                            </button>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-20 px-6 border-t border-gray-200">
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <p className="text-4xl font-bold">{stat.number}</p>
                            <p className="text-gray-400 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section id="servicios" className="py-28 px-6">
                <div className="max-w-6xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center text-4xl font-bold mb-16"
                    >
                        Servicios
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-2xl transition"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-28 px-6 bg-white border-y border-gray-200">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        No construimos software.
                        <br />
                        <span className="text-gray-400">Construimos puentes.</span>
                    </h2>

                    <p className="text-gray-600 mb-10">
                        Nuestra misión es simplificar la tecnología para que puedas enfocarte en hacer crecer tu negocio.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-700">
                        <span>✓ Innovación</span>
                        <span>✓ Velocidad</span>
                        <span>✓ Resultados</span>
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <section id="contacto" className="py-32 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                        ¿Listo para dar el salto?
                    </h2>

                    <p className="text-gray-600 mb-10">
                        Hablemos y llevemos tu idea al siguiente nivel.
                    </p>

                    <button
                        onClick={() => setShowForm(true)}
                        className="px-10 py-4 bg-black text-white rounded-full hover:scale-105 transition"
                    >
                        Empezar ahora
                    </button>
                </motion.div>

                {showForm && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-2xl w-full max-w-md">

                            <h3 className="text-xl font-bold mb-4">Contanos tu idea</h3>

                            <input
                                type="email"
                                placeholder="Tu mail"
                                className="w-full border p-3 rounded mb-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <textarea
                                placeholder="Descripción de la página que querés"
                                className="w-full border p-3 rounded mb-4"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="text-gray-500"
                                >
                                    Cancelar
                                </button>

                                <button
                                    onClick={async () => {
                                        await fetch('/api/leads', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ email, description }),
                                        })

                                        setShowForm(false)
                                        setEmail('')
                                        setDescription('')
                                    }}
                                    className="bg-black text-white px-4 py-2 rounded"
                                >
                                    Enviar
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-gray-500 border-t">
                © 2026 Bridges
            </footer>
        </div>
    )
}