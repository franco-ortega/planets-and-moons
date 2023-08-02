'use client';

import { useParams } from 'next/navigation';
import planetData from '../../../../../../data/planets';
import Moon from '@/components/moon/Moon';

export default function MoonPage() {
  const params = useParams();

  const planet = planetData.find((planet) => planet.path === params.planet);
  const planetTitle = planet.title;

  // maybe later a moon object will be passed to the Moon component
  const moons = planet.moons;
  const moon = moons.find((moon) => moon.path === params.moon);
  const moonTitle = moon.title;

  return (
    <main>
      <Moon title={planetTitle} moon={moonTitle} />
    </main>
  );
}
