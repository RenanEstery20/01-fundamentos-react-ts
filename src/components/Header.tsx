import styles from './Header.module.css';
import logoIgnite from '../assets/IgniteLogo.svg';
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logo do ignite" />
    </header>
  );
}
