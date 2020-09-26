import React from 'react'

const AwardRibbonStar = props => {
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
        d="M17.6569 3.34314C20.781 6.46733 20.781 11.5326 17.6569 14.6569C14.5327 17.781 9.46736 17.781 6.34314 14.6569C3.21895 11.5327 3.21895 6.46736 6.34314 3.34314C9.46733 0.218952 14.5326 0.218952 17.6569 3.34314"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M15.5 16.5L17 23L12 19.957L7 23L8.5 16.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill="none"
        d="M12.5313 4.29198L13.7793 6.74998H15.9063C16.2276 6.74214 16.4944 6.99627 16.5023 7.3176C16.5063 7.48013 16.4421 7.63691 16.3253 7.74998L14.3733 9.66798L15.4543 12.153C15.58 12.453 15.4387 12.7981 15.1387 12.9239C14.9685 12.9952 14.7748 12.9826 14.6153 12.89L12.0003 11.419L9.38526 12.89C9.10395 13.0533 8.74348 12.9577 8.58013 12.6764C8.48749 12.5169 8.47495 12.3231 8.54626 12.153L9.62826 9.66798L7.67526 7.74598C7.44431 7.52243 7.43831 7.15397 7.66187 6.92302C7.77495 6.80621 7.93173 6.74202 8.09426 6.74599H10.2213L11.4703 4.29199C11.6251 3.999 11.9881 3.88698 12.2811 4.04179C12.3877 4.09814 12.4749 4.18533 12.5313 4.29198Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AwardRibbonStar
