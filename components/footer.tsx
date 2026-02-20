import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10 pt-16 pb-8 px-6 text-white relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6 bg-white py-3 px-5 rounded-xl shadow-lg border border-white/20">
              <div className="relative flex flex-col items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/images/dimy-logo.png"
                  alt="Dimy Tech Logo"
                  width={200}
                  height={60}
                  className="w-auto h-12"
                />
              </div>
            </Link>
            <p className="text-blue-100/70 text-sm max-w-sm leading-relaxed mb-6 font-medium">
              Next-generation system solutions, modular ERPs, and custom software development that scales with your ambition.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 uppercase text-white/90 font-bold text-xs tracking-widest">Solutions</h3>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">System Solutions</Link>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">Modular ERP</Link>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">Cyber Security</Link>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">AI Integrations</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-2 uppercase text-white/90 font-bold text-xs tracking-widest">Company</h3>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">About Us</Link>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">Careers</Link>
            <Link href="/" className="text-blue-100/70 hover:text-white transition-colors text-sm font-medium">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-blue-100/70 text-sm font-medium">© {new Date().getFullYear()} Dimy Teknologi Indonesia. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-blue-100/70 font-medium">
            <Link href="/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
