import MoonLink from '../moonlink/MoonLink';
import styles from './MoonList.module.css';

export default function MoonList({ moons, planetTitle }) {
  return (
    <ul className={styles.MoonList}>
      {moons.map(({ id, title }) => (
        <li key={id}>
          <MoonLink planetTitle={planetTitle} moonTitle={title} />
        </li>
      ))}
    </ul>
  );
}
