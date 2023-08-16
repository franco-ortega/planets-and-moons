'use client';

import { usePathname } from 'next/navigation';
import planets from '../../../data/planets';
import MoonList from '../moonlist/MoonList';
import styles from './MoonTable.module.css';

export default function MoonTable() {
  const parentPath = usePathname();

  return (
    <ul className={styles.MoonTable}>
      {planets.map((planet) => (
        <li key={planet.id}>
          {planet.title}:{' '}
          <MoonList
            moons={planet.moons}
            parentPath={parentPath}
            planetTitle={planet.title}
          />
        </li>
      ))}
    </ul>
  );
}
