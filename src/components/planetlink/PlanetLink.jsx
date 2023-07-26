import Link from 'next/link';
import styles from './PlanetLink.module.css';

export default function PlanetLink({ path, title }) {
  return (
    <Link href={`/planets/${path}`}>
      <button className={styles.PlanetLink}>{title}</button>
    </Link>
  );
}
