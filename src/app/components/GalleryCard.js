'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GalleryCard({ gallery, image, onClick }) {
  return (
    <div 
      className="gallery-item bg-white dark:bg-gray-800"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        {image && (
          <Image
            src={image}
            alt={gallery.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-display font-semibold mb-2">{gallery.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {gallery.description}
        </p>
        
        {onClick ? (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="btn-primary text-sm"
          >
            Explore Gallery
          </button>
        ) : (
          <Link href={`/explore/gallery/${gallery._id}`} className="btn-primary text-sm">
            Explore Gallery
          </Link>
        )}
      </div>
    </div>
  );
}