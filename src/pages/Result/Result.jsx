import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockProductResults } from '../../data';
import { CheckCircle, AlertTriangle, BookOpen, Heart, ScanLine } from 'lucide-react';
import './Result.scss';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Attempt to get scan ID from router state, default to mock data
    const scanId = location.state?.scanId || 'KH-99281';
    setData(mockProductResults[scanId]);
  }, [location.state]);

  if (!data) return <div className="result-page loading">Loading...</div>;

  return (
    <div className="result-page">
      <div className="result-container">
        
        {/* Top Product Summary */}
        <section className="product-summary">
          <div className="product-summary__image"></div>
          <div className="product-summary__info">
            <div className="status-badge status-halal">
              <CheckCircle size={16} /> {data.overallStatus}
            </div>
            <h1>{data.name}</h1>
            <p className="meta-info">Product ID: #{data.id} • Scanned {data.scanTime}</p>
            
            <div className="summary-actions">
              <button className="btn-scan" onClick={() => navigate('/scan')}>
                <ScanLine size={18} /> Scan Another
              </button>
              <button className="btn-save">
                <Heart size={18} /> Save to Favorites
              </button>
            </div>
          </div>
          <div className="product-summary__watermark">
            <CheckCircle size={120} strokeWidth={1} />
          </div>
        </section>

        {/* Detailed Breakdown */}
        <div className="details-grid">
          
          <div className="ingredients-column">
            <div className="section-header">
              <h3>Ingredient Analysis</h3>
              <span>EXTRACTED VIA AI-OCR</span>
            </div>
            
            <div className="ingredients-list">
              {data.ingredients.map((item, idx) => (
                <div key={idx} className={`ingredient-card status-${item.status.toLowerCase()}`}>
                  <div className="ingredient-info">
                    <h4>{item.name}</h4>
                    <p>{item.source}</p>
                  </div>
                  <div className="ingredient-badge">
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="dietary-tags">
              <span>#VeganFriendly</span>
              <span>#AlcoholFree</span>
              <span>#NoLard</span>
            </div>
          </div>

          <div className="reasoning-column">
            <div className="reasoning-card">
              <BookOpen size={28} className="icon-book" />
              <h3>Islamic Reasoning</h3>
              
              <div className="citation-block">
                <p className="quote"><em>{data.reasoning.citation}</em></p>
                <p className="source">— {data.reasoning.source}</p>
              </div>

              <div className="explanation-block">
                {data.reasoning.explanation.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <button className="btn-fatwa">View Full Fatwa</button>
            </div>
          </div>

        </div>

        {/* Precautionary Note */}
        {data.precautionaryNote && (
          <div className="precautionary-alert">
            <AlertTriangle size={24} className="alert-icon" />
            <div className="alert-content">
              <h4>Precautionary Note on Cross-Contamination</h4>
              <p>{data.precautionaryNote}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Result;
