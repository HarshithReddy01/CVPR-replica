import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'

const announcements = [
  {
    date: 'Mar 9',
    title: 'Call for Broadening Participation',
    href: null,
    body: (
      <p>
        <a href="https://cvpr.thecvf.com/Conferences/2026/BroadeningParticipation" className="text-blue-600 hover:underline">
          Submission deadline is Mar 31, 2026 AOE, read more here.
        </a>
      </p>
    ),
  },
  {
    date: 'Mar 6',
    title: 'Call for Demonstrations',
    href: null,
    body: (
      <p>
        <a href="https://cvpr.thecvf.com/Conferences/2026/CallForDemos" className="text-blue-600 hover:underline">
          Submission deadline is Mar 20, 2026 AOE, read more here.
        </a>
      </p>
    ),
  },
  {
    date: 'Nov 30',
    title: 'Message from PCs regarding OpenReview security incident',
    href: null,
    body: (
      <div className="space-y-2 text-sm">
        <p>
          On November 27, 2025, the CVPR 2026 Program Chairs were informed of a security vulnerability
          in OpenReview that temporarily exposed the identities of normally anonymous roles (authors,
          reviewers, and area chairs) across venues using the platform. The OpenReview team responded
          quickly, deploying a fix within one hour of being informed. Full details of the incident are
          available at{' '}
          <a href="https://openreview.net/forum?id=userIstatement_regarding_api_security_incident" className="text-blue-600 hover:underline">
            https://openreview.net/forum/userIstatement_regarding_api_security_incident
          </a>.
        </p>
        <p>
          <strong>Status for CVPR 2026:</strong> There is no evidence that any reviewer or area chair
          identities were compromised for CVPR 2026, as no reviewers or area chairs had been assigned
          to papers during the vulnerability window.
        </p>
        <p>
          <strong>Our Policy:</strong> Any use, exploitation, or sharing of information obtained through
          this security incident (whether before or after this notice) is a violation of the CVPR Code
          of Conduct and CVPR 2026 review process guidelines. Such violations will result in immediate
          desk rejection of all related submissions and multi-year bans from CVPR.
        </p>
        <p>
          <strong>Reporting Misconduct:</strong> If you have been contacted, threatened, or offered
          compensation by any party in connection with this incident, or if you become aware of any
          misuse of confidential information, please report it immediately to the CVPR 2026 Program
          Chairs using the Help Desk contact form available from{' '}
          <a href="https://support.conferences.computer.org/cvpr/help-desk" className="text-blue-600 hover:underline">
            https://support.conferences.computer.org/cvpr/help-desk
          </a>.
        </p>
        <p>
          Any form of harassment, retaliation, or use of leaked information in any way will not be
          tolerated and will result in the maximum penalties defined by our Code of Conduct.
        </p>
        <p>
          We will continue to monitor this situation and provide updates as necessary. We remain
          committed to maintaining the integrity of the CVPR peer review process.
        </p>
      </div>
    ),
  },
  {
    date: 'Nov 13',
    title: 'Update on full paper & compute form submission issue',
    href: null,
    body: (
      <p className="text-sm">
        We would like to inform authors that the OR submission system requires the submission of a
        compute reporting form along with any updates to the full paper. We have identified this as a
        system-related issue. As a workaround, authors can submit a &ldquo;dummy&rdquo; compute form,
        which can be edited until the Supplemental Material submission deadline. We apologize for any
        inconvenience this may cause.
      </p>
    ),
  },
  {
    date: 'Nov 7',
    title: 'Important Update: New Separate Deadlines for CVPR 2026',
    href: null,
    body: (
      <div className="text-sm space-y-1">
        <p>
          To improve system stability and provide a clearer submission process, we have introduced two
          new deadlines that are now separate from the Abstract and the Paper Submission deadlines:
        </p>
        <ul className="list-disc ml-5 space-y-0.5">
          <li>
            <strong>Enrollment Form Deadline: Nov 16, 11:59pm AoE</strong> &mdash; complete your
            Author, Reviewer, Area Chair, and/or Senior Area Chair Enrollment Form(s)
          </li>
          <li>
            <strong>OpenReview Profile Deadline: Nov 16, 11:59pm AoE</strong> &mdash; ensure your
            OpenReview profile is complete and up-to-date
          </li>
        </ul>
        <p>Thank you for your cooperation in helping us maintain a stable and efficient submission system.</p>
        <p>
          For support requests, please use the{' '}
          <a href="#ContactUs" className="text-blue-600 hover:underline">Contact Us</a>
          {' '}option below rather than contacting Program Chairs individually.
        </p>
      </div>
    ),
  },
  {
    date: 'Nov 7',
    title: 'Important Update: Abstract Submission Deadline Extended',
    href: null,
    body: (
      <div className="text-sm space-y-1">
        <p>
          Due to an unexpected system issues prior to the abstract submission deadline, we are
          extending author registration and abstract submission by 24h until Nov 07, 2025 (Anywhere
          on Earth). We are working to restore access as quickly as possible.
        </p>
        <p>
          Please note, however, that the paper submission deadline remains firm at Nov 13, 2025
          (Anywhere on Earth), and cannot be extended under any circumstances. We encourage you to
          submit your papers early to ensure a smooth process.
        </p>
        <p>
          We sincerely thank all authors for your understanding and patience during this period.
          Please stay tuned for further updates on this page and on our official X account:{' '}
          <a href="https://x.com/CVPR" className="text-blue-600 hover:underline">https://x.com/CVPR</a>
        </p>
      </div>
    ),
  },
  {
    date: 'Nov 5',
    title: null,
    href: null,
    body: (
      <p className="text-sm">
        <strong>Nov 5</strong>:{' '}
        <a href="https://cvpr.thecvf.com/Conferences/2026/ComputeReportingClarification" className="text-blue-600 hover:underline">
          Compute Reporting Form - Clarification
        </a>
      </p>
    ),
  },
  {
    date: 'Oct 22',
    title: null,
    href: null,
    body: (
      <p className="text-sm">
        <strong>Oct 22</strong>:{' '}
        <a href="https://openreview.net/group" className="text-blue-600 hover:underline">OpenReview Submission link</a>
        {' '}added to the{' '}
        <a href="https://cvpr.thecvf.com/Conferences/2026/CallForWorkshops" className="text-blue-600 hover:underline">call for workshops</a>.
        {' '}The submission site is now accepting applications
      </p>
    ),
  },
  {
    date: 'Oct 8',
    title: null,
    href: null,
    body: (
      <p className="text-sm">
        <strong>Oct 8</strong>:{' '}
        <a href="https://cvpr.thecvf.com/Conferences/2026/CallForWorkshops" className="text-blue-600 hover:underline">Call for Workshops</a>
        {' '}is posted
      </p>
    ),
  },
  {
    date: 'Oct 1',
    title: null,
    href: null,
    body: (
      <p className="text-sm">
        <strong>Oct 1</strong>:{' '}
        <a href="https://cvpr.thecvf.com/Conferences/2026/CallForPapers" className="text-blue-600 hover:underline">Call for Papers</a>
        {' '}is posted
      </p>
    ),
  },
]

