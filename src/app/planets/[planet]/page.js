'use client';

import { useParams } from 'next/navigation';
import planetData from '../../../../data/planets';
import Link from 'next/link';

export default function Planet() {
  const params = useParams();

  const planet = planetData.find((planet) => planet.path === params.planet);

  console.log(planet.moons);

  return (
    <div>
      <p>This is planet {planet.title}.</p>
      <p>Info: {planet.info}</p>
      <ul>
        {planet.moons.map((moon) => (
          <li key={moon.id}>
            <Link href={`${planet.path}/moons/${moon.path}`}>{moon.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
