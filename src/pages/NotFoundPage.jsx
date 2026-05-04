import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-xl">
        <h1 className="text-5xl font-semibold text-slate-950">404</h1>
        <p className="mt-4 text-lg text-slate-600">No se encontró el tenant solicitado.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Volver a selección
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
