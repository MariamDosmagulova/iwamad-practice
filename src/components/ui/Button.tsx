import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
    return <button type="button" className={`btn btn-${variant} ${className}`} {...props} />
}