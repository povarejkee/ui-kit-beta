import React from 'react'

const TimeLine = props => {
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
        d="M2.5 16L9.5 9L14.5 14L20.5 8"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="3.5" cy="15" r="2" stroke="none" />
      <circle cx="9.5" cy="9.5" r="2" stroke="none" />
      <circle cx="14.5" cy="13.5" r="2" stroke="none" />
      <circle cx="20.5" cy="8" r="2" stroke="none" />
    </svg>
  )
}

export default TimeLine
