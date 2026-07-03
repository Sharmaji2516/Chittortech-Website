"use client";

import { useState } from 'react';
import StrategyModal from './StrategyModal';

export default function StrategyCTA({ color }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="premium-btn hover-glow" 
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '15px', background: color, color: '#fff',
          padding: 'clamp(12px, 3vw, 20px) clamp(25px, 6vw, 50px)', borderRadius: '50px', fontWeight: '900', fontSize: 'clamp(0.9rem, 3vw, 1.3rem)', textDecoration: 'none',
          border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          boxShadow: `0 20px 50px ${color}50`, transition: 'all 0.3s ease', textTransform: 'uppercase', letterSpacing: '1px'
        }}
      >
        Book Strategy Call <i className="fas fa-arrow-right"></i>
      </button>

      <StrategyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
