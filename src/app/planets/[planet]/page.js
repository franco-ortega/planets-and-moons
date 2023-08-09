'use client';

import { useParams } from 'next/navigation';
import planetData from '../../../../data/planets';
import convertTitleForPath from '@/utils/convertTitleForPath';
import MoonList from '@/components/moonlist/MoonList';
import styles from './page.module.css';

export default function Planet() {
  const params = useParams();

  const planet = planetData.find(
    (planet) => convertTitleForPath(planet.title) === params.planet
  );
  const planetPath = convertTitleForPath(planet.title);

  return (
    <main className={styles.main}>
      <p>This is planet {planet.title}.</p>
      <p>Info: {planet.info}</p>
      <ul>
        {planet.moons.length === 0 ? (
          <p>This planet has no moons.</p>
        ) : (
          <MoonList planet={planet} />
        )}
      </ul>
    </main>
  );
}
