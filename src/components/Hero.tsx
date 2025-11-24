import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        // Target date: Feb 6, 2026 00:00:00
        const targetDate = new Date('2026-02-06T00:00:00');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Trigger confetti on load
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => {
            clearInterval(timer);
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Whistler Mountains"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 w-full max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-blue-200 text-lg md:text-xl font-bold tracking-widest uppercase mb-4 drop-shadow-md"
                >
                    Feb 5 - 8, 2026 • Whistler, BC
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-xl"
                >
                    Kamini's Alpine<br />Adventure 🏔️
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-xl md:text-2xl text-white/90 font-medium mb-12 drop-shadow-md"
                >
                    Slope you're ready to party! ⛷️
                </motion.p>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl mx-auto max-w-3xl"
                >
                    <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-6">Countdown to the Slopes</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-6xl font-black text-white font-mono">{timeLeft.days}</span>
                            <span className="text-xs md:text-sm text-blue-200 font-bold uppercase mt-2">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-6xl font-black text-white font-mono">{timeLeft.hours}</span>
                            <span className="text-xs md:text-sm text-blue-200 font-bold uppercase mt-2">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-6xl font-black text-white font-mono">{timeLeft.minutes}</span>
                            <span className="text-xs md:text-sm text-blue-200 font-bold uppercase mt-2">Mins</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl md:text-6xl font-black text-white font-mono">{timeLeft.seconds}</span>
                            <span className="text-xs md:text-sm text-blue-200 font-bold uppercase mt-2">Secs</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-8 h-8 text-white/70" />
                </motion.div>
            </motion.div>
        </section>
    );
}
