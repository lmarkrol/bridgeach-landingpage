import { useState, useEffect } from 'react';

interface UseSynchronizedTypingAnimationProps {
  titles: string[];
  subtitles: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

const useSynchronizedTypingAnimation = ({
  titles,
  subtitles,
  typingSpeed = 100,
  pauseDuration = 3000,
}: UseSynchronizedTypingAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (titles.length === 0 || subtitles.length === 0) return;

    const currentTitle = titles[currentIndex];
    const currentSubtitle = subtitles[currentIndex];
    const maxLength = Math.max(currentTitle.length, currentSubtitle.length);

    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < maxLength) {
          setCharIndex(charIndex + 1);
        } else {
          // Pause after completing
          setTimeout(() => {
            setIsTyping(false);
            setCharIndex(0);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
            setIsTyping(true);
          }, pauseDuration);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, currentIndex, titles, subtitles, typingSpeed, pauseDuration]);

  const displayedTitle = titles[currentIndex]?.substring(0, charIndex) || '';
  const displayedSubtitle = subtitles[currentIndex]?.substring(0, charIndex) || '';

  return { displayedTitle, displayedSubtitle };
};

export default useSynchronizedTypingAnimation;