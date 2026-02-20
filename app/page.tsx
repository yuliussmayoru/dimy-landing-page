"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Upcoming from "@/components/upcoming"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Upcoming />
      <Footer />
    </main>
  )
}
