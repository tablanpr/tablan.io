'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

const faqData = [
  {
    id: 1,
    question: "What types of industrial businesses do I work with?",
    answer: "I specialize in working with industrial manufacturers, suppliers, and distributors across various sectors including instrumentation and process components. My solutions are tailored to businesses dealing with complex technical products and B2B sales processes."
  },
  {
    id: 2,
    question: "How long does it take to implement industrial AI automation?",
    answer: "Implementation timelines vary based on complexity, but most no-code AI automation solutions can be deployed within 2-8 weeks. Simple lead capture systems can be live in as little as 1-2 weeks, while comprehensive workflow automation may take 6-12 weeks for full deployment."
  },
  {
    id: 3,
    question: "Do you need technical expertise to use our no-code AI solutions?",
    answer: "No technical expertise is required. Our no-code AI automation solutions are designed for business users. We provide comprehensive training and ongoing support to ensure your team can effectively manage and optimize the systems independently."
  },
  {
    id: 4,
    question: "How do you ensure data security for industrial automation?",
    answer: "Data security is paramount in industrial applications. All solutions are built with enterprise-grade security measures, including encrypted data transmission, secure API connections, and compliance with industrial data protection standards. We can work within your existing security frameworks."
  },
  {
    id: 5,
    question: "What kind of ROI can you expect from our industrial AI automation solutions?",
    answer: "Clients typically see 40% increase in qualified leads, 25% shorter sales cycles, and 70% reduction in manual tasks. Most implementations pay for themselves within 6-12 months through increased efficiency and revenue growth. Specific ROI varies based on your current processes and implementation scope."
  }
]

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqContainer}>
          {faqData.map((faq) => (
            <div key={faq.id} className={`${styles.faqItem} ${openFAQ === faq.id ? styles.active : ''}`}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(faq.id)}>
                <h3>{faq.question}</h3>
                <span className={styles.faqToggle}>
                  {openFAQ === faq.id ? '−' : '+'}
                </span>
              </div>
              <div className={`${styles.faqAnswer} ${openFAQ === faq.id ? styles.open : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}