import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/streaming', label: 'Streaming' },
  { to: '/technology', label: 'Technology' },
  { to: '/business', label: 'Business' },
  { to: '/impact', label: 'Impact' },
  { to: '/partners', label: 'Partners' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#00FF8C] shadow-[0_0_30px_#00FF8Caa]"></div>
            <span className="font-semibold tracking-tight text-white" style={{fontFamily:'Space Grotesk'}}>Zero-Carbon</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({isActive}) => `text-sm transition-colors ${isActive ? 'text-[#00FF8C]' : 'text-zinc-300 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/streaming" className="ml-2 px-4 py-2 rounded-full bg-[#0B0B0B] ring-1 ring-white/10 text-white hover:shadow-[0_0_30px_#00FF8C66] hover:ring-[#00FF8C] transition-shadow">
              Start Streaming
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({isActive}) => `text-sm px-3 py-2 rounded-lg ${isActive ? 'bg-white/5 text-[#00FF8C]' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
