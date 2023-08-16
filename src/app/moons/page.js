import MoonTable from '@/components/moontable/MoonTable';
import styles from './page.module.css';

export default function page() {
  return (
    <main className={styles.main}>
      <h2>Moons</h2>
      <MoonTable />
    </main>
  );
}
