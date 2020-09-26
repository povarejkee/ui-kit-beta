import React from 'react'

const Book = props => {
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
        d="M8.66873 14.78C10.3441 13.4114 12.3955 12.542 14.5735 12.2775C15.1044 12.21 15.5012 11.7733 15.501 11.2566V4.03936C15.5027 3.46699 15.0232 3.00166 14.4299 3C14.3789 2.99986 14.328 3.00323 14.2775 3.01007C12.2085 3.31835 10.2677 4.17136 8.66873 5.47522C8.27519 5.76987 7.72476 5.76987 7.33122 5.47522C5.73259 4.17237 3.79257 3.32006 1.72447 3.012C1.137 2.93241 0.593895 3.32738 0.511411 3.89419C0.504412 3.94229 0.500926 3.99079 0.500977 4.03936V11.2566C0.500792 11.7733 0.897621 12.2101 1.42854 12.2775C3.6072 12.5417 5.65933 13.4111 7.33522 14.78C7.72773 15.0733 8.27622 15.0733 8.66873 14.78Z"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M13.501 0.5C11.7324 0.830325 10.0865 1.45386 8.68556 2.32422C8.28069 2.55859 7.7144 2.55859 7.30953 2.32422C5.9107 1.45456 4.26714 0.831219 2.50098 0.500512"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M8.00098 6V14" fill="none" strokeLinejoin="round" />
    </svg>
  )
}

export default Book