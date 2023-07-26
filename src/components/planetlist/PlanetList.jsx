'use client';

import { useEffect, useState } from 'react';
import planetData from '../../../data/planets.json';
import PlanetLink from '../planetlink/PlanetLink';

export default function PlanetList() {
  const [planets, setPlanets] = useState(planetData || []);

  useEffect(() => {
    if (planets.length < 1) {
      setPlanets(planetData);
    }
  }, [planets]);

  return (
    <ul>
      {planets.map((planet) => (
        <li key={planet.title}>
          <PlanetLink title={planet.title} />
        </li>
      ))}
    </ul>
  );
}
