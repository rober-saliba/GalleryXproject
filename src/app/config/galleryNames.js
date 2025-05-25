/**
 * Centralized gallery name mapping
 * Use this file to ensure consistent gallery names across the application
 */

export const GALLERY_NAMES = {
  'gallery-a': 'ANCIENT EGYPTIAN GALLERY',
  'roman-gallery': 'ROMAN GALLERY',
  'mona-lisa-gallery': 'MONA LISA GALLERY',
};

// Mapping for gallery IDs to names
export const GALLERY_ID_TO_NAME = {
  // MongoDB IDs to names
  '6831122db8950075ef2a8d2': 'Modern Masterpieces',
  
  // Predefined galleries
  'ancient-art': 'Ancient Art',
  'modern-masterpieces': 'Modern Masterpieces',
  'special-exhibitions': 'Special Exhibitions',
  'contemporary-art': 'Contemporary Art',
  'gallery-a': 'ANCIENT EGYPTIAN GALLERY',
  'roman-gallery': 'ROMAN GALLERY',
  'mona-lisa-gallery': 'MONA LISA GALLERY',
};

// Function to get gallery name from ID
export function getGalleryName(id) {
  // Check if ID is in our map
  if (GALLERY_ID_TO_NAME[id]) {
    return GALLERY_ID_TO_NAME[id];
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