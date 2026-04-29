import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, FileText, AlertCircle, History } from 'lucide-react';
import './Scan.scss';

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleScan = () => {
    setIsScanning(true);
    // Simulate API delay, pass KH-99281 state for Results dashboard
    setTimeout(() => {
      setIsScanning(false);
      navigate('/result', { state: { scanId: 'KH-99281' } });
    }, 2500);
  };

  return (
    <div className="scan-page">
      <div className="scan-page__header">
        <h1>Purity at a Glance</h1>
        <p>Instant verification for peace of mind. Scan any product's ingredient list for Halal compliance.</p>
      </div>

      <div className="scan-page__content">
        <aside className="scan-sidebar">
          <div className="info-card">
            <div className="icon"><AlertCircle size={20} /></div>
            <h4>Preparation</h4>
            <p>Ensure the ingredient list is clearly visible and well-lit. Avoid shadows or reflective glare.</p>
          </div>
          
          <div className="info-card info-card--orange">
            <div className="icon"><Camera size={20} /></div>
            <h4>Framing</h4>
            <p>Center the text within the scan zone. Flat labels yield the highest accuracy.</p>
          </div>

          <div className="formats-card">
            <h4>Supported Formats</h4>
            <div className="format-tags">
              <span>JPG</span>
              <span>PNG</span>
              <span>HEIC</span>
            </div>
          </div>
        </aside>

        <main className="scan-main">
          <div className={`uploader-box ${isScanning ? 'scanning' : ''}`}>
            {isScanning ? (
               <div className="scanning-state">
                 <div className="scanner-line"></div>
                 <div className="scanner-icon">
                    <SearchIconAnimated />
                 </div>
                 <h3>Analyzing Ingredients...</h3>
                 <p>Cross-referencing global database</p>
               </div>
            ) : (
               <div className="upload-state">
                  <div className="upload-icon">
                    <Camera size={32} />
                  </div>
                  <h3>Upload or Scan</h3>
                  <p>Drag and drop your image here, or tap to open camera</p>
                  <div className="upload-actions">
                    <button className="btn-upload" onClick={handleScan}>
                      <FileText size={18} /> Choose File
                    </button>
                    <button className="btn-camera" onClick={handleScan}>
                      <Camera size={18} /> Live Camera
                    </button>
                  </div>
               </div>
            )}
          </div>

          <div className="history-section">
            <div className="history-header">
              <h4>Recent Verification History</h4>
              <a href="#view-all">View All</a>
            </div>
            <div className="history-grid">
              <div className="history-card">
                <div className="history-img history-img-1"></div>
                <div className="history-info">
                  <h5>Oat Milk Brand A</h5>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="history-card">
                <div className="history-img history-img-2"></div>
                <div className="history-info">
                  <h5>Biscuits Choco</h5>
                  <span>Yesterday</span>
                </div>
              </div>
              <div className="history-card empty-card">
                <History size={24} color="#ccc" />
                <span>Empty Slot</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SearchIconAnimated = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#002B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="spin-anim"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

export default Scan;
