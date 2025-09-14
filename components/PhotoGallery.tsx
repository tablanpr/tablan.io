'use client'

import { useState, useEffect } from 'react'
import { getPhotosFromBucket } from '@/lib/supabase'
import styles from './PhotoGallery.module.css'

interface Photo {
  name: string
  url: string
  size: number
  lastModified?: string
}

interface PhotoGalleryProps {
  title?: string
  subtitle?: string
  maxPhotos?: number
  columns?: number
}

export default function PhotoGallery({ 
  title = "Our Work", 
  subtitle = "See examples of our industrial AI automation solutions",
  maxPhotos = 8,
  columns = 4 
}: PhotoGalleryProps) {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const fetchedPhotos = await getPhotosFromBucket()
        setPhotos(fetchedPhotos.slice(0, maxPhotos))
      } catch (error) {
        console.error('Error fetching photos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [maxPhotos])

  if (loading) {
    return (
      <section className={styles.photoSection}>
        <div className="container">
          <div className={styles.header}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className={styles.loading}>Loading photos...</div>
        </div>
      </section>
    )
  }

  if (photos.length === 0) {
    return (
      <section className={styles.photoSection}>
        <div className="container">
          <div className={styles.header}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className={styles.noPhotos}>No photos available at the moment.</div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.photoSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        
        <div 
          className={styles.photoGrid} 
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {photos.map((photo, index) => (
            <div 
              key={photo.name} 
              className={styles.photoItem}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.url} 
                alt={`Industrial automation example ${index + 1}`}
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles.photoOverlay}>
                <span className={styles.viewText}>View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size photo */}
        {selectedPhoto && (
          <div 
            className={styles.modal} 
            onClick={() => setSelectedPhoto(null)}
          >
            <div className={styles.modalContent}>
              <img 
                src={selectedPhoto.url} 
                alt="Industrial automation solution"
                className={styles.modalImage}
              />
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}