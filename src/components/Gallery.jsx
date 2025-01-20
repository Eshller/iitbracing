import React, { useState, useCallback, useEffect } from 'react';
import { images } from '../constants';
import Header from './Header';

const PhotoGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [page, setPage] = useState(1);
    const imagesPerPage = 9;

    // Memoize filtered images
    const filteredImages = React.useMemo(() => {
        return selectedCategory === 'All'
            ? images
            : images.filter(img => img.category === selectedCategory);
    }, [selectedCategory]);

    const categories = React.useMemo(() => {
        return ['All', ...new Set(images.map(img => img.category))];
    }, []);

    // Calculate visible images based on current page
    const visibleImages = React.useMemo(() => {
        return filteredImages.slice(0, page * imagesPerPage);
    }, [filteredImages, page, imagesPerPage]);

    // Handle scroll event
    const handleScroll = useCallback(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        // Check if we're near the bottom (within 100px)
        if (windowHeight + scrollTop >= documentHeight - 100) {
            // Check if we have more images to load
            if (visibleImages.length < filteredImages.length) {
                setPage(prevPage => prevPage + 1);
            }
        }
    }, [visibleImages.length, filteredImages.length]);

    // Add scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Reset page when category changes
    useEffect(() => {
        setPage(1);
    }, [selectedCategory]);

    // Lazy loading image component
    const LazyImage = React.memo(({ image }) => {
        const [isLoaded, setIsLoaded] = useState(false);
        const [hasError, setHasError] = useState(false);

        return (
            <div className="relative aspect-video">
                {!isLoaded && !hasError && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}

                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={`w-full h-64 object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                />
            </div>
        );
    });

    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Racing Team Gallery</h1>
                    <p className="text-lg text-gray-600 mb-8">Showcasing our journey, victories, and dedication to excellence</p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full transition-colors duration-200 ${selectedCategory === category
                                    ? 'bg-[#166db4] text-white'
                                    : 'bg-white text-gray-700 hover:bg-blue-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer transform transition duration-200 hover:scale-105"
                                onClick={() => setSelectedImage(image)}
                            >
                                <LazyImage image={image} />
                            </div>
                        ))}
                    </div>

                    {/* Loading indicator */}
                    {visibleImages.length < filteredImages.length && (
                        <div className="flex justify-center my-8">
                            <div className="w-8 h-8 border-4 border-[#166db4] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <div className="absolute top-4 right-4">
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 bg-white">
                                <h3 className="text-xl font-semibold text-gray-900">{selectedImage.title}</h3>
                                <p className="text-gray-600">{selectedImage.category}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoGallery;