import convertTitleForPath from './convertTitleForPath';

export default function createMoonPath(moonTitle, planetTitle, parentPath) {
  const planetPath = convertTitleForPath(planetTitle);
  const moonPath = convertTitleForPath(moonTitle);

  return parentPath === '/moons'
    ? `planets/${planetPath}/moons/${moonPath}`
    : `${planetPath}/moons/${moonPath}`;
}
