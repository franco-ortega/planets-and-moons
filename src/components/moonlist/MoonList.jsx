import Link from 'next/link';
import MoonLink from '../moonlink/MoonLink';
import styles from './MoonList.module.css';

export default function MoonList({ planet }) {
  return (
    <ul className={styles.MoonList}>
      {planet.moons.map((moon) => (
        <li key={moon.id}>
          <MoonLink
            planetPath={planet.title.toLowerCase()}
            title={moon.title}
          />
        </li>
      ))}
    </ul>
  );
}
