'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import planetData from '../../../../data/planets';
import convertTitleForPath from '@/utils/convertTitleForPath';

export default function Planet() {
  const params = useParams();

  const planet = planetData.find((planet) => planet.path === params.planet);
  const planetPath = convertTitleForPath(planet.title);

  return (
    <div>
      <p>This is planet {planet.title}.</p>
      <p>Info: {planet.info}</p>
      <ul>
        {planet.moons.length === 0 ? (
          <p>This planet has no moons.</p>
        ) : (
          planet.moons.map(({ id, title }) => (
            <li key={id}>
              <Link href={`${planetPath}/moons/${convertTitleForPath(title)}`}>
                {title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
