import React from 'react';
import useCubeColorAnimation from '../hooks/useCubeColorAnimation'; // Import the new hook

interface CubeProps {
  darkMode: boolean;
}

const Cube: React.FC<CubeProps> = ({ darkMode }) => {
  // Use the color animation hook, and keep it always animating
  const animatedRgba = useCubeColorAnimation({ darkMode, isAnimating: true, cycleDuration: 8000 });

  const dynamicBoxShadow = `0 0 100px ${animatedRgba}`;

  // Define the styles for each face of the cube with theme-appropriate colors
  const lightFaceStyles = {
    base: "absolute w-[200px] h-[200px] text-[#004FCC] text-xl text-center bg-transparent opacity-90 border-2",
    front: {
      transform: "translateZ(100px)",
      borderImage: "linear-gradient(to right, #004FCC, #3A00CC, #CC0066, #CC0000, #CC7A00, #00CC88) 1",
      boxShadow: dynamicBoxShadow,
    },
    back: {
      transform: "rotateY(180deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #004FCC, #3A00CC, #CC0066, #CC0000, #CC7A00, #00CC88) 1",
      boxShadow: dynamicBoxShadow,
    },
    right: {
      transform: "rotateY(90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #004FCC, #3A00CC, #CC0066, #CC0000, #CC7A00, #00CC88) 1",
      boxShadow: dynamicBoxShadow,
    },
    left: {
      transform: "rotateY(-90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #004FCC, #3A00CC, #CC0066, #CC0000, #CC7A00, #00CC88) 1",
      boxShadow: dynamicBoxShadow,
    },
    top: {
      transform: "rotateX(90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #004FCC, #3A00CC, #CC0066, #CC0000, #CC7A00, #00CC88) 1",
      boxShadow: dynamicBoxShadow,
    },
    bottom: {
      transform: "rotateX(-90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #004FCC, #3A00CC, #CC0066, #CC0000, #CC7A00, #00CC88) 1",
      boxShadow: dynamicBoxShadow,
    }
  };

  const darkFaceStyles = {
    base: "absolute w-[200px] h-[200px] text-[#3A84FF] text-xl text-center bg-transparent opacity-90 border-2",
    front: {
      transform: "translateZ(100px)",
      borderImage: "linear-gradient(to right, #3A84FF, #874DFF, #FF4DA0, #FF4D4D, #FFB84D, #33FFBE) 1",
      boxShadow: dynamicBoxShadow,
    },
    back: {
      transform: "rotateY(180deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #3A84FF, #874DFF, #FF4DA0, #FF4D4D, #FFB84D, #33FFBE) 1",
      boxShadow: dynamicBoxShadow,
    },
    right: {
      transform: "rotateY(90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #3A84FF, #874DFF, #FF4DA0, #FF4D4D, #FFB84D, #33FFBE) 1",
      boxShadow: dynamicBoxShadow,
    },
    left: {
      transform: "rotateY(-90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #3A84FF, #874DFF, #FF4DA0, #FF4D4D, #FFB84D, #33FFBE) 1",
      boxShadow: dynamicBoxShadow,
    },
    top: {
      transform: "rotateX(90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #3A84FF, #874DFF, #FF4DA0, #FF4D4D, #FFB84D, #33FFBE) 1",
      boxShadow: dynamicBoxShadow,
    },
    bottom: {
      transform: "rotateX(-90deg) translateZ(100px)",
      borderImage: "linear-gradient(to right, #3A84FF, #874DFF, #FF4DA0, #FF4D4D, #FFB84D, #33FFBE) 1",
      boxShadow: dynamicBoxShadow,
    }
  };

  const faceStyles = darkMode ? darkFaceStyles : lightFaceStyles;

  const cubeStyle = {
    transformStyle: "preserve-3d" as const,
    animation: "rotate 8s infinite linear"
  };

  return (
    <div
      className="cube-container w-[200px] h-[200px] perspective-midrange mx-auto"
    >
      <div className="cube relative w-full h-full transform-style-3d" style={cubeStyle}>
        <div className={`${faceStyles.base} front`} style={faceStyles.front}></div>
        <div className={`${faceStyles.base} back`} style={faceStyles.back}></div>
        <div className={`${faceStyles.base} right`} style={faceStyles.right}></div>
        <div className={`${faceStyles.base} left`} style={faceStyles.left}></div>
        <div className={`${faceStyles.base} top`} style={faceStyles.top}></div>
        <div className={`${faceStyles.base} bottom`} style={faceStyles.bottom}></div>
      </div>
    </div>
  );
};

export default Cube;