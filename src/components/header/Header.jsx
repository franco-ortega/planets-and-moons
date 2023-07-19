import Nav from '../nav/Nav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>Hello Universe</h1>
      <Nav />
    </header>
  );
}
