import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { ingredients } from '../../data';
import './KnowledgeBase.scss';

const KnowledgeBase = () => {
  // the main logical part to display some kind search and knowldge base
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredIngredients = ingredients.filter(ing => {
    const matchesSearch = ing.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ing.alternateNames.join(' ').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          ing.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' ? true : ing.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="kb-page">
      <div className="kb-header">
        <h1>Ingredient Knowledge Base</h1>
        <p>A comprehensive directory for purity and certainty. Search common food additives and ingredients to understand their status according to dietary laws.</p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or E-number (e.g. Lecithin, E120)..." 
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* This is use to filter from provided option */}
          <div className="filter-pills">
            {['All', 'Halal', 'Haram', 'Doubtful'].map(f => (
              <button 
                key={f} 
                className={`pill-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="kb-grid">
        {filteredIngredients.map(ing => (
          <div key={ing.id} className={`ingredient-card status-${ing.status.toLowerCase()}`}>
            <div className="card-header">
              <div>
                <h2>{ing.name}</h2>
                <span className="alternate-names">{ing.alternateNames.join(', ')}</span>
              </div>
              <div className="status-badge">{ing.status}</div>
            </div>
            
            <p className="card-description">{ing.description}</p>
            
            <a href={`#learn-more-${ing.id}`} className="learn-more">
              Learn more <ArrowRight size={16} />
            </a>
          </div>
        ))}
        {filteredIngredients.length === 0 && (
          <div className="no-results">
            <p>No ingredients found matching your criteria.</p>
          </div>
        )}
      </div>

        {/* User message from me (GEM) incase they can't find what they need */}
      <div className="kb-request-banner">
        <div className="banner-content">
          <h2>Didn't find what you're looking for?</h2>
          <p>Our researchers are constantly updating our database with new findings. You can request an ingredient review or contribute a known source.</p>
          <div className="banner-actions">
            <button className="btn-primary">Request Review</button>
            <button className="btn-secondary">Submit Evidence</button>
          </div>
        </div>
        <div className="banner-visual">
           <div className="decor-circle"></div>
           <div className="decor-leaf"></div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
