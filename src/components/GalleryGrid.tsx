'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

/**
 * GalleryGrid Component
 * 
 * Responsive image grid with lightbox overlay on click.
 * Features gradient overlay and caption fade-in.
 * 
 * Props:
 * @param images - Array of image objects with src, alt, caption
 * @param columns - Number of columns (default: 3)
 */

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  columns?: number
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns] || 'grid-cols-1 md:grid-cols-3'

  return (
    <>
      <div className={`grid ${gridCols} gap-6`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-base/80 via-primary-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Caption */}
            {image.caption && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-medium">{image.caption}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              {selectedImage.caption && (
                <p className="text-white text-center mt-4 text-lg">
                  {selectedImage.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
