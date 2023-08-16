import MoonList from '../moonlist/MoonList';
import NoMoons from '../nomoons/NoMoons';
import styles from './MoonTableItem.module.css';

export default function MoonTableItem({ planet }) {
  return (
    <li className={styles.MoonTableItem} key={planet.id}>
      <h3>{planet.title}</h3>
      {planet.moons.length ? (
        <MoonList moons={planet.moons} planetTitle={planet.title} />
      ) : (
        <NoMoons />
      )}
    </li>
  );
}
