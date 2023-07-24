import Link from 'next/link';

export default function NavLink({ title, path }) {
  return (
    <li>
      <Link href={path}>{title}</Link>
    </li>
  );
}
