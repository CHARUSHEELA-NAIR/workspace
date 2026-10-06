export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Web Design', 'Development', 'Mobile Apps', 'Branding', 'SEO'],
    Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
    Support: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Contact'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together. Your next big idea starts here.
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5"
          >
            Start a Project →
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Horizon
              </span>
              <span className="text-white"> Creative</span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting exceptional digital experiences that inspire, engage, and deliver results.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['T', 'L', 'D', 'G'].map((letter) => (
                <a
                  key={letter}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-colors text-sm font-bold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Horizon Creative. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
