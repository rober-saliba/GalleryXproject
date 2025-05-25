'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Fixed set of galleries that will always be displayed
const FIXED_GALLERIES = [
  {
    _id: 'gallery-a',
    name: 'Gallery A',
    description: 'Ancient artifacts and sculptures from early civilizations',
    position: 'Gallery E',
  },
  {
    _id: 'roman-gallery',
    name: 'Roman Gallery',
    description: 'Classical Roman sculptures and artifacts showcasing ancient craftsmanship',
    position: 'Gallery R',
  },
  {
    _id: 'mona-lisa-gallery',
    name: 'Mona Lisa Gallery',
    description: 'Featuring Leonardo da Vinci\'s masterpiece in a dedicated viewing room',
    position: 'Gallery M',
  },
  {
    _id: 'ancient-art',
    name: 'Ancient Art',
    description: 'Gallery featuring artifacts from ancient civilizations',
    position: 'Gallery A',
  },
  {
    _id: 'modern-masterpieces',
    name: 'Modern Masterpieces',
    description: 'Contemporary art from the 20th century',
    position: 'Gallery B',
  },
  {
    _id: 'special-exhibitions',
    name: 'Special Exhibitions',
    description: 'Limited-time special exhibitions and featured collections',
    position: 'Gallery F',
  },
  {
    _id: 'contemporary-art',
    name: 'Contemporary Art',
    description: 'Cutting-edge works from today\'s leading artists',
    position: 'Gallery C',
  },
];

// Define gallery positions and colors
const GALLERY_LAYOUTS = {
  'Gallery A': { position: 'col-start-1 row-start-1', color: 'bg-red-100 hover:bg-red-200 text-black' },
  'Mona Lisa Gallery': { position: 'col-start-2 row-start-1', color: 'bg-indigo-100 hover:bg-indigo-200 text-black' },
  'Roman Gallery': { position: 'col-start-3 row-start-1', color: 'bg-amber-100 hover:bg-amber-200 text-black' },
  'Ancient Art': { position: 'col-start-1 row-start-2', color: 'bg-yellow-100 hover:bg-yellow-200 text-black' },
  'Modern Masterpieces': { position: 'col-start-2 row-start-1', color: 'bg-pink-100 hover:bg-pink-200 text-black' },
  'Special Exhibitions': { position: 'col-start-2 row-start-2', color: 'bg-green-100 hover:bg-green-200 text-black' },
  'Contemporary Art': { position: 'col-start-3 row-start-2', color: 'bg-blue-100 hover:bg-blue-200 text-black' },
  'Gallery Collection': { position: '', color: 'bg-purple-100 hover:bg-purple-200 text-black' }
};

export default function EnhancedMuseumMap({ onGallerySelect }) {
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
      if (galleryId === 'roman-gallery') {
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
      
      <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-3xl mx-auto">
        {FIXED_GALLERIES.map((gallery) => {
          const galleryName = gallery.name;
          const layout = GALLERY_LAYOUTS[galleryName] || 
                         { position: '', color: 'bg-gray-100 hover:bg-gray-200 text-black' };
          
          return (
            <div
              key={gallery._id}
              className={`${layout.position} ${layout.color} p-4 rounded-lg border border-gray-300 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center`}
              onMouseEnter={() => setHoveredGallery(gallery._id)}
              onMouseLeave={() => setHoveredGallery(null)}
              onClick={() => handleGalleryClick(gallery)}
            >
              <div className="h-full flex flex-col items-center justify-center text-center p-2">
                <h3 className="text-lg font-display font-bold uppercase">
                  {galleryName}
                </h3>
                <p className="text-sm opacity-80">
                  (Gallery {gallery.position})
                </p>
                
                {hoveredGallery === gallery._id && (
                  <button className="mt-4 text-xs bg-black text-white px-3 py-1 rounded-full">
                    Enter Gallery
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}