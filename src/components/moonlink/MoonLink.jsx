import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonLink.module.css';

export default function MoonLink({ isMoonsPath, planetTitle, moonTitle }) {
  const planetPath = convertTitleForPath(planetTitle);
  const moonPath = convertTitleForPath(moonTitle);

  const path = isMoonsPath
    ? `planets/${planetPath}/moons/${moonPath}`
    : `${planetPath}/moons/${moonPath}`;

  return (
    <Link href={path}>
      <div className={styles.MoonLink}>{moonTitle}</div>
    </Link>
  );
}
