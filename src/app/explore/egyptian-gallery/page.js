'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import InteractiveGallery from '../../components/InteractiveGallery';
import Modal from '../../components/Modal';
import ArtifactDetail from '../../components/ArtifactDetail';
import Link from 'next/link';

// Egyptian gallery artifacts data
const EGYPTIAN_ARTIFACTS = [
  {
    _id: 'artifact-a1',
    name: 'Ancient Clay Vessel',
    description: 'This ancient clay vessel dates back to early Egyptian civilization, featuring distinctive carved hieroglyphics and symbols of Egyptian deities.',
    imageUrl: '/images/placeholder.jpg',
    artist: 'Unknown Ancient Egyptian Artisan',
    createdYear: '3000 BCE',
    additionalInfo: 'Clay vessels like this were used for storing grain, water, and other essentials in ancient Egypt. The hieroglyphics carved into it represent prayers to Egyptian gods for prosperity and protection.',
    audioUrl: '/audio/placeholder.mp3',
    gallery: 'ANCIENT EGYPTIAN GALLERY',
    views: 215,
    coords: { x: 40, y: 300, width: 75, height: 100 }
  },
  {
    _id: 'artifact-a2',
    name: 'Egyptian Ceramic Vase',
    description: 'A beautifully preserved ceramic vase with intricate designs representing scenes from daily life in ancient Egypt.',
    imageUrl: '/images/placeholder.jpg',
    artist: 'Unknown Egyptian Artist',
    createdYear: '1500 BCE',
    additionalInfo: 'This type of pottery shows advanced firing techniques and artistic skills of ancient Egyptian craftspeople. The scenes depict the Nile River and agricultural activities that were central to Egyptian civilization.',
    audioUrl: '/audio/placeholder.mp3',
    gallery: 'ANCIENT EGYPTIAN GALLERY',
    views: 187,
    coords: { x: 180, y: 270, width: 120, height: 150 }
  },
  {
    _id: 'artifact-a3',
    name: 'Egyptian Ritual Figurine Group',
    description: 'A ceremonial statue depicting Egyptian priests in a ritual scene, carved from limestone.',
    imageUrl: '/images/placeholder.jpg',
    artist: 'Unknown Ancient Egyptian Sculptor',
    createdYear: '2000 BCE',
    additionalInfo: 'This sculpture was used in religious ceremonies honoring the god Osiris. The figures represent priests performing sacred rituals to ensure safe passage to the afterlife.',
    audioUrl: '/audio/placeholder.mp3',
    gallery: 'ANCIENT EGYPTIAN GALLERY',
    views: 275,
    coords: { x: 320, y: 130, width: 180, height: 300 }
  },
  {
    _id: 'artifact-a4',
    name: 'Seated Pharaoh Figure',
    description: 'A majestic statue of a seated Pharaoh, showcasing the power and divine authority of Egyptian rulers.',
    imageUrl: '/images/placeholder.jpg',
    artist: 'Royal Egyptian Court Sculptor',
    createdYear: '1800 BCE',
    additionalInfo: 'This type of royal portraiture was common in ancient Egypt, emphasizing the Pharaoh\'s role as both political leader and divine intermediary. The hieroglyphics on the base name the Pharaoh and list his accomplishments.',
    audioUrl: '/audio/placeholder.mp3',
    gallery: 'ANCIENT EGYPTIAN GALLERY',
    views: 305,
    coords: { x: 790, y: 100, width: 300, height: 380 }
  }
];

export default function EgyptianGalleryPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needsTicket, setNeedsTicket] = useState(false);
  
  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      // Check if user is logged in
      const storedUser = sessionStorage.getItem('user');
      if (!storedUser) {
        router.push('/login?redirect=/explore/egyptian-gallery');
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        
        // Check if user has a ticket or is an admin
        const hasTicket = parsedUser.hasPurchasedTicket === true;
        const isAdmin = parsedUser.role === 'admin';
        
        // If not admin and doesn't have ticket, show ticket purchase prompt
        if (!isAdmin && !hasTicket) {
          setNeedsTicket(true);
        }
        
      } catch (e) {
        console.error('Error parsing user from session:', e);
        router.push('/login');
        return;
      }

      setLoading(false);
    };
    
    checkAuth();
  }, [router]);
  
  // Handle artifact selection
  const handleArtifactClick = (artifact) => {
    setSelectedArtifact(artifact);
    setIsModalOpen(true);
  };
  
  // Handle navigation back to museum map
  const handleBackClick = () => {
    router.push('/explore');
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header user={user} />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-black">Loading gallery...</p>
          </div>
        </main>
      </div>
    );
  }
  
  // Show ticket purchase prompt if needed
  if (needsTicket) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header user={user} />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center max-w-md p-8 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-display font-bold mb-4 text-black">
              Purchase a Ticket
            </h1>
            <p className="mb-6 text-gray-600">
              You need a virtual tour pass to access the museum galleries.
            </p>
            <Link 
              href="/tickets" 
              className="btn-primary py-3 px-6"
            >
              Buy Ticket
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header user={user} />
      
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-display font-bold text-black">
              ANCIENT EGYPTIAN GALLERY
            </h1>
            
            <button
              onClick={handleBackClick}
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back to Museum Map
            </button>
          </div>
          
          <p className="text-gray-600 mb-8">
            Explore the fascinating collection of ancient Egyptian artifacts dating back thousands of years.
          </p>
          
          <div className="p-8 bg-gray-200 border border-white rounded-lg">
            <InteractiveGallery 
              galleryImage="/images/galleryA.jpg" 
              artifacts={EGYPTIAN_ARTIFACTS}
            />
          </div>
        </div>
      </main>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedArtifact?.name || 'Artifact Details'}
      >
        <ArtifactDetail artifact={selectedArtifact} />
      </Modal>
    </div>
  );
}