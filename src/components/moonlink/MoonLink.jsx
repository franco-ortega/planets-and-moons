import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonLink.module.css';

export default function MoonLink({ planetPath, title }) {
  return (
    <Link href={`${planetPath}/moons/${convertTitleForPath(title)}`}>
      <div className={styles.MoonLink}>{title}</div>
    </Link>
  );
}
