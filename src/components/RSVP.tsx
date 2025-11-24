import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function RSVP() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        attending: 'yes',
        dietary: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('RSVP Submitted:', formState);
        // Here you would typically send data to a backend or service
        setIsSubmitted(true);
    };

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">RSVP</h2>
                        <p className="text-blue-200">Please let us know if you can make it by Jan 15th</p>
                    </div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                            <p className="text-blue-200">Your RSVP has been received.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-blue-200 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-blue-200 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-blue-200 mb-2">Will you be joining us?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="yes"
                                            checked={formState.attending === 'yes'}
                                            onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                                            className="w-4 h-4 text-blue-500 focus:ring-blue-500 bg-white/10 border-white/30"
                                        />
                                        <span>Yes, can't wait!</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="no"
                                            checked={formState.attending === 'no'}
                                            onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                                            className="w-4 h-4 text-blue-500 focus:ring-blue-500 bg-white/10 border-white/30"
                                        />
                                        <span>Sadly, no</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-blue-200 mb-2">Dietary Restrictions</label>
                                <textarea
                                    value={formState.dietary}
                                    onChange={(e) => setFormState({ ...formState, dietary: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-24 resize-none"
                                    placeholder="Any allergies or preferences?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Send RSVP</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
