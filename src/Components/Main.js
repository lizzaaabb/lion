import React, { useState } from 'react';
import '../Styles/Main.css';

const pic1 = process.env.PUBLIC_URL + '/part1.jpg';
const pic2 = process.env.PUBLIC_URL + '/part2.jpg';
const pic3 = process.env.PUBLIC_URL + '/part3.jpg';
const pic4 = process.env.PUBLIC_URL + '/part32.jpg';
const pic5 = process.env.PUBLIC_URL + '/part4.jpg';
const carPartsData = [
  {
    id: 1,
    name: 'დისკები საბურავით',
    price: '217117',
    images: [pic1],
    brands: 'HYUNDAI / KIA',
    condition: 'მეორადი',
    specs: 'R19 • 245/45 • ზამთარი'
  },
  {
    id: 2,
    name: 'ბერკეტი (გიტარა)',
    price: '217117',
    images: [pic5],
    brands: 'HONDA / HYUNDAI / LEXUS',
    condition: 'ახალი',
    specs: 'წინა მარჯვენა • ორიგინალი'
  },
  {
    id: 3,
    name: 'დისკები',
    price: '217117',
    images: [pic3, pic4],
    brands: 'AUDI / BMW / MERCEDES-BENZ',
    condition: 'ახალი',
    specs: 'R18 • გერმანიიდან'
  },
  {
    id: 4,
    name: 'ბერკეტი მარჯვენა',
    price: '217117',
    images: [pic2],
    brands: 'DODGE / HONDA / HYUNDAI',
    condition: 'ახალი',
    specs: 'წინა მარჯვენა'
  },
  {
    id: 5,
    name: 'საბურავები',
    price: '189900',
    images: [pic1],
    brands: 'UNIVERSAL',
    condition: 'ახალი',
    specs: 'R17 • 225/55'
  },
  {
    id: 6,
    name: 'ფარები',
    price: '324500',
    images: [pic5],
    brands: 'TOYOTA / LEXUS',
    condition: 'ორიგინალი',
    specs: 'წინა • LED'
  }
];

function Main() {
  const [selectedPart, setSelectedPart] = useState(carPartsData[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePartClick = (part) => {
    setSelectedPart(part);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedPart.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedPart.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedPart.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedPart.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="luxury-parts-container">
      {/* Premium Header */}
      <div className="luxury-header">
        <div className="luxury-header-content">
          <div className="header-badge">ხელმისაწვდომია</div>
          <h1>პრემიუმ ავტონაწილები</h1>
          <p>აირჩიეთ თქვენი მანქანისთვის იდეალური ნაწილები</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{carPartsData.length}</span>
            <span className="stat-label">ნაწილი</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">ხარისხი</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="luxury-content">
        
        {/* Parts Gallery - Left Side */}
        <div className="parts-gallery">
          <div className="gallery-list">
            {carPartsData.map((part) => (
              <div
                key={part.id}
                className={`gallery-card ${selectedPart.id === part.id ? 'active' : ''}`}
                onClick={() => handlePartClick(part)}
              >
                <div className="card-image-wrapper">
                  <img src={part.images[0]} alt={part.name} />
                  <div className="card-condition-badge">{part.condition}</div>
                </div>
                <div className="card-info">
                  <div className="card-info-top">
                    <h3>{part.name}</h3>
                    <span className="card-price">{part.price} ₾</span>
                  </div>
                  <p className="card-brands">{part.brands}</p>
                  <span className="card-specs">{part.specs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Details Panel - Right Side */}
        <div className="premium-panel">
          <div className="panel-image-section">
            <div className="premium-image-container">
              <img
                src={selectedPart.images[currentImageIndex]}
                alt={selectedPart.name}
                className="premium-image"
              />
              
              {selectedPart.images.length > 1 && (
                <>
                  <button className="premium-nav prev" onClick={handlePrevImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="premium-nav next" onClick={handleNextImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="premium-indicators">
                    {selectedPart.images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`premium-dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="panel-info-section">
            <div className="info-top">
              <div className="info-title-group">
                <h2>{selectedPart.name}</h2>
                <span className="info-condition">{selectedPart.condition}</span>
              </div>
              <div className="info-price-group">
                <span className="price-label">ფასი</span>
                <span className="price-value">{selectedPart.price} ₾</span>
              </div>
            </div>

            <div className="info-details">
              <div className="detail-row">
                <span className="detail-label">თავსებადობა</span>
                <span className="detail-value">{selectedPart.brands}</span>
              </div>
              <div className="detail-divider"></div>
              <div className="detail-row">
                <span className="detail-label">მახასიათებლები</span>
                <span className="detail-value">{selectedPart.specs}</span>
              </div>
            </div>

            <button className="premium-cta">
              <span>იხილეთ მეტი</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;