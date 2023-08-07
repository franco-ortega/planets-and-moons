import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonLink.module.css';

export default function MoonLink({ planetPath, title }) {
  return (
    <li className={styles.MoonLink}>
      <Link href={`${planetPath}/moons/${convertTitleForPath(title)}`}>
        {title}
      </Link>
    </li>
  );
}
