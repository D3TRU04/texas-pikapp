'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '../../home/components/Header'
import { Footer } from '../../home/components/Footer'

interface CompositeImage {
  src: string
  alt: string
}

const compositeImages: CompositeImage[] = [
  { src: '/composites/pkp-8788.JPEG', alt: 'Pi Kappa Phi Composite 1987-88' },
  { src: '/composites/pkp-8889.jpg', alt: 'Pi Kappa Phi Composite 1988-89' },
  { src: '/composites/pkp-8990.jpg', alt: 'Pi Kappa Phi Composite 1989-90' },
  { src: '/composites/pkp-9091.jpg', alt: 'Pi Kappa Phi Composite 1990-91' },
  { src: '/composites/pkp-9192.jpg', alt: 'Pi Kappa Phi Composite 1991-92' },
  { src: '/composites/pkp-0809.JPEG', alt: 'Pi Kappa Phi Composite 2008-09' },
  { src: '/composites/pkp-0910.JPEG', alt: 'Pi Kappa Phi Composite 2009-10' },
  { src: '/composites/pkp-1011.JPEG', alt: 'Pi Kappa Phi Composite 2010-11' },
  { src: '/composites/pkp-1112.JPEG', alt: 'Pi Kappa Phi Composite 2011-12' },
  { src: '/composites/pkp-1213.JPEG', alt: 'Pi Kappa Phi Composite 2012-13' },
  { src: '/composites/pkp-2014.JPEG', alt: 'Pi Kappa Phi Composite 2013-14' },
  { src: '/composites/pkp-2015.JPEG', alt: 'Pi Kappa Phi Composite 2014-15' },
  { src: '/composites/pkp-2016.JPEG', alt: 'Pi Kappa Phi Composite 2015-16' },
  { src: '/composites/pkp-2017.JPEG', alt: 'Pi Kappa Phi Composite 2016-17' },
  { src: '/composites/pkp-2018.jpg', alt: 'Pi Kappa Phi Composite 2017-18' },
]

export default function CompositesPage() {
  const [selectedImage, setSelectedImage] = useState<CompositeImage | null>(null)

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Composites Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compositeImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-charcoal-900">
                {selectedImage.alt}
              </h2>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <div className="relative aspect-[3/4] max-h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
