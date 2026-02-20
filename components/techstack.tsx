"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const techStack = [
    { name: "Next.js", logo: "/images/techstack/nextjs.png" },
    { name: "React", logo: "/images/techstack/react.png" },
    { name: "TypeScript", logo: "/images/techstack/typescript.png" },
    { name: "Laravel", logo: "/images/techstack/laravel.png" },
    { name: "PostgreSQL", logo: "/images/techstack/postgresql.png" },
    { name: "Node.js", logo: "/images/techstack/nodejs.png" },
    { name: "Framer Motion", logo: "/images/techstack/framer.png" },
    { name: "Docker", logo: "/images/techstack/docker.png" },
]

export default function TechStack() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4"
                    >
                        Our <span className="text-[#00a2ff]">Tech Stack.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[#475569] font-medium"
                    >
                        We use the most reliable and cutting-edge technologies to build superior system solutions.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Infinite Scroll Row */}
                    <div className="flex overflow-hidden group">
                        <div className="flex animate-infinite-scroll space-x-12 md:space-x-24 items-center py-4">
                            {[...techStack, ...techStack].map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                                >
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4">
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays for smooth entry/exit */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
                </div>
            </div>

            <style jsx>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
