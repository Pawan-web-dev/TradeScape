import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import TradingIdeaCard from '../components/TradingIdeaCard';
import tradingIdeasData from '../data/trading-ideas.json';

interface TradingIdea {
  id: number;
  title: string;
  author: string;
  preview: string;
  likes: number;
  comments: number;
  tags: string[];
  timeAgo: string;
  asset: string;
  category: string;
}

const TradingIdeas: React.FC = () => {
  const [ideas, setIdeas] = useState<TradingIdea[]>([]);
  const [filteredIdeas, setFilteredIdeas] = useState<TradingIdea[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ideasPerPage = 6;

  const categories = ['all', 'Technical Analysis', 'Pattern Recognition', 'Fundamental Analysis', 'Options Strategy', 'Weekly Analysis', 'Stock Analysis'];

  useEffect(() => {
    setIdeas(tradingIdeasData.tradingIdeas);
    setFilteredIdeas(tradingIdeasData.tradingIdeas);
  }, []);

  useEffect(() => {
    let filtered = ideas;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(idea => idea.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(idea =>
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredIdeas(filtered);
    setCurrentPage(1);
  }, [ideas, selectedCategory, searchTerm]);

  // Pagination
  const indexOfLastIdea = currentPage * ideasPerPage;
  const indexOfFirstIdea = indexOfLastIdea - ideasPerPage;
  const currentIdeas = filteredIdeas.slice(indexOfFirstIdea, indexOfLastIdea);
  const totalPages = Math.ceil(filteredIdeas.length / ideasPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trading Ideas & Analysis
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover market insights and trading strategies from our community of experienced traders.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search ideas, authors, assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>

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
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <div>
                <div className="text-2xl font-bold text-white">{filteredIdeas.length}</div>
                <div className="text-slate-400">Active Ideas</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {ideas.reduce((sum, idea) => sum + idea.likes, 0)}
                </div>
                <div className="text-slate-400">Total Likes</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {ideas.reduce((sum, idea) => sum + idea.comments, 0)}
                </div>
                <div className="text-slate-400">Comments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentIdeas.map((idea) => (
            <TradingIdeaCard
              key={idea.id}
              title={idea.title}
              author={idea.author}
              preview={idea.preview}
              likes={idea.likes}
              comments={idea.comments}
              tags={idea.tags}
              timeAgo={idea.timeAgo}
              asset={idea.asset}
              category={idea.category}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-500 transition-colors"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  currentPage === number
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-white hover:border-emerald-500'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-500 transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No trading ideas found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingIdeas;