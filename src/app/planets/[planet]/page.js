'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import planets from '../../../../data/planets';
import convertTitleForPath from '@/utils/convertTitleForPath';
import MoonList from '@/components/moonlist/MoonList';
import styles from './page.module.css';
import NoMoons from '@/components/nomoons/NoMoons';

export default function Planet() {
  const params = useParams();
  const parentPath = usePathname();

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
          <NoMoons />
        ) : (
          <MoonList moons={moons} parentPath={parentPath} planetTitle={title} />
        )}
      </ul>
      <p className={styles.link}>
        <Link href={'/planets/'}>Go back to Planets</Link>.
      </p>
    </main>
  );
}
