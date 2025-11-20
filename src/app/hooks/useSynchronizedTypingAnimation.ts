import { useState, useEffect, useRef } from 'react';

interface UseSynchronizedTypingAnimationProps {
  titles: string[];
  subtitles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  deleteStep?: number;
  typingStep?: number;
}

const useSynchronizedTypingAnimation = ({
  titles,
  subtitles,
  typingSpeed = 30,
  deletingSpeed = 15,
  pauseDuration = 2000,
  deleteStep = 1,
  typingStep = 1,
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
          setDisplayedTitle(currentTitle.substring(0, Math.max(0, displayedTitle.length - deleteStep)));
        } else {
          titleDeleted = true;
        }

        if (displayedSubtitle.length > 0) {
          setDisplayedSubtitle(currentSubtitle.substring(0, Math.max(0, displayedSubtitle.length - deleteStep)));
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
          setDisplayedTitle(currentTitle.substring(0, Math.min(currentTitle.length, displayedTitle.length + typingStep)));
        } else {
          titleTyped = true;
        }

        if (displayedSubtitle.length < currentSubtitle.length) {
          setDisplayedSubtitle(currentSubtitle.substring(0, Math.min(currentSubtitle.length, displayedSubtitle.length + typingStep)));
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
    deleteStep,
    typingStep,
  ]);

  return { displayedTitle, displayedSubtitle };
};

export default useSynchronizedTypingAnimation;