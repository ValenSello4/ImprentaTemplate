'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Globe, Monitor, Wrench, Zap, MapPin } from 'lucide-react'

export default function BridgesPage() {
    const [open, setOpen] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (!element) return
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768

    const services = [
        {
            title: 'Soluciones Digitales',
            description: 'Conectamos tus ideas con tecnología para escalar tu negocio.',
            icon: <Globe size={32} strokeWidth={1.5} />,
        },
        {
            title: 'Desarrollo Web',
            description: 'Experiencias rápidas, modernas y pensadas para convertir.',
            icon: <Monitor size={32} strokeWidth={1.5} />,
        },
        {
            title: 'Consultoría Estratégica',
            description: 'Optimizamos procesos y decisiones clave.',
            icon: <Wrench size={32} strokeWidth={1.5} />,
        },
        {
            title: 'Soporte 24/7',
            description: 'Siempre disponibles para vos.',
            icon: <Zap size={32} strokeWidth={1.5} />,
        },
    ]

    const stats = [
        { number: '100+', label: 'Proyectos' },
        { number: '50+', label: 'Clientes' },
        { number: '8+', label: 'Años' },
    ]

    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    }
     const fadeOpacityUp = {
        initial: { opacity: 0},
        whileInView: { opacity: 1},
        viewport: { once: true },
        transition: { duration: 0.6 }
    }

    return (
        <div className="bg-white text-black overflow-hidden">

            {/* HEADER */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200"
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                    <span className="font-bold text-xl">Bridges</span>

                    <nav className="hidden md:flex gap-8 text-sm">
                        <button onClick={() => scrollToSection('servicios')}>Servicios</button>
                        <button onClick={() => scrollToSection('about')}>Nosotros</button>
                        <button onClick={() => scrollToSection('contacto')}>Contacto</button>
                    </nav>

                    <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                        ☰
                    </button>
                </div>

                {open && (
                    <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm">
                        <button onClick={() => { scrollToSection('servicios'); setOpen(false) }}>Servicios</button>
                        <button onClick={() => { scrollToSection('about'); setOpen(false) }}>Nosotros</button>
                        <button onClick={() => { scrollToSection('contacto'); setOpen(false) }}>Contacto</button>
                    </div>
                )}
            </motion.header>

            {/* HERO */}
            <section className="min-h-screen flex items-center justify-center px-6">

                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                    <motion.div {...fadeUp}>
                        <motion.img
                            src="/HeroBlack.png"
                            alt="hero"
                            loading="lazy"
                            decoding="async"
                            className="object-contain grayscale mx-auto md:mx-0 w-[300px] sm:w-[450px] md:w-[650px]"
                        />
                    </motion.div>

                    <div className="text-center md:text-left">

                        <motion.h1 {...fadeUp} className="text-4xl sm:text-6xl md:text-8xl font-extrabold">
                            Bridges
                        </motion.h1>

                        <motion.p {...fadeUp} className="mt-6 text-lg text-gray-600">
                            Conectamos ideas con tecnología para crear productos digitales.
                        </motion.p>

                        <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => scrollToSection('servicios')}
                                className="px-8 py-3 bg-black text-white rounded-full"
                            >
                                Explorar
                            </button>

                            <button
                                onClick={() => scrollToSection('contacto')}
                                className="px-8 py-3 border border-black rounded-full"
                            >
                                Contacto
                            </button>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-20 px-6 border-t">
                <div className="max-w-4xl mx-auto grid sm:grid-cols-3 text-center gap-10">
                    {stats.map((stat, i) => (
                        <motion.div key={i} {...fadeUp}>
                            <p className="text-4xl font-bold">{stat.number}</p>
                            <p className="text-gray-400 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* UBICACIÓN */}
            <section className="py-20 px-6 border-t">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        {...fadeUp}
                        className="p-10 rounded-3xl bg-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
                    >
                        <h3 className="text-2xl font-semibold">
                            ¿De dónde somos?
                        </h3 >

                        <div className="flex items-center gap-2 text-lg text-black-600 flex-col">
                            <MapPin size={50} strokeWidth={1.5} />
                            <span>Rosario, Santa Fe</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="servicios" className="py-28 px-6 border-t">
                <div className="max-w-6xl mx-auto">

                    <motion.h2 {...fadeUp} className="text-center text-4xl font-bold mb-16">
                        Servicios
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                whileHover={isDesktop ? { scale: 1.03 } : {}}
                                className="p-8 rounded-3xl border bg-white"
                            >
                                <div className="mb-4 text-black">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-28 px-6 border-y">
                <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        No construimos software.
                        <br />
                        <span className="text-gray-400">Construimos puentes.</span>
                    </h2>

                    <p className="text-gray-600 mb-10">
                        Nuestra misión es construir el paso tecnologico entre tus clientes, para que pudas enfocarte en hacer crecer tu negocio.
                    </p>
                </motion.div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="py-32 px-6 text-center">
                <motion.div {...fadeUp}>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                        ¿Listo para levantar el tuyo?
                    </h2>

                    <button
                        onClick={() => setShowForm(true)}
                        className="px-10 py-4 bg-black text-white rounded-full"
                    >
                        Empezar ahora
                    </button>
                </motion.div>

                {showForm && (
                    <motion.div
                        {...fadeOpacityUp}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 md:p-32 p-8">
                        <div className=" bg-white p-8 pb-52 rounded-2xl w-full h-full ">

                            <h3 className="text-xl font-bold mb-4">Contanos tu idea</h3>

                            <input
                                type="email"
                                placeholder="Tu mail"
                                className="w-full border p-3 rounded mb-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <textarea
                                placeholder="Descripción"
                                className="w-full h-full border p-3 rounded mb-4"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <div className="flex justify-between">
                                <button onClick={() => setShowForm(false)}>Cancelar</button>

                                <button
                                    onClick={async () => {
                                        await fetch("/api/lead", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
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
                    </motion.div>
                )}
            </section>

            <footer className="py-10 text-center text-gray-500 border-t">
                © 2026 Bridges
            </footer>
        </div>
    )
}