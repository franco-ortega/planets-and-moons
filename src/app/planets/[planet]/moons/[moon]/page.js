'use client';

import { useParams } from 'next/navigation';
import planets from '../../../../../../data/planets';
import Moon from '@/components/moon/Moon';
import convertTitleForPath from '@/utils/convertTitleForPath';

export default function MoonPage() {
  const params = useParams();
  const planetPath = params.planet;
  const moonPath = params.moon;

  const planet = planets.find(
    (planet) => planetPath === convertTitleForPath(planet.title)
  );

  const moon = planet.moons.find(
    (moon) => moonPath === convertTitleForPath(moon.title)
  );

  return <Moon moonTitle={moon.title} planetTitle={planet.title} />;
}
