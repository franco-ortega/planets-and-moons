import MoonList from '../moonlist/MoonList';
import styles from './MoonTableItem.module.css';

export default function MoonTableItem({ planet }) {
  return (
    <li className={styles.MoonTableItem} key={planet.id}>
      <h3>{planet.title}</h3>
      <MoonList moons={planet.moons} planetTitle={planet.title} />
    </li>
  );
}
