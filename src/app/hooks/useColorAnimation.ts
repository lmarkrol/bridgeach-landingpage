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
const interpolateColor = (color1: string, color2: string, factor: number): string => {
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
  const g = Math.round(g1 + factor * (g2 - g1)); // Fixed: should be g2 - g1
  const b = Math.round(b1 + factor * (b2 - b1));

  return `rgb(${r}, ${g}, ${b})`;
};

interface UseColorAnimationProps {
  darkMode: boolean;
  isAnimating: boolean; // A boolean to control when the animation should run
  cycleDuration?: number; // Optional: duration of one full color cycle in ms
}

const useColorAnimation = ({ darkMode, isAnimating, cycleDuration = 3000 }: UseColorAnimationProps) => {
  const colors = darkMode ? darkRGBColors : lightRGBColors;
  const [animatedColor, setAnimatedColor] = useState<string>(colors[0]); // Initialize with the first color
  const isAnimatingRef = useRef(isAnimating);
  const colorsRef = useRef(colors);

  // Update refs when dependencies change
  useEffect(() => {
    isAnimatingRef.current = isAnimating;
    colorsRef.current = colors;
  }, [isAnimating, colors]);

  // Animation effect - runs continuously but respects the animation state
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animateColor = (timestamp: number) => {
      const currentIsAnimating = isAnimatingRef.current;
      const currentColors = colorsRef.current;

      if (!currentIsAnimating) {
        // If not animating, set to the first color of the current theme
        setAnimatedColor(currentColors[0]);
        animationFrameId = requestAnimationFrame(animateColor);
        return;
      }

      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % cycleDuration) / cycleDuration; // 0 to 1

      const colorCount = currentColors.length;
      const totalSegments = colorCount;
      const segmentProgress = progress * totalSegments;
      const currentColorIndex = Math.floor(segmentProgress) % colorCount;
      const nextColorIndex = (currentColorIndex + 1) % colorCount;
      const interpolationFactor = segmentProgress - Math.floor(segmentProgress); // 0 to 1

      const currentColor = currentColors[currentColorIndex];
      const nextColor = currentColors[nextColorIndex];
      const interpolatedColor = interpolateColor(currentColor, nextColor, interpolationFactor);

      setAnimatedColor(interpolatedColor);
      animationFrameId = requestAnimationFrame(animateColor);
    };

    animationFrameId = requestAnimationFrame(animateColor);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [cycleDuration]);

  return animatedColor;
};

export default useColorAnimation;