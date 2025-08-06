import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="p-6 bg-emerald-500 rounded-2xl animate-pulse">
            <BarChart3 className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2">
            <TrendingUp className="w-8 h-8 text-emerald-400 animate-bounce" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-3xl font-bold text-white mb-4">TradeScape</h1>
        
        {/* Loading Text */}
        <p className="text-slate-400 mb-8 animate-pulse">Loading market data...</p>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 animate-loading-bar"></div>
        </div>
        
        {/* Loading Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-sm">
          <div className="text-center">
            <div className="text-emerald-400 font-bold animate-pulse">500+</div>
            <div className="text-slate-500">Trading Ideas</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-400 font-bold animate-pulse">3000+</div>
            <div className="text-slate-500">Active Traders</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-400 font-bold animate-pulse">200+</div>
            <div className="text-slate-500">Indicators</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;