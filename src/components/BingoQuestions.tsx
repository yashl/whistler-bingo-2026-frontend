import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock, CheckCircle2 } from 'lucide-react';

interface Question {
    id: number;
    unlockDate: Date;
    question: string;
    answer?: string; // Optional answer to show after unlocking? Or maybe just the question for now.
}

const questions: Question[] = [
    {
        id: 1,
        unlockDate: new Date('2025-12-15T00:00:00'),
        question: "What is Kamini's favorite ski run in Whistler?",
    },
    {
        id: 2,
        unlockDate: new Date('2026-02-06T00:00:00'),
        question: "How many shots of tequila did Kamini have last night?",
    },
    {
        id: 3,
        unlockDate: new Date('2026-02-06T03:00:00'),
        question: "Who was the first person to fall on the slopes today?",
    },
    {
        id: 4,
        unlockDate: new Date('2026-02-06T06:00:00'),
        question: "What color is Kamini's ski jacket?",
    },
    {
        id: 5,
        unlockDate: new Date('2026-02-06T09:00:00'),
        question: "Which bar did we go to for Apres yesterday?",
    },
    {
        id: 6,
        unlockDate: new Date('2026-02-06T12:00:00'),
        question: "What is the name of the peak we just visited?",
    },
    {
        id: 7,
        unlockDate: new Date('2026-02-06T15:00:00'),
        question: "Who won the race down the mountain?",
    },
    {
        id: 8,
        unlockDate: new Date('2026-02-06T18:00:00'),
        question: "What is the secret password for tonight's party?",
    },
];

export default function BingoQuestions() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getTimeRemaining = (unlockDate: Date) => {
        const total = Date.parse(unlockDate.toString()) - Date.parse(currentTime.toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        if (total <= 0) return null;

        return { total, days, hours, minutes, seconds };
    };

    return (
        <section className="min-h-screen py-12 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                        Bingo Questions 🎯
                    </h1>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        The questions will be revealed as the party progresses! Keep your eyes peeled and your phone ready.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {questions.map((q, index) => {
                        const remaining = getTimeRemaining(q.unlockDate);
                        const isLocked = remaining !== null;

                        return (
                            <motion.div
                                key={q.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-6 rounded-2xl border-2 shadow-lg overflow-hidden ${isLocked
                                    ? 'bg-slate-100 border-slate-200'
                                    : 'bg-white border-blue-100'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${isLocked ? 'bg-slate-200 text-slate-500' : 'bg-blue-100 text-blue-600'
                                        }`}>
                                        {q.id}
                                    </span>
                                    {isLocked ? (
                                        <Lock size={20} className="text-slate-400" />
                                    ) : (
                                        <CheckCircle2 size={20} className="text-green-500" />
                                    )}
                                </div>

                                {isLocked ? (
                                    <div className="text-center py-8">
                                        <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                        <h3 className="text-lg font-bold text-slate-700 mb-2">Locked</h3>
                                        <div className="text-sm font-mono text-slate-500 bg-slate-200 inline-block px-3 py-1 rounded-full">
                                            Unlocks in: {remaining.days}d {remaining.hours}h {remaining.minutes}m {remaining.seconds}s
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-4">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {q.question}
                                        </h3>
                                        <p className="text-sm text-slate-500 mt-4">
                                            Good luck! 🍀
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
