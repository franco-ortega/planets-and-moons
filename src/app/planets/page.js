import PlanetList from '@/components/planetlist/PlanetList';
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.main}>
      <h2>Planets of the Solar System</h2>
      <PlanetList />
    </main>
  );
}
