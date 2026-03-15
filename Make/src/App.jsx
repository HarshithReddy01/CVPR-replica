import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TopNavbar from './components/TopNavbar'
import SubNavbar from './components/SubNavbar'
import Footer from './components/Footer'
import ConferencePage from './pages/ConferencePage'
import DatesPage from './pages/DatesPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <TopNavbar />
        <SubNavbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ConferencePage />} />
            <Route path="/dates" element={<DatesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
