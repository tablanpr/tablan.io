'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'

// Add animations to the page
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-on-scroll {
      opacity: 0; transform: translateY(30px); transition: all 0.6s ease-out;
    }
    .animate-on-scroll.visible {
      opacity: 1; transform: translateY(0);
    }
    .hover-lift {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .hover-lift:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
    }
    @media (prefers-reduced-motion: reduce) {
      * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }
  `
  document.head.appendChild(style)
}

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}


function Header({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section style={{
      padding: '150px 0 80px 0',
      background: 'white',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          background: '#EC3928',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '25px',
          fontSize: '14px',
          fontWeight: '600',
          display: 'inline-block',
          marginBottom: '24px'
        }}>
          SalesFlow AI™
        </div>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 64px)',
          fontWeight: '700',
          color: '#1F3A5F',
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          Intelligent Sales Automation That Never Lets Leads Slip Away
        </h1>
        <p style={{
          fontSize: 'clamp(20px, 4vw, 26px)',
          color: '#666',
          marginBottom: '32px',
          lineHeight: '1.5',
          maxWidth: '700px',
          margin: '0 auto 32px auto'
        }}>
          Automate your entire sales process from lead capture to quote generation, increasing qualified leads by 3x while your team focuses on closing deals.
        </p>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          color: '#888',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          Stop losing deals to slow response times and manual processes. SalesFlow AI handles lead qualification, follow-ups, and proposal generation—ensuring no opportunity falls through the cracks while accelerating your sales velocity.
        </p>
        <button
          onClick={onContactClick}
          style={{
            background: '#EC3928',
            color: 'white',
            padding: '18px 36px',
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
          Automate Your Sales Process
        </button>
      </div>
    </section>
  )
}

function Benefits() {
  useScrollAnimation()
  const benefits = [
    {
      icon: '🔥',
      title: '3x More Qualified Leads',
      description: 'AI-powered lead scoring identifies high-value prospects automatically, so your sales team focuses on the deals most likely to close.'
    },
    {
      icon: '⏰',
      title: '24/7 Lead Response',
      description: 'Instant automated responses to inquiries, even outside business hours, keeping prospects engaged while competitors sleep.'
    },
    {
      icon: '📈',
      title: '50% Faster Sales Cycles',
      description: 'Automated nurturing sequences move prospects through your sales funnel without manual intervention from your team.'
    },
    {
      icon: '🎯',
      title: 'Personalized at Scale',
      description: 'Dynamic content adapts to each prospect\'s industry, company size, and specific challenges for maximum relevance.'
    },
    {
      icon: '💡',
      title: 'Technical Questions Answered',
      description: 'AI-powered chatbots handle complex technical questions instantly, providing expert-level responses 24/7.'
    },
    {
      icon: '📊',
      title: 'Complete Sales Intelligence',
      description: 'Track every interaction, identify bottlenecks, and optimize your sales process with detailed analytics and insights.'
    }
  ]

  return (
    <section style={{
      padding: '100px 0',
      background: '#f8f9fa'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '700',
            color: '#1F3A5F',
            marginBottom: '24px'
          }}>
            Transform Your Industrial Sales Results
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Stop losing deals to slow response times and manual processes
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'stretch'
        }}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-on-scroll hover-lift"
              style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                animationDelay: `${index * 0.1}s`,
                cursor: 'pointer'
              }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EC3928'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#1F3A5F',
                  marginBottom: '16px',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '16px',
                  flex: 1
                }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  useScrollAnimation()
  const steps = [
    {
      number: '01',
      title: 'Capture & Qualify',
      description: 'AI analyzes every lead in real-time, scoring based on company size, industry, and buying signals to prioritize your sales efforts.',
      features: ['Lead scoring algorithm', 'Company enrichment', 'Buying intent detection']
    },
    {
      number: '02',
      title: 'Engage & Nurture',
      description: 'Automated sequences deliver personalized content based on prospect behavior, keeping them engaged until they\'re ready to buy.',
      features: ['Dynamic email sequences', 'Behavioral triggers', 'Content personalization']
    },
    {
      number: '03',
      title: 'Convert & Close',
      description: 'Warm, qualified prospects are seamlessly handed to your sales team with complete context and recommended next steps.',
      features: ['Sales handoff automation', 'Meeting scheduling', 'Proposal generation']
    },
    {
      number: '04',
      title: 'Analyze & Optimize',
      description: 'Continuous performance tracking and AI-driven insights help refine your sales process for maximum conversion rates.',
      features: ['Performance analytics', 'A/B testing', 'Process optimization']
    }
  ]

  return (
    <section style={{
      padding: '100px 0',
      background: '#f8f9fa'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '700',
            color: '#1F3A5F',
            marginBottom: '24px'
          }}>
            How Industrial Sales Automation Works
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A proven 4-step process that turns prospects into customers automatically
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EC3928'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '40px',
                background: '#EC3928',
                color: 'white',
                width: '50px',
                height: '30px',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '700'
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px',
                marginTop: '20px'
              }}>
                {step.title}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '24px',
                fontSize: '16px'
              }}>
                {step.description}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {step.features.map((feature, i) => (
                  <li key={i} style={{
                    color: '#333',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative',
                    fontSize: '14px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#EC3928',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section style={{
      padding: '100px 0',
      background: '#333333',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: '700',
          marginBottom: '24px'
        }}>
          Ready to 3x Your Qualified Leads?
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.5'
        }}>
          Let us show you how industrial sales automation can transform your results in just 30 days
        </p>
        <button
          onClick={onContactClick}
          style={{
            background: '#EC3928',
            color: 'white',
            padding: '18px 36px',
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
          Get Your Free Sales Audit
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      background: '#1E3B5F',
      color: 'white',
      padding: '60px 0 30px 0',
      position: 'relative'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              marginBottom: '20px'
            }}>
              <img
                src="https://mlwcbcvlqzjbgriwhino.supabase.co/storage/v1/object/public/Photos/tablaniologo.png"
                alt="Tablan Logo"
                style={{
                  height: '40px',
                  width: 'auto'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement
                  if (fallback) {
                    fallback.style.display = 'block'
                  }
                }}
              />
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#ffffff',
                display: 'none'
              }}>
                Tablan
              </h3>
            </div>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              opacity: 0.9,
              marginBottom: '20px'
            }}>
              Empowering industrial businesses with cutting-edge AI automation solutions that drive efficiency and growth.
            </p>
            <div style={{
              fontSize: '16px',
              opacity: 0.9
            }}>
              <a href="mailto:info@tablan.io" style={{
                color: 'white',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}>
                info@tablan.io
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: 'Product Configurators', url: '/services/product-configurators' },
                { name: 'Sales Automation', url: '/services/sales-automation' },
                { name: 'Content Automation', url: '/services/content-automation' },
                { name: 'Workflow Optimization', url: '/services/workflow-optimization' }
              ].map((service, index) => (
                <li key={index} style={{
                  marginBottom: '12px',
                  fontSize: '14px',
                  opacity: 0.8,
                  transition: 'all 0.3s ease'
                }}>
                  <a href={service.url} style={{
                    color: 'white',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1'
                    e.currentTarget.style.paddingLeft = '8px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.8'
                    e.currentTarget.style.paddingLeft = '0'
                  }}>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            margin: 0,
            fontSize: '14px',
            opacity: 0.8
          }}>
            &copy; 2025 Tablan | Empowering Industrial Businesses with AI & Automation
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            fontSize: '14px',
            opacity: 0.8
          }}>
            <a href="/privacy" style={{
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function SalesAutomationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Navbar onContactClick={openContactModal} />
      <Header onContactClick={openContactModal} />
      <Benefits />
      <Process />
      <CTA onContactClick={openContactModal} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}