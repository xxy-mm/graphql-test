import React from 'react'

type ButtonProps = {
  onClick: (...args: any) => void
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <div onClick={onClick}>Button</div>
}
