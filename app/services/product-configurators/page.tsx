'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'

function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section style={{
      background: '#1F3A5F',
      color: 'white',
      padding: '150px 0 100px 0',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontSize: 'clamp(36px, 8vw, 56px)',
          fontWeight: '700',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          Custom Product Configurators
        </h1>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 24px)',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.5'
        }}>
          Transform how customers explore and purchase your industrial products with AI-powered configurators
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
          Schedule Demo
        </button>
      </div>
    </section>
  )
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
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 64px)',
          fontWeight: '700',
          color: '#1F3A5F',
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          Custom Product Configurators That Drive Sales
        </h1>
        <p style={{
          fontSize: 'clamp(20px, 4vw, 26px)',
          color: '#666',
          marginBottom: '32px',
          lineHeight: '1.5',
          maxWidth: '700px',
          margin: '0 auto 32px auto'
        }}>
          Transform complex industrial products into interactive experiences that qualify leads, reduce sales cycles, and boost order values.
        </p>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          color: '#888',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          Stop losing qualified prospects to confusing product catalogs. Our AI-powered configurators guide customers through your product options, capture detailed specifications, and generate instant quotes—turning browsers into buyers.
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
          See How It Works
        </button>
      </div>
    </section>
  )
}

function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Increase Qualified Leads by 40%',
      description: 'Interactive configurators engage prospects longer, capturing detailed specifications and contact information from genuinely interested buyers.'
    },
    {
      icon: '⚡',
      title: 'Reduce Sales Cycle by 30%',
      description: 'Customers arrive at sales conversations with clear requirements, eliminating weeks of back-and-forth specification discussions.'
    },
    {
      icon: '💰',
      title: 'Boost Average Order Value by 25%',
      description: 'Visual configurators encourage customers to explore premium options and add-ons they might not have considered otherwise.'
    },
    {
      icon: '🔧',
      title: 'Eliminate Configuration Errors',
      description: 'Built-in compatibility rules prevent impossible combinations, reducing costly mistakes and revision cycles.'
    },
    {
      icon: '📊',
      title: 'Generate Instant Accurate Quotes',
      description: 'Real-time pricing based on current costs and availability eliminates quote delays and pricing errors.'
    },
    {
      icon: '🚀',
      title: 'Scale Without Adding Sales Staff',
      description: 'Handle unlimited concurrent customers 24/7, providing expert-level guidance without human intervention.'
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
            Proven Benefits for Industrial Products
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Transform complex industrial sales processes into engaging, self-service experiences
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'stretch'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EC3928'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
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

function Features() {
  const features = [
    {
      title: 'Intelligent Product Matching',
      description: 'AI algorithms suggest optimal configurations based on customer requirements and industry best practices.',
      benefits: ['Reduces analysis paralysis', 'Improves customer satisfaction', 'Increases conversion rates']
    },
    {
      title: 'Real-Time Inventory Integration',
      description: 'Live connection to your ERP system ensures availability and accurate lead times for all configurations.',
      benefits: ['Eliminates over-promising', 'Reduces order cancellations', 'Improves delivery reliability']
    },
    {
      title: 'Complex Compatibility Rules',
      description: 'Advanced rule engine prevents invalid combinations while suggesting compatible alternatives.',
      benefits: ['Prevents costly errors', 'Reduces engineering reviews', 'Speeds order processing']
    },
    {
      title: 'Multi-Language Support',
      description: 'Serve global markets with localized configurators in multiple languages and currencies.',
      benefits: ['Expands market reach', 'Improves user experience', 'Increases international sales']
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
            Advanced Features for Industrial Complexity
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Handle the most complex industrial products with ease
          </p>
        </div>

        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EC3928'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '24px',
                fontSize: '16px'
              }}>
                {feature.description}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {feature.benefits.map((benefit, i) => (
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
                    {benefit}
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

function SocialProof() {
  return (
    <section style={{
      padding: '100px 0',
      background: 'white',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 6vw, 40px)',
          fontWeight: '700',
          color: '#1E3B5F',
          marginBottom: '60px'
        }}>
          Trusted by Leading Industrial Companies
        </h2>

        <div style={{
          background: '#f8f9fa',
          padding: '50px 40px',
          borderRadius: '12px',
          marginBottom: '50px',
          border: '2px solid #e9ecef'
        }}>
          <div style={{
            fontSize: '20px',
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '30px',
            fontStyle: 'italic'
          }}>
            "The product configurator increased our qualified leads by 45% in just 3 months. Customers love being able to visualize exactly what they're ordering before placing an order."
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1E3B5F'
          }}>
            — Sarah Johnson, VP of Sales, Industrial Equipment Co.
          </div>
        </div>

        <div className="social-proof-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {[
            { metric: '40%', description: 'More Qualified Leads' },
            { metric: '30%', description: 'Faster Sales Cycles' },
            { metric: '25%', description: 'Higher Order Values' },
            { metric: '90%', description: 'Configuration Accuracy' }
          ].map((item, index) => (
            <div key={index} style={{
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#EC3928',
                marginBottom: '8px'
              }}>
                {item.metric}
              </div>
              <div style={{
                fontSize: '16px',
                color: '#666',
                fontWeight: '500'
              }}>
                {item.description}
              </div>
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
          Ready to Transform Your Sales Process?
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.5'
        }}>
          See how a custom product configurator can increase your qualified leads and reduce your sales cycle
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
          Schedule Your Demo
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

export default function ProductConfiguratorsPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Navbar onContactClick={openContactModal} />
      <Header onContactClick={openContactModal} />
      <Benefits />
      <Features />
      <SocialProof />
      <CTA onContactClick={openContactModal} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}