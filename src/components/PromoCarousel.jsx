import React, { useRef } from 'react';
import './PromoCarousel.css';
import PromoCard1 from '../assets/images/PromoCard1.png';
import PromoCard2 from '../assets/images/PromoCard2.png';

/**
 * Promo Carousel Component
 * Horizontal scrolling promotion cards with full bleed to screen edges
 * Based on Figma specs: 343×140px at (16, 619)
 */
function PromoCarousel({ promos = [] }) {
  const scrollContainerRef = useRef(null);

  // Default promo data if none provided
  const defaultPromos = [
    {
      id: 1,
      image: PromoCard1
    },
    {
      id: 2,
      image: PromoCard2
    },
    {
      id: 3,
      image: PromoCard2
    }
  ];

  const promosToShow = promos.length > 0 ? promos : defaultPromos;

  return (
    <div className="promo-carousel">
      <div className="promo-carousel-title">Promotions</div>
      <div className="promo-carousel-container" ref={scrollContainerRef}>
        {promosToShow.map((promo) => (
          <div
            key={promo.id}
            className="promo-card"
          >
            <img src={promo.image} alt="Promotion" className="promo-card-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoCarousel;
