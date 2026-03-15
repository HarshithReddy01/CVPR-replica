import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <li className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="nav-link-item flex items-center gap-1"
      >
        {label}
        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 10 6">
          <polygon points="0,0 10,0 5,6" />
        </svg>
      </button>
      {open && (
        <ul className="dropdown-menu py-1">
          {items.map((item, i) => (
            <li key={i}>
              {item.divider
                ? <hr className="border-gray-600 my-1" />
                : item.href
                  ? (
                    <a
                      href={item.href}
                      className="block px-4 py-1.5 text-sm hover:bg-gray-700 whitespace-nowrap"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                  : (
                    <Link
                      to={item.to}
                      className="block px-4 py-1.5 text-sm hover:bg-gray-700 whitespace-nowrap"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
              }
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const cvprMenuItems = [
  { label: 'Code of Conduct', href: 'https://cvpr.thecvf.com/Conferences/2025/CodeOfConduct' },
  { divider: true },
  { label: 'Create Profile', href: 'https://cvpr.thecvf.com/Profile/create' },
  { divider: true },
  { label: 'Reset / Forgot Password', href: 'https://cvpr.thecvf.com/resetpassword' },
  { divider: true },
  { label: 'Privacy Policy', href: 'https://cvpr.thecvf.com/Conferences/2024/PrivacyPolicy' },
  { divider: true },
  { label: 'Contact CVPR', href: 'https://support.conferences.computer.org/cvpr/help-desk' },
  { divider: true },
  { label: 'HELP / FAQ', href: 'https://cvpr.thecvf.com/FAQ' },
]


export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <header style={{ backgroundColor: '#1B427D' }} className="text-white">
      <nav className="w-full px-3 py-1.5 flex items-center justify-between flex-wrap gap-2" aria-label="Main Navigation">

        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Home" className="flex flex-col items-start leading-none">
            <img src={`${import.meta.env.BASE_URL}cvpr-logo.svg`} alt="CVPR 2026" height="40" style={{ height: 40 }} />
            <div className="hidden md:flex items-center justify-between w-full" style={{ marginTop: -14, paddingRight: 6 }}>
              <span style={{ fontSize: 6.5, color: '#fff', letterSpacing: '0.08em', fontWeight: 600 }}>JUNE 3-7, 2026</span>
              <span style={{ fontSize: 10, color: '#fff', letterSpacing: '0.08em', fontWeight: 600, marginRight: -4 }}>COLORADO</span>
            </div>
          </Link>
          <ul className="hidden md:flex items-center gap-0 md:gap-1 list-none m-0 p-0">
            <Dropdown label="CVPR" items={cvprMenuItems} />
            <li>
              <a href="https://cvpr.thecvf.com/resetpassword" className="nav-link-item block">
                Reset Password
              </a>
            </li>
            <li>
              <a href="https://cvpr.thecvf.com/MyStuff" className="nav-link-item block">
                My Stuff
              </a>
            </li>
          </ul>
        </div>

        <button
          className="md:hidden flex items-center px-2 py-1 border border-gray-400 rounded text-white"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle main navigation"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
          </svg>
        </button>

        <div className={`${mobileOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto`}>
          <form
            className="flex items-center"
            action="https://cvpr.thecvf.com/search"
            role="search"
            aria-label="Search"
          >
            <div className="flex border border-gray-400 rounded overflow-hidden">
              <input
                type="text"
                name="q"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
                aria-label="Search"
                className="px-2 py-1 text-sm text-gray-900 bg-white outline-none w-36"
              />
              <button
                type="submit"
                aria-label="execute search"
                className="bg-blue-600 px-2 py-1 flex items-center"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>
          </form>

          <a
            href="https://cvpr.thecvf.com/accounts/login"
            className="nav-link-item flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
              <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
            Login
          </a>
        </div>
      </nav>
    </header>
  )
}
