'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the gallery structure - only the three requested galleries
const GALLERY_CONFIG = [
  {
    row: 1,
    galleries: [
      {
        _id: 'gallery-a',
        name: 'ANCIENT EGYPTIAN GALLERY',
        position: 'Gallery E',
        description: 'Ancient artifacts and sculptures from early Egyptian civilizations',
        color: 'bg-red-100 hover:bg-red-200',
      },
      {
        _id: 'roman-gallery',
        name: 'ROMAN GALLERY',
        position: 'Gallery R',
        description: 'Classical Roman sculptures and artifacts showcasing ancient craftsmanship',
        color: 'bg-amber-100 hover:bg-amber-200',
      },
    ]
  },
  {
    row: 2,
    galleries: [
      {
        _id: 'mona-lisa-gallery',
        name: 'MONA LISA GALLERY',
        position: 'Gallery M',
        description: 'Featuring Leonardo da Vinci\'s masterpiece in a dedicated viewing room',
        color: 'bg-indigo-100 hover:bg-indigo-200',
      }
    ]
  }
];

export default function FixedMuseumMap({ onGallerySelect }) {
  const router = useRouter();
  const [hoveredGallery, setHoveredGallery] = useState(null);
  
  // Handle gallery click
  const handleGalleryClick = (gallery) => {
    if (onGallerySelect) {
      onGallerySelect(gallery);
    } else {
      // Direct navigation
      const galleryId = gallery._id;
      
      // Special cases for dedicated gallery pages
      if (galleryId === 'gallery-a') {
        router.push('/explore/egyptian-gallery');
      } else if (galleryId === 'roman-gallery') {
        router.push('/explore/roman-gallery');
      } else if (galleryId === 'mona-lisa-gallery') {
        router.push('/explore/mona-lisa-gallery');
      } else {
        router.push(`/explore/gallery/${galleryId}`);
      }
    }
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-display font-bold text-black mb-2">GalleryX - Museum Map</h2>
        <p className="text-gray-600">
          Click on a gallery to explore
        </p>
      </div>
      
      {GALLERY_CONFIG.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mb-6">
          {row.galleries.map((gallery) => (
            <div
              key={gallery._id}
              className={`${gallery.color} p-6 rounded-lg border border-gray-300 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${row.galleries.length === 1 ? 'col-span-2' : ''}`}
              onMouseEnter={() => setHoveredGallery(gallery._id)}
              onMouseLeave={() => setHoveredGallery(null)}
              onClick={() => handleGalleryClick(gallery)}
            >
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-display font-bold mb-2">
                  {gallery.name}
                </h3>
                {hoveredGallery === gallery._id ? (
                  <button className="mt-4 text-sm bg-black text-white px-4 py-2 rounded-full">
                    Enter Gallery
                  </button>
                ) : (
                  <p className="text-gray-600 text-sm italic">
                    Click to explore
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}