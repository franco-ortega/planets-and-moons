'use client';

import planetData from '../../../../../data/planets';
import { useParams } from 'next/navigation';
import Moon from '@/components/moon/Moon';

export default function MoonPage() {
  const params = useParams();

  // const planet = planetData.find((planet) => planet.path === params.planet);

  // const moons = planet.moons;

  // const moon = moons.find((moon) => moon === params.moon);

  // const moonTitle = moon.slice(0, 1).toUpperCase() + moon.slice(1);

  return <main>{/* <Moon title={planet.title} moon={moonTitle} /> */}</main>;
}
