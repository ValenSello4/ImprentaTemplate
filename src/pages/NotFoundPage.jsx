import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f3e0c1] text-white-950 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl rounded-[2rem] border border-wood-panel bg-paper-surface p-12 text-center shadow-rustic">
        <h1 className="text-5xl font-semibold text-white-950">404</h1>
        <p className="mt-4 text-lg text-white-700">No se encontró el tenant solicitado.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-amber-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Volver a selección
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
