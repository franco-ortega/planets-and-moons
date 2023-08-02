'use client';

import planetData from '../../../../../../data/planets';
import { useParams } from 'next/navigation';
import Moon from '@/components/moon/Moon';

export default function MoonPage() {
  const params = useParams();

  const planet = planetData.find((planet) => planet.path === params.planet);
  const planetTitle =
    planet.path.slice(0, 1).toUpperCase() + planet.path.slice(1);

  // maybe later a moon object will be passed to the Moon component
  const moons = planet.moons;
  const moon = moons.find((moon) => moon.path === params.moon);
  const moonTitle = moon.path.slice(0, 1).toUpperCase() + moon.path.slice(1);

  return (
    <main>
      <Moon title={planetTitle} moon={moonTitle} />
    </main>
  );
}
