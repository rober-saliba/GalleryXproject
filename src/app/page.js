import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';

// Gallery highlight images - updated with real image paths
const galleryImages = {
  'Ancient Art': '/images/ancient-art-real.jpg',
  'Modern Masterpieces': '/images/modern-art-real.jpg',
  'Interactive Exhibits': '/images/interactive-exhibits-real.jpg',
  'Contemporary Art': '/images/contemporary-art-real.jpg',
};

// Static fallback galleries for when database is not available
const fallbackGalleries = [
  {
    _id: 'ancient-art',
    name: 'Ancient Art',
    description: 'Discover artifacts from ancient civilizations that shaped our world.',
  },
  {
    _id: 'modern-masterpieces',
    name: 'Modern Masterpieces',
    description: 'Experience groundbreaking works that defined contemporary art movements.',
  },
  {
    _id: 'interactive-exhibits',
    name: 'Interactive Exhibits',
    description: 'Engage with digital installations that bring art to life.',
  },
];

// Fetch galleries from the database
async function getGalleryHighlights() {
  try {
    // In a real app with connected database, we'd fetch from MongoDB
    // For now, we'll use the fallback data
    return fallbackGalleries;
  } catch (error) {
    console.error('Failed to fetch galleries:', error);
    return fallbackGalleries;
  }
}

export default async function Home() {
  const galleries = await getGalleryHighlights();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative bg-black text-black h-[70vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              {/* Background Image with Light Overlay */}
              <div className="absolute inset-0 bg-white opacity-60 z-10"></div>
              <Image
                src="/images/museum-hero.jpg"
                alt="Museum Gallery"
                fill
                className="object-cover z-0"
                priority
              />
            </div>
          </div>
          
          <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-black">
              DISCOVER WITH GALLERYX
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-800">
              Immerse yourself in a world of art and culture
            </p>
            <Link 
              href="/explore" 
              className="btn-primary text-lg px-8 py-3"
            >
              Begin Your Virtual Journey Today
            </Link>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-black">
              Experience Art Like Never Before
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-black">Explore Galleries</h3>
                <p className="text-gray-600">
                  Navigate through different rooms and discover masterpieces from various eras and styles.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-black">Learn Interactively</h3>
                <p className="text-gray-600">
                  Each artifact comes with detailed descriptions, images, and audio explanations.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-black">Curated Experience</h3>
                <p className="text-gray-600">
                  Enjoy a carefully crafted journey through art history, science, and culture.
                    </p>
              </div>
                </div>
          </div>
        </section>

        {/* Gallery Highlights */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-black">
              Gallery Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleries.map((gallery) => (
                <div key={gallery._id} className="card overflow-hidden">
                  <div className="relative h-56 w-full bg-gray-200">
                    {galleryImages[gallery.name] && (
                      <Image
                        src={galleryImages[gallery.name]}
                        alt={gallery.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-black">
                      {gallery.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {gallery.description}
                    </p>
                    <Link 
                      href={`/explore`}
                      className="inline-block btn-primary bg-black text-white  hover:bg-gray-300"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white text-black text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Book a ticket now and begin exploring GalleryX
            </p>
            <Link 
              href="/tickets" 
              className="inline-block bg-black text-white font-medium py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
            >
              Book a Ticket
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}