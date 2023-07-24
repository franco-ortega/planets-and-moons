import NavLink from '../navlink/NavLink';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Planets</li>
        <li>Moons</li>
        <NavLink title={'Home'} path={'/'} />
        <NavLink title={'Planets'} path={'/planets'} />
        <NavLink title={'Moons'} path={'/moons'} />
      </ul>
    </nav>
  );
}
