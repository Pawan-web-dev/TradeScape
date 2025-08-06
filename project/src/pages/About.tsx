import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Shield, Zap, Target } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const About: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(testimonialsData.testimonials);
  }, []);

  const milestones = [
    { year: '2020', event: 'TradeScape Founded', description: 'Started with a vision to democratize trading' },
    { year: '2021', event: '1,000 Users', description: 'Reached our first thousand active traders' },
    { year: '2022', event: 'Advanced Charts', description: 'Launched professional-grade charting tools' },
    { year: '2023', event: '10,000+ Community', description: 'Built a thriving community of traders' },
    { year: '2024', event: 'Global Expansion', description: 'Expanding to serve traders worldwide' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Traders Globally
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            TradeScape was founded with a simple mission: to provide every trader with the tools, 
            data, and community they need to succeed in the financial markets.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 border border-emerald-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                We believe that successful trading shouldn't be limited to Wall Street professionals. 
                Our platform combines cutting-edge technology, real-time market data, and the wisdom 
                of a global trading community to level the playing field for individual traders everywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-slate-400 leading-relaxed">
                Continuously pushing the boundaries of trading technology to deliver the most advanced tools and insights.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community</h3>
              <p className="text-slate-400 leading-relaxed">
                Fostering a collaborative environment where traders share knowledge and grow together.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Trust</h3>
              <p className="text-slate-400 leading-relaxed">
                Maintaining the highest standards of security, transparency, and reliability in everything we do.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-slate-400 leading-relaxed">
                Striving for perfection in every feature, every interaction, and every trading experience.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-6">
                <Zap className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Speed</h3>
              <p className="text-slate-400 leading-relaxed">
                Delivering lightning-fast execution and real-time data to keep pace with market movements.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-6">
                <Target className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Accessibility</h3>
              <p className="text-slate-400 leading-relaxed">
                Making professional-grade trading tools accessible to traders of all experience levels.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From startup to global trading platform
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`bg-slate-800 rounded-xl p-6 border border-slate-700 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-emerald-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-900 z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Traders Say</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real feedback from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Trusted by Traders Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">10K+</div>
                <div className="text-slate-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50M+</div>
                <div className="text-slate-400">Trades Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-slate-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-slate-400">Support</div>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Join thousands of successful traders who trust TradeScape for their daily trading decisions. 
              Our commitment to excellence and innovation has made us the go-to platform for serious traders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;