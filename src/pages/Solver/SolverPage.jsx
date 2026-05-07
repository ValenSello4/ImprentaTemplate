import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  Phone,
  Mail,
  X,
  Menu
} from 'lucide-react'

import SolverLogo from '../Solver/SolverLogo.png'
import AgroBg from '../Solver/agro-bg.jpg' // ← reemplazá esta imagen por la que quieras

export default function SolverPage() {
  const [showForm, setShowForm] = useState(false)
  const [selectedSystem, setSelectedSystem] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  const systems = [
    {
      title: 'Corretajes',
      icon: <BarChart3 size={28} />,
      short:
        'Sistema integral para corredores de cereales con automatización y control total.',
      details: [
        'Facturación electrónica AFIP',
        'Conciliaciones automáticas',
        'Auditorías gerenciales',
        'Importación automática de cartas de porte',
        'Extranet y generación PDF',
        'Control documental y usuarios',
        'Estadísticas y reportes avanzados'
      ]
    },
    {
      title: 'Acopios',
      icon: <Database size={28} />,
      short:
        'Gestión avanzada para acopiadores, molinos y exportadores.',
      details: [
        'Control de stock',
        'Balanza integrada',
        'Cartas de porte electrónicas',
        'Facturación automática',
        'Gestión bancaria',
        'Control de impuestos',
        'Manejo de contratos'
      ]
    },
    {
      title: 'Gestión Comercial',
      icon: <Globe size={28} />,
      short:
        'ERP comercial completo para administración y control de operaciones.',
      details: [
        'Facturación electrónica',
        'Caja y bancos',
        'Control de stock',
        'Producción',
        'Auditorías',
        'Estadísticas',
        'Múltiples listas de precios'
      ]
    },
    {
      title: 'Mercado a Término',
      icon: <Cpu size={28} />,
      short:
        'Administración inteligente de futuros y opciones agrícolas.',
      details: [
        'Control de posiciones',
        'Seguimiento de operaciones',
        'Control automático',
        'Facturación asociada',
        'Gestión financiera'
      ]
    }
  ]

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-hidden relative">

      {/* BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 opacity-[0.07] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${AgroBg})`
        }}
      />

      {/* GREEN GLOW */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-500/10 blur-[180px] rounded-full" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={SolverLogo}
              alt="Solver"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-wide">
                Solver
              </h1>

              <p className="text-[10px] md:text-xs text-gray-400">
                Software para Agronegocios
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
            <a href="#servicios" className="hover:text-white transition">
              Servicios
            </a>

            <a href="#sistemas" className="hover:text-white transition">
              Sistemas
            </a>

            <a href="#nosotros" className="hover:text-white transition">
              Nosotros
            </a>

            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </nav>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => setShowForm(true)}
            className="hidden lg:flex bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Solicitar demo
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="lg:hidden bg-black/95 border-t border-white/10"
            >
              <div className="flex flex-col px-6 py-6 gap-5 text-gray-300">
                <a href="#servicios" onClick={() => setMobileMenu(false)}>
                  Servicios
                </a>

                <a href="#sistemas" onClick={() => setMobileMenu(false)}>
                  Sistemas
                </a>

                <a href="#nosotros" onClick={() => setMobileMenu(false)}>
                  Nosotros
                </a>

                <a href="#contacto" onClick={() => setMobileMenu(false)}>
                  Contacto
                </a>

                <button
                  onClick={() => {
                    setShowForm(true)
                    setMobileMenu(false)
                  }}
                  className="bg-white text-black py-3 rounded-xl font-semibold"
                >
                  Solicitar demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 md:pt-24">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Tecnología para el sector agroindustrial
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Simplificando el trabajo de nuestros clientes.
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
              Desarrollamos sistemas para corredores, acopios,
              exportadores y empresas agroindustriales, integrando
              automatización, control y análisis en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-black px-6 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                Solicitar demo
                <ArrowRight size={18} />
              </button>

              <a
                href="#sistemas"
                className="border border-white/15 px-6 py-4 rounded-2xl hover:bg-white/5 transition text-center"
              >
                Ver sistemas
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/10 blur-[120px] rounded-full" />

            <div className="relative bg-white/[0.04] border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 md:p-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <GlassCard
                  icon={<Cpu />}
                  title="Automatización"
                  desc="Procesos inteligentes y eficientes."
                />

                <GlassCard
                  icon={<Database />}
                  title="Datos"
                  desc="Información centralizada."
                />

                <GlassCard
                  icon={<ShieldCheck />}
                  title="Seguridad"
                  desc="Protección y auditoría."
                />

                <GlassCard
                  icon={<BarChart3 />}
                  title="Analytics"
                  desc="Reportes y métricas en tiempo real."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="servicios"
        className="relative py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-green-400 uppercase tracking-[0.3em] text-sm">
              Servicios
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Soluciones para el agro moderno
            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
              Implementaciones, desarrollos y soporte especializado
              para empresas agroindustriales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <InfoCard
              title="Sistemas y módulos"
              text="Corredores de cereales, acopios, canjes, mercado a término y gestión comercial."
            />

            <InfoCard
              title="Implementaciones"
              text="Capacitación, configuración y puesta en marcha personalizada."
            />

            <InfoCard
              title="Soporte 24hs"
              text="Atención permanente con asistencia remota y soporte especializado."
            />
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section
        id="sistemas"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <p className="text-green-400 uppercase tracking-[0.3em] text-sm">
              Sistemas
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Plataformas adaptadas a tu operación
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 md:p-8 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    {system.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {system.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Sistema especializado
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-400 leading-relaxed">
                  {system.short}
                </p>

                <button
                  onClick={() => setSelectedSystem(system)}
                  className="mt-8 flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
                >
                  Ver detalles
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="nosotros"
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-green-400 uppercase tracking-[0.3em] text-sm">
            Nosotros
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Más de 20 años desarrollando soluciones.
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed text-base md:text-lg">
            Solver Informática nace con el objetivo de brindar soluciones
            prácticas y modernas para la actividad agropecuaria,
            simplificando procesos administrativos y mejorando
            la toma de decisiones empresariales.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-16">

            <Stat number="20+" label="Años de experiencia" />
            <Stat number="24hs" label="Soporte permanente" />
            <Stat number="100%" label="Implementación personalizada" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contacto"
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">

          <div className="bg-white/[0.04] border border-white/10 rounded-[2rem] p-8 md:p-14 backdrop-blur-xl">

            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                Contactanos
              </h2>

              <p className="mt-6 text-gray-400">
                Te enviaremos información sobre nuestros sistemas y servicios.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-14">

              <div className="space-y-6">
                <ContactItem
                  icon={<Phone />}
                  title="Ventas"
                  text="(0341) 153-554-334"
                />

                <ContactItem
                  icon={<Phone />}
                  title="Consultas"
                  text="(341) 528-8697"
                />

                <ContactItem
                  icon={<Mail />}
                  title="Email"
                  text="info@solverinformatica.com"
                />
              </div>

              <div className="space-y-4">
                <input
                  placeholder="Nombre"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white"
                />

                <input
                  placeholder="Email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white"
                />

                <textarea
                  rows="5"
                  placeholder="Mensaje"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-white"
                />

                <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition">
                  Enviar consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © Solver Informática — Software para Agronegocios
      </footer>

      {/* SYSTEM MODAL */}
      <AnimatePresence>
        {selectedSystem && (
          <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0f0f0f] border border-white/10 rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {selectedSystem.title}
                  </h2>

                  <p className="text-gray-400 mt-4">
                    {selectedSystem.short}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedSystem(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X />
                </button>
              </div>

              <div className="mt-10 space-y-4">
                {selectedSystem.details.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DEMO MODAL */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#0d0d0d] border border-white/10 rounded-[2rem] w-full max-w-lg p-6 md:p-8"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">
                  Solicitar demo
                </h3>

                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X />
                </button>
              </div>

              <div className="space-y-4 mt-8">
                <input
                  placeholder="Nombre"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none"
                />

                <input
                  placeholder="Empresa"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none"
                />

                <input
                  placeholder="Email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Contanos sobre tu operación"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none"
                />

                <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition">
                  Enviar solicitud
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* GLASS CARD */
function GlassCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-black/30 border border-white/10 rounded-2xl p-5"
    >
      <div className="text-white mb-4">
        {icon}
      </div>

      <h4 className="font-semibold text-lg">
        {title}
      </h4>

      <p className="text-gray-400 text-sm mt-2">
        {desc}
      </p>
    </motion.div>
  )
}

/* INFO CARD */
function InfoCard({ title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        {text}
      </p>
    </motion.div>
  )
}

/* STAT */
function Stat({ number, label }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
      <h3 className="text-4xl font-bold">
        {number}
      </h3>

      <p className="text-gray-400 mt-2">
        {label}
      </p>
    </div>
  )
}

/* CONTACT ITEM */
function ContactItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="text-gray-400 mt-1">
          {text}
        </p>
      </div>
    </div>
  )
}