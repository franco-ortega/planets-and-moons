import MoonLink from '../moonlink/MoonLink';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonList.module.css';

export default function MoonList({ parentPath, planet }) {
  const planetPath = convertTitleForPath(planet.title);
  const isMoonsPath = parentPath === '/moons';

  return (
    <ul className={styles.MoonList}>
      {planet.moons.map(({ id, title }) => (
        <li key={id}>
          <MoonLink
            planetPath={isMoonsPath ? `planets/${planetPath}` : planetPath}
            moonTitle={title}
          />
        </li>
      ))}
    </ul>
  );
}
