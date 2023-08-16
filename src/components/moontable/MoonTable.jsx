import MoonLink from '../moonlink/MoonLink';
import planets from '../../../data/planets';
import styles from './MoonTable.module.css';
import MoonList from '../moonlist/MoonList';

export default function MoonTable() {
  return (
    <ul className={styles.MoonTable}>
      {planets.map((planet) => (
        <li key={planet.id}>
          {planet.title}:{' '}
          {/* <ul>
            {planet.moons.map((moon) => (
              <li key={moon.id}>
                <MoonLink
                  moonTitle={moon.title}
                  planetPath={planet.title.toLowerCase()}
                />
              </li>
            ))}
          </ul> */}
          <MoonList planet={planet} />
        </li>
      ))}
    </ul>
  );
}
