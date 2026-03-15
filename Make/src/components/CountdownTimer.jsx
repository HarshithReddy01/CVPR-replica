import { useState, useEffect } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function getTimeLeft(targetDate) {
  const now = Date.now()
  const target = new Date(targetDate).getTime()
  const diff = target - now

  if (diff <= 0) return null

  const totalSeconds = Math.floor(diff / 1000)
  const weeks = Math.floor(totalSeconds / (7 * 24 * 3600))
  const days = Math.floor((totalSeconds % (7 * 24 * 3600)) / (24 * 3600))
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { weeks, days, hours, minutes, seconds }
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (!timeLeft) return <span className="countdown-box text-gray-400">Passed</span>

  return (
    <span className="countdown-box">
      {timeLeft.weeks}w {timeLeft.days}d {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
    </span>
  )
}
