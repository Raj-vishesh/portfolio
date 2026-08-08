import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 text-white transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-bold">Vishesh</h1>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-blue-400 transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden"
          >
            {links.map((link) => (
              
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
