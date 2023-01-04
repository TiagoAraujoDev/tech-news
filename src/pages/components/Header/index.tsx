import Link from 'next/link'
import { useState } from 'react'
import { FaCode } from 'react-icons/fa'

import SignInButon from '../SignInButton'

import styles from './styles.module.scss'

export const Header = () => {
  const [active, setActive] = useState<'home' | 'posts'>('home')
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <span>TechNews</span>
          <FaCode size={24} />
        </div>
        <nav>
          <Link
            onClick={() => setActive('home')}
            href="/"
            className={active === 'home' ? styles.linkActive : ''}
          >
            Home
          </Link>
          <Link
            onClick={() => setActive('posts')}
            href="/posts"
            className={active === 'posts' ? styles.linkActive : ''}
          >
            Posts
          </Link>
        </nav>
        <SignInButon />
      </div>
    </header>
  )
}
