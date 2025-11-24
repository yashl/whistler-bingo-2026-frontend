import { useState } from 'react';
import { motion } from 'framer-motion';
import Leaderboard from './Leaderboard';

export default function BirthdayBingo() {
    const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <Leaderboard isOpen={isLeaderboardOpen} onClose={() => setIsLeaderboardOpen(false)} />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-bold mb-4">
                        🎉 The Main Event
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                        Birthday Bingo 🎂
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        Think you're the Kamini expert? Put your knowledge to the test and leave the others in the powder! 💨
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsLeaderboardOpen(true)}
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all border border-slate-100"
                    >
                        <span className="text-xl">🏆</span> View Leaderboard
                    </motion.button>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                            <span className="text-3xl">📜</span> The Rules of the Slopes
                        </h3>
                        <div className="space-y-6">
                            {/* Rule 1 */}
                            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="bg-blue-100 text-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">1</div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Clockwork Drops ⏰</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Questions drop every <strong>3 hours</strong> starting midnight Feb 6th. Set your alarms—don't be late to the gate!
                                    </p>
                                </div>
                            </div>

                            {/* Rule 2 */}
                            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="bg-blue-100 text-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">2</div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">The Finish Line 🏁</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Last question drops on <strong>Feb 6th, 9:00 PM</strong>. It's a marathon, not a sprint. Pace yourself!
                                    </p>
                                </div>
                            </div>

                            {/* Rule 3 - Podium Points */}
                            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="bg-blue-100 text-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">3</div>
                                <div className="w-full">
                                    <h4 className="text-lg font-bold text-slate-900 mb-4">Podium Points 🏆</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">🥇</span>
                                                <span className="font-bold text-yellow-800">1st Place</span>
                                            </div>
                                            <span className="font-black text-yellow-700 bg-white/60 px-2 py-1 rounded-lg text-sm">10 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-200 to-slate-100 border border-slate-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">🥈</span>
                                                <span className="font-bold text-slate-700">2nd Place</span>
                                            </div>
                                            <span className="font-black text-slate-600 bg-white/60 px-2 py-1 rounded-lg text-sm">8 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-200 to-amber-100 border border-amber-300">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">🥉</span>
                                                <span className="font-bold text-amber-800">3rd Place</span>
                                            </div>
                                            <span className="font-black text-amber-700 bg-white/60 px-2 py-1 rounded-lg text-sm">5 pts</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">🎿</span>
                                                <span className="font-medium text-slate-600">Participation</span>
                                            </div>
                                            <span className="font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded-lg text-sm border border-slate-100">2 pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rule 4 */}
                            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="bg-blue-100 text-blue-600 rounded-2xl w-12 h-12 flex items-center justify-center shrink-0 text-xl font-bold">4</div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">King/Queen of the Hill 👑</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        The person with the highest total points at the end wins the grand prize!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grand Prize Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-br from-yellow-50 to-amber-50 p-8 md:p-12 rounded-3xl shadow-xl border border-yellow-200 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center relative z-10">
                            🏆 The Grand Slopes Prize <br />
                            <span className="text-lg md:text-xl font-bold text-slate-600">(Trophy Not Included) ⛷️</span>
                        </h3>

                        <div className="space-y-8 relative z-10">
                            {/* Prize 1 */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-100 shadow-sm">
                                <span className="inline-block bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm mb-3">
                                    Performance Enhancer 🏔️
                                </span>
                                <p className="text-lg text-slate-800">
                                    The winner receives <strong className="font-black text-slate-900">One (1) Free Professional Ski or Snowboard Wax</strong> provided by the legendary <strong className="font-black text-blue-600">Yash, The Wax Whisperer</strong>.
                                </p>
                            </div>

                            {/* Prize 2 */}
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-yellow-100 shadow-sm">
                                <span className="inline-block bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm mb-3">
                                    Social Currency 🥇
                                </span>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">The Ultimate Tribute</h4>
                                <p className="text-slate-700 italic text-lg leading-relaxed">
                                    "The winner earns the undisputed right to <span className="font-bold not-italic">Kamini's Peak 2 Peak Esteem</span>, meaning her respect level for you is higher than the gondola—and equally suspended in disbelief."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
