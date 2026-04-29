import { useEffect, useMemo, useState } from 'react';

const useTypewriter = (
  words,
  { typeSpeed = 55, deleteSpeed = 35, pauseMs = 900 } = {}
) => {
  const safeWords = useMemo(() => (Array.isArray(words) ? words : []), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return;

    const currentWord = safeWords[wordIndex] || '';

    let timeout = null;

    // Typing finished -> pause then delete
    if (!isDeleting && charIndex >= currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    }
    // Deleting finished -> move to next word
    else if (isDeleting && charIndex <= 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % safeWords.length);
    } else {
      const nextDelay = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setCharIndex((prev) => {
          if (isDeleting) return Math.max(0, prev - 1);
          return Math.min(currentWord.length, prev + 1);
        });
      }, nextDelay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [safeWords, wordIndex, charIndex, isDeleting, typeSpeed, deleteSpeed, pauseMs]);

  const currentWord = safeWords[wordIndex] || '';
  const typed = currentWord.slice(0, charIndex);

  return typed;
};

export default useTypewriter;

