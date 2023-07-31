'use client';

export default function Moon({ title, moon }) {
  console.log('TITLE: ', title);
  return (
    <div>
      <p>
        {moon} is a moon of {title}.
      </p>
    </div>
  );
}
