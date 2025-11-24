import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface LoginProps {
    onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toLowerCase() === 'whistler2026') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('./assets/hero-bg.png')] bg-cover bg-center blur-sm opacity-50"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-md mx-4"
            >
                <div className="flex flex-col items-center mb-6">
                    <div className="p-3 bg-white/20 rounded-full mb-4">
                        <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-white text-center">Whistler Ski Trip</h1>
                    <p className="text-blue-100 text-sm mt-1">Enter the password to view details</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-300 text-sm text-center"
                        >
                            Incorrect password. Try 'whistler2026'
                        </motion.p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-colors duration-200"
                    >
                        Enter
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
