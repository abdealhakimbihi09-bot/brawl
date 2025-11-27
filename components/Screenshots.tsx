
import React, { useEffect, useRef } from 'react';

const screenshots = [
    "https://play-lh.googleusercontent.com/L3-aR_l2f6t3z3Jz4b4Q4w4h4g4k4n4q4r4s4t4u4v4w4x4y4z", 
    "https://play-lh.googleusercontent.com/A1-bS_m3g7u4a4K5c5d5e5f5g5h5i5j5k5l5m5n5o5p5q5r5s5", 
    "https://play-lh.googleusercontent.com/B2-cT_n4h8v5b5C6d6e6f6g6h6i6j6k6l6m6n6o6p6q6r6s6t6", 
    "https://play-lh.googleusercontent.com/C3-dU_o5i9w6c6D7e7f7g7h7i7j7k7l7m7n7o7p7q7r7s7t7u7"
];

// Using placeholders for demo as real Play Store URLs might break or expire
const demoImages = [
    "https://placehold.co/600x340/1a1d24/4ade80?text=Gameplay+Preview+1",
    "https://placehold.co/600x340/1a1d24/3b82f6?text=Gameplay+Preview+2",
    "https://placehold.co/600x340/1a1d24/f43f5e?text=Gameplay+Preview+3",
    "https://placehold.co/600x340/1a1d24/a855f7?text=Gameplay+Preview+4"
];

const Screenshots: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4 pl-1">Screenshots</h3>
            <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x"
            >
                {demoImages.map((src, index) => (
                    <div key={index} className="flex-none w-[85%] sm:w-[45%] snap-center">
                        <img 
                            src={src} 
                            alt={`Screenshot ${index + 1}`} 
                            className="rounded-xl border border-white/10 shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Screenshots;
