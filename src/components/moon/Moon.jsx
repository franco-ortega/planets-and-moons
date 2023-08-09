import styles from './Moon.module.css';

export default function Moon({ moonTitle, planetTitle }) {
  return (
    <main className={styles.Moon}>
      {moonTitle} is a moon of {planetTitle}.
    </main>
  );
}
