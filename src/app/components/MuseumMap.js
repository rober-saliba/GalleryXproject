'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Maps gallery IDs to human-readable names
const GALLERY_NAME_MAP = {
  // MongoDB IDs to names
  '6831122db8950075ef2a8d2': 'Modern Masterpieces',
  
  // Predefined galleries
  'ancient-art': 'Ancient Art',
  'modern-masterpieces': 'Modern Masterpieces',
  'special-exhibitions': 'Special Exhibitions',
  'contemporary-art': 'Contemporary Art',
  'gallery-a': 'Gallery A',
  'roman-gallery': 'Roman Gallery',
};

// Function to convert ID to readable name
function getGalleryName(id) {
  // Check if ID is in our map
  if (GALLERY_NAME_MAP[id]) {
    return GALLERY_NAME_MAP[id];
  }
  
  // Otherwise, try to format the ID into a readable name
  if (typeof id === 'string') {
    // If it looks like a MongoDB ObjectId (24 hex chars), use a default name
    if (/^[0-9a-f]{24}$/i.test(id)) {
      return 'Gallery Collection';
    }
    
    // Format kebab case to title case
    return id.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  return 'Gallery';
}

export default function MuseumMap({ galleries, onGallerySelect }) {
  const router = useRouter();
  const [hoveredGallery, setHoveredGallery] = useState(null);
  
  // Define gallery positions and colors
  const galleryLayouts = {
    'Ancient Art': { position: 'col-start-1 row-start-2', color: 'bg-yellow-100 hover:bg-yellow-200 text-black' },
    'Modern Masterpieces': { position: 'col-start-2 row-start-1', color: 'bg-pink-100 hover:bg-pink-200 text-black' },
    'Special Exhibitions': { position: 'col-start-2 row-start-2', color: 'bg-green-100 hover:bg-green-200 text-black' },
    'Contemporary Art': { position: 'col-start-3 row-start-2', color: 'bg-blue-100 hover:bg-blue-200 text-black' },
    'Gallery A': { position: 'col-start-1 row-start-1', color: 'bg-red-100 hover:bg-red-200 text-black' },
    'Roman Gallery': { position: 'col-start-3 row-start-1', color: 'bg-amber-100 hover:bg-amber-200 text-black' },
    'Gallery Collection': { position: '', color: 'bg-purple-100 hover:bg-purple-200 text-black' }
  };
  
  // Ensure we have these standard galleries if none are provided
  const defaultGalleries = [
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
  ];
  
  // Process galleries to ensure they have proper names
  const processGalleries = (galleryList) => {
    if (!Array.isArray(galleryList) || galleryList.length === 0) {
      return defaultGalleries;
    }
    
    // Check if Gallery A exists in the provided galleries
    const hasGalleryA = galleryList.some(gallery => 
      (gallery && gallery._id === 'gallery-a') || 
      (gallery && gallery.name === 'Gallery A')
    );
    
    // Check if Roman Gallery exists in the provided galleries
    const hasRomanGallery = galleryList.some(gallery =>
      (gallery && gallery._id === 'roman-gallery') ||
      (gallery && gallery.name === 'Roman Gallery')
    );

    // If Gallery A isn't in the list, add it
    if (!hasGalleryA) {
      galleryList.push({
        _id: 'gallery-a',
        name: 'Gallery A',
        description: 'Ancient artifacts and sculptures from early civilizations',
        position: 'Gallery E',
      });
    }
    
    // If Roman Gallery isn't in the list, add it
    if (!hasRomanGallery) {
      galleryList.push({
        _id: 'roman-gallery',
        name: 'Roman Gallery',
        description: 'Classical Roman sculptures and artifacts showcasing ancient craftsmanship',
        position: 'Gallery R',
      });
    }

    return galleryList.map(gallery => {
      if (!gallery) return null;
      
      // Ensure gallery is an object
      const galleryObj = typeof gallery === 'object' ? gallery : { _id: gallery };
      const id = galleryObj._id ? String(galleryObj._id) : 'unknown-gallery';
      
      // If the gallery doesn't have a proper name, give it one based on ID
      if (!galleryObj.name || typeof galleryObj.name === 'object') {
        return {
          ...galleryObj,
          name: getGalleryName(id),
          position: galleryObj.position || `Gallery ${id.substring(0, 1).toUpperCase()}`
        };
      }
      
      return galleryObj;
    }).filter(Boolean); // Remove any null entries
  };
  
  // Use provided galleries or default ones if empty
  const displayGalleries = processGalleries(galleries);
  
  const handleGalleryClick = (gallery) => {
    if (onGallerySelect) {
      onGallerySelect(gallery);
    } else {
      // Ensure we have a string ID to navigate with
      const galleryId = gallery._id ? String(gallery._id) : 
                       (typeof gallery === 'string' ? gallery : 'unknown-gallery');
      router.push(`/explore/gallery/${galleryId}`);
    }
  };
  
  // Function to safely display text
  const safeText = (text) => {
    if (text === null || text === undefined) return '';
    if (typeof text === 'object') return JSON.stringify(text);
    return String(text);
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
        {displayGalleries.map((gallery, index) => {
          // Ensure gallery is an object with required properties
          const safeGallery = typeof gallery === 'object' ? gallery : { _id: `gallery-${index}`, name: 'Gallery' };
          
          // Ensure gallery has an ID
          const galleryId = safeGallery._id || `gallery-${index}`;
          
          // Get the layout based on the gallery name, with fallback
          let layout;
          const galleryName = safeText(safeGallery.name);
          
          if (galleryLayouts[galleryName]) {
            layout = galleryLayouts[galleryName];
          } else {
            // Default layout
            layout = {
              position: '',
              color: 'bg-gray-100 hover:bg-gray-200 text-black'
            };
          }
          
          // For MongoDB IDs, handle specially
          const displayName = /^[0-9a-f]{24}$/i.test(galleryId) ? 
            getGalleryName(galleryId) : galleryName;
          
          return (
            <div
              key={galleryId}
              className={`${layout.position} ${layout.color} p-4 rounded-lg border border-gray-300 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center`}
              onMouseEnter={() => setHoveredGallery(galleryId)}
              onMouseLeave={() => setHoveredGallery(null)}
              onClick={() => handleGalleryClick(safeGallery)}
            >
              <div className="h-full flex flex-col items-center justify-center text-center p-2">
                <h3 className="text-lg font-display font-bold uppercase">
                  {displayName}
                </h3>
                <p className="text-sm opacity-80">
                  (Gallery {safeText(safeGallery.position) || safeText(galleryId).substring(0, 1).toUpperCase()})
                </p>
                
                {hoveredGallery === galleryId && (
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
