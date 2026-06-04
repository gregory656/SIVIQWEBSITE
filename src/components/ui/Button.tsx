import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
}

const styles = {
  primary: 'bg-[#0B6E4F] text-white hover:bg-[#095f45]',
  secondary: 'border border-[#0B6E4F] bg-white text-[#0B6E4F] hover:bg-[#edf7f2]',
  ghost: 'bg-transparent text-[#0B6E4F] hover:bg-[#edf7f2]',
}

export function Button({ children, href, disabled, variant = 'primary', type = 'button' }: ButtonProps) {
  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${
    disabled ? 'cursor-not-allowed opacity-55' : ''
  }`

  if (href && !disabled) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} disabled={disabled} type={type}>
      {children}
    </button>
  )
}
