import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonLink.module.css';

export default function MoonLink({ planetPath, moonTitle }) {
  const moonPath = convertTitleForPath(moonTitle);

  return (
    <Link href={`${planetPath}/moons/${moonPath}`}>
      <div className={styles.MoonLink}>{moonTitle}</div>
    </Link>
  );
}
