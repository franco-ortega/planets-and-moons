'use client';

import Link from 'next/link';
import convertTitleForPath from '@/utils/convertTitleForPath';
import styles from './MoonLink.module.css';
import { usePathname } from 'next/navigation';

export default function MoonLink({ planetTitle, moonTitle }) {
  const planetPath = convertTitleForPath(planetTitle);
  const moonPath = convertTitleForPath(moonTitle);

  const parentPath = usePathname();
  console.log({ parentPath });

  const path =
    parentPath === '/moons'
      ? `planets/${planetPath}/moons/${moonPath}`
      : `${planetPath}/moons/${moonPath}`;

  return (
    <Link href={path}>
      <div className={styles.MoonLink}>{moonTitle}</div>
    </Link>
  );
}
