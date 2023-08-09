import MoonLink from '../moonlink/MoonLink';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonList.module.css';

export default function MoonList({ planet }) {
  return (
    <ul className={styles.MoonList}>
      {planet.moons.map((moon) => (
        <li key={moon.id}>
          <MoonLink
            planetPath={convertTitleForPath(planet.title)}
            title={moon.title}
          />
        </li>
      ))}
    </ul>
  );
}
