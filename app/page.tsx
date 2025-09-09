'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import ContactModal from '@/components/ContactModal'

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
              { title: 'Strategic Industrial AI Implementation', desc: 'Cost-effective and actionable roadmaps for industrial AI automation adoption, tailored to manufacturing and distribution businesses.' },
              { title: 'Revenue-Focused Automation', desc: 'No-code AI and workflow automation solutions are designed to scale your industrial sales and marketing processes for maximum ROI.' },
              { title: 'Built for Industrial Businesses', desc: 'Battle-tested industrial AI automation solutions that deliver measurable results in high-volume manufacturing and distribution operations.' }
            ].map((feature, index) => (
              <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
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
            Our Industrial AI Automation Solutions
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Proven No-Code AI & Workflow Automation Systems that Improve Your Industrial Sales, Marketing & Operations
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          {[
            {
              title: 'Custom Product Configurators',
              features: ['Let leads explore, customize, and request pricing with AI-powered tools.', 'No-code AI automation solution for industrial products.', 'Streamlines the industrial sales process automatically.', 'Captures qualified lead data for manufacturing businesses.', 'Delivers smooth user experience with workflow automation', 'Integration with existing industrial systems and CRM'],
              cta: 'View Examples→'
            },
            {
              title: 'Industrial Sales Automation',
              features: ['Use AI to capture and qualify industrial leads automatically.', 'Answer technical questions with AI-powered automation 24/7.', 'Send proposals and schedule meetings with workflow automation.', 'Scale industrial sales without adding more staff.', 'Fully no-code AI solution for manufacturing businesses.', 'Performance analytics dashboard for industrial sales tracking.'],
              cta: 'View Examples→'
            },
            {
              title: 'Technical Writing & Content Automation',
              features: ['Create product descriptions and technical documentation automatically.', 'Generate marketing materials with AI-powered content automation.', 'Multi-language content generation for global industrial markets.', 'SEO-optimized content creation for manufacturing websites.', 'Maintain consistent messaging across all industrial platforms.', 'Content distribution automation for manufacturing businesses.'],
              cta: 'View Examples→'
            },
            {
              title: 'Industrial Workflow Automation',
              features: ['Cut down on manual tasks with AI-powered workflow automation.', 'Reduce human error in manufacturing and distribution processes.', 'Custom no-code automation solutions to fit your industrial business.', 'Performance metrics and reporting for industrial operations', 'Cross-system integration for manufacturing and distribution'],
              cta: 'View Examples→'
            }
          ].map((service, index) => (
            <div key={index} style={{ background: '#f8f9fa', padding: '40px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#333', marginBottom: '20px' }}>{service.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ color: '#666', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#667eea' }}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onContactClick}
                style={{ 
                  background: 'transparent',
                  color: '#667eea',
                  padding: '8px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          {[
            { title: 'Industrial Expertise', desc: 'Our team combines deep manufacturing and distribution experience with cutting-edge industrial AI automation expertise, ensuring solutions that truly understand your sector\'s challenges.' },
            { title: 'Flexible', desc: 'Choose from subscription-based, project-based, or credit-based engagements for industrial automation, all supported by dedicated strategists focused on your manufacturing success.' },
            { title: 'Results-Driven', desc: 'We focus on delivering measurable outcomes, implementing AI automation solutions that directly impact your industrial revenue growth and operational efficiency.' },
            { title: 'Sustainable Implementation', desc: 'Beyond deployment, we provide comprehensive training and support, empowering your industrial team to independently manage and optimize your AI automation solutions.' }
          ].map((feature, index) => (
            <div key={index} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.desc}</p>
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
            <div key={index} style={{ textAlign: 'center', background: '#f8f9fa', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
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
          {['Microsoft 365', 'Power Automate', 'SharePoint', 'Teams', 'Dynamics 365', 'SAP', 'Salesforce', 'HubSpot'].map((tool, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '20px 30px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333'
            }}>
              {tool}
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
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            I help industrial businesses (manufacturers, suppliers, and distributors) accelerate sales growth cost-effectively through AI and automation solutions.
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
            Show me what\'s possible
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
      <WhyCollaborate onContactClick={openContactModal} />
      <Stats />
      <Integrations />
      <FAQ />
      <Footer onContactClick={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}