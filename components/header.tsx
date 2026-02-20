"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex flex-col items-center justify-center transition-opacity hover:opacity-80">
            <Image
              src="/images/header-logo.png"
              alt="Dimy Tech Logo"
              width={200}
              height={50}
              className="w-auto h-8 md:h-10"
              priority
            />
          </div>
        </Link>
        <nav className="flex gap-8">
          <Link
            href="/about"
            className={`font-semibold text-sm transition-colors duration-300 hover:text-[#00a2ff] ${scrolled ? "text-[#0f172a]" : "text-white"
              }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-semibold text-sm transition-colors duration-300 hover:text-[#00a2ff] ${scrolled ? "text-[#0f172a]" : "text-white"
              }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
