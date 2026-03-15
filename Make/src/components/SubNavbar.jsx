import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SubDropdown({ label, items }) {
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
        className="flex items-center gap-0.5 px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded transition-colors whitespace-nowrap"
      >
        {label}
        <svg className="w-2 h-2 mt-0.5" fill="currentColor" viewBox="0 0 10 6">
          <polygon points="0,0 10,0 5,6" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full left-0 z-50 bg-white text-gray-800 min-w-max shadow-lg rounded border border-gray-200 py-1">
          {items.map((item, i) => (
            <li key={i}>
              {item.divider
                ? <hr className="border-gray-200 my-0.5" />
                : item.to
                  ? (
                    <Link
                      to={item.to}
                      className="block px-4 py-1.5 text-sm hover:bg-gray-100 whitespace-nowrap text-gray-700"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                  : (
                    <a
                      href={item.href}
                      className="block px-4 py-1.5 text-sm hover:bg-gray-100 whitespace-nowrap text-gray-700"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
              }
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function YearDropdown() {
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
        className="flex items-center gap-1 px-3 py-1 text-sm font-semibold text-white rounded"
        style={{ backgroundColor: '#070bff' }}
      >
        Select Year: (2026)
        <svg className="w-2 h-2 mt-0.5" fill="currentColor" viewBox="0 0 10 6">
          <polygon points="0,0 10,0 5,6" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full left-0 z-50 bg-white shadow-lg rounded border border-gray-200 py-1 min-w-max">
          {[2026, 2025, 2024, 2023].map((year, i, arr) => (
            <li key={year}>
              <a
                href={`https://cvpr.thecvf.com/Conferences/${year}`}
                className="block px-4 py-1.5 text-sm hover:bg-gray-100 text-gray-700"
                onClick={() => setOpen(false)}
              >
                {year}
              </a>
              {i < arr.length - 1 && <hr className="border-gray-200" />}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const callsItems = [
  { label: 'Call for Papers', href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers' },
  { divider: true },
  { label: 'Call for Workshops', href: 'https://cvpr.thecvf.com/Conferences/2026/CallForWorkshops' },
  { divider: true },
  { label: 'Call for Tutorials', href: 'https://cvpr.thecvf.com/Conferences/2026/CallForTutorials' },
  { divider: true },
  { label: 'Call for Demos', href: 'https://cvpr.thecvf.com/Conferences/2026/CallForDemos' },
  { divider: true },
  { label: 'Broadening Participation', href: 'https://cvpr.thecvf.com/Conferences/2026/BroadeningParticipation' },
  { divider: true },
  { label: 'Call for Art', href: 'https://cvpr.thecvf.com/Conferences/2026/CallForArt' },
]

const guidesItems = [
  { label: 'Liability Waiver', href: 'https://cvpr.thecvf.com/Conferences/2026/LiabilityWaiver' },
  { divider: true },
  { label: 'Complete Your OR Profile', href: 'https://cvpr.thecvf.com/Conferences/2026/CompleteYourORProfile' },
  { divider: true },
  { label: 'Author Guidelines', href: 'https://cvpr.thecvf.com/Conferences/2026/AuthorGuidelines' },
  { divider: true },
  { label: 'Reviewer Guidelines', href: 'https://cvpr.thecvf.com/Conferences/2026/ReviewerGuidelines' },
  { divider: true },
  { label: 'Compute Reporting', href: 'https://cvpr.thecvf.com/Conferences/2026/ComputeReporting' },
  { divider: true },
  { label: 'Compute Reporting Clarification', href: 'https://cvpr.thecvf.com/Conferences/2026/ComputeReportingClarification' },
  { divider: true },
  { label: 'SAC Guides', href: 'https://cvpr.thecvf.com/Conferences/2026/SACGuides' },
  { divider: true },
  { label: 'AC Guides', href: 'https://cvpr.thecvf.com/Conferences/2026/ACGuides' },
  { divider: true },
  { label: 'Reviewer Training Material', href: 'https://cvpr.thecvf.com/Conferences/2026/ReviewerTrainingMaterial' },
]

const attendItems = [
  { label: 'Code of Conduct', href: 'https://cvpr.thecvf.com/Conferences/2026/CodeOfConduct' },
  { divider: true },
  { label: 'Registration & Pricing', href: 'https://cvpr.thecvf.com/Conferences/2026/Pricing2' },
  { divider: true },
  { label: 'Hotels', href: 'https://cvpr.thecvf.com/Conferences/2026/Hotels' },
]

const expoItems = [
  { label: 'Sponsors', href: 'https://cvpr.thecvf.com/Conferences/2026/Sponsors' },
  { divider: true },
  { label: 'Exhibitor Information', href: 'https://cvpr.thecvf.com/Conferences/2026/ExhibitorInformation' },
  { divider: true },
  { label: 'Expo Schedule', href: 'https://cvpr.thecvf.com/Conferences/2026/ExpoSchedule' },
]

const mediaItems = [
  { label: 'Press Landing Page', href: 'https://cvpr.thecvf.com/Conferences/2026/PressLandingPage' },
  { divider: true },
  { label: 'Media Pass', href: 'https://cvpr.thecvf.com/Conferences/2026/MediaPass' },
  { divider: true },
  { label: 'News & Resources', href: 'https://cvpr.thecvf.com/Conferences/2026/NewsAndResources' },
]

const organizationItems = [
  { label: 'Organizing Committee', href: 'https://cvpr.thecvf.com/Conferences/2026/Organizers' },
]

export default function SubNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="w-full px-4">
      <nav
        className="rounded-b border border-t-0"
        style={{
          backgroundColor: '#F6f6f6',
          minHeight: '57px',
          borderWidth: '3px',
          borderColor: '#dee2e6',
        }}
      >
        <div className="px-3 py-2 flex items-center flex-wrap gap-1">
          <button
            className="md:hidden flex items-center px-2 py-1 border border-gray-400 rounded text-gray-600"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
            </svg>
          </button>

          <ul className={`${mobileOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center gap-1 flex-wrap list-none m-0 p-0 w-full md:w-auto`}>
            <YearDropdown />

            <li>
              <Link
                to="/dates"
                className={`px-2 py-1 text-sm hover:bg-gray-200 rounded whitespace-nowrap transition-colors block ${location.pathname === '/dates' ? 'font-semibold' : 'text-gray-700'}`}
              >
                Dates
              </Link>
            </li>

            <SubDropdown label="Calls" items={callsItems} />
            <SubDropdown label="Guides" items={guidesItems} />
            <SubDropdown label="Attend" items={attendItems} />
            <SubDropdown label="Expo" items={expoItems} />
            <SubDropdown label="Media" items={mediaItems} />
            <SubDropdown label="Organization" items={organizationItems} />
          </ul>
        </div>
      </nav>
    </div>
  )
}
