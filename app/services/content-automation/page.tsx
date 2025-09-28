'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'

// Add animations to the page
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
    .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.6s ease-out; }
    .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
    .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important; }
    @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
    @media (max-width: 768px) { .pain-points-grid { grid-template-columns: 1fr !important; } }
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
          DocuTechAI™
        </div>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 64px)',
          fontWeight: '700',
          color: '#1F3A5F',
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          Create Technical Content That Converts in Minutes, Not Weeks
        </h1>
        <p style={{
          fontSize: 'clamp(20px, 4vw, 26px)',
          color: '#666',
          marginBottom: '32px',
          lineHeight: '1.5',
          maxWidth: '700px',
          margin: '0 auto 32px auto'
        }}>
          Generate consistent, high-quality technical documentation and marketing content at 10x the speed, maintaining your brand voice while converting prospects into customers.
        </p>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          color: '#888',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          Stop spending weeks creating product descriptions, technical specs, and marketing materials. DocuTechAI maintains your brand voice while producing documentation, proposals, and sales materials that convert prospects into customers.
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
          See Content Examples
        </button>
      </div>
    </section>
  )
}

function PainPoints() {
  const painPoints = [
    {
      icon: '⏰',
      title: 'Content Creation Takes Forever',
      description: 'Technical writers spend weeks on documentation that should take days',
      before: 'Technical writer spends 3 weeks creating product manual → Still needs 2 rounds of revisions → Delayed product launch',
      after: 'DocuTechAI generates first draft in 2 hours → Minor edits needed → Launch on schedule'
    },
    {
      icon: '😫',
      title: 'Inconsistent Brand Voice Across Content',
      description: 'Different writers create conflicting messaging and technical explanations',
      before: 'Sales sheet says "easy installation" → Manual says "requires expert technician" → Confused customers',
      after: 'Unified brand voice across all content → Consistent messaging → Clear customer understanding'
    },
    {
      icon: '🔍',
      title: 'Content Doesn\'t Rank or Convert',
      description: 'Technical content fails to attract prospects or drive sales',
      before: 'Amazing product → Boring technical content → No organic traffic → Zero inbound leads',
      after: 'SEO-optimized content → Higher search rankings → 300% more qualified traffic → Sales inquiries'
    },
    {
      icon: '📚',
      title: 'Documentation Always Out of Date',
      description: 'Product updates leave documentation behind, creating support headaches',
      before: 'Product update → Forget to update manual → 50+ support calls → "Instructions don\'t match"',
      after: 'Automated content updates → Always current documentation → Self-service support → Happy customers'
    }
  ]

  return (
    <section style={{
      padding: '100px 0',
      background: '#f8fafc'
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
            Is Slow Content Creation Killing Your Growth?
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            See how DocuTechAI solves the biggest content challenges in industrial marketing
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          alignItems: 'stretch',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
        className="pain-points-grid">
          {painPoints.map((point, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                fontSize: '36px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                {point.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                {point.title}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontSize: '16px',
                textAlign: 'center'
              }}>
                {point.description}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <div style={{
                  background: '#fee2e2',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#d32f2f',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    ❌ Before DocuTechAI
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.4'
                  }}>
                    {point.before}
                  </div>
                </div>

                <div style={{
                  background: '#dcfce7',
                  padding: '15px',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#2e7d32',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    ✅ After DocuTechAI
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.4'
                  }}>
                    {point.after}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  useScrollAnimation()
  const benefits = [
    {
      icon: '⚡',
      title: '10x Faster Content Creation',
      description: 'Generate product descriptions, technical specs, and marketing materials in minutes instead of hours or days.'
    },
    {
      icon: '🎯',
      title: 'Consistent Brand Voice',
      description: 'Maintain uniform messaging across all platforms with AI-powered style guides and brand consistency checks.'
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'Automatically translate and localize content for global markets while preserving technical accuracy.'
    },
    {
      icon: '📊',
      title: 'SEO-Optimized Content',
      description: 'Built-in SEO optimization ensures your technical content ranks well and drives organic traffic.'
    },
    {
      icon: '🔄',
      title: 'Auto-Update Documentation',
      description: 'Keep product documentation current with automated updates when specifications or features change.'
    },
    {
      icon: '✅',
      title: 'Quality Assurance Built-In',
      description: 'Automated fact-checking and technical review processes ensure accuracy and compliance standards.'
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
            Scale Your Content Without Sacrificing Quality
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Create compelling technical content that engages prospects and supports your sales process
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

function ContentTypes() {
  useScrollAnimation()
  const contentTypes = [
    {
      category: 'Technical Documentation Automation',
      items: [
        'Create installation guides and operation manuals automatically',
        'Generate troubleshooting documentation from support data',
        'Automate safety compliance and regulatory documentation',
        'Produce maintenance schedules and service instructions'
      ],
      icon: '📋'
    },
    {
      category: 'Marketing Content Automation',
      items: [
        'Generate marketing materials with AI-powered content automation',
        'Create compelling case studies from customer data',
        'Automate email campaigns and newsletter content',
        'Produce white papers and technical articles at scale'
      ],
      icon: '📢'
    },
    {
      category: 'Multi-Language Content Generation',
      items: [
        'Multi-language content generation for global industrial markets',
        'Maintain technical accuracy across all translations',
        'Localize content for different regional markets',
        'Automate translation updates when source content changes'
      ],
      icon: '🌍'
    },
    {
      category: 'SEO & Distribution Automation',
      items: [
        'SEO-optimized content creation for manufacturing websites',
        'Maintain consistent messaging across all industrial platforms',
        'Content distribution automation for manufacturing businesses',
        'Automated social media and blog post scheduling'
      ],
      icon: '📊'
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
            How AI & Automation Powers Your Content Creation
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            DocuTechAI uses advanced AI and automation to transform how industrial businesses create and manage content
          </p>
        </div>

        <div className="content-types-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px',
          alignItems: 'stretch',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {contentTypes.map((type, index) => (
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
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{
                fontSize: '36px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                {type.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                {type.category}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {type.items.map((item, i) => (
                  <li key={i} style={{
                    color: '#666',
                    marginBottom: '10px',
                    paddingLeft: '20px',
                    position: 'relative',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#EC3928',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    {item}
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
          Ready to Launch DocuTechAI?
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.5'
        }}>
          See how DocuTechAI can create technical content 10x faster while maintaining your brand voice
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
          Start Content Automation
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

export default function ContentAutomationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Navbar onContactClick={openContactModal} />
      <Header onContactClick={openContactModal} />
      <PainPoints />
      <Benefits />
      <ContentTypes />
      <CTA onContactClick={openContactModal} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}