const importantDates = [
  {
    label: 'WorkshopSubmissionDeadline',
    href: 'https://cvpr.thecvf.com/Conferences/2026/CallForWorkshops',
    date: "Nov 03 '25 (Anywhere on Earth)",
    target: '2025/11/04 11:59:59 UTC',
    past: true,
  },
  {
    label: 'Call for Demos',
    href: 'https://cvpr.thecvf.com/Conferences/2026/CallForDemos',
    date: "Mar 20 '26 (Anywhere on Earth)",
    target: '2026/03/21 11:59:59 UTC',
    past: false,
  },
  {
    label: 'EarlyRegistrationDeadline',
    href: 'https://cvpr.thecvf.com/Register2',
    date: "Apr 23 '26 12:59 PM MDT *",
    target: '2026/04/23 18:59:00 UTC',
    past: false,
  },
  {
    label: 'CancellationDeadline',
    href: null,
    date: "May 13 '26 (Anywhere on Earth)",
    target: '2026/05/14 11:59:59 UTC',
    past: false,
  },
]

export default function ConferencePage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-2" style={{ paddingLeft: '10%' }}>
        <TopSection />
      </div>
      <div className="mx-auto px-4 pb-16" style={{ marginTop: -120, width: '80%' }}>
        <div className="flex flex-col gap-6">
          <AnnouncementsSection />
          <ImportantDatesSection />
        </div>
        <UkraineStatement />
        <hr className="my-6" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw', borderTopWidth: 2, borderColor: '#9ca3af' }} />
        <ContactSection />
      </div>
    </div>
  )
}

function TopSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8 min-h-[420px]">
      <div className="w-full lg:w-[48%] flex flex-col justify-start pt-2">
        <p className="text-blue-700 text-base mb-4 leading-snug">
          <a href="https://cvpr.thecvf.com/Conferences/2026" className="hover:underline">
            The IEEE/CVF Conference on Computer Vision and Pattern Recognition 2026
          </a>
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          <a
            href="https://cvpr.thecvf.com/Conferences/2026/Pricing2"
            className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold px-5 py-2 rounded-md text-sm transition-colors"
          >
            Register
          </a>
          <a
            href="https://cvpr.thecvf.com/Conferences/2026/Hotels"
            className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold px-5 py-2 rounded-md text-sm transition-colors"
          >
            Book Hotel
          </a>
        </div>

        <hr className="border-gray-300 my-3" />

        <div>
          <a
            href="https://cvpr.thecvf.com/Conferences/2026/Workshops"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded text-sm transition-colors"
          >
            Workshops
          </a>
        </div>
      </div>

      <div className="w-full lg:w-[52%] flex flex-col items-start gap-2">
        <div className="text-left">
          <p className="text-base font-semibold text-gray-800">Wed June 3 - Sun June 7, 2026</p>
          <p className="text-sm text-gray-600">at the Colorado Convention Center</p>
        </div>
        <ConferenceImage />
      </div>
    </div>
  )
}

function ConferenceImage() {
  return (
    <div className="rounded overflow-hidden" style={{ width: 390, maxWidth: '100%' }}>
      <img
        src={`${import.meta.env.BASE_URL}image.png`}
        alt="Denver Skyline - CVPR 2026 June 3-7"
        className="w-full object-cover rounded"
        style={{ maxHeight: 260, minHeight: 200 }}
        onError={e => {
          e.target.onerror = null
          e.target.src = 'https://cvpr.thecvf.com/static/core/img/CVPR_2026_BannerImage.jpg'
        }}
      />
    </div>
  )
}

