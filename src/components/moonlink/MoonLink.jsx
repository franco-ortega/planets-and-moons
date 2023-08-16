'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import createMoonPath from '@/utils/createMoonPath';
import styles from './MoonLink.module.css';

export default function MoonLink({ planetTitle, moonTitle }) {
  const parentPath = usePathname();

  const moonPath = createMoonPath(moonTitle, planetTitle, parentPath);

  return (
    <Link href={moonPath}>
      <div className={styles.MoonLink}>{moonTitle}</div>
    </Link>
  );
}
