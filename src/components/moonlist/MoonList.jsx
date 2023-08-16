import MoonLink from '../moonlink/MoonLink';
import styles from './MoonList.module.css';

export default function MoonList({ parentPath, planet }) {
  const isMoonsPath = parentPath === '/moons';

  return (
    <ul className={styles.MoonList}>
      {planet.moons.map(({ id, title }) => (
        <li key={id}>
          <MoonLink
            planetTitle={isMoonsPath ? `planets/${planet.title}` : planet.title}
            moonTitle={title}
          />
        </li>
      ))}
    </ul>
  );
}
