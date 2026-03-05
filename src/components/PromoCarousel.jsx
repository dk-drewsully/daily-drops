import React, { useRef } from 'react';
import './PromoCarousel.css';

/**
 * Promo Carousel Component
 * Horizontal scrolling promotion cards
 * Based on Figma specs: 343×140px at (16, 619)
 */
function PromoCarousel({ promos = [] }) {
  const scrollContainerRef = useRef(null);

  // Default promo data if none provided
  const defaultPromos = [
    {
      id: 1,
      title: 'New Player Offer',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      gradient: 'linear-gradient(180deg, #9263F3 0%, #4E1FAE 100%)',
      image: null
    },
    {
      id: 2,
      title: 'Promo Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      gradient: 'linear-gradient(180deg, #F3601B 0%, #802D07 100%)',
      image: null
    },
    {
      id: 3,
      title: 'Promo Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      gradient: 'linear-gradient(180deg, #009FFD 0%, #0071F0 100%)',
      image: null
    }
  ];

  const promosToShow = promos.length > 0 ? promos : defaultPromos;

  return (
    <div className="promo-carousel">
      <div className="promo-carousel-container" ref={scrollContainerRef}>
        {promosToShow.map((promo) => (
          <div 
            key={promo.id} 
            className="promo-card"
            style={{ background: promo.gradient }}
          >
            {promo.image && (
              <img src={promo.image} alt="" className="promo-card-image" />
            )}
            <div className="promo-card-content">
              <div className="promo-title">{promo.title}</div>
              <div className="promo-description">{promo.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoCarousel;
