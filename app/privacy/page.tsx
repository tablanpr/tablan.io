'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContactModal from '@/components/ContactModal'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <main>
      <Navbar onContactClick={openContactModal} />

      <section style={{
        padding: '120px 0 80px 0',
        background: 'white'
      }}>
        <div className="container" style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '700',
            color: '#1F3A5F',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            Privacy Policy
          </h1>


          <div style={{
            fontSize: '13px',
            lineHeight: '1.7',
            color: '#555'
          }}>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                1. Introduction and Scope
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Tablan ("we," "our," or "us") is committed to protecting the privacy and security of personal information collected through our industrial automation services agency. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website, engage our services, or otherwise interact with our agency.
              </p>
              <p style={{ marginBottom: '12px' }}>
                As a specialized agency providing AI-powered automation solutions including TechSpecPro (Product Configurators), SalesFlow AI (Sales Automation), DocuTechAI (Content Automation), and OptiFlow (Workflow Optimization), we handle both personal and business information in the course of our client engagements.
              </p>
              <p>
                By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our Terms of Service.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                2. Information We Collect
              </h2>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                2.1 Personal Information
              </h3>
              <p style={{ marginBottom: '12px' }}>
                We collect personal information that you voluntarily provide to us when:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Requesting information about our services or scheduling consultations</li>
                <li style={{ marginBottom: '6px' }}>Subscribing to our newsletters or marketing communications</li>
                <li style={{ marginBottom: '6px' }}>Participating in surveys, feedback forms, or market research</li>
                <li style={{ marginBottom: '6px' }}>Engaging with our customer support or technical assistance</li>
                <li style={{ marginBottom: '6px' }}>Attending webinars, workshops, or other events we host</li>
              </ul>
              <p style={{ marginBottom: '12px' }}>
                This information may include: full name, business title and role, company name and size, email address, phone number, business address, industry sector, specific automation needs and challenges, budget parameters, timeline requirements, and any other information you choose to provide.
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                2.2 Business and Technical Information
              </h3>
              <p style={{ marginBottom: '12px' }}>
                In the course of providing our automation services, we may collect:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Business process documentation and workflow diagrams</li>
                <li style={{ marginBottom: '6px' }}>Product specifications, technical requirements, and system configurations</li>
                <li style={{ marginBottom: '6px' }}>Sales data, customer information, and performance metrics (when relevant to automation projects)</li>
                <li style={{ marginBottom: '6px' }}>Content samples, brand guidelines, and marketing materials for content automation projects</li>
                <li style={{ marginBottom: '6px' }}>Integration requirements and existing system documentation</li>
                <li style={{ marginBottom: '6px' }}>Performance benchmarks and optimization targets</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                2.3 Automatically Collected Information
              </h3>
              <p style={{ marginBottom: '12px' }}>
                When you visit our website, we automatically collect certain information through cookies and similar technologies:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>IP address, browser type and version, operating system</li>
                <li style={{ marginBottom: '6px' }}>Pages visited, time spent on pages, click patterns, and navigation paths</li>
                <li style={{ marginBottom: '6px' }}>Referring website, search terms used to find our site</li>
                <li style={{ marginBottom: '6px' }}>Device information including screen resolution and device type</li>
                <li style={{ marginBottom: '6px' }}>Geographic location data (at country/region level)</li>
              </ul>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                3. How We Use Your Information
              </h2>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                3.1 Service Delivery and Client Engagement
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Providing consultation services and developing automation solutions tailored to your business needs</li>
                <li style={{ marginBottom: '6px' }}>Implementing and deploying TechSpecPro, SalesFlow AI, DocuTechAI, and OptiFlow solutions</li>
                <li style={{ marginBottom: '6px' }}>Providing ongoing support, maintenance, and optimization services</li>
                <li style={{ marginBottom: '6px' }}>Communicating project updates, deliverables, and milestone progress</li>
                <li style={{ marginBottom: '6px' }}>Invoicing, payment processing, and account management</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                3.2 Business Operations and Improvement
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Analyzing service performance and client satisfaction to improve our offerings</li>
                <li style={{ marginBottom: '6px' }}>Developing new automation solutions and enhancing existing products</li>
                <li style={{ marginBottom: '6px' }}>Conducting market research and industry analysis</li>
                <li style={{ marginBottom: '6px' }}>Training our team and improving service delivery methodologies</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                3.3 Marketing and Communications
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Sending newsletters, industry insights, and educational content about automation trends</li>
                <li style={{ marginBottom: '6px' }}>Promoting relevant services, case studies, and success stories</li>
                <li style={{ marginBottom: '6px' }}>Inviting you to webinars, workshops, and industry events</li>
                <li style={{ marginBottom: '6px' }}>Personalizing website content and service recommendations</li>
              </ul>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                4. Information Sharing and Disclosure
              </h2>

              <p style={{ marginBottom: '16px' }}>
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                4.1 Service Providers and Partners
              </h3>
              <p style={{ marginBottom: '12px' }}>
                We may share information with trusted third-party service providers who assist us in operating our business, including:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Cloud hosting and infrastructure providers (such as Supabase, Vercel)</li>
                <li style={{ marginBottom: '6px' }}>Payment processors and financial service providers</li>
                <li style={{ marginBottom: '6px' }}>CRM and marketing automation platforms</li>
                <li style={{ marginBottom: '6px' }}>Analytics and performance monitoring services</li>
                <li style={{ marginBottom: '6px' }}>Specialized technology partners for specific automation implementations</li>
              </ul>
              <p style={{ marginBottom: '16px' }}>
                All service providers are contractually bound to protect your information and use it only for the purposes we specify.
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                4.2 Legal and Compliance Requirements
              </h3>
              <p style={{ marginBottom: '12px' }}>
                We may disclose information when required by law or when we believe in good faith that disclosure is necessary to:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Comply with legal processes, court orders, or government regulations</li>
                <li style={{ marginBottom: '6px' }}>Protect our rights, property, or safety, or that of our clients or others</li>
                <li style={{ marginBottom: '6px' }}>Investigate potential fraud, security breaches, or policy violations</li>
                <li style={{ marginBottom: '6px' }}>Enforce our Terms of Service or other agreements</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                4.3 Business Transfers
              </h3>
              <p style={{ marginBottom: '16px' }}>
                In the event of a merger, acquisition, or sale of all or a portion of our business, client information may be transferred as part of the transaction. We will notify affected clients of any such transfer and any choices they may have regarding their information.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                5. Data Security and Protection
              </h2>

              <p style={{ marginBottom: '16px' }}>
                We implement comprehensive security measures to protect your information against unauthorized access, alteration, disclosure, or destruction:
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                5.1 Technical Safeguards
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>SSL/TLS encryption for all data transmission</li>
                <li style={{ marginBottom: '6px' }}>Encrypted storage of sensitive data at rest</li>
                <li style={{ marginBottom: '6px' }}>Regular security assessments and penetration testing</li>
                <li style={{ marginBottom: '6px' }}>Multi-factor authentication for system access</li>
                <li style={{ marginBottom: '6px' }}>Network firewalls and intrusion detection systems</li>
                <li style={{ marginBottom: '6px' }}>Regular software updates and security patches</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                5.2 Administrative Safeguards
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Strict access controls limiting data access to authorized personnel only</li>
                <li style={{ marginBottom: '6px' }}>Regular employee training on privacy and security best practices</li>
                <li style={{ marginBottom: '6px' }}>Background checks for employees with access to sensitive information</li>
                <li style={{ marginBottom: '6px' }}>Incident response procedures and breach notification protocols</li>
                <li style={{ marginBottom: '6px' }}>Regular audits of data handling practices and security controls</li>
              </ul>

              <p style={{ marginBottom: '16px' }}>
                While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but commit to promptly addressing any identified vulnerabilities.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                6. Your Rights and Choices
              </h2>

              <p style={{ marginBottom: '16px' }}>
                Depending on your jurisdiction, you may have the following rights regarding your personal information:
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                6.1 Access and Transparency
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Request access to personal information we hold about you</li>
                <li style={{ marginBottom: '6px' }}>Obtain copies of your data in a portable format</li>
                <li style={{ marginBottom: '6px' }}>Receive information about how your data is processed</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                6.2 Correction and Deletion
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Request correction of inaccurate or incomplete information</li>
                <li style={{ marginBottom: '6px' }}>Request deletion of your personal information (subject to legal and contractual obligations)</li>
                <li style={{ marginBottom: '6px' }}>Object to processing for direct marketing purposes</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                6.3 Communication Preferences
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Opt out of marketing communications at any time</li>
                <li style={{ marginBottom: '6px' }}>Manage email subscription preferences</li>
                <li style={{ marginBottom: '6px' }}>Request removal from our mailing lists</li>
              </ul>

              <p style={{ marginBottom: '16px' }}>
                To exercise these rights, please contact us at info@tablan.io. We will respond to your request within 30 days and may require verification of your identity before processing your request.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                7. Data Retention
              </h2>

              <p style={{ marginBottom: '16px' }}>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law:
              </p>

              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Client project data: Retained for the duration of the service engagement plus 7 years for business and legal purposes</li>
                <li style={{ marginBottom: '6px' }}>Marketing communications data: Until you opt out or request deletion</li>
                <li style={{ marginBottom: '6px' }}>Website analytics data: Typically retained for 26 months</li>
                <li style={{ marginBottom: '6px' }}>Financial and billing records: Retained for 7 years as required by tax and accounting regulations</li>
                <li style={{ marginBottom: '6px' }}>Support and correspondence records: Retained for 3 years after case closure</li>
              </ul>

              <p style={{ marginBottom: '16px' }}>
                When retention periods expire, we securely delete or anonymize the information in accordance with our data disposal procedures.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                8. International Data Transfers
              </h2>

              <p style={{ marginBottom: '16px' }}>
                As a global automation services agency, we may transfer your information to countries other than your own. When we do so, we ensure appropriate safeguards are in place:
              </p>

              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Transfers to countries with adequate data protection laws as determined by relevant authorities</li>
                <li style={{ marginBottom: '6px' }}>Implementation of appropriate contractual safeguards such as Standard Contractual Clauses</li>
                <li style={{ marginBottom: '6px' }}>Verification that service providers maintain appropriate security and privacy standards</li>
                <li style={{ marginBottom: '6px' }}>Regular assessment of cross-border data transfer risks and mitigation measures</li>
              </ul>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                9. Cookies and Tracking Technologies
              </h2>

              <p style={{ marginBottom: '16px' }}>
                Our website uses cookies and similar technologies to enhance your browsing experience and analyze site usage:
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                9.1 Types of Cookies We Use
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Essential cookies: Required for basic website functionality</li>
                <li style={{ marginBottom: '6px' }}>Analytics cookies: Help us understand how visitors use our site</li>
                <li style={{ marginBottom: '6px' }}>Marketing cookies: Used to deliver relevant advertisements</li>
                <li style={{ marginBottom: '6px' }}>Preference cookies: Remember your settings and preferences</li>
              </ul>

              <p style={{ marginBottom: '16px' }}>
                You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                10. Third-Party Links and Services
              </h2>

              <p style={{ marginBottom: '16px' }}>
                Our website may contain links to third-party websites, services, or applications. This Privacy Policy does not apply to these external sites. We encourage you to review the privacy policies of any third-party services you access through our site.
              </p>

              <p style={{ marginBottom: '16px' }}>
                We are not responsible for the privacy practices or content of third-party websites, even if accessed through links on our site.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                11. Children's Privacy
              </h2>

              <p style={{ marginBottom: '16px' }}>
                Our services are designed for businesses and professionals. We do not knowingly collect personal information from children under 16 years of age. If we become aware that we have collected personal information from a child under 16, we will take steps to promptly delete such information.
              </p>

              <p style={{ marginBottom: '16px' }}>
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at info@tablan.io.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                12. Changes to This Privacy Policy
              </h2>

              <p style={{ marginBottom: '16px' }}>
                We may update this Privacy Policy periodically to reflect changes in our practices, services, or applicable laws. When we make material changes, we will:
              </p>

              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>Post the updated policy on our website with a new effective date</li>
                <li style={{ marginBottom: '6px' }}>Notify clients and prospects via email when changes materially affect how we handle their information</li>
                <li style={{ marginBottom: '6px' }}>Provide prominent notice on our website for 30 days following any material changes</li>
                <li style={{ marginBottom: '6px' }}>Obtain consent where required by applicable law</li>
              </ul>

              <p style={{ marginBottom: '16px' }}>
                We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                13. Contact Information
              </h2>

              <p style={{ marginBottom: '16px' }}>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <p style={{ marginBottom: '8px' }}><strong>Email:</strong> info@tablan.io</p>
                <p style={{ marginBottom: '8px' }}><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                <p style={{ marginBottom: '8px' }}><strong>Response Time:</strong> We will respond to privacy-related inquiries within 30 business days</p>
              </div>

              <p style={{ marginBottom: '16px' }}>
                For urgent privacy concerns or potential security incidents, please mark your communication as "URGENT - PRIVACY" in the subject line.
              </p>

              <p style={{ marginBottom: '16px' }}>
                If you are not satisfied with our response to your privacy inquiry, you may have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F3A5F',
                marginBottom: '16px'
              }}>
                14. Agency-Specific Considerations
              </h2>

              <p style={{ marginBottom: '16px' }}>
                As an automation services agency, we recognize our unique position in handling both our own business data and data processed on behalf of our clients:
              </p>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                14.1 Data Controller vs. Processor Roles
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>When collecting information for our own business purposes (marketing, sales, support), we act as a data controller</li>
                <li style={{ marginBottom: '6px' }}>When processing client data as part of automation implementations, we may act as a data processor under client instructions</li>
                <li style={{ marginBottom: '6px' }}>We maintain clear data processing agreements with clients that define respective responsibilities</li>
              </ul>

              <h3 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px',
                marginTop: '20px'
              }}>
                14.2 Client Data Protection
              </h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '6px' }}>We implement appropriate technical and organizational measures to protect client data</li>
                <li style={{ marginBottom: '6px' }}>Client data is processed only as necessary to deliver contracted services</li>
                <li style={{ marginBottom: '6px' }}>We do not use client data for our own marketing or business development purposes without explicit consent</li>
                <li style={{ marginBottom: '6px' }}>Upon contract termination, client data is returned or securely deleted as specified in our agreements</li>
              </ul>
            </section>

            <div style={{
              borderTop: '1px solid #e0e0e0',
              paddingTop: '30px',
              textAlign: 'center',
              fontSize: '11px',
              color: '#888'
            }}>
              <p style={{ marginBottom: '8px' }}>
                This Privacy Policy constitutes a legally binding agreement between you and Tablan.
              </p>
              <p style={{ marginBottom: '8px' }}>
                For questions about this policy or our privacy practices, contact: info@tablan.io
              </p>
              <p>
                &copy; 2025 Tablan. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </main>
  )
}