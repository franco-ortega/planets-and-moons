'use client';

export default function Moon({ title, moon }) {
  return (
    <div>
      <p>
        {moon} is a moon of {title}.
      </p>
    </div>
  );
}
