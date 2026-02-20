"use client"

import { motion } from "framer-motion"
import { MonitorSmartphone, ShieldCheck, Database, Zap } from "lucide-react"

const features = [
    {
        title: "Traditional SaaS",
        description: "Scalable, cloud-native software solutions tailored to your unique business needs.",
        icon: MonitorSmartphone,
    },
    {
        title: "Modular ERP",
        description: "Enterprise resource planning systems that streamline operations and enhance productivity.",
        icon: Database,
    },
    {
        title: "Cyber Security",
        description: "Advanced penetration testing and security assessments to protect your digital assets.",
        icon: ShieldCheck,
    },
    {
        title: "AI Solutions",
        description: "Intelligent automation and data analysis tools to drive actionable insights.",
        icon: Zap,
    },
]

export default function About() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
                    >
                        Engineering <span className="text-[#00a2ff]">Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        We build robust, scalable systems that power the modern enterprise. From foundational ERPs to cutting-edge AI integrations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white border border-border/60 hover:border-[#00a2ff]/30 shadow-sm hover:shadow-md hover:shadow-[#00a2ff]/5 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#00a2ff]/10 flex items-center justify-center mb-6 border border-[#00a2ff]/20 group-hover:bg-[#00a2ff] transition-colors">
                                <feature.icon className="w-6 h-6 text-[#00a2ff] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
