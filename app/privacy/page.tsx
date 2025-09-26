'use client'

import React from 'react'

export default function PrivacyPolicy() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '80px 0'
    }}>
      <div className="container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          background: 'white',
          padding: '60px',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1E3B5F',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Privacy Policy
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Last updated: January 2025
          </p>

          <div style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#333'
          }}>
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                Information We Collect
              </h2>
              <p style={{ marginBottom: '15px' }}>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                <li>Fill out our contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email</li>
                <li>Use our website services</li>
              </ul>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                How We Use Your Information
              </h2>
              <p style={{ marginBottom: '15px' }}>
                We use the information we collect to:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant updates and marketing communications</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                Information Sharing
              </h2>
              <p style={{ marginBottom: '15px' }}>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                Data Security
              </h2>
              <p style={{ marginBottom: '15px' }}>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
              </p>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                Your Rights
              </h2>
              <p style={{ marginBottom: '15px' }}>
                You have the right to:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section style={{ marginBottom: '30px' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                Contact Us
              </h2>
              <p style={{ marginBottom: '15px' }}>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500'
              }}>
                <a href="mailto:info@tablan.io" style={{
                  color: '#1E3B5F',
                  textDecoration: 'none'
                }}>
                  info@tablan.io
                </a>
              </p>
            </section>

            <section>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1E3B5F',
                marginBottom: '15px'
              }}>
                Changes to This Policy
              </h2>
              <p style={{ marginBottom: '15px' }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            paddingTop: '30px',
            borderTop: '1px solid #e0e0e0'
          }}>
            <a href="/" style={{
              background: '#1E3B5F',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563EB'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1E3B5F'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}