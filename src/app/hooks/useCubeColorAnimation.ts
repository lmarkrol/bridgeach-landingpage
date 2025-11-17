import { useState, useEffect, useRef } from "react";

const lightRGBColors = [
  '#004FCC', // deep blue
  '#3A00CC', // deep violet
  '#CC0066', // strong magenta
  '#CC0000', // deep red
  '#CC7A00', // warm amber
  '#00CC88', // teal green
];

const darkRGBColors = [
  '#3A84FF', // bright blue
  '#874DFF', // vivid violet
  '#FF4DA0', // bright magenta
  '#FF4D4D', // bright red
  '#FFB84D', // bright amber
  '#33FFBE', // bright aqua green
];

// Helper function to interpolate between two colors
const interpolateColor = (color1: string, color2: string, factor: number): [number, number, number] => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return [r, g, b];
};

interface UseCubeColorAnimationProps {
  darkMode: boolean;
  isAnimating: boolean; // A boolean to control when the animation should run
  cycleDuration?: number; // Optional: duration of one full color cycle in ms
}

const useCubeColorAnimation = ({ darkMode, isAnimating, cycleDuration = 8000 }: UseCubeColorAnimationProps) => {
  const colors = darkMode ? darkRGBColors : lightRGBColors;
  const [colorIndices, setColorIndices] = useState({ start: 0, end: 1 });
  const isAnimatingRef = useRef(isAnimating);
  const colorsRef = useRef(colors);

  // Update refs when dependencies change
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
    colorsRef.current = colors;
  }, [isAnimating, colors]);

  // Initialize the animated color with the first color
  const [animatedColor, setAnimatedColor] = useState<string>(() => {
    const [r, g, b] = interpolateColor(colors[0], colors[0], 0);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  });

  // Animation effect - runs continuously but respects the animation state
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    let lastProgress = 0;

    const animateColor = (timestamp: number) => {
      const currentIsAnimating = isAnimatingRef.current;
      const currentColors = colorsRef.current;

      if (!currentIsAnimating) {
        // If not animating, set to the first color of the current theme with full opacity
        const [r, g, b] = interpolateColor(currentColors[0], currentColors[0], 0);
        setAnimatedColor(`rgba(${r}, ${g}, ${b}, 1)`);
        animationFrameId = requestAnimationFrame(animateColor);
        return;
      }

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % cycleDuration) / cycleDuration; // 0 to 1

      // Check if a cycle has just completed
      if (progress < lastProgress) {
        setColorIndices(prevIndices => ({
          start: prevIndices.end,
          end: (prevIndices.end + 1) % currentColors.length,
        }));
      }
      lastProgress = progress;

      const startColor = currentColors[colorIndices.start];
      const endColor = currentColors[colorIndices.end];

      const [r, g, b] = interpolateColor(startColor, endColor, progress);

      // Oscillate opacity using a sine wave from 25% to 100%
      const opacity = 0.625 + 0.375 * Math.sin(progress * Math.PI * 2);

      setAnimatedColor(`rgba(${r}, ${g}, ${b}, ${opacity})`);
      animationFrameId = requestAnimationFrame(animateColor);
    };

    animationFrameId = requestAnimationFrame(animateColor);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [cycleDuration, colorIndices]);

  return animatedColor;
};

export default useCubeColorAnimation;
