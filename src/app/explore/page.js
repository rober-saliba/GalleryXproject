'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import FixedMuseumMap from '../components/FixedMuseumMap';
import Link from 'next/link';

// Fallback data for galleries if database is not available
const fallbackGalleries = [
  {
    _id: 'gallery-a',
    name: 'ANCIENT EGYPTIAN GALLERY',
    description: 'Ancient artifacts and sculptures from early Egyptian civilizations',
    position: 'Gallery E',
  },
  {
    _id: 'roman-gallery',
    name: 'ROMAN GALLERY',
    description: 'Classical Roman sculptures and artifacts showcasing ancient craftsmanship',
    position: 'Gallery R',
  },
  {
    _id: 'mona-lisa-gallery',
    name: 'MONA LISA GALLERY',
    description: 'Featuring Leonardo da Vinci\'s masterpiece in a dedicated viewing room',
    position: 'Gallery M',
  },
];

export default function ExplorePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleries, setGalleries] = useState([]);
  const [hasTicket, setHasTicket] = useState(false);
  const [ticketRequired, setTicketRequired] = useState(false);
  const router = useRouter();

  // Check if user is logged in and load galleries
  useEffect(() => {
    const checkAuth = async () => {
      const storedUser = sessionStorage.getItem('user');

      if (!storedUser) {
        router.push('/login?redirect=/explore');
        return;
      }

      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        
        // Check if user has a ticket
        setHasTicket(parsedUser.hasPurchasedTicket === true);
        
        // If user is an admin, they don't need a ticket
        if (parsedUser.role === 'admin') {
          setHasTicket(true);
        }
      } catch (e) {
        console.error('Error parsing user from session:', e);
      }

      // Fetch galleries
      try {
        const response = await fetch('/api/galleries');
        if (response.ok) {
          const data = await response.json();

          setGalleries(data.length > 0 ? data : fallbackGalleries);
        } else {
          setGalleries(fallbackGalleries);
        }
      } catch (error) {
        console.error('Error fetching galleries:', error);
        setGalleries(fallbackGalleries);
      }

      setLoading(false);
    };

    checkAuth();

  }, [router]);

  // Handle gallery selection
  const handleGallerySelect = (gallery) => {
    // If user doesn't have a ticket, show ticket prompt
    if (!hasTicket) {
      setTicketRequired(true);
      return;
    }

    // Navigate to the gallery
    const galleryId = gallery && gallery._id ? 
      (typeof gallery._id === 'string' ? gallery._id : String(gallery._id)) : 
      'unknown-gallery';
    
    // Check if it's a special gallery with a dedicated page
    if (galleryId === 'gallery-a') {
      router.push('/explore/egyptian-gallery');
    } else if (galleryId === 'roman-gallery') {
      router.push('/explore/roman-gallery');
    } else if (galleryId === 'mona-lisa-gallery') {
      router.push('/explore/mona-lisa-gallery');
    } else {
      router.push(`/explore/gallery/${galleryId}`);
    }
  };

  if (loading) {
    return (

      <div className="min-h-screen flex flex-col bg-black">
        <Header user={user} />
        <main className="flex-1 p-6 flex items-center justify-center">

          <p className="text-white">Loading...</p>
        </main>
      </div>
    );
  }
  
  // If ticket is required, show ticket purchase prompt
  if (ticketRequired) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header user={user} />
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center max-w-md p-8 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-display font-bold mb-4 text-black">
              Purchase a Ticket
            </h1>
            <p className="mb-6 text-black">
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
        <div className="max-w-5xl mx-auto">

          <h1 className="text-3xl font-display font-bold mb-8 text-center text-black">
            Museum Floor Plan
          </h1>
          

          
          
          {!hasTicket && (
            <div className="mb-8 p-4 bg-black border-black rounded-lg text-center">
              <p className="text-white mb-2">
                You need a ticket to enter the galleries.
              </p>
              <Link 
                href="/tickets" 
                className="inline-block btn-primary mt-2"
              >
                Purchase Ticket
              </Link>
            </div>
          )}
          
          <FixedMuseumMap onGallerySelect={handleGallerySelect} />
          
          <div className="mt-12 text-center">
          </div>
        </div>
      </main>
    </div>
  );
}