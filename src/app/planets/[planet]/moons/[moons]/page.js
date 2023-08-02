'use client';

import planetData from '../../../../../../data/planets';
import { useParams } from 'next/navigation';
import Moon from '@/components/moon/Moon';

export default function MoonPage() {
  const params = useParams();
  console.log(params);

  // const planet = planetData.find((planet) => planet.path === params.planet);
  const planet = params.planet;
  const planetTitle = planet.slice(0, 1).toUpperCase() + planet.slice(1);

  // const moons = planet.moons;
  const moons = params.moons;

  // const moon = moons.find((moon) => moon === params.moon);
  const moon = moons;

  const moonTitle = moon.slice(0, 1).toUpperCase() + moon.slice(1);

  return (
    <main>
      <Moon title={planetTitle} moon={moonTitle} />
    </main>
  );
}
