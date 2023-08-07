import Link from 'next/link';
import MoonLink from '../moonlink/MoonLink';

export default function MoonList({ planet }) {
  return (
    <ul>
      {planet.moons.map((moon) => (
        <MoonLink
          key={moon.id}
          planetPath={planet.title.toLowerCase()}
          title={moon.title}
        />
      ))}
    </ul>
  );
}
