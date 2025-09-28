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
          OptiFlow™
        </div>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 64px)',
          fontWeight: '700',
          color: '#1F3A5F',
          marginBottom: '24px',
          lineHeight: '1.1'
        }}>
          Cut Operational Costs by 30% with Smart Workflow Automation
        </h1>
        <p style={{
          fontSize: 'clamp(20px, 4vw, 26px)',
          color: '#666',
          marginBottom: '32px',
          lineHeight: '1.5',
          maxWidth: '700px',
          margin: '0 auto 32px auto'
        }}>
          Eliminate bottlenecks and reduce operational costs by automating complex manufacturing and logistics workflows while completing processes 5x faster.
        </p>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 18px)',
          color: '#888',
          marginBottom: '48px',
          lineHeight: '1.6'
        }}>
          Stop losing money to inefficient processes and human error. OptiFlow identifies optimization opportunities, streamlines operations, and provides real-time insights that help you make data-driven decisions for maximum efficiency.
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
          Optimize Your Workflows
        </button>
      </div>
    </section>
  )
}

function PainPoints() {
  const painPoints = [
    {
      icon: '💸',
      title: 'Manual Processes Drain Your Budget',
      description: 'Repetitive tasks eat up labor costs and slow down operations',
      before: '$50K/month in labor for order processing → Manual errors cause $20K rework → Customers wait 2 weeks',
      after: 'Automated order processing → Zero errors → Same-day turnaround → $35K monthly savings'
    },
    {
      icon: '🐌',
      title: 'Bottlenecks Kill Your Productivity',
      description: 'Critical processes waiting on manual approvals and data entry',
      before: 'Purchase order stuck 3 days waiting for approval → Production delayed → Customer delivery missed',
      after: 'Automated approval workflow → Real-time notifications → On-time delivery → Happy customers'
    },
    {
      icon: '📊',
      title: 'No Visibility Into Operations',
      description: 'Can\'t optimize what you can\'t measure - operations running blind',
      before: 'Monthly reports show problems after the fact → React to issues too late → Lost opportunities',
      after: 'Real-time dashboards → Instant problem alerts → Proactive optimization → Continuous improvement'
    },
    {
      icon: '🔥',
      title: 'Errors Cost More Than Labor',
      description: 'Human mistakes in critical processes create expensive rework and delays',
      before: 'Wrong inventory count → Production shutdown → Expedited shipping → $25K emergency costs',
      after: 'Automated inventory tracking → Real-time accuracy → Smooth production → Zero emergency costs'
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
            Are Inefficient Workflows Bleeding Money?
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            See how OptiFlow eliminates the costly bottlenecks killing your operational efficiency
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
                    ❌ Before OptiFlow
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
                    ✅ After OptiFlow
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
      icon: '💰',
      title: 'Reduce Operational Costs by 30%',
      description: 'Eliminate repetitive manual tasks and streamline processes to significantly reduce labor costs and overhead expenses.'
    },
    {
      icon: '⚡',
      title: '5x Faster Process Completion',
      description: 'Automated workflows complete routine tasks in minutes instead of hours, dramatically improving operational efficiency.'
    },
    {
      icon: '🎯',
      title: 'Eliminate Human Errors',
      description: 'Remove manual data entry mistakes and process inconsistencies that cost time and money to fix.'
    },
    {
      icon: '📊',
      title: 'Real-Time Performance Insights',
      description: 'Get instant visibility into bottlenecks, efficiency metrics, and improvement opportunities across all operations.'
    },
    {
      icon: '🔄',
      title: 'Seamless System Integration',
      description: 'Connect existing ERP, CRM, and manufacturing systems without disrupting current operations or requiring new software.'
    },
    {
      icon: '📈',
      title: 'Scalable Without Added Staff',
      description: 'Handle increased volume and complexity without hiring additional personnel or expanding teams.'
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
            Transform Your Industrial Operations
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Stop losing money to inefficient processes and manual bottlenecks
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

function WorkflowAreas() {
  useScrollAnimation()
  const areas = [
    {
      category: 'Order Processing',
      description: 'Automate quote generation, order entry, and status updates',
      automations: [
        'Automatic quote generation from specifications',
        'Order status tracking and customer notifications',
        'Invoice creation and payment processing',
        'Inventory allocation and shipping coordination'
      ],
      savings: 'Save 15-20 hours per week'
    },
    {
      category: 'Inventory Management',
      description: 'Streamline stock control and procurement processes',
      automations: [
        'Real-time inventory tracking and alerts',
        'Automated reorder points and purchasing',
        'Supplier communication and order tracking',
        'Warehouse optimization and cycle counting'
      ],
      savings: 'Reduce inventory costs by 25%'
    },
    {
      category: 'Quality Control',
      description: 'Ensure consistent quality with automated checks',
      automations: [
        'Automated inspection scheduling and tracking',
        'Non-conformance reporting and follow-up',
        'Certificate generation and distribution',
        'Compliance monitoring and documentation'
      ],
      savings: 'Cut quality issues by 80%'
    },
    {
      category: 'Customer Service',
      description: 'Provide faster, more consistent customer support',
      automations: [
        'Ticket routing and priority assignment',
        'Automated response templates',
        'Service history tracking and analysis',
        'Customer satisfaction surveys and follow-up'
      ],
      savings: 'Improve response time by 70%'
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
            Areas We Optimize for Maximum Impact
          </h2>
          <p style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Focus automation efforts where they deliver the biggest ROI for industrial businesses
          </p>
        </div>

        <div className="workflow-areas-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '25px',
          alignItems: 'stretch',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {areas.map((area, index) => (
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
                background: '#EC3928',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '20px'
              }}>
                {area.savings}
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '12px'
              }}>
                {area.category}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '24px',
                fontSize: '16px'
              }}>
                {area.description}
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {area.automations.map((automation, i) => (
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
                    {automation}
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
          Ready to Launch OptiFlow?
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 22px)',
          marginBottom: '40px',
          opacity: 0.9,
          lineHeight: '1.5'
        }}>
          Get a free workflow analysis and see exactly where OptiFlow can cut your operational costs by 30%
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
          Get Free Workflow Analysis
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

export default function WorkflowOptimizationPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Navbar onContactClick={openContactModal} />
      <Header onContactClick={openContactModal} />
      <PainPoints />
      <Benefits />
      <WorkflowAreas />
      <CTA onContactClick={openContactModal} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}