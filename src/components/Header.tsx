import styles from './Header.module.css'
import Logo from '../../src/assets/logo.svg'


export function Header() {


  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo ToDo" />
    </header>
  )
}