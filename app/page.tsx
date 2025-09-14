'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import ContactModal from '@/components/ContactModal'
import PhotoGallery from '@/components/PhotoGallery'
import { getLogoUrl } from '@/lib/supabase'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Industrial AI Automation
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Leveraging AI & automation tools to improve your industrial sales, marketing and operations
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {[
              { icon: '🎯', title: 'Strategic Industrial AI Implementation', desc: 'Cost-effective and actionable roadmaps for industrial AI automation adoption, tailored to manufacturing and distribution businesses.' },
              { icon: '💰', title: 'Revenue-Focused Automation', desc: 'No-code AI and workflow automation solutions are designed to scale your industrial sales and marketing processes for maximum ROI.' },
              { icon: '🏭', title: 'Built for Industrial Businesses', desc: 'Battle-tested industrial AI automation solutions that deliver measurable results in high-volume manufacturing and distribution operations.' }
            ].map((feature, index) => (
              <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid transparent', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '48px', marginBottom: '15px', textAlign: 'center' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1F3A5F', marginBottom: '12px', textAlign: 'center' }}>{feature.title}</h3>
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
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Our Industrial AI Automation Solutions
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Proven No-Code AI & Workflow Automation Systems that Improve Your Industrial Sales, Marketing & Operations
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          {[
            {
              icon: '⚙️',
              title: 'Custom Product Configurators',
              features: ['Let leads explore, customize, and request pricing with AI-powered tools.', 'No-code AI automation solution for industrial products.', 'Streamlines the industrial sales process automatically.', 'Captures qualified lead data for manufacturing businesses.', 'Delivers smooth user experience with workflow automation', 'Integration with existing industrial systems and CRM'],
              cta: 'View Examples →'
            },
            {
              icon: '📊',
              title: 'Industrial Sales Automation',
              features: ['Use AI to capture and qualify industrial leads automatically.', 'Answer technical questions with AI-powered automation 24/7.', 'Send proposals and schedule meetings with workflow automation.', 'Scale industrial sales without adding more staff.', 'Fully no-code AI solution for manufacturing businesses.', 'Performance analytics dashboard for industrial sales tracking.'],
              cta: 'View Examples →'
            },
            {
              icon: '📝',
              title: 'Technical Writing & Content Automation',
              features: ['Create product descriptions and technical documentation automatically.', 'Generate marketing materials with AI-powered content automation.', 'Multi-language content generation for global industrial markets.', 'SEO-optimized content creation for manufacturing websites.', 'Maintain consistent messaging across all industrial platforms.', 'Content distribution automation for manufacturing businesses.'],
              cta: 'View Examples →'
            },
            {
              icon: '⚡',
              title: 'Industrial Workflow Automation',
              features: ['Cut down on manual tasks with AI-powered workflow automation.', 'Reduce human error in manufacturing and distribution processes.', 'Custom no-code automation solutions to fit your industrial business.', 'Performance metrics and reporting for industrial operations', 'Cross-system integration for manufacturing and distribution'],
              cta: 'View Examples →'
            }
          ].map((service, index) => (
            <div key={index} style={{ background: '#f8f9fa', padding: '40px', borderRadius: '12px', border: '2px solid transparent', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: '48px', marginBottom: '15px', textAlign: 'center' }}>{service.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1F3A5F', marginBottom: '20px', textAlign: 'center' }}>{service.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ color: '#666', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#EC3928', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onContactClick}
                style={{ 
                  background: 'transparent',
                  color: '#EC3928',
                  padding: '8px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1F3A5F'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#EC3928'}
              >
                {service.cta}
              </button>
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
    <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Why Collaborate with Us?
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
            { icon: '🏭', title: 'Industrial Expertise', desc: 'Our team combines deep manufacturing and distribution experience with cutting-edge industrial AI automation expertise, ensuring solutions that truly understand your sector\'s challenges.' },
            { icon: '🔄', title: 'Flexible', desc: 'Choose from subscription-based, project-based, or credit-based engagements for industrial automation, all supported by dedicated strategists focused on your manufacturing success.' },
            { icon: '📈', title: 'Results-Driven', desc: 'We focus on delivering measurable outcomes, implementing AI automation solutions that directly impact your industrial revenue growth and operational efficiency.' },
            { icon: '🎯', title: 'Sustainable Implementation', desc: 'Beyond deployment, we provide comprehensive training and support, empowering your industrial team to independently manage and optimize your AI automation solutions.' }
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
            Where Can We Save You Time?
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
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Work with AI Experts with Real-Life Industrial Experience
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            We are a team of engineers and AI experts who understand the unique challenges of industrial technical sales, manufacturing operations, and distribution automation.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[
            { number: '15+', title: 'Years Combined Experience', desc: 'In industrial manufacturing, distribution automation, and technical sales AI solutions' },
            { number: '100+', title: 'Industrial Automation Solutions', desc: 'Custom-built no-code AI and workflow automation for industrial businesses worldwide' },
            { number: '70%', title: 'Manual Task Reduction', desc: '40% increase in qualified industrial leads and 25% shorter sales cycles with our automation' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', background: '#f8f9fa', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: '2px solid transparent', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#EC3928'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}>
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
  return (
    <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
            Integrates With Your Existing Industrial Tools
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Our industrial AI automation solutions work seamlessly with your Microsoft ecosystem and manufacturing software
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[
            { name: 'Microsoft 365', icon: '🏢' },
            { name: 'Power Automate', icon: '🔄' },
            { name: 'SharePoint', icon: '📊' },
            { name: 'Teams', icon: '💬' },
            { name: 'Dynamics 365', icon: '📈' },
            { name: 'SAP', icon: '🏭' },
            { name: 'Salesforce', icon: '☁️' },
            { name: 'HubSpot', icon: '🎯' }
          ].map((tool, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '20px 30px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EC3928'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <span style={{ fontSize: '24px' }}>{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ onContactClick }: { onContactClick: () => void }) {
  const logoUrl = getLogoUrl()
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setSubscribeMessage('Please enter a valid email address')
      return
    }

    setIsSubscribing(true)
    // For static deployment, simulate subscription
    setTimeout(() => {
      setSubscribeMessage('Thank you for subscribing! We\'ll be in touch.')
      setEmail('')
      setIsSubscribing(false)
      setTimeout(() => setSubscribeMessage(''), 3000)
    }, 1000)
  }
  
  return (
    <footer id="contact" style={{ background: '#1F3A5F', color: 'white', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'start',
          marginBottom: '50px' 
        }}>
          {/* Left Column - Logo and Description */}
          <div>
            <img 
              src={logoUrl} 
              alt="Tablan Logo" 
              style={{ 
                height: '60px', 
                width: 'auto', 
                marginBottom: '24px',
                filter: 'brightness(0) invert(1)'
              }}
            />
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.7', 
              opacity: 0.9,
              margin: 0,
              maxWidth: '500px'
            }}>
              The Industrial AI Automation Agency (TIAAA) helps industrial businesses (manufacturers, suppliers, and distributors) accelerate sales growth cost-effectively through AI and automation solutions.
            </p>
          </div>

          {/* Right Column - Subscribe Form */}
          <div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'white'
            }}>
              Stay Updated on Industrial AI
            </h3>
            <p style={{ 
              fontSize: '16px', 
              opacity: 0.8, 
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Get the latest insights on industrial automation, AI trends, and growth strategies delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#EC3928'
                    e.target.style.background = 'rgba(255,255,255,0.15)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                    e.target.style.background = 'rgba(255,255,255,0.1)'
                  }}
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  style={{
                    background: '#EC3928',
                    color: 'white',
                    border: 'none',
                    padding: '14px 24px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: isSubscribing ? 'not-allowed' : 'pointer',
                    opacity: isSubscribing ? 0.7 : 1,
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubscribing) {
                      e.currentTarget.style.background = '#d32f1f'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubscribing) {
                      e.currentTarget.style.background = '#EC3928'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>

            {subscribeMessage && (
              <p style={{ 
                fontSize: '14px', 
                color: subscribeMessage.includes('Thank you') ? '#4ade80' : '#fbbf24',
                margin: '0 0 16px 0',
                fontWeight: '500'
              }}>
                {subscribeMessage}
              </p>
            )}

            <button 
              onClick={onContactClick}
              style={{ 
                background: 'transparent',
                color: '#EC3928',
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: '600',
                border: '2px solid #EC3928',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EC3928'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#EC3928'
              }}
            >
              Get Started Today
            </button>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          paddingTop: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.2)', 
          opacity: 0.8 
        }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            &copy; 2025 The Industrial AI Automation Agency (TIAAA) | Empowering Industrial Businesses with AI & Automation
          </p>
        </div>
      </div>

      <style jsx>{`
        .container input::placeholder {
          color: rgba(255,255,255,0.7);
        }
        
        @media (max-width: 768px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .container input,
          .container button {
            width: 100%;
          }
          
          .container > div:first-child > div:last-child > div {
            flex-direction: column !important;
          }
        }
      `}</style>
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
      <PhotoGallery 
        title="Our Industrial AI Solutions in Action"
        subtitle="See real examples of our successful industrial automation implementations"
        maxPhotos={8}
        columns={4}
      />
      <WhyCollaborate onContactClick={openContactModal} />
      <Stats />
      <Integrations />
      <FAQ />
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}