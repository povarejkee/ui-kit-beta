import React from 'react'

const Calendar = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M2.46667 22C1.65666 22 1 21.3801 1 20.6154V5.38462C1 4.61992 1.65666 4 2.46667 4H21.5333C22.3433 4 23 4.61992 23 5.38462V20.6154C23 21.3801 22.3433 22 21.5333 22H2.46667Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M1.75 10H22.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M7 6V2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M17 6V2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Calendar
