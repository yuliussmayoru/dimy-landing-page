"use client"

import { motion } from "framer-motion"
import { ShieldAlert, BrainCircuit } from "lucide-react"

export default function Upcoming() {
    return (
        <section className="py-24 bg-[#e0f2fe] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-[#0f172a]"
                    >
                        The Future of <span className="text-[#00a2ff]">Dimy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[#334155] text-lg font-medium"
                    >
                        We are constantly researching and developing next-generation integrations. Here is an exclusive look at what we are rolling out soon.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-2xl border border-white/50 bg-[#f8fafc]/80 backdrop-blur-sm group shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-10 z-10 relative">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-red-100 shadow-sm">
                                <ShieldAlert className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Cyber Security Services</h3>
                            <p className="text-[#475569] leading-relaxed mb-6 font-medium">
                                Protecting business integrity with comprehensive penetration testing, vulnerability assessments, and proactive defensive strategies to secure your digital infrastructure against emerging threats.
                            </p>
                            <div className="inline-flex items-center text-sm font-bold text-red-600 uppercase tracking-wider">
                                Coming Soon
                            </div>
                        </div>

                        {/* Decorative Cyber Background */}
                        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none pb-4 pr-4">
                            <ShieldAlert className="w-64 h-64 text-red-600 rotate-12" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative overflow-hidden rounded-2xl border border-white/50 bg-[#f8fafc]/80 backdrop-blur-sm group shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-[#00a2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-10 z-10 relative">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 border border-blue-100 shadow-sm">
                                <BrainCircuit className="w-8 h-8 text-[#00a2ff]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">AI Solution Apps</h3>
                            <p className="text-[#475569] leading-relaxed mb-6 font-medium">
                                Automating workflows and unlocking actionable data insights with custom-built artificial intelligence models tightly integrated with your existing Dimy ERP and SaaS applications.
                            </p>
                            <div className="inline-flex items-center text-sm font-bold text-[#00a2ff] uppercase tracking-wider">
                                In Development
                            </div>
                        </div>

                        {/* Decorative AI Background */}
                        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none pb-4 pr-4">
                            <BrainCircuit className="w-64 h-64 text-[#00a2ff] -rotate-12" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
