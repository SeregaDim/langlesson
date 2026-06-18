import { useState } from 'react';

// Хук отслеживает активный пункт сайдбара
export function useActiveSection(initial = '') {
  const [active, setActive] = useState(initial);
  return { active, setActive };
}
