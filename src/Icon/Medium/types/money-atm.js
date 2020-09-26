import React from 'react'

const MoneyAtm = props => {
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
        d="M18 23H6V5H18V23Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12 9V8.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12 19.5V19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M3.2 9H1.73333V9C1.32832 9 1 8.64183 1 8.2V1.8V1.8C1 1.35817 1.32833 1 1.73333 1H22.2667V1C22.6717 1 23 1.35817 23 1.8V8.2V8.2C23 8.64183 22.6717 9 22.2667 9C22.2667 9 22.2667 9 22.2667 9H20.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="2" strokeWidth="2" fill="none" />
    </svg>
  )
}

export default MoneyAtm
