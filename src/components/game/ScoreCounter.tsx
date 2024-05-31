'use client';

import React, { useEffect, useState } from 'react';

export default function ScoreCounter() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.addEventListener('update-score', () => setScore(score + 1));
  });

  return (
    <div className="flex items-center px-4 py-2">
      Score:
      {' '}
      {score}
    </div>
  );
}
