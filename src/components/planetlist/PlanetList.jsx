import planetData from '../../../data/planets.json';
import PlanetLink from '../planetlink/PlanetLink';

export default function PlanetList() {
  return (
    <ul>
      {planetData.map((planet) => (
        <li key={planet.title}>
          <PlanetLink title={planet.title} />
        </li>
      ))}
    </ul>
  );
}
