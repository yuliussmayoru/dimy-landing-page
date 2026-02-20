"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Server, LayoutDashboard } from "lucide-react"

export default function Services() {
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden border-t border-white/5">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00a2ff]/10 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a2ff]/20 text-[#00a2ff] text-sm font-bold mb-6 border border-[#00a2ff]/30">
                            <Server className="w-4 h-4" />
                            Traditional SaaS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Built To <span className="text-[#00a2ff]">Scale.</span></h2>
                        <p className="text-blue-100/70 text-lg mb-8 leading-relaxed font-medium">
                            Our cloud-native System Solutions are designed for uncompromising performance. From custom portals to extensive data management platforms, we engineer scalable SaaS architecture.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "High availability architecture",
                                "Custom API integrations",
                                "Automated CI/CD pipelines",
                                "Secured by OWASP Top 10 standards"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#3eb352]" />
                                    <span className="font-medium text-white/90">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#1e293b]/50 p-4 shadow-xl">
                            {/* Abstract placeholder for SaaS Dashboard */}
                            <div className="w-full h-full rounded-xl bg-white/5 border border-white/10 flex flex-col p-4 gap-4 shadow-sm">
                                <div className="flex gap-4 h-1/3">
                                    <div className="w-2/3 bg-white/10 rounded-lg animate-pulse" />
                                    <div className="w-1/3 bg-[#00a2ff]/20 rounded-lg animate-pulse" />
                                </div>
                                <div className="flex gap-4 h-2/3">
                                    <div className="w-1/3 bg-[#3eb352]/20 rounded-lg animate-pulse" />
                                    <div className="w-2/3 bg-white/10 rounded-lg animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-6 border border-white/20">
                            <LayoutDashboard className="w-4 h-4" />
                            Enterprise Resource Planning
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Modular <span className="text-[#00a2ff]">ERP</span> Systems.</h2>
                        <p className="text-blue-100/70 text-lg mb-8 leading-relaxed font-medium">
                            Consolidate your operations with our robust ERP and Point-of-Sale (POS) platforms. Tailored reporting, inventory management, and HR solutions built closely to your specific workflows.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Real-time inventory mapping",
                                "Advanced financial reporting",
                                "Integrated HR & Payroll",
                                "OWASP ASVS Enterprise Security"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#3eb352]" />
                                    <span className="font-medium text-white/90">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#1e293b]/50 p-4 shadow-xl">
                            {/* Abstract placeholder for ERP Interface */}
                            <div className="w-full h-full rounded-xl bg-white/5 border border-white/10 flex flex-col p-4 gap-4 shadow-sm">
                                <div className="w-full h-12 bg-white/10 rounded-lg animate-pulse" />
                                <div className="flex-1 flex gap-4">
                                    <div className="w-1/4 bg-white/5 rounded-lg animate-pulse" />
                                    <div className="w-3/4 flex flex-col gap-4">
                                        <div className="h-1/2 bg-[#00a2ff]/20 rounded-lg animate-pulse" />
                                        <div className="h-1/2 bg-white/10 rounded-lg animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
