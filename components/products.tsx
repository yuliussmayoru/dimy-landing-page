"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Users, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

export default function Products() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section id="products" className="py-24 bg-[#f8fafc] relative overflow-hidden ring-1 ring-slate-200/50">
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
                            Our <span className="text-[#00a2ff]">Products.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#475569] text-lg font-medium"
                        >
                            Innovative software solutions built by Dimy Teknologi to empower businesses and streamline operations.
                        </motion.p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="hidden md:flex gap-4 pb-2">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] hover:border-[#00a2ff] hover:bg-[#00a2ff]/5 transition-all shadow-sm bg-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] hover:border-[#00a2ff] hover:bg-[#00a2ff]/5 transition-all shadow-sm bg-white"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">

                            {/* Slide 1 - Qoligo POS */}
                            <div className="flex-[0_0_100%] min-w-0 pr-4 md:pr-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="w-full lg:w-1/2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3eb352]/10 text-[#3eb352] text-sm font-bold mb-6 border border-[#3eb352]/20">
                                            <ShoppingCart className="w-4 h-4" />
                                            Retail Solution
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0f172a]">Qoligo POS</h3>
                                        <p className="text-[#475569] text-lg mb-8 leading-relaxed font-medium">
                                            Qoligo Point of Sales is a high-performance retail management system built with robust offline-first capabilities.
                                            <br /><br />
                                            It ensures your business stays operational even without an active internet connection, syncing data seamlessly once connectivity is restored.
                                        </p>

                                        <button className="flex items-center gap-2 text-[#00a2ff] font-bold hover:gap-4 transition-all duration-300">
                                            Experience Qoligo <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-1/2 relative py-8">
                                        {/* Decorative Background Glows */}
                                        <div className="absolute top-[0%] right-[-10%] w-64 h-64 bg-[#3eb352]/10 rounded-full blur-[80px]" />

                                        {/* Single Image with "Under Refactor" Overlay */}
                                        <div className="flex flex-col relative z-10 w-full pt-8 px-4">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white group"
                                            >
                                                <Image
                                                    src="/images/qoligo/qoligo-v2.png"
                                                    alt="Qoligo POS Platform"
                                                    width={1200}
                                                    height={800}
                                                    className="w-full h-auto"
                                                />
                                                {/* Under Refactor Overlay */}
                                                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[6px] flex flex-col items-center justify-center p-6 text-center">
                                                    <div className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-3 shadow-lg">
                                                        Under Refactor
                                                    </div>
                                                    <p className="text-white/90 text-sm font-medium max-w-[240px]">
                                                        We are currently upgrading Qoligo POS to Version 2.0 with enhanced offline capabilities.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 - TeamSight */}
                            <div className="flex-[0_0_100%] min-w-0 pr-4 md:pr-12">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="w-full lg:w-1/2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a2ff]/10 text-[#00a2ff] text-sm font-bold mb-6 border border-[#00a2ff]/20">
                                            <Users className="w-4 h-4" />
                                            Marketing SaaS
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0f172a]">TeamSight</h3>
                                        <p className="text-[#475569] text-lg mb-8 leading-relaxed font-medium">
                                            TeamSight is our upcoming flagship SaaS product designed to revolutionize marketing activity tracking.
                                            <br /><br />
                                            Help your marketing force stay organized with powerful task management and real-time field activity reporting, optimized for data-driven decisions.
                                        </p>

                                        <button className="flex items-center gap-2 text-[#00a2ff] font-bold hover:gap-4 transition-all duration-300">
                                            Join the Waitlist <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="w-full lg:w-1/2 relative py-8">
                                        {/* Decorative Background Glows */}
                                        <div className="absolute top-[0%] right-[-10%] w-64 h-64 bg-[#00a2ff]/10 rounded-full blur-[80px]" />

                                        {/* Image for TeamSight */}
                                        <div className="flex flex-col relative z-10 w-full pt-8">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
                                            >
                                                <Image
                                                    src="/images/teamsight/teamsight-login.png"
                                                    alt="TeamSight Platform"
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

                {/* Mobile Carousel Controls */}
                <div className="flex md:hidden justify-center gap-4 mt-12">
                    <button
                        onClick={scrollPrev}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] transition-all bg-white"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#00a2ff] transition-all bg-white"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    )
}
