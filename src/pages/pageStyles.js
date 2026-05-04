export const accentStyles = {
  cyan: {
    badge: 'bg-amber-200/80 text-amber-800 ring-amber-300/40',
    card: 'bg-amber-50 ring-amber-200/70 text-amber-900',
    button: 'bg-amber-800 hover:bg-amber-700 text-slate-950 border-transparent',
    secondary: 'border-amber-700 hover:text-slate-950',
    highlight: 'text-amber-800',
  },
  emerald: {
    badge: 'bg-lime-200/70 text-emerald-900 ring-emerald-300/35',
    card: 'bg-emerald-50 ring-emerald-200/70 text-emerald-900',
    button: 'bg-emerald-800 hover:bg-emerald-700 text-slate-950 border-transparent',
    secondary: 'border-emerald-700 hover:text-slate-950',
    highlight: 'text-emerald-900',
  },
  fuchsia: {
    badge: 'bg-amber-200/80 text-rose-800 ring-rose-300/35',
    card: 'bg-rose-50 ring-rose-200/70 text-rose-900',
    button: 'bg-rose-800 hover:bg-rose-700 text-slate-950 border-transparent',
    secondary: 'border-rose-700 hover:text-slate-950',
    highlight: 'text-rose-800',
  },
}

export function getAccentStyles(accent) {
  return accentStyles[accent] || accentStyles.cyan
}
