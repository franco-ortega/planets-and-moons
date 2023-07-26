import styles from './PlanetLink.module.css';

export default function PlanetLink({ title }) {
  return <button className={styles.PlanetLink}>{title}</button>;
}
