import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function BirthdayBingo() {
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

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

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
        <section className="py-24 min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4 text-pink-200">
                        🎉 Celebrating Kamini's Birthday
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-6 drop-shadow-lg">
                        Birthday Bingo
                    </h2>
                    <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed">
                        The ultimate showdown begins soon! Get ready to compete for glory (and prizes).
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Rules Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-3xl">📜</span> The Rules
                        </h3>
                        <ul className="space-y-6 text-purple-50">
                            <li className="flex items-start gap-4">
                                <span className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold shadow-lg">1</span>
                                <div>
                                    <span className="font-bold text-white block mb-1">Timing is Everything</span>
                                    Questions drop every <strong>3 hours</strong> starting midnight Feb 6th. Last one at 9:00 PM.
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold shadow-lg">2</span>
                                <div>
                                    <span className="font-bold text-white block mb-1">Points Per Question</span>
                                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                        <div className="bg-white/5 rounded-lg p-2 border border-white/10">🥇 1st: <span className="font-bold text-yellow-300">10 pts</span></div>
                                        <div className="bg-white/5 rounded-lg p-2 border border-white/10">🥈 2nd: <span className="font-bold text-gray-300">8 pts</span></div>
                                        <div className="bg-white/5 rounded-lg p-2 border border-white/10">🥉 3rd: <span className="font-bold text-orange-300">5 pts</span></div>
                                        <div className="bg-white/5 rounded-lg p-2 border border-white/10">Others: <span className="font-bold text-pink-300">2 pts</span></div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl w-8 h-8 flex items-center justify-center shrink-0 text-sm font-bold shadow-lg">3</span>
                                <div>
                                    <span className="font-bold text-white block mb-1">Win Big</span>
                                    The person with the highest total points at the end wins the grand prize! 🏆
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Countdown Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl transform rotate-3 opacity-50 blur-lg"></div>
                        <div className="relative bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-3xl shadow-2xl border border-white/20 text-center h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Game Starts In</h3>
                            <div className="grid grid-cols-4 gap-4 w-full mb-8">
                                <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                                    <span className="text-3xl md:text-5xl font-black text-white mb-1 font-mono">{timeLeft.days}</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-pink-200 font-bold">Days</span>
                                </div>
                                <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                                    <span className="text-3xl md:text-5xl font-black text-white mb-1 font-mono">{timeLeft.hours}</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-pink-200 font-bold">Hours</span>
                                </div>
                                <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                                    <span className="text-3xl md:text-5xl font-black text-white mb-1 font-mono">{timeLeft.minutes}</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-pink-200 font-bold">Mins</span>
                                </div>
                                <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 backdrop-blur-sm">
                                    <span className="text-3xl md:text-5xl font-black text-white mb-1 font-mono">{timeLeft.seconds}</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-pink-200 font-bold">Secs</span>
                                </div>
                            </div>
                            <div className="text-pink-100 text-sm font-medium bg-white/10 py-2 px-4 rounded-full inline-block mx-auto">
                                🚀 First drop: Midnight, Feb 6th
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
