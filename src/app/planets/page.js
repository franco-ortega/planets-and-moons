import PlanetLink from '@/components/planetlink/PlanetLink';
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.main}>
      <h2>Planets</h2>
      <ul>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
      </ul>
    </main>
  );
}
