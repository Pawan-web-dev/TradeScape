import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TradeScape</span>
            </div>
            <p className="text-slate-400 mb-6">
              Empowering traders globally with real-time data, powerful analytics, and community insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/markets" className="text-slate-400 hover:text-emerald-400 transition-colors">Live Markets</Link></li>
              <li><Link to="/ideas" className="text-slate-400 hover:text-emerald-400 transition-colors">Trading Ideas</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Charts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Screener</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 TradeScape. All rights reserved. Developed by Developer Pawan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;