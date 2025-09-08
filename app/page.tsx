'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import ContactModal from '@/components/ContactModal'

// Remaining sections as simple components for now
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Industrial AI Automation Expert
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Leveraging AI & Automation for Industrial Excellence. I specialize in transforming industrial operations through strategic AI implementation and workflow automation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {[
              { icon: '🎯', title: 'Strategic Implementation', desc: 'Cost-effective and actionable roadmaps for industrial AI automation adoption.' },
              { icon: '💰', title: 'Revenue-Focused Solutions', desc: 'No-code AI solutions designed to scale your industrial sales and marketing.' },
              { icon: '✅', title: 'Battle-Tested Results', desc: 'Proven industrial AI automation solutions that deliver measurable results.' },
              { icon: '🏭', title: 'Built for Industry', desc: 'Deep understanding of industrial challenges with specialized solutions.' }
            ].map((feature, index) => (
              <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="services" style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            My Industrial AI Automation Solutions
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Proven No-Code AI & Workflow Automation Systems that Improve Your Industrial Sales, Marketing & Operations
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          {[
            {
              title: 'Custom Product Configurators',
              desc: 'AI-powered tools that let your leads explore, customize, and request pricing automatically.',
              features: ['No-code AI automation solution', 'Streamlines industrial sales process', 'Captures qualified lead data', 'Smooth user experience', 'CRM integration']
            },
            {
              title: 'Industrial Sales Automation',
              desc: 'AI systems that capture and qualify industrial leads automatically, scaling your sales without adding staff.',
              features: ['AI-powered lead capture', '24/7 technical question answering', 'Automated proposal generation', 'Scale without adding staff', 'Performance analytics dashboard']
            }
          ].map((service, index) => (
            <div key={index} style={{ background: '#f8f9fa', padding: '40px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{service.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ color: '#666', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#667eea' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={onContactClick}
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Book Intro Call
          </button>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section id="stats" style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Working with an AI Expert with Real Industrial Experience
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[
            { number: '15+', title: 'Years Combined Experience', desc: 'In industrial manufacturing, distribution automation, and technical sales AI solutions' },
            { number: '100+', title: 'Industrial Automation Solutions', desc: 'Custom-built no-code AI and workflow automation for industrial businesses worldwide' },
            { number: '70%', title: 'Manual Task Reduction', desc: '40% increase in qualified industrial leads and 25% shorter sales cycles with my automation' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#667eea', marginBottom: '15px' }}>{stat.number}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '12px' }}>{stat.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer id="contact" style={{ background: '#1F3A5F', color: 'white', padding: '60px 0 40px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
            Let&apos;s Transform Your Industrial Operations Together
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            I help industrial businesses accelerate sales growth cost-effectively through AI and automation solutions.
          </p>
          <button 
            onClick={onContactClick}
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Get Started Today
          </button>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.2)', opacity: 0.8 }}>
          <p>&copy; 2025 Tablan | Empowering Industrial Businesses with AI & Automation</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Navbar onContactClick={openContactModal} />
      <Hero onContactClick={openContactModal} />
      <About />
      <Services onContactClick={openContactModal} />
      <Stats />
      <FAQ />
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}