import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './button.module.css'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}
export function Button(props: ButtonProps) {
  const { children, ...rect } = props
  return (
    <button className={styles.button} {...rect}>
      {children}
    </button>
  )
}
