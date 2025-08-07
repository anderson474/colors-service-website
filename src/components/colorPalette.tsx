'use client'

import React, { useState } from 'react';

const colors = [
  { name: 'Classic White', hex: '#FFFFFF' },
  { name: 'Modern Gray', hex: '#A9A9A9' },
  { name: 'Navy Blue', hex: '#000080' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Charcoal', hex: '#36454F' }
];

const ColorPalette: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-navy">Choose Your Inspiration</h2>
        <p className="font-sans text-lg mb-8 text-gray-500">Select a color to see how it could look in your space.</p>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.hex)}
              className="flex items-center gap-2 p-2 border-2 rounded-full transition-all cursor-pointer hover:shadow-2xl"
              style={{ borderColor: selectedColor === color.hex ? color.hex : 'transparent' }}
            >
              <div
                className="w-8 h-8 rounded-full border"
                style={{ backgroundColor: color.hex }}
              ></div>
              <span className="font-sans text-gray-500">{color.name}</span>
            </button>
          ))}
        </div>
        
        {selectedColor && (
          <div 
          className="p-4 rounded-xl shadow-2xl"
          style={{backgroundColor: selectedColor}}>
            <p className='text-black'>You selected</p>
            <p className="text-sm mt-2 text-black">This feature helps our team understand your vision for a faster quote!</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ColorPalette;