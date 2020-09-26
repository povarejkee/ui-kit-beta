import React from 'react'

const ZoomOut = props => {
  const { className } = props

  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        d="M4 7H10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M11.5 11.5L15 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M13 6.99934V7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C7.00044 1 7.00088 1 7.00132 1H7.00132C10.3143 1.00073 12.9996 3.6864 13 6.99934V6.99934Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ZoomOut
