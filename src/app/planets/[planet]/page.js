'use client';

import { useParams } from 'next/navigation';
import planetData from '../../../../data/planets';
import Link from 'next/link';

export default function Planet() {
  const params = useParams();

  const planet = planetData.find((planet) => planet.path === params.planet);

  return (
    <div>
      <p>This is planet {planet.title}.</p>
      <p>Info: {planet.info}</p>
      <ul>
        {planet.moons.map((moon) => (
          <li key={planet.title + moon}>
            <Link href={`${planet.path}/${moon}`}>{moon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
