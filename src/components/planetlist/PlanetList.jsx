import planetData from '../../../data/planets.json';
import PlanetLink from '../planetlink/PlanetLink';
import styles from './PlanetList.module.css';

export default function PlanetList() {
  return (
    <ul className={styles.PlanetList}>
      {planetData.map((planet) => (
        <li key={planet.title}>
          <PlanetLink title={planet.title} />
        </li>
      ))}
    </ul>
  );
}
