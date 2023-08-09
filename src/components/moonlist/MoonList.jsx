import MoonLink from '../moonlink/MoonLink';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonList.module.css';

export default function MoonList({ planet }) {
  const planetPath = convertTitleForPath(planet.title);

  return (
    <ul className={styles.MoonList}>
      {planet.moons.map(({ id, title }) => (
        <li key={id}>
          <MoonLink planetPath={planetPath} moonTitle={title} />
        </li>
      ))}
    </ul>
  );
}
