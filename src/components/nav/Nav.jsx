import navlinks from '../../../data/navlinks';
import NavLink from '../navlink/NavLink';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <ul>
        {navlinks.map((navlink) => (
          <NavLink
            key={navlink.title}
            title={navlink.title}
            path={navlink.path}
          />
        ))}
      </ul>
    </nav>
  );
}
