export const accentStyles = {
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-700 ring-cyan-500/20',
    card: 'bg-cyan-600/5 ring-cyan-600/15 text-cyan-700',
    button: 'bg-cyan-600 hover:bg-cyan-500 text-white border-transparent',
    secondary: 'border-cyan-500 hover:text-slate-900',
    highlight: 'text-cyan-700',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20',
    card: 'bg-emerald-600/5 ring-emerald-600/15 text-emerald-700',
    button: 'bg-emerald-600 hover:bg-emerald-500 text-white border-transparent',
    secondary: 'border-emerald-500 hover:text-slate-900',
    highlight: 'text-emerald-700',
  },
  fuchsia: {
    badge: 'bg-fuchsia-500/10 text-fuchsia-700 ring-fuchsia-500/20',
    card: 'bg-fuchsia-600/5 ring-fuchsia-600/15 text-fuchsia-700',
    button: 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white border-transparent',
    secondary: 'border-fuchsia-500 hover:text-slate-900',
    highlight: 'text-fuchsia-700',
  },
}

export function getAccentStyles(accent) {
  return accentStyles[accent] || accentStyles.cyan
}
