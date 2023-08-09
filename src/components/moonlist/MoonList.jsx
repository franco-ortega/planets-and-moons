import MoonLink from '../moonlink/MoonLink';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonList.module.css';

export default function MoonList({ planet }) {
  return (
    <ul className={styles.MoonList}>
      {planet.moons.map(({ id, title }) => (
        <li key={id}>
          <MoonLink
            planetPath={convertTitleForPath(planet.title)}
            title={title}
          />
        </li>
      ))}
    </ul>
  );
}
