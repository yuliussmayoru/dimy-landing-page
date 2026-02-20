"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, BarChart3, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

export default function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 md:mb-20">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-[#0f172a]"
                        >
                            Our <span className="text-[#00a2ff]">Projects.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#475569] text-lg font-medium"
                        >
                            A showcase of our high-impact system solutions driving real-world automation and decision-making capabilities.
                        </motion.p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="hidden md:flex gap-4 pb-2">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] hover:border-[#00a2ff] hover:bg-[#00a2ff]/5 transition-all shadow-sm"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] hover:border-[#00a2ff] hover:bg-[#00a2ff]/5 transition-all shadow-sm"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">

                            {/* Slide 1 - WFE Nexus */}
                            <div className="flex-[0_0_100%] min-w-0 pr-4 md:pr-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="w-full lg:w-1/2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a2ff]/10 text-[#00a2ff] text-sm font-bold mb-6 border border-[#00a2ff]/20">
                                            <BarChart3 className="w-4 h-4" />
                                            Decision Support System
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0f172a]">WEF Nexus</h3>
                                        <p className="text-[#475569] text-lg mb-8 leading-relaxed font-medium">
                                            WEF Nexus is a web-based Decision Support System designed to analyze the complex interconnections between the Water, Energy, and Food sectors. Developed as a flagship project for the United Nations Development Programme (UNDP).
                                            <br /><br />
                                            This system enables users to simulate future scenarios (projected up to 2045) based on historical data and policy intervention assumptions.
                                        </p>

                                        <button className="flex items-center gap-2 text-[#00a2ff] font-bold hover:gap-4 transition-all duration-300">
                                            View Case Study <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-1/2 relative py-8">
                                        {/* Decorative Background Glows */}
                                        <div className="absolute top-[0%] right-[-10%] w-64 h-64 bg-[#00a2ff]/10 rounded-full blur-[80px]" />
                                        <div className="absolute bottom-[0%] left-[-10%] w-48 h-48 bg-[#3eb352]/10 rounded-full blur-[80px]" />

                                        {/* Unconstrained Image Stack */}
                                        <div className="flex flex-col relative z-10 w-full pt-8">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="w-[90%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
                                            >
                                                <Image
                                                    src="/images/nexus/nexus-2.png"
                                                    alt="WFE Nexus Dashboard"
                                                    width={1200}
                                                    height={800}
                                                    className="w-full h-auto"
                                                />
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="w-[85%] self-end rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white -mt-12 md:-mt-24 relative z-20"
                                            >
                                                <Image
                                                    src="/images/nexus/nexus-1.png"
                                                    alt="WFE Nexus Analytics"
                                                    width={1200}
                                                    height={800}
                                                    className="w-full h-auto"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 - Taskmen */}
                            <div className="flex-[0_0_100%] min-w-0 pr-4 md:pr-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="w-full lg:w-1/2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a2ff]/10 text-[#00a2ff] text-sm font-bold mb-6 border border-[#00a2ff]/20">
                                            <BarChart3 className="w-4 h-4" />
                                            Operations Management
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0f172a]">Taskmen <span className="text-[#00a2ff] text-xl lg:text-2xl align-middle">(Task Management System)</span></h3>
                                        <p className="text-[#475569] text-lg mb-8 leading-relaxed font-medium">
                                            Taskmen is a comprehensive marketing activity monitoring platform developed for PT. Tunas Bangun Prakarsa.
                                            <br /><br />
                                            It streamlines the logging, tracking, and evaluation of daily marketing operations, seamlessly integrated with a precise employee attendance and tracking system.
                                        </p>

                                        <button className="flex items-center gap-2 text-[#00a2ff] font-bold hover:gap-4 transition-all duration-300">
                                            View Case Study <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-1/2 relative py-8">
                                        {/* Decorative Background Glows */}
                                        <div className="absolute top-[0%] right-[-10%] w-64 h-64 bg-[#00a2ff]/10 rounded-full blur-[80px]" />
                                        <div className="absolute bottom-[0%] left-[-10%] w-48 h-48 bg-[#3eb352]/10 rounded-full blur-[80px]" />

                                        {/* Unconstrained Image Stack for Taskmen */}
                                        <div className="flex flex-col relative z-10 w-full mb-12 pt-8">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="w-[85%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
                                            >
                                                <Image
                                                    src="/images/taskmen/taskmen-dashboard.png"
                                                    alt="Taskmen Dashboard"
                                                    width={1200}
                                                    height={800}
                                                    className="w-full h-auto"
                                                />
                                            </motion.div>

                                            <div className="flex items-end justify-between w-[95%] -mt-16 md:-mt-24 relative z-20 self-end">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="w-[28%] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800 ml-4 mb-4"
                                                >
                                                    <Image
                                                        src="/images/taskmen/taskmen-mobile.jpeg"
                                                        alt="Taskmen Mobile App"
                                                        width={400}
                                                        height={800}
                                                        className="w-full h-auto rounded-xl object-cover"
                                                    />
                                                </motion.div>

                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    className="w-[65%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
                                                >
                                                    <Image
                                                        src="/images/taskmen/taskmen-login.png"
                                                        alt="Taskmen Login"
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto"
                                                    />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Carousel Controls */}
                <div className="flex md:hidden justify-center gap-4 mt-8">
                    <button
                        onClick={scrollPrev}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] hover:border-[#00a2ff] hover:bg-[#00a2ff]/5 transition-all shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] hover:border-[#00a2ff] hover:bg-[#00a2ff]/5 transition-all shadow-sm"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    )
}
