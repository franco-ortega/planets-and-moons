import Link from 'next/link';
import MoonLink from '../moonlink/MoonLink';
import styles from './MoonList.module.css';

export default function MoonList({ planet }) {
  return (
    <ul className={styles.MoonList}>
      {planet.moons.map((moon) => (
        <MoonLink
          key={moon.id}
          planetPath={planet.title.toLowerCase()}
          title={moon.title}
        />
      ))}
    </ul>
  );
}
