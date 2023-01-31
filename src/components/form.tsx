import { PropsWithChildren } from 'react'
import styles from './form.module.css'

export function FormGroup({ children, reverse }: PropsWithChildren<{reverse?: boolean}>) {
  return (
    <div className={`${styles.group} ${reverse && styles.reverse}`}>
      {children}
    </div>
  )
}

export function FormLabel({ children }: PropsWithChildren) {
  return (
    <div className={styles.label}>
      {children}
    </div>
  )
}

export function FormInput({ children }: PropsWithChildren) {
  return (
    <div className={styles.input}>
      {children}
    </div>
  )
}
