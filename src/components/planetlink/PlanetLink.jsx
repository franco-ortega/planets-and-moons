import Link from 'next/link';
import styles from './PlanetLink.module.css';

export default function PlanetLink({ path, title }) {
  return (
    <button className={styles.PlanetLink}>
      <Link href={`/planets/${path}`}>{title}</Link>
    </button>
  );
}
