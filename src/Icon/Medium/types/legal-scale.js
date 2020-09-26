import React from 'react'

const LegalScale = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M3 6H21" strokeWidth="2" strokeLinecap="round" />
      <path
        fill="none"
        d="M2 18L6 7L10 18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fill="none"
        d="M10.5 18C10.5 19.0609 10.0259 20.0783 9.18198 20.8284C8.33807 21.5786 7.19347 22 6 22C4.80653 22 3.66193 21.5786 2.81802 20.8284C1.97411 20.0783 1.5 19.0609 1.5 18H10.5Z"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fill="none"
        d="M14 18L18 7L22 18"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fill="none"
        d="M22.5 18C22.5 19.0609 22.0259 20.0783 21.182 20.8284C20.3381 21.5786 19.1935 22 18 22C16.8065 22 15.6619 21.5786 14.818 20.8284C13.9741 20.0783 13.5 19.0609 13.5 18H22.5Z"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path fill="none" d="M12 6V2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default LegalScale
