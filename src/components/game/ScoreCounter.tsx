'use client';

import React, { useEffect, useState } from 'react';

export default function ScoreCounter() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.addEventListener('update-score', (evt) => {
      setScore(score + (evt as CustomEvent).detail.amount);
    });

    document.addEventListener('reset-score', () => {
      setScore(0);
    });
  });

  return (
    <div className="flex items-center px-4 py-2">
      Score:
      {' '}
      {score}
    </div>
  );
}
