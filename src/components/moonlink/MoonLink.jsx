import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonLink.module.css';

export default function MoonLink({ planetTitle, moonTitle }) {
  const planetPath = convertTitleForPath(planetTitle);
  const moonPath = convertTitleForPath(moonTitle);
  console.log(planetTitle, moonTitle);

  return (
    <Link href={`${planetPath}/moons/${moonPath}`}>
      <div className={styles.MoonLink}>{moonTitle}</div>
    </Link>
  );
}