function AnnouncementsSection() {
  return (
    <div className="rounded p-4 mb-4" style={{ backgroundColor: '#eeeeee' }}>
      <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-400 pb-1 mb-3">
        Announcements
      </h3>
      <div className="space-y-3">
        {announcements.map((item, i) => (
          <div key={i} className="text-base">
            {item.title && (
              <p className="font-bold text-gray-800 mb-0.5">
                {item.date}: {item.title}
              </p>
            )}
            {item.body && <div className="text-gray-700">{item.body}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

function ImportantDatesSection() {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
      <table className="w-full text-sm border-collapse">
        <tbody>
          {importantDates.map((item, i) => (
            <tr key={i} className={`border-b border-gray-200 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
              <td className="py-1.5 pr-4">
                {item.href
                  ? (
                    <a
                      href={item.href}
                      className={`hover:underline ${item.past ? 'text-gray-400' : 'text-blue-600'}`}
                    >
                      {item.label}
                    </a>
                  )
                  : (
                    <span className={item.past ? 'text-gray-500' : 'text-gray-700'}>
                      {item.label}
                    </span>
                  )
                }
              </td>
              <td className={`py-1.5 pr-4 whitespace-nowrap ${item.past ? 'text-gray-400' : 'text-gray-700'}`}>
                {item.date}
              </td>
              <td className="py-1.5 text-right whitespace-nowrap">
                <CountdownTimer targetDate={item.target} />
              </td>
            </tr>
          ))}
          <tr className={`border-b border-gray-200 ${importantDates.length % 2 === 1 ? 'bg-gray-50' : ''}`}>
            <td className="py-1.5 pr-4">
              <Link to="/dates" className="text-blue-600 hover:underline">
                All dates
              </Link>
            </td>
            <td className="py-1.5 text-gray-600 text-sm">
              Timezone:
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function UkraineStatement() {
  return (
    <div className="rounded bg-gray-100 border border-gray-300 p-4 mb-4 text-base text-gray-700">
      <h3 className="text-xl font-bold mb-1 text-gray-800">Russian Invasion of Ukraine</h3>
      <p>
        CVPR condemns in the strongest possible terms the actions of the Russian Federation government
        in invading the sovereign state of Ukraine and engaging in war against the Ukrainian people.
        We express our solidarity and support for the people of Ukraine and for all those who have
        been adversely affected by this war.
      </p>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="pt-2 pb-8" id="ContactUs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="mb-1">
            <a href="https://support.conferences.computer.org/cvpr/help-desk" className="text-blue-600 hover:underline font-semibold">
              CVPR Help Desk
            </a>
          </p>
          <p className="text-gray-600 mb-2">Please contact us with questions about the following topics:</p>
          <p className="text-gray-700 mb-3">
            Author - Paper Submission, Author - Open Review Issues, Author - Camera-Ready Paper,
            Registration - General, Registration - Cancellation, Childcare/Guests, Expo/Guests,
            Lodging, Visa Letter, Reviewer - Open Review Issues, Reviewer - General Issues, Area Chair Issues,
          </p>
          <p className="mb-1">
            <a href="https://support.conferences.computer.org/cvpr/help-desk" className="text-blue-600 hover:underline font-semibold">
              Website and Invitation Letter Help
            </a>
          </p>
          <p className="text-gray-600">
            Use the website help link for issues including login, inactive accounts, invitation letters,
            and papers not associated with a registration.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Useful Links</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <IeeeComputerSocietyBadge />
              <a href="https://www.computer.org/" className="text-blue-600 hover:underline">
                IEEE Computer Society
              </a>
            </div>
            <div className="flex items-center gap-3">
              <CvfBadge />
              <a href="https://www.thecvf.com/" className="text-blue-600 hover:underline">
                The Computer Vision Foundation
              </a>
            </div>
            <ul className="space-y-1 mt-2">
              <li>
                <a href="https://openaccess.thecvf.com/CVPR2026" className="text-blue-600 hover:underline">
                  CVPR Proceedings
                </a>
              </li>
              <li>
                <a href="https://cvpr.thecvf.com/Conferences/2026/CodeOfConduct" className="text-blue-600 hover:underline">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="https://openaccess.thecvf.com/" className="text-blue-600 hover:underline">
                  CVF Proceedings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function IeeeComputerSocietyBadge() {
  return (
    <div
      className="flex-shrink-0 rounded-md bg-yellow-500 flex items-center justify-center text-white font-bold"
      style={{ width: 38, height: 38, fontSize: 7.5, lineHeight: 1.2, textAlign: 'center', padding: 3 }}
    >
      <span>IEEE<br />COMPUTER<br />SOCIETY</span>
    </div>
  )
}

function CvfBadge() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center border-2 border-gray-500 rounded font-bold text-gray-700"
      style={{ width: 38, height: 38, fontSize: 13 }}
    >
      CVF
    </div>
  )
}
