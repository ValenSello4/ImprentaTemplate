'use client'
import { motion } from 'framer-motion'

export default function BridgesPage() {
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
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* LOGO */}
                    <a href="#" className="font-bold text-xl tracking-tight">
                        Bridges
                    </a>

                    {/* NAV */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <a href="#servicios" className="hover:text-gray-500 transition">
                            Servicios
                        </a>
                        <a href="#about" className="hover:text-gray-500 transition">
                            Nosotros
                        </a>
                        <a href="#contacto" className="hover:text-gray-500 transition">
                            Contacto
                        </a>
                    </nav>

                    {/* CTA */}
                    <a
                        href="#contacto"
                        className="hidden md:inline-block px-5 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition"
                    >
                        Empezar
                    </a>

                </div>
            </motion.header>

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden bg-white">

                {/* IMAGEN DETRÁS DEL LOGO */}
                <motion.img
                    src="/HeroBlack.png"
                    alt="background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    transition={{ duration: 1 }}
                    className="absolute w-[400px] sm:w-[600px] md:w-[800px] object-contain pointer-events-none grayscale"
                />

                {/* CONTENIDO */}
                <div className="relative text-center text-black max-w-4xl">

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl sm:text-8xl font-extrabold tracking-tight"
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
                        className="mt-10 flex justify-center gap-4"
                    >
                        <a
                            href="#servicios"
                            className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition"
                        >
                            Explorar
                        </a>

                        <a
                            href="#contacto"
                            className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
                        >
                            Contacto
                        </a>
                    </motion.div>

                </div>
            </section>

            {/* STATS */}
            <section className="py-20 px-6 border-t border-gray-200">
                <div className="max-w-4xl mx-auto grid grid-cols-3 text-center">
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

                    <div className="grid md:grid-cols-2 gap-8">
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

                    <div className="flex justify-center gap-6 text-sm text-gray-700">
                        <span>✓ Innovación</span>
                        <span>✓ Velocidad</span>
                        <span>✓ Resultados</span>
                    </div>
                </motion.div>
            </section>

            {/* CTA FINAL */}
            <section id="contacto" className="py-32 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <h2 className="text-5xl font-bold mb-6">
                        ¿Listo para dar el salto?
                    </h2>

                    <p className="text-gray-600 mb-10">
                        Hablemos y llevemos tu idea al siguiente nivel.
                    </p>

                    <button className="px-10 py-4 bg-black text-white rounded-full hover:scale-105 transition">
                        Empezar ahora
                    </button>
                </motion.div>
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-gray-500 border-t">
                © 2026 Bridges
            </footer>
        </div>
    )
}