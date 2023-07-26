import navlinks from '../../../data/navlinks';
import NavLink from '../navlink/NavLink';

export default function Nav() {
  return (
    <nav>
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
