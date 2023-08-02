import convertTitleForPath from '@/utils/convertTitleForPath';
import planetData from '../../../data/planets.json';
import PlanetLink from '../planetlink/PlanetLink';
import styles from './PlanetList.module.css';

export default function PlanetList() {
  return (
    <ul className={styles.PlanetList}>
      {planetData.map(({ id, title }) => (
        <li key={id}>
          <PlanetLink path={convertTitleForPath(title)} title={title} />
        </li>
      ))}
    </ul>
  );
}
