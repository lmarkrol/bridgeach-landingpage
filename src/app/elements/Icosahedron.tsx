import React from 'react';
import useCubeColorAnimation from '../hooks/useCubeColorAnimation';

interface IcosahedronProps {
    darkMode: boolean;
}

const Icosahedron: React.FC<IcosahedronProps> = ({ darkMode }) => {
    const animatedRgba = useCubeColorAnimation({ darkMode, isAnimating: true, cycleDuration: 8000 });
    const uniqueId = React.useId();

    // Math constants from icosahedron.md
    const triWidth = 80;
    const sqrt3 = 1.732;
    const triHeight = triWidth * sqrt3;
    const tilt = 52.62;
    const capHeight = -1.051 * triWidth;
    const vShift = capHeight + triHeight / 2;

    const outerRadius = 1.701 * triWidth;
    const sideTilt = 10.81;
    const sideHeight = outerRadius;
    const vShift2 = sideHeight + triHeight - vShift;

    // Generate faces
    const faces = [];

    // Loop 1: Top (1-5)
    for (let i = 1; i <= 5; i++) {
        faces.push({
            id: `top-${i}`,
            transform: `translateY(${vShift}px) rotateY(${i * 72}deg) rotateX(${tilt}deg)`
        });
    }

    // Loop 2: Bottom (6-10)
    for (let i = 6; i <= 10; i++) {
        faces.push({
            id: `bottom-${i}`,
            transform: `translateY(${vShift2}px) rotateY(${i * 72 + 36}deg) rotateX(${180 - tilt}deg)`
        });
    }

    // Loop 3: Bottom sides (11-15)
    for (let i = 11; i <= 15; i++) {
        faces.push({
            id: `bottom-side-${i}`,
            transform: `translateY(${triHeight / 2}px) rotateY(${i * 72 + 36}deg) translateZ(${outerRadius}px) rotateX(-${sideTilt}deg)`
        });
    }

    // Loop 4: Top sides (16-20)
    for (let i = 16; i <= 20; i++) {
        faces.push({
            id: `top-side-${i}`,
            transform: `translateY(${triHeight / 2 + sideHeight}px) rotateY(${i * 72}deg) rotateZ(180deg) translateZ(${outerRadius}px) rotateX(-${sideTilt}deg)`
        });
    }

    const width = triWidth * 2;
    const height = triHeight;
    const points = `${width / 2},0 0,${height} ${width},${height}`;

    return (
        <div className="relative" style={{ animation: "float-gentle 12s linear infinite" }}>
            <div className="cube-container w-[300px] h-[300px] perspective-midrange mx-auto relative z-10">
                <div
                    className="cube relative transform-style-3d"
                    style={{
                        width: '100%',
                        height: '100%',
                        animation: "rotate-icosahedron 12s infinite linear"
                    }}
                >
                    {faces.map((face) => (
                        <div
                            key={face.id}
                            className="absolute"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                                left: '50%',
                                top: '50%',
                                marginLeft: `-${width / 2}px`,
                                marginTop: `-${height}px`,
                                transformOrigin: '50% 0%',
                                transform: face.transform,
                            }}
                        >
                            <svg width={width} height={height} style={{ overflow: 'visible' }}>
                                <polygon
                                    points={points}
                                    fill="transparent"
                                    stroke={animatedRgba}
                                    strokeWidth="2"
                                    style={{
                                        filter: `drop-shadow(0 0 5px ${animatedRgba})`,
                                        opacity: 0.9
                                    }}
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Icosahedron;
