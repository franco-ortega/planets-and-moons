'use client';

import MoonLink from '../moonlink/MoonLink';
import planets from '../../../data/planets';
import styles from './MoonTable.module.css';
import MoonList from '../moonlist/MoonList';
import { usePathname } from 'next/navigation';

export default function MoonTable() {
  const parentPath = usePathname();

  return (
    <ul className={styles.MoonTable}>
      {planets.map((planet) => (
        <li key={planet.id}>
          {planet.title}:{' '}
          {/* <ul>
            {planet.moons.map((moon) => (
              <li key={moon.id}>
                <MoonLink
                  moonTitle={moon.title}
                  planetPath={`planets/${planet.title.toLowerCase()}`}
                />
              </li>
            ))}
          </ul> */}
          <MoonList parentPath={parentPath} planet={planet} />
        </li>
      ))}
    </ul>
  );
}
