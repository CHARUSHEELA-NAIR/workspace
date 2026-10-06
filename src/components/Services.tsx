const services = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement. We create designs that are both stunning and functional.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Cutting-edge web applications built with modern technologies. Fast, scalable, and maintainable solutions for your business.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices and platforms.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: '🚀',
    title: 'Brand Strategy',
    description: 'Comprehensive brand identity and strategy that positions your business for success in competitive markets.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: '📊',
    title: 'Analytics & SEO',
    description: 'Data-driven optimization strategies that improve visibility, increase traffic, and maximize your digital ROI.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Lightning-fast load times and smooth interactions. We optimize every aspect of your digital presence for peak performance.',
    color: 'from-indigo-500 to-violet-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What we do best
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your business thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
