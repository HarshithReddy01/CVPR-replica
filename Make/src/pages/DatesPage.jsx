import CountdownTimer from '../components/CountdownTimer'

const meetingDates = [
  { label: 'Workshops & Tutorials Day', date: 'Wed June 3, 2026' },
  { label: 'Main Conference', date: 'Thu June 4 — Sun June 7, 2026' },
  { label: 'Venue', date: 'Colorado Convention Center, Denver, CO' },
]

const importantDatesAndDeadlines = [
  {
    category: 'Papers',
    items: [
      {
        label: 'Abstract Submission Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers',
        date: "Nov 07 '25 (Anywhere on Earth)",
        target: '2025/11/08 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Paper Submission Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers',
        date: "Nov 13 '25 (Anywhere on Earth)",
        target: '2025/11/14 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Enrollment Form Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers',
        date: "Nov 16 '25 (Anywhere on Earth)",
        target: '2025/11/17 11:59:59 UTC',
        past: true,
      },
      {
        label: 'OpenReview Profile Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers',
        date: "Nov 16 '25 (Anywhere on Earth)",
        target: '2025/11/17 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Supplementary Materials Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers',
        date: "Nov 20 '25 (Anywhere on Earth)",
        target: '2025/11/21 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Rebuttal Period Starts',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForPapers',
        date: "Jan 22 '26 (Anywhere on Earth)",
        target: '2026/01/23 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Reviews Released',
        href: null,
        date: "Jan 22 '26 (Anywhere on Earth)",
        target: '2026/01/23 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Rebuttal Period Ends',
        href: null,
        date: "Jan 29 '26 (Anywhere on Earth)",
        target: '2026/01/30 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Final Decisions',
        href: null,
        date: "Feb 20 '26 (Anywhere on Earth)",
        target: '2026/02/21 11:59:59 UTC',
        past: true,
      },
    ],
  },
  {
    category: 'Workshops',
    items: [
      {
        label: 'Workshop Submission Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForWorkshops',
        date: "Nov 03 '25 (Anywhere on Earth)",
        target: '2025/11/04 11:59:59 UTC',
        past: true,
      },
    ],
  },
  {
    category: 'Tutorials',
    items: [
      {
        label: 'Tutorial Submission Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForTutorials',
        date: "Dec 15 '25 (Anywhere on Earth)",
        target: '2025/12/16 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Tutorial Submission Notifications',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForTutorials',
        date: "Feb 10 '26 (Anywhere on Earth)",
        target: '2026/02/11 11:59:59 UTC',
        past: true,
      },
    ],
  },
  {
    category: 'Demos',
    items: [
      {
        label: 'Call for Demos',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForDemos',
        date: "Mar 20 '26 (Anywhere on Earth)",
        target: '2026/03/21 11:59:59 UTC',
        past: false,
      },
      {
        label: 'Demo Acceptance Notification',
        href: null,
        date: "Apr 10 '26",
        target: '2026/04/11 11:59:59 UTC',
        past: false,
      },
    ],
  },
  {
    category: 'Art',
    items: [
      {
        label: 'Art Submission Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForArt',
        date: "Mar 08 '26 (Anywhere on Earth)",
        target: '2026/03/09 11:59:59 UTC',
        past: true,
      },
      {
        label: 'Art Acceptance Notification',
        href: 'https://cvpr.thecvf.com/Conferences/2026/CallForArt',
        date: "Mar 27 '26 (Anywhere on Earth)",
        target: '2026/03/28 11:59:59 UTC',
        past: false,
      },
    ],
  },
  {
    category: 'Broadening Participation',
    items: [
      {
        label: 'Broadening Participation Submission Deadline',
        href: 'https://cvpr.thecvf.com/Conferences/2026/BroadeningParticipation',
        date: "Mar 31 '26 (Anywhere on Earth)",
        target: '2026/04/01 11:59:59 UTC',
        past: false,
      },
    ],
  },
  {
    category: 'Registration',
    items: [
      {
        label: 'Careers Site Opens',
        href: null,
        date: "Feb 07 '26 10:58 PM MST",
        target: '2026/02/08 05:58:00 UTC',
        past: true,
      },
      {
        label: 'Early Registration Deadline',
        href: 'https://cvpr.thecvf.com/Register2',
        date: "Apr 23 '26 06:59 PM UTC",
        target: '2026/04/23 18:59:00 UTC',
        past: false,
      },
      {
        label: 'Careers Site Accepting Applications',
        href: null,
        date: "Jun 07 '26 12:00 AM MDT",
        target: '2026/06/07 06:00:00 UTC',
        past: false,
      },
      {
        label: 'Cancellation Deadline',
        href: null,
        date: "May 13 '26 (Anywhere on Earth)",
        target: '2026/05/14 11:59:59 UTC',
        past: false,
      },
      {
        label: 'Careers Site Closes',
        href: null,
        date: "Jul 07 '26 12:00 AM MDT",
        target: '2026/07/07 06:00:00 UTC',
        past: false,
      },
    ],
  },
]

export default function DatesPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <MeetingDatesSection />
      <FullDatesSection />
    </div>
  )
}

function MeetingDatesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-navy pb-2 mb-4">
        CVPR 2026 Meeting Dates
      </h2>
      <div className="rounded border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {meetingDates.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-200 w-1/2">
                  {item.label}
                </td>
                <td className="px-4 py-3 text-gray-800 border-b border-gray-200">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function FullDatesSection() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-navy pb-2 mb-4">
        Dates and Deadlines
      </h2>

      <div className="space-y-6">
        {importantDatesAndDeadlines.map((group, gi) => (
          <div key={gi}>
            <h3 className="text-sm font-bold text-white bg-navy px-4 py-2 rounded-t">
              {group.category}
            </h3>
            <div className="border border-gray-200 border-t-0 rounded-b overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {group.items.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 border-b border-gray-200">
                        {item.href
                          ? (
                            <a
                              href={item.href}
                              className={`hover:underline ${item.past ? 'text-gray-400 line-through' : 'text-blue-600'}`}
                            >
                              {item.label}
                            </a>
                          )
                          : (
                            <span className={item.past ? 'text-gray-400' : 'text-gray-700'}>
                              {item.label}
                            </span>
                          )
                        }
                      </td>
                      <td className="px-4 py-2.5 border-b border-gray-200 text-right">
                        <div className={`text-xs ${item.past ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.date}
                        </div>
                        {!item.past && (
                          <div className="mt-0.5 flex justify-end">
                            <CountdownTimer targetDate={item.target} />
                          </div>
                        )}
                        {item.past && (
                          <div className="mt-0.5 flex justify-end">
                            <span className="countdown-box text-gray-400">Passed</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-3 text-sm text-gray-700">
        <p>
          <strong>Note:</strong> All times marked "Anywhere on Earth" (AOE) use UTC-12. Other times are
          listed in their respective timezone. Early submission is encouraged.
        </p>
      </div>
    </section>
  )
}
