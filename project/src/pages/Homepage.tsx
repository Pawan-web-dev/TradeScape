import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BarChart, Shield, Zap, Target } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20"></div>
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Trade Smarter with
              <span className="text-emerald-400 block">Real-Time Data Insights</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Powerful charts, community insights, and market data — all in one place. 
              Join thousands of traders making informed decisions every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/markets" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
              >
                Explore Markets
              </Link>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                Start Trading
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <CounterAnimation end={500} suffix="+" />
                <p className="text-slate-400 mt-2 text-lg">Trading Ideas</p>
                <p className="text-slate-500 text-sm mt-1">Community-driven insights</p>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <CounterAnimation end={3000} suffix="+" />
                <p className="text-slate-400 mt-2 text-lg">Active Traders</p>
                <p className="text-slate-500 text-sm mt-1">Growing every day</p>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <CounterAnimation end={200} suffix="+" />
                <p className="text-slate-400 mt-2 text-lg">Indicators</p>
                <p className="text-slate-500 text-sm mt-1">Technical analysis tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose TradeScape?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to trade successfully in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-Time Data</h3>
              <p className="text-slate-400 leading-relaxed">
                Access live market data across stocks, crypto, forex, and commodities with minimal latency and maximum accuracy.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Community Insights</h3>
              <p className="text-slate-400 leading-relaxed">
                Learn from experienced traders, share ideas, and discover new strategies through our vibrant community platform.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <BarChart className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Charts</h3>
              <p className="text-slate-400 leading-relaxed">
                Professional-grade charting tools with 200+ technical indicators and customizable layouts for any trading style.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-slate-400 leading-relaxed">
                Bank-grade security with 99.9% uptime guarantee. Your data and trading activities are always protected.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-slate-400 leading-relaxed">
                Execute trades and analyze markets with ultra-low latency. Every millisecond counts in trading.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Alerts</h3>
              <p className="text-slate-400 leading-relaxed">
                Never miss an opportunity with intelligent alerts based on price movements, technical patterns, and market events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust TradeScape for their daily trading decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/markets" 
              className="bg-white text-emerald-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Exploring
            </Link>
            <Link 
              to="/ideas" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Trading Ideas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;