import { motion } from 'framer-motion';
import { MapPin, Calendar, Home } from 'lucide-react';

const details = [
    {
        icon: Home,
        title: "Accommodation",
        description: "Fairmont Chateau Whistler",
        subtext: "4599 Chateau Blvd, Whistler, BC"
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Whistler Blackcomb",
        subtext: "World-class skiing & snowboarding"
    },
    {
        icon: Calendar,
        title: "Dates",
        description: "Feb 20 - 24, 2025",
        subtext: "Thursday to Monday"
    }
];

export default function Details() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Details</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {details.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <item.icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">{item.title}</h3>
                            <p className="text-slate-700 text-center font-medium">{item.description}</p>
                            <p className="text-slate-500 text-center text-sm mt-1">{item.subtext}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
