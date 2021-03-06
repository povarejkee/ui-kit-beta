import React from 'react'

const Play = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.5V20.99C1.99998 21.2493 2.06719 21.5043 2.19508 21.7299C2.32298 21.9555 2.50718 22.1441 2.72971 22.2773C2.95225 22.4104 3.20551 22.4836 3.46477 22.4897C3.72404 22.4958 3.98046 22.4346 4.209 22.312L20.532 13.567C20.7711 13.4388 20.971 13.2482 21.1103 13.0154C21.2497 12.7826 21.3233 12.5163 21.3233 12.245C21.3233 11.9737 21.2497 11.7075 21.1103 11.4746C20.971 11.2418 20.7711 11.0512 20.532 10.923L4.209 2.178C3.98046 2.05542 3.72404 1.99419 3.46477 2.00028C3.20551 2.00637 2.95225 2.07957 2.72971 2.21275C2.50718 2.34593 2.32298 2.53453 2.19508 2.76014C2.06719 2.98575 1.99998 3.24066 2 3.5V3.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Play
