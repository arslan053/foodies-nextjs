import LogoImg from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import classes from './main-header.module.css'
import NavLInk from './navLinks/nav-link'

export default function MainHeader(){

  return <header className={classes.header}>
    <Link href="/" className={classes.logo}>
      <Image src={LogoImg} alt='A plate with food on it' />
      NextLevel Food
    </Link>

    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLInk href='/meals'>Browse Meals</NavLInk>
        </li>
        <li>
          <NavLInk href='/community'>Foodies Community</NavLInk>
        </li>
      </ul>
    </nav>
  </header>
}
