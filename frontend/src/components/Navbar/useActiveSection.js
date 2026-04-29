import { useEffect, useMemo, useState } from 'react';

const useActiveSection = (sectionIds, { fallbackId = 'home' } = {}) => {
  const safeIds = useMemo(
    () => (Array.isArray(sectionIds) ? sectionIds.filter(Boolean) : []),
    [sectionIds]
  );

  const [activeId, setActiveId] = useState(fallbackId);

  useEffect(() => {
    if (!safeIds.length) return;

    const elements = safeIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) return;

    // Pick the most visible section while scrolling.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        threshold: [0.15, 0.3, 0.45, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [safeIds]);

  return activeId;
};

export default useActiveSection;

