const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Horizon Creative transformed our vision into reality. Their attention to detail and creative approach exceeded all our expectations. The results speak for themselves.',
    avatar: '👩‍💼',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLab',
    content: 'Working with this team was an absolute pleasure. They delivered a stunning website that increased our conversions by 200%. Highly recommended!',
    avatar: '👨‍💻',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Bloom',
    content: 'The design quality and technical execution were outstanding. They truly understand how to create digital experiences that resonate with users.',
    avatar: '👩‍🎨',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['TechCorp', 'StartupXYZ', 'DesignCo', 'InnovateLab', 'FutureTech'].map((company) => (
              <span key={company} className="text-xl font-bold text-gray-400 tracking-wider">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
