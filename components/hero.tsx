"use client"
import { motion } from "framer-motion"
import Header from "./header"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] overflow-hidden flex flex-col pt-24">
      <Header />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-[#00a2ff]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-[#3eb352]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[100px]"
        />

        {/* Sophisticated grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
          }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <Image
                src="/images/hero-logo.png"
                alt="Dimy Tech Logo"
                width={300}
                height={100}
                className="w-auto h-20 md:h-24 lg:h-32 object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-white"
          >
            Empowering <span className="text-[#00a2ff]">Innovation,</span> <br />
            Business at Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Dimy Teknologi Indonesia delivers robust modular ERP implementations, highly dependable Point-of-Sale platforms, and secure customized systems tailored to elevate your business operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#00a2ff] text-white font-semibold rounded-lg hover:bg-[#00a2ff]/90 transition-colors w-full sm:w-auto shadow-lg shadow-[#00a2ff]/20">
              Explore Our Services
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto shadow-sm">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
