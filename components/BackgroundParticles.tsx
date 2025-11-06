import React from 'react';

const BackgroundParticles: React.FC = () => {
    const particles = Array.from({ length: 15 });

    const particleStyles = particles.map((_, i) => ({
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDuration: `${Math.random() * 10 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
    }));

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" id="particle-container">
                {particleStyles.map((style, index) => (
                    <div key={index} className="particle bg-cyan-400" style={style}></div>
                ))}
            </div>
            {/* FIX: The `jsx` prop is not a valid attribute for the <style> tag in standard React with TypeScript. It's a feature of Next.js's styled-jsx. Removing it resolves the type error. */}
            <style>{`
                .particle {
                    position: absolute;
                    top: -20px;
                    border-radius: 50%;
                    opacity: 0;
                    animation-name: fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    filter: blur(1px);
                }

                @keyframes fall {
                    0% {
                        transform: translateY(0) scale(0.5);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.7;
                    }
                    90% {
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateY(100vh) scale(1);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
};

export default BackgroundParticles;
