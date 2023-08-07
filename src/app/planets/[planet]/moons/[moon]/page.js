'use client';

import { useParams } from 'next/navigation';
import planetData from '../../../../../../data/planets';
import Moon from '@/components/moon/Moon';
import convertTitleForPath from '@/utils/convertTitleForPath';

export default function MoonPage() {
  const params = useParams();

  const planet = planetData.find(
    (planet) => params.planet === convertTitleForPath(planet.title)
  );
  const planetTitle = planet.title;

  // maybe later a moon object will be passed to the Moon component
  const moons = planet.moons;
  const moon = moons.find(
    (moon) => params.moon === convertTitleForPath(moon.title)
  );
  const moonTitle = moon.title;

  return (
    <main>
      <Moon title={planetTitle} moon={moonTitle} />
    </main>
  );
}
