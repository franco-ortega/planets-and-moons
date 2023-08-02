import Link from 'next/link';

export default function MoonList() {
  return (
    <ul>
      {planet.moons.map((moon) => (
        <li key={planet.title + moon}>
          <Link href={`${planet.path}/${moon}`}>{moon}</Link>
        </li>
      ))}
    </ul>
  );
}
