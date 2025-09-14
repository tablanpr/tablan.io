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
  const logoUrl = getLogoUrl()

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
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>
            <img 
              src={logoUrl} 
              alt="Tablan Logo" 
              className={styles.logoImage}
            />
          </a>
        </div>
        
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a
              href="#about"
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
            >
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#services"
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); scrollToSection('services') }}
            >
              Services
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#stats"
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); scrollToSection('stats') }}
            >
              Results
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#contact"
              className={styles.navLink}
              onClick={(e) => { e.preventDefault(); onContactClick() }}
            >
              Contact
            </a>
          </li>
        </ul>
        
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