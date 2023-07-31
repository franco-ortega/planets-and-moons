'use client';

export default function Planet({ moons, title }) {
  return (
    <div>
      <p>The moons of {title}:</p>
      <ul>
        {moons.map((moon) => (
          <li key={title + moon}>{moon}</li>
        ))}
      </ul>
    </div>
  );
}
