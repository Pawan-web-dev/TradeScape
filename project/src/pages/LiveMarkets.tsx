import React, { useState, useEffect } from 'react';
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react';
import MarketCard from '../components/MarketCard';
import marketsData from '../data/markets.json';

interface Market {
  id: number;
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  category: string;
  trend: 'up' | 'down';
  chartData: number[];
}

const LiveMarkets: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [filteredMarkets, setFilteredMarkets] = useState<Market[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'crypto', 'stocks', 'forex', 'commodities'];

  useEffect(() => {
    setMarkets(marketsData.markets);
    setFilteredMarkets(marketsData.markets);
  }, []);

  useEffect(() => {
    let filtered = markets;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(market => market.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(market =>
        market.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort markets
    filtered = [...filtered].sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = parseFloat(a.price.replace(/[,$]/g, ''));
          bValue = parseFloat(b.price.replace(/[,$]/g, ''));
          break;
        case 'change':
          aValue = parseFloat(a.changePercent.replace(/[%]/g, ''));
          bValue = parseFloat(b.changePercent.replace(/[%]/g, ''));
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredMarkets(filtered);
  }, [markets, selectedCategory, searchTerm, sortBy, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Markets Dashboard
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real-time market data across all major asset classes. Stay informed, trade smarter.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search markets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-slate-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="change">Change</option>
              </select>
              <button
                onClick={toggleSortOrder}
                className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Market Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMarkets.map((market) => (
            <MarketCard
              key={market.id}
              symbol={market.symbol}
              name={market.name}
              price={market.price}
              change={market.change}
              changePercent={market.changePercent}
              volume={market.volume}
              trend={market.trend}
              chartData={market.chartData}
            />
          ))}
        </div>

        {filteredMarkets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No markets found matching your criteria.</p>
          </div>
        )}

        {/* Live Update Indicator */}
        <div className="fixed bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Live Data</span>
        </div>
      </div>
    </div>
  );
};

export default LiveMarkets;