import MoonList from '../moonlist/MoonList';

export default function MoonTableItem({ planet }) {
  return (
    <li key={planet.id}>
      {planet.title}:{' '}
      <MoonList moons={planet.moons} planetTitle={planet.title} />
    </li>
  );
}
