/**
 * Home Page Component
 * Landing page featuring hero section, process steps, features grid, and CTA banner.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Search, CheckCircle, Apple, Play } from 'lucide-react';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <div className="home__badge">
            <CheckCircle size={16} /> 100% Verified Halal Ingredients
          </div>
          <h1>Verify Your Food<br />the <span>Halal Way</span></h1>
          <p>
            Empowering your dietary choices with purity and certainty. Scan any product to instantly reveal its Halal status through our comprehensive scientific database.
          </p>
          <div className="home__hero-actions">
            <button className="btn-primary" onClick={() => navigate('/scan')}>
              <Camera size={18} /> Scan Now
            </button>
            <button className="btn-secondary">How it works</button>
            {/* more like a cta */}
          </div>
        </div>
        <div className="home__hero-visual">
          <div className="mockup-placeholder">
            <div className="mockup-img">
              {/* needs proper image to display halal foods and islamic verse */}
            </div>
            <div className="mockup-badge">
              <CheckCircle size={16} color="#002B1B" />
              <span>Certified Halal<br/><small>Purity Guaranteed</small></span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* This is will just explain some simple steps about this website */}
      <section className="home__process">
        <h2>Verification in Seconds</h2>
        <p>Our three-step process ensures you never have to second-guess what's on your plate.</p>
        <div className="home__process-cards">
          <div className="process-card">
            <div className="process-icon bg-mint">
              <Camera size={24} />
            </div>
            <h3>1. Scan</h3>
            <p>Point your camera at the ingredient list or barcode of any food product.</p>
          </div>
          <div className="process-card">
            <div className="process-icon bg-orange">
              <Search size={24} />
            </div>
            <h3>2. Analyze</h3>
            <p>Our AI cross-references ingredients against our global Halal certification database.</p>
          </div>
          <div className="process-card">
            <div className="process-icon bg-green">
              <CheckCircle size={24} />
            </div>
            <h3>3. Verify</h3>
            <p>Receive an instant, clear status: Halal, Mushbooh (Doubtful), or Haram.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="home__features">
        <div className="home__features-header">
          <h2>Why Purity Matters</h2>
          <p>KulHalal isn't just an app; it's your digital companion for a mindful, faith-aligned lifestyle.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card feature-main">
            <h3>Scientific Precision</h3>
            <p>Our database is curated by food scientists and Shariah experts, covering over 500,000 global products and thousands of E-numbers.</p>
            <button className="btn-pill">Read Methodology</button>
          </div>
          
          <div className="feature-card feature-global">
            <GlobeIcon />
            <h3>Global Reach</h3>
            <p>Access data across 40+ countries and major retailers worldwide.</p>
          </div>
          
          <div className="feature-card feature-community">
            <UsersIcon />
            <h3>Community Driven</h3>
            <p>Join millions of users helping each other verify food through crowd-sourced updates.</p>
          </div>

          <div className="feature-card feature-rating">
            <div className="stars">★★★★★</div>
            <p className="rating-score"><strong>4.9/5 Rating</strong></p>
            <p className="testimonial">"Finally, an app that gives me real peace of mind while grocery shopping."</p>
          </div>

          <div className="feature-card feature-flags">
            <div className="flags-content">
              <h3>Ingredient Red Flags</h3>
              <p>Understand why certain additives are flagged with detailed scientific explanations.</p>
            </div>
            <div className="tags">
              <span className="tag-red">E120</span>
              <span className="tag-orange">Gelatin</span>
              <span className="tag-red">L-Cysteine</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home__cta">
        <div className="cta-banner">
          <h2>Ready for Purity and Certainty?</h2>
          <p>Join the KulHalal community today and start making informed dietary choices for you and your family.</p>
          <div className="cta-actions">
            <button className="btn-app">
              <Apple size={20} /> App Store
            </button>
            <button className="btn-app">
              <Play size={20} /> Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// have to use an external svg not provided by react for both globe and user icons
// here is the extracted SVGs to keep my code clean and dependency light
const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#9e623b', marginBottom: '1rem'}}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#002B1B', marginBottom: '1rem'}}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

export default Home;
