import { useState } from 'react';

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web App',
    description: 'A modern financial analytics platform with real-time data visualization.',
    gradient: 'from-violet-600 to-indigo-700',
    icon: '📈',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A seamless shopping experience with AI-powered product recommendations.',
    gradient: 'from-pink-600 to-rose-700',
    icon: '🛍️',
  },
  {
    title: 'Health & Wellness App',
    category: 'Mobile App',
    description: 'A comprehensive wellness tracker with personalized fitness plans.',
    gradient: 'from-emerald-600 to-teal-700',
    icon: '💪',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Design',
    description: 'A high-converting landing page with stunning animations and micro-interactions.',
    gradient: 'from-amber-600 to-orange-700',
    icon: '✨',
  },
  {
    title: 'Social Media Platform',
    category: 'Web App',
    description: 'A next-gen social platform connecting creators with their communities.',
    gradient: 'from-blue-600 to-cyan-700',
    icon: '🌐',
  },
  {
    title: 'AI Content Studio',
    category: 'AI/ML',
    description: 'An AI-powered content creation tool for marketers and businesses.',
    gradient: 'from-purple-600 to-fuchsia-700',
    icon: '🤖',
  },
];

const categories = ['All', 'Web App', 'Full Stack', 'Mobile App', 'Design', 'AI/ML'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent work. Each project represents our commitment to quality and innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project Card */}
              <div className={`bg-gradient-to-br ${project.gradient} p-8 h-72 flex flex-col justify-between`}>
                <div className="text-5xl">{project.icon}</div>
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
