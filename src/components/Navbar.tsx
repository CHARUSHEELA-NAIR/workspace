import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ['Services', 'Portfolio', 'Testimonials', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Horizon
          </span>
          <span className={scrolled ? 'text-gray-900' : 'text-white'}> Creative</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-violet-600 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-violet-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
