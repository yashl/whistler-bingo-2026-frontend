import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Medal } from 'lucide-react';

interface LeaderboardProps {
    isOpen: boolean;
    onClose: () => void;
}

const participants = [
    { name: "Aditi", score: 0 },
    { name: "Dhruv T", score: 0 },
    { name: "Jess", score: 0 },
    { name: "Jenny", score: 0 },
    { name: "Alark", score: 0 },
    { name: "Izzy", score: 0 },
    { name: "Vatsal", score: 0 },
    { name: "Tathya", score: 0 },
    { name: "Sarthak", score: 0 },
    { name: "Hayati", score: 0 },
    { name: "Apoorva", score: 0 },
    { name: "Vignesh", score: 0 },
    { name: "Dhruv S", score: 0 },
    { name: "Vasu", score: 0 },
];

export default function Leaderboard({ isOpen, onClose }: LeaderboardProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
                                >
                                    <X size={20} />
                                </button>
                                <Trophy className="w-12 h-12 mx-auto mb-3 text-yellow-300 drop-shadow-md" />
                                <h2 className="text-2xl font-black uppercase tracking-wide">Leaderboard</h2>
                                <p className="text-blue-100 text-sm font-medium mt-1">Who will reign supreme? 👑</p>
                            </div>

                            {/* List */}
                            <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                <div className="space-y-3">
                                    {participants.map((person, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-between p-3 rounded-xl border ${index < 3
                                                ? 'bg-gradient-to-r border-transparent shadow-sm'
                                                : 'bg-slate-50 border-slate-100'
                                                } ${index === 0 ? 'from-yellow-50 to-yellow-100/50' : ''
                                                } ${index === 1 ? 'from-slate-100 to-slate-200/50' : ''
                                                } ${index === 2 ? 'from-amber-50 to-amber-100/50' : ''
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${index === 0 ? 'bg-yellow-400 text-yellow-900' :
                                                    index === 1 ? 'bg-slate-300 text-slate-800' :
                                                        index === 2 ? 'bg-amber-600 text-amber-100' :
                                                            'bg-slate-200 text-slate-600'
                                                    }`}>
                                                    {index + 1}
                                                </div>
                                                <span className={`font-bold ${index < 3 ? 'text-slate-900' : 'text-slate-700'}`}>
                                                    {person.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {index < 3 && <Medal size={16} className={
                                                    index === 0 ? 'text-yellow-500' :
                                                        index === 1 ? 'text-slate-400' :
                                                            'text-amber-600'
                                                } />}
                                                <span className="font-mono font-bold text-slate-500 text-sm">
                                                    {person.score} pts
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                                <p className="text-xs text-slate-500 font-medium">
                                    Scores updated after every round! 🚀
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
