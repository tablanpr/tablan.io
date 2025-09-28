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
  const [isMobile, setIsMobile] = useState(false)
  const logoUrl = 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Check initial size
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
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
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsServicesOpen(false)
    }, 100)
  }

  const services = [
    { name: 'TechSpecPro™ - Product Configurators', url: '/services/product-configurators' },
    { name: 'SalesFlow AI™ - Sales Automation', url: '/services/sales-automation' },
    { name: 'DocuTechAI™ - Content Automation', url: '/services/content-automation' },
    { name: 'OptiFlow™ - Workflow Optimization', url: '/services/workflow-optimization' }
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
              onClick={() => setIsMenuOpen(false)}
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
                setIsMenuOpen(false)
              }}
            >
              About
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}
              onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
              onMouseLeave={() => !isMobile && setIsServicesOpen(false)}>
            <span className={styles.navLink}>
              <span>Services</span>
            </span>
            <div className={`${styles.dropdownMenu} ${isMobile ? styles.show : (isServicesOpen ? styles.show : '')}`}>
              {services.map((service, index) => (
                <a key={index} href={service.url} className={styles.dropdownLink} onClick={() => setIsMenuOpen(false)}>
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
                setIsMenuOpen(false)
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
                setIsMenuOpen(false)
              }}
            >
              FAQ
            </a>
          </li>
          <li className={styles.navItem}>
            <button
              className={styles.mobileCta}
              onClick={handleContactClick}
            >
              Book Intro Call
            </button>
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