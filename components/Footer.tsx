import React from 'react'

export default function Footer() {
  const services = [
    { name: 'TechSpecPro - Product Configurators', url: '/services/product-configurators' },
    { name: 'SalesFlow AI - Sales Automation', url: '/services/sales-automation' },
    { name: 'DocuTechAI - Content Automation', url: '/services/content-automation' },
    { name: 'OptiFlow - Workflow Optimization', url: '/services/workflow-optimization' }
  ]

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
              {services.map((service, index) => (
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