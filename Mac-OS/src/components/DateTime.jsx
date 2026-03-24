import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const day = date.toLocaleDateString('en-US', { weekday: 'short' })
  const formattedDay = day === 'Tue' ? 'Tues' : day
  const dayOfMonth = String(date.getDate()).padStart(2, '0')
  const time = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return `${formattedDay} ${dayOfMonth} ${time}`
}

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(() =>
    formatDateTime(new Date())
  )

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(formatDateTime(new Date()))
    }

    updateDateTime()
    const intervalId = setInterval(updateDateTime, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return <div>{currentDateTime}</div>
}

export default DateTime