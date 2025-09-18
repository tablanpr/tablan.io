'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import ContactModal from '@/components/ContactModal'
import { getLogoUrl, submitSubscription, getPhotosFromBucket } from '@/lib/supabase'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Industrial AI Automation
          </h2>
          <p style={{ fontSize: 'clamp(16px, 4vw, 18px)', color: '#666', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6', padding: '0 16px' }}>
            Leveraging AI & automation tools to improve your industrial sales, marketing and operations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {[
              { icon: '🎯', title: 'Strategic Industrial AI Implementation', desc: 'Cost-effective and actionable roadmaps for industrial AI automation adoption, tailored to manufacturing and distribution businesses.' },
              { icon: '💰', title: 'Revenue-Focused Automation', desc: 'No-code AI and workflow automation solutions are designed to scale your industrial sales and marketing processes for maximum ROI.' },
              { icon: '🏭', title: 'Built for Industrial Businesses', desc: 'Battle-tested industrial AI automation solutions that deliver measurable results in high-volume manufacturing and distribution operations.' }
            ].map((feature, index) => (
              <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid transparent', transition: 'all 0.3s ease', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: '15px', textAlign: 'center' }}>{feature.icon}</div>
                <h3 style={{ fontSize: 'clamp(18px, 4vw, 20px)', fontWeight: '600', color: '#1F3A5F', marginBottom: '12px', textAlign: 'center' }}>{feature.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6', textAlign: 'center' }}>{feature.desc}</p>
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
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Industrial AI Automation Solutions
          </h2>
          <p style={{ fontSize: 'clamp(16px, 4vw, 18px)', color: '#666', maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
            Proven No-Code AI & Workflow Automation Systems that Improve Your Industrial Sales, Marketing & Operations
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px auto' }} className="solutions-grid">
          {[
            {
              icon: '⚙️',
              title: 'Custom Product Configurators',
              features: ['Let leads explore, customize, and request pricing with AI-powered tools.', 'No-code AI automation solution for industrial products.', 'Streamlines the industrial sales process automatically.', 'Captures qualified lead data for manufacturing businesses.', 'Delivers smooth user experience with workflow automation', 'Integration with existing industrial systems and CRM'],
            },
            {
              icon: '📊',
              title: 'Industrial Sales Automation',
              features: ['Use AI to capture and qualify industrial leads automatically.', 'Answer technical questions with AI-powered automation 24/7.', 'Send proposals and schedule meetings with workflow automation.', 'Scale industrial sales without adding more staff.', 'Fully no-code AI solution for manufacturing businesses.', 'Performance analytics dashboard for industrial sales tracking.'],
            },
            {
              icon: '📝',
              title: 'Technical Writing & Content Automation',
              features: ['Create product descriptions and technical documentation automatically.', 'Generate marketing materials with AI-powered content automation.', 'Multi-language content generation for global industrial markets.', 'SEO-optimized content creation for manufacturing websites.', 'Maintain consistent messaging across all industrial platforms.', 'Content distribution automation for manufacturing businesses.'],
            },
            {
              icon: '⚡',
              title: 'Industrial Workflow Automation',
              features: ['Cut down on manual tasks with AI-powered workflow automation.', 'Reduce human error in manufacturing and distribution processes.', 'Custom no-code automation solutions to fit your industrial business.', 'Performance metrics and reporting for industrial operations', 'Cross-system integration for manufacturing and distribution'],
            }
          ].map((service, index) => (
            <div key={index} style={{ background: '#f8f9fa', padding: '32px', borderRadius: '12px', border: '2px solid transparent', transition: 'all 0.3s ease', minHeight: '580px', height: 'auto', display: 'flex', flexDirection: 'column' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: '48px', marginBottom: '15px', textAlign: 'center' }}>{service.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1F3A5F', marginBottom: '20px', textAlign: 'center' }}>{service.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ color: '#666', marginBottom: '10px', paddingLeft: '20px', position: 'relative', fontSize: '14px', lineHeight: '1.4' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#EC3928', fontWeight: 'bold' }}>✓</span>
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
              background: '#EC3928',
              color: 'white',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(236, 57, 40, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 57, 40, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(236, 57, 40, 0.3)'
            }}
          >
            Book Intro Call
          </button>
        </div>
      </div>
    </section>
  )
}

function WhyCollaborate({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="why-work-with-me" style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Why Work With Me?
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Your partner in transforming industrial operations through no-code AI automation innovation
          </p>
        </div>
        <>
          <style jsx>{`
            .collaborate-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin-bottom: 40px;
            }
            @media (max-width: 768px) {
              .collaborate-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div className="collaborate-grid">
          {[
            { icon: '🏭', title: 'Industrial Expertise', desc: 'I combine deep manufacturing and distribution experience with cutting-edge industrial AI automation expertise, ensuring solutions that truly understand your sector\'s challenges.' },
            { icon: '🔄', title: 'Flexible', desc: 'Choose from subscription-based, project-based, or credit-based engagements for industrial automation, all supported by dedicated strategists focused on your manufacturing success.' },
            { icon: '📈', title: 'Results-Driven', desc: 'We focus on delivering measurable outcomes, implementing AI automation solutions that directly impact your industrial revenue growth and operational efficiency.' },
            { icon: '🎯', title: 'Sustainable Implementation', desc: 'Beyond deployment, I provide comprehensive training and support, empowering your industrial team to independently manage and optimize your AI automation solutions.' }
          ].map((feature, index) => (
            <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid transparent', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: '48px', marginBottom: '15px', textAlign: 'center' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1F3A5F', marginBottom: '12px', textAlign: 'center' }}>{feature.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', textAlign: 'center' }}>{feature.desc}</p>
            </div>
          ))}
          </div>
        </>
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={onContactClick}
            style={{ 
              background: '#EC3928',
              color: 'white',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(236, 57, 40, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 57, 40, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(236, 57, 40, 0.3)'
            }}
          >
            Where Can I Save You Time?
          </button>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section id="stats" style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Work with an AI Expert with Real-Life Industrial Experience
          </h2>
          <p style={{ fontSize: 'clamp(16px, 4vw, 18px)', color: '#666', maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
            I'm an engineer and AI expert who understands the unique challenges of industrial technical sales, manufacturing operations, and distribution automation.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { number: '15+', title: 'Years Combined Experience', desc: 'In industrial manufacturing, distribution automation, and technical sales AI solutions' },
            { number: '100+', title: 'Industrial Automation Solutions', desc: 'Custom-built no-code AI and workflow automation for industrial businesses worldwide' },
            { number: '70%', title: 'Manual Task Reduction', desc: '40% increase in qualified industrial leads and 25% shorter sales cycles with our automation' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', background: '#f8f9fa', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid transparent', transition: 'all 0.3s ease', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#EC3928', marginBottom: '15px' }}>{stat.number}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1F3A5F', marginBottom: '12px' }}>{stat.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  // Direct URLs to your Supabase logo files
  const integrationTools = [
    { name: 'Microsoft Dynamics', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/dynamics.webp' },
    { name: 'Microsoft Excel', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/excel.png' },
    { name: 'Microsoft Outlook', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/outlook.png' },
    { name: 'Power Automate', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/power%20automate.webp' },
    { name: 'Microsoft SharePoint', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/sharepoint.png' },
    { name: 'Microsoft Teams', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/teams.webp' },
    { name: 'Microsoft Word', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/word.png' },
    { name: 'LinkedIn', url: 'https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/linkedin.webp' }
  ]

  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index))
  }

  return (
    <section id="integrations" style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Integrates With Your Existing Industrial Tools
          </h2>
          <p style={{ fontSize: 'clamp(16px, 4vw, 18px)', color: '#666', maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
            My industrial AI automation solutions work seamlessly with your Microsoft ecosystem and manufacturing software
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto',
          justifyItems: 'center'
        }}>
          {integrationTools.map((tool, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              padding: '16px',
              borderRadius: '12px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'transparent'
            }}>
              {failedImages.has(index) ? (
                <span style={{ fontSize: '56px' }}>🔧</span>
              ) : (
                <img
                  src={tool.url}
                  alt={tool.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onError={() => handleImageError(index)}
                />
              )}
              <span style={{
                fontSize: '13px',
                fontWeight: '500',
                color: '#555',
                textAlign: 'center',
                maxWidth: '100px',
                lineHeight: '1.3'
              }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setSubscribeMessage('Please enter a valid email address')
      setTimeout(() => setSubscribeMessage(''), 4000)
      return
    }

    setIsSubscribing(true)
    setSubscribeMessage('')

    try {
      console.log('🚀 Starting subscription for:', email)
      await submitSubscription(email, 'subscribe-section')
      setSubscribeMessage('Thank you for subscribing! You\'ll receive the latest industrial AI insights.')
      setEmail('')
      setTimeout(() => setSubscribeMessage(''), 5000)
    } catch (error) {
      console.error('Subscription error:', error)
      if (error instanceof Error) {
        if (error.message.includes('duplicate')) {
          setSubscribeMessage('You\'re already subscribed to our newsletter!')
        } else if (error.message.includes('Invalid email')) {
          setSubscribeMessage('Please enter a valid email address')
        } else {
          setSubscribeMessage('Sorry, there was an error. Please try again.')
        }
      } else {
        setSubscribeMessage('Sorry, there was an error. Please try again.')
      }
      setTimeout(() => setSubscribeMessage(''), 4000)
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <section style={{ padding: '40px 0 80px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 6vw, 36px)',
            fontWeight: '700',
            color: '#333',
            marginBottom: '16px'
          }}>
            Stay Updated on Industrial AI
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 4vw, 18px)',
            color: '#666',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Get the latest insights on industrial automation, AI trends, and growth strategies delivered to your inbox.
          </p>

          <style jsx>{`
            .subscribe-form {
              display: flex;
              gap: 12px;
              max-width: 500px;
              margin: 0 auto;
              flex-direction: row;
            }
            @media (max-width: 640px) {
              .subscribe-form {
                flex-direction: column;
                gap: 16px;
              }
            }
          `}</style>

          <form onSubmit={handleSubscribe} style={{ marginBottom: '20px' }}>
            <div className="subscribe-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  background: 'white',
                  color: '#333',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#EC3928'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0'
                }}
              />
              <button
                type="submit"
                disabled={isSubscribing}
                style={{
                  background: '#EC3928',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isSubscribing ? 'not-allowed' : 'pointer',
                  opacity: isSubscribing ? 0.7 : 1,
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(236, 57, 40, 0.25)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubscribing) {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(236, 57, 40, 0.35)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubscribing) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(236, 57, 40, 0.25)'
                  }
                }}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>

          {subscribeMessage && (
            <p style={{
              fontSize: '16px',
              color: subscribeMessage.includes('Thank you') ? '#10B981' : '#EF4444',
              margin: '0',
              fontWeight: '500'
            }}>
              {subscribeMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      background: '#1F3A5F',
      color: 'white',
      padding: '20px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{
          margin: 0,
          fontSize: '14px',
          opacity: 0.8
        }}>
          &copy; 2025 Tablan | Empowering Industrial Businesses with AI & Automation
        </p>
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
      <WhyCollaborate onContactClick={openContactModal} />
      <Stats />
      <Integrations />
      <FAQ />
      <SubscribeSection />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}