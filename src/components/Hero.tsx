export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-950 to-indigo-950"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/80 text-sm font-medium">Available for new projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          We craft{' '}
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            digital
          </span>
          <br />
          experiences
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          A creative agency that transforms ideas into stunning digital products. 
          We design, develop, and deliver experiences that captivate and convert.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            Let's Talk →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">150+</div>
            <div className="text-white/50 text-sm mt-1">Projects Done</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-white/50 text-sm mt-1">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white">8+</div>
            <div className="text-white/50 text-sm mt-1">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
