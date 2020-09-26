import React from 'react'

const ZoomIn = props => {
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
        d="M5 10.0002H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M10 15.0001V5.00006"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M17 17L23 23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M19 9.99901V10C19 14.9706 14.9706 19 10 19C5.02943 19 1 14.9706 1 10C1 5.02943 5.02943 1 10 1C10.0007 1 10.0013 1 10.002 1H10.002C14.9714 1.0011 18.9995 5.0296 19 9.99901V9.99901Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ZoomIn
