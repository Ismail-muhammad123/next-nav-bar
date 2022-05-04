import Link from 'next/link'
import styles from  '../styles/navStyles.module.css'



const Nav = () => {
  return (
    <nav>
        <ul className={styles.nav}>
            <li className={styles.navLink}>
                <Link href='/'>Home</Link>
            </li>
            <li  className={styles.navLink}>
                <Link href='/about'>About</Link>
            </li>
            <li  className={styles.navLink}>
                <Link href='/team'>Our Team</Link>
            </li>
            <li  className={styles.navLink}>
                <Link href='/contact'>Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav