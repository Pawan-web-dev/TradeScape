import React from 'react';
import { Heart, MessageCircle, Clock, TrendingUp } from 'lucide-react';

interface TradingIdeaCardProps {
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

const TradingIdeaCard: React.FC<TradingIdeaCardProps> = ({
  title,
  author,
  preview,
  likes,
  comments,
  tags,
  timeAgo,
  asset,
  category
}) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group hover:scale-105">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium">{author}</h4>
            <p className="text-slate-400 text-sm">{category}</p>
          </div>
        </div>
        <div className="flex items-center text-slate-400 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {timeAgo}
        </div>
      </div>

      {/* Title & Asset */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-emerald-400 font-medium text-sm">{asset}</span>
        </div>
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 leading-relaxed">{preview}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-slate-700 text-slate-300 rounded-lg text-xs hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Engagement */}
      <div className="flex items-center space-x-6 pt-4 border-t border-slate-700">
        <button className="flex items-center space-x-2 text-slate-400 hover:text-red-400 transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-sm">{likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">{comments}</span>
        </button>
      </div>
    </div>
  );
};

export default TradingIdeaCard;