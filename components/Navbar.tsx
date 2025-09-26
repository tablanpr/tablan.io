'use client'

import { useState, useEffect } from 'react'
import { getLogoUrl } from '@/lib/supabase'
import styles from './Navbar.module.css'

interface NavbarProps {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const logoUrl = 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      // Close mobile menu after navigation
      setTimeout(() => setIsMenuOpen(false), 100)
    }
  }

  const handleContactClick = () => {
    onContactClick()
    // Close mobile menu when opening contact modal
    setTimeout(() => setIsMenuOpen(false), 100)
  }

  const services = [
    { name: 'Product Configurators', url: '/services/product-configurators' },
    { name: 'Sales Automation', url: '/services/sales-automation' },
    { name: 'Content Automation', url: '/services/content-automation' },
    { name: 'Workflow Optimization', url: '/services/workflow-optimization' }
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <a href="/" onClick={(e) => {
            // If we're on the home page, scroll to hero. Otherwise, navigate to home.
            if (window.location.pathname === '/') {
              e.preventDefault();
              scrollToSection('hero');
            }
          }}>
            <img
              src="https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png"
              alt="Tablan Logo"
              className={styles.logoImage}
              onError={(e) => {
                // Hide the image and show text fallback
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling as HTMLElement
                if (fallback) {
                  fallback.style.display = 'flex'
                }
              }}
            />
            <div
              style={{
                height: '40px',
                fontSize: '20px',
                fontWeight: '700',
                color: '#333333',
                display: 'none',
                alignItems: 'center',
                letterSpacing: '1px',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              TABLAN
            </div>
          </a>
        </div>
        
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a
              href="/"
              className={styles.navLink}
            >
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="/#about"
              className={styles.navLink}
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('about');
                }
              }}
            >
              About
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}>
            <span className={styles.navLink}>
              Services
            </span>
            <div className={`${styles.dropdownMenu} ${isServicesOpen ? styles.show : ''}`}>
              {services.map((service, index) => (
                <a key={index} href={service.url} className={styles.dropdownLink}>
                  {service.name}
                </a>
              ))}
            </div>
          </li>
          <li className={styles.navItem}>
            <a
              href="/#integrations"
              className={styles.navLink}
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('integrations');
                }
              }}
            >
              Integrations
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="/#faq"
              className={styles.navLink}
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('faq');
                }
              }}
            >
              FAQ
            </a>
          </li>
        </ul>

        <button
          className={styles.ctaButton}
          onClick={handleContactClick}
        >
          Book Intro Call
        </button>

        <div
          className={`${styles.navToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  )
}