import { faHome, faSearch, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import styles from './common.module.css'

export function Page({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <>
      <div className={styles.navbar}>
        <div className={`${styles.header} ${styles.container}`}>
          <Link href="/">
            <div className={styles.brand}>
              <span />
            </div>
          </Link>
          <div className={styles.menu}>
            <li>
              <Link href="/">
                <div className={`${styles.menuitem} ${'/' === pathname ? styles.selected : ''}`}>
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                    Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/owners/find">
                <div className={`${styles.menuitem} ${'/owners/find' === pathname ? styles.selected : ''}`}>
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                    Find Owners
                </div>
              </Link>
            </li>
            <li>
              <Link href="/vets">
                <div className={`${styles.menuitem} ${'/vets' === pathname ? styles.selected : ''}`}>
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faList} />
                  </span>
                    Veterinarians
                </div>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className={`${styles.main} ${styles.container}`}>
        {/* TODO ErrorBoundary で囲む */}
        {children}
      </div>
    </>
  )
}

export function CommonMeta({ title = 'Petclinic', description = 'This is Petclinic Application' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
