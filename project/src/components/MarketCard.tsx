import React from 'react';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';

interface MarketCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  trend: 'up' | 'down';
  chartData: number[];
}

const MarketCard: React.FC<MarketCardProps> = ({
  symbol,
  name,
  price,
  change,
  changePercent,
  volume,
  trend,
  chartData
}) => {
  const isPositive = trend === 'up';

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-bold text-lg">{symbol}</h3>
          <p className="text-slate-400 text-sm">{name}</p>
        </div>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-400" />
          )}
        </div>
      </div>

      {/* Mini Chart */}
      <div className="mb-4 h-20 bg-slate-700/50 rounded-lg flex items-end justify-center p-2 group-hover:bg-slate-700/80 transition-colors">
        <div className="flex items-end space-x-1 h-full w-full">
          {chartData.map((value, index) => {
            const height = ((value - Math.min(...chartData)) / (Math.max(...chartData) - Math.min(...chartData))) * 100;
            return (
              <div
                key={index}
                className={`w-full rounded-sm transition-all duration-300 ${
                  isPositive ? 'bg-emerald-400/70 group-hover:bg-emerald-400' : 'bg-red-400/70 group-hover:bg-red-400'
                }`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* Price Info */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xl">{price}</span>
        <div className={`flex items-center space-x-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          <span className="font-medium">{changePercent}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">Volume: {volume}</span>
        <span className={`${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default MarketCard;