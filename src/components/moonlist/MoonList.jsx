import MoonLink from '../moonlink/MoonLink';
import styles from './MoonList.module.css';

export default function MoonList({ moons, parentPath, planetTitle }) {
  const isMoonsPath = parentPath === '/moons';

  return (
    <ul className={styles.MoonList}>
      {moons.map(({ id, title }) => (
        <li key={id}>
          <MoonLink
            isMoonsPath={isMoonsPath}
            planetTitle={planetTitle}
            moonTitle={title}
          />
        </li>
      ))}
    </ul>
  );
}
