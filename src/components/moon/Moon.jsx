import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './Moon.module.css';

export default function Moon({ moonTitle, planetTitle }) {
  const planetPath = convertTitleForPath(planetTitle);

  return (
    <main className={styles.Moon}>
      <p>
        {moonTitle} is a moon of {planetTitle}.
      </p>
      <br />
      <p>
        <Link href={`/planets/${planetPath}`}>Go back to {planetTitle}</Link>.
      </p>
    </main>
  );
}
