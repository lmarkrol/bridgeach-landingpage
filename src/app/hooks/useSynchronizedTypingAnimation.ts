import { useState, useEffect, useRef } from 'react';

interface UseSynchronizedTypingAnimationProps {
  titles: string[];
  subtitles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const useSynchronizedTypingAnimation = ({
  titles,
  subtitles,
  typingSpeed = 30,
  deletingSpeed = 15,
  pauseDuration = 2000,
}: UseSynchronizedTypingAnimationProps) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [pairIndex, setPairIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[pairIndex];
      const currentSubtitle = subtitles[pairIndex];

      if (isDeleting) {
        // Deleting
        let titleDeleted = false;
        let subtitleDeleted = false;

        if (displayedTitle.length > 0) {
          setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
        } else {
          titleDeleted = true;
        }

        if (displayedSubtitle.length > 0) {
          setDisplayedSubtitle(currentSubtitle.substring(0, displayedSubtitle.length - 1));
        } else {
          subtitleDeleted = true;
        }

        if (titleDeleted && subtitleDeleted) {
          setIsDeleting(false);
          setPairIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        // Typing
        let titleTyped = false;
        let subtitleTyped = false;

        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
        } else {
          titleTyped = true;
        }

        if (displayedSubtitle.length < currentSubtitle.length) {
          setDisplayedSubtitle(currentSubtitle.substring(0, displayedSubtitle.length + 1));
        } else {
          subtitleTyped = true;
        }

        if (titleTyped && subtitleTyped) {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(handleTyping, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayedTitle,
    displayedSubtitle,
    isDeleting,
    pairIndex,
    titles,
    subtitles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return { displayedTitle, displayedSubtitle };
};

export default useSynchronizedTypingAnimation;