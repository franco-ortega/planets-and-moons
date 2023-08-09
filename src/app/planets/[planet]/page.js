'use client';

import { useParams } from 'next/navigation';
import planets from '../../../../data/planets';
import convertTitleForPath from '@/utils/convertTitleForPath';
import MoonList from '@/components/moonlist/MoonList';
import styles from './page.module.css';

export default function Planet() {
  const params = useParams();

  const planet = planets.find(
    (planet) => convertTitleForPath(planet.title) === params.planet
  );

  const { title, info, moons } = planet;

  return (
    <main className={styles.main}>
      <p>This is planet {title}.</p>
      <p>Info: {info}</p>
      <ul>
        {moons.length === 0 ? (
          <p>This planet has no moons.</p>
        ) : (
          <MoonList planet={planet} />
        )}
      </ul>
    </main>
  );
}
