import planets from '../../../data/planets';
import MoonTableItem from '../moontableitem/MoonTableItem';
import styles from './MoonTable.module.css';

export default function MoonTable() {
  return (
    <ul className={styles.MoonTable}>
      {planets.map((planet) => (
        <MoonTableItem key={planet.id} planet={planet} />
      ))}
    </ul>
  );
}
