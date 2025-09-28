'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')

  const phrases = [
    'product selector',
    'sales automation',
    'workflow automation',
    'technical content'
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    if (displayText.length < currentPhrase.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1))
      }, 100) // Typing speed
      return () => clearTimeout(timeout)
    } else {
      // Finished typing, wait then move to next phrase
      const timeout = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setDisplayText('') // Reset display text for next phrase
      }, 3000) // Wait 3 seconds before next phrase
      return () => clearTimeout(timeout)
    }
  }, [currentPhraseIndex, displayText, phrases])

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>More Sales. Less Manual Work.</h1>
          <div className={styles.dynamicPhrase}>
            {displayText}<span className={styles.cursor}>_</span>
          </div>
          <p className={styles.heroSubtitle}>
            I help industrial manufacturers, suppliers, and distributors improve sales, marketing and operations using no-code AI automation & workflow automation, so your team can focus on closing deals.
          </p>
          <button className={styles.ctaButton} onClick={onContactClick}>
            Show Me What&apos;s Possible
          </button>
        </div>
      </div>
    </section>
  )
}