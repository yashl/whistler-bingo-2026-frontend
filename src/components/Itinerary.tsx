import { motion } from 'framer-motion';

const schedule = [
    {
        day: "Thursday, Feb 5",
        title: "Arrival & Birthday Kickoff",
        activities: [
            "Arrive to Whistler 🏔️",
            "Check-in at The Crystal Lodge 🏨",
            "Midnight Birthday Celebration for Kamini 🎂✨"
        ]
    },
    {
        day: "Friday, Feb 6",
        title: "Whistler & Apres",
        activities: [
            "Ski on Whistler Side ⛷️",
            "Party at Longhorn Bar (Apres Ski) 🍻🎉",
            "Village Stroll & Dinner"
        ]
    },
    {
        day: "Saturday, Feb 7",
        title: "Blackcomb Adventure",
        activities: [
            "Ski on Blackcomb Side 🏂",
            "Peak 2 Peak Gondola Ride 🚠",
            "Cozy Dinner in the Village 🍷"
        ]
    },
    {
        day: "Sunday, Feb 8",
        title: "Seattle Bound",
        activities: [
            "Morning Coffee & Pastries ☕",
            "Head out to Seattle 🚗💨",
            "Safe Travels! 👋"
        ]
    }
];

export default function Itinerary() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Itinerary</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>

                    {schedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm -translate-x-1/2 mt-1.5 z-10"></div>

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-2">
                                    {item.day}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <ul className={`space-y-2 ${index % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                    {item.activities.map((activity, i) => (
                                        <li key={i} className="text-slate-600 text-sm md:text-base flex items-center gap-2">
                                            {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-blue-300 rounded-full shrink-0 md:hidden"></span>}
                                            {activity}
                                            {index % 2 !== 0 && <span className="w-1.5 h-1.5 bg-blue-300 rounded-full shrink-0 md:hidden"></span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
