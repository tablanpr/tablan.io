'use client'

import styles from './Hero.module.css'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>More Sales. Less Manual Work.</h1>
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