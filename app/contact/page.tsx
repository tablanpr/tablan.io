'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

interface FormData {
  implementation_areas: string[]
  current_challenges: string
  current_solutions: string
  business_goals: string
  company_website: string
  full_name: string
  job_title: string
  work_email: string
  contact_number: string
  company_name: string
}

const initialFormData: FormData = {
  implementation_areas: [],
  current_challenges: '',
  current_solutions: '',
  business_goals: '',
  company_website: '',
  full_name: '',
  job_title: '',
  work_email: '',
  contact_number: '',
  company_name: ''
}

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const totalSteps = 6

  const stepTitles = [
    'Implementation Area',
    'Current Challenges',
    'Current Solutions',
    'Business Goals',
    'Company Website',
    'Contact Details'
  ]

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  const handleImplementationAreaSelect = (area: string) => {
    updateFormData({ implementation_areas: [area] })
    // Auto-advance to next step after selection
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      }
    }, 300)
  }

  const validateStep = (step?: number): boolean => {
    const stepToValidate = step || currentStep
    switch (stepToValidate) {
      case 1:
        return formData.implementation_areas.length > 0
      case 2:
        return formData.current_challenges.trim().length > 0
      case 3:
        return formData.current_solutions.trim().length > 0
      case 4:
        return formData.business_goals.trim().length > 0
      case 5:
        return formData.company_website.trim().length > 0 && isValidUrl(formData.company_website)
      case 6:
        return (
          formData.full_name.trim().length > 0 &&
          formData.job_title.trim().length > 0 &&
          formData.work_email.trim().length > 0 &&
          isValidEmail(formData.work_email) &&
          formData.contact_number.trim().length > 0 &&
          formData.company_name.trim().length > 0
        )
      default:
        return false
    }
  }

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
      return true
    } catch {
      return false
    }
  }

  const nextStep = () => {
    if (validateStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(6)) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      const submissionData = {
        implementationAreas: formData.implementation_areas,
        currentChallenges: formData.current_challenges,
        currentSolutions: formData.current_solutions,
        businessGoals: formData.business_goals,
        companyWebsite: formData.company_website,
        fullName: formData.full_name,
        jobTitle: formData.job_title,
        workEmail: formData.work_email,
        contactNumber: formData.contact_number,
        companyName: formData.company_name
      }

      await submitContactForm(submissionData)
      setMessage({
        type: 'success',
        text: 'Thank you! Your information has been submitted successfully. I\'ll be in touch soon.'
      })

      // Reset form after successful submission
      setTimeout(() => {
        setCurrentStep(1)
        setFormData(initialFormData)
        setMessage(null)
      }, 3000)

    } catch (error) {
      console.error('Submission error:', error)
      setMessage({
        type: 'error',
        text: 'Sorry, there was an error submitting your information. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2>Implementation Area</h2>
            <p>Select the area where you want to implement AI:</p>
            <div className="options-grid">
              {[
                { value: 'sales', label: 'Sales', desc: 'Lead generation & qualification' },
                { value: 'marketing', label: 'Marketing', desc: 'Content & campaign automation' },
                { value: 'operations', label: 'Operations', desc: 'Workflow automation' },
                { value: 'custom', label: 'Custom/Enterprise', desc: 'Tailored AI solutions' }
              ].map((area) => (
                <button
                  key={area.value}
                  type="button"
                  className={`option-card ${
                    formData.implementation_areas.includes(area.value) ? 'selected' : ''
                  }`}
                  onClick={() => handleImplementationAreaSelect(area.value)}
                >
                  <div className="option-title">{area.label}</div>
                  <div className="option-desc">{area.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            <h2>Current Challenges</h2>
            <p>What specific challenges are you facing? *</p>
            <textarea
              rows={3}
              value={formData.current_challenges}
              onChange={(e) => updateFormData({ current_challenges: e.target.value })}
              placeholder="Describe your current challenges..."
            />
          </div>
        )

      case 3:
        return (
          <div>
            <h2>Current Solutions</h2>
            <p>Any existing automation or AI solutions? *</p>
            <textarea
              rows={3}
              value={formData.current_solutions}
              onChange={(e) => updateFormData({ current_solutions: e.target.value })}
              placeholder="Tell us about your current solutions..."
            />
          </div>
        )

      case 4:
        return (
          <div>
            <h2>Business Goals</h2>
            <p>Goals for the next 6-12 months? *</p>
            <textarea
              rows={3}
              value={formData.business_goals}
              onChange={(e) => updateFormData({ business_goals: e.target.value })}
              placeholder="Share your business goals..."
            />
          </div>
        )

      case 5:
        return (
          <div>
            <h2>Company Website</h2>
            <p>What's your company website? *</p>
            <input
              type="url"
              value={formData.company_website}
              onChange={(e) => updateFormData({ company_website: e.target.value })}
              placeholder="https://yourcompany.com"
            />
          </div>
        )

      case 6:
        return (
          <div>
            <h2>Contact Details</h2>
            <div className="contact-grid">
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => updateFormData({ full_name: e.target.value })}
                placeholder="Full Name*"
              />
              <input
                type="text"
                value={formData.job_title}
                onChange={(e) => updateFormData({ job_title: e.target.value })}
                placeholder="Job Title*"
              />
              <input
                type="email"
                value={formData.work_email}
                onChange={(e) => updateFormData({ work_email: e.target.value })}
                placeholder="Work Email*"
              />
              <input
                type="tel"
                value={formData.contact_number}
                onChange={(e) => updateFormData({ contact_number: e.target.value })}
                placeholder="Contact Number*"
              />
              <input
                type="text"
                value={formData.company_name}
                onChange={(e) => updateFormData({ company_name: e.target.value })}
                placeholder="Company Name*"
                className="full-width"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="contact-page">
      <Navbar onContactClick={() => {}} />

      <main className="contact-main">
        <div className="container">
          <div className="contact-header">
            <Link href="/" className="back-link">
              ← Back to Home
            </Link>
            <h1>Get Started with AI Automation</h1>
            <p>Tell me about your business needs and I'll create a custom AI automation solution for you.</p>
          </div>

          <div className="contact-form-container">
            {/* Professional Status Bar */}
            <div className="status-container">
              <div className="status-header">
                <span className="status-text">Step {currentStep} of {totalSteps}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <div className="step-indicators">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                  <div
                    key={step}
                    className={`step-dot ${
                      step === currentStep ? 'active' :
                      step < currentStep ? 'completed' :
                      'upcoming'
                    }`}
                    onClick={() => {
                      if (step < currentStep || step === currentStep) {
                        setCurrentStep(step)
                      }
                    }}
                    title={`Step ${step}: ${stepTitles[step - 1]}`}
                  >
                    {step < currentStep ? '✓' : step}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            {message && (
              <div className={`message ${message.type}`}>
                {message.text}
              </div>
            )}

            <div className="form-step">
              {renderStep()}
            </div>

            {/* Navigation */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="nav-button"
                  onClick={prevStep}
                >
                  ← Previous
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  className="nav-button next-button"
                  onClick={nextStep}
                  disabled={!validateStep()}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  className="submit-button"
                  onClick={handleSubmit}
                  disabled={!validateStep() || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>

            <p className="disclaimer">
              Your information is secure and will never be shared. I'll respond within 24 hours.
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(2px);
        }

        .contact-main {
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .back-link {
          display: inline-block;
          color: #EC3928;
          text-decoration: none;
          margin-bottom: 20px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #d32f2f;
        }

        .contact-header h1 {
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
        }

        .contact-header p {
          font-size: 18px;
          color: #666;
          margin-bottom: 0;
        }

        .contact-form-container {
          background-color: #ffffff;
          margin: 2% auto;
          padding: 30px;
          border-radius: 12px;
          width: 90%;
          max-width: 680px;
          max-height: 95vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .status-container {
          margin-bottom: 32px;
          padding: 0 4px;
        }

        .status-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .status-text {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.025em;
        }

        .progress-bar {
          height: 6px;
          background: #E5E7EB;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #EC3928 0%, #F56565 100%);
          border-radius: 6px;
          transition: width 0.4s ease;
        }

        .step-indicators {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .step-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          background: #F3F4F6;
          border: 1.5px solid #E5E7EB;
          color: #6B7280;
        }

        .step-dot.completed {
          background: #EC3928;
          border-color: #EC3928;
          color: white;
          font-size: 10px;
        }

        .step-dot.active {
          background: #EC3928;
          border-color: #EC3928;
          color: white;
          transform: scale(1.05);
        }

        .step-dot:hover:not(.active) {
          border-color: #EC3928;
          color: #EC3928;
        }

        .form-step {
          min-height: 300px;
        }

        .form-step h2 {
          font-size: 22px;
          font-weight: 700;
          color: #333333;
          margin-bottom: 10px;
        }

        .form-step p {
          color: #666666;
          margin-bottom: 16px;
          line-height: 1.5;
          font-size: 14px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .option-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
          font-family: inherit;
        }

        .option-card:hover {
          border-color: #EC3928;
          background: #fef2f2;
          transform: translateY(-2px);
        }

        .option-card.selected {
          border-color: #EC3928;
          background: #EC3928;
          color: white;
        }

        .option-title {
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 6px;
        }

        .option-desc {
          font-size: 12px;
          opacity: 0.8;
          line-height: 1.3;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .contact-grid .full-width {
          grid-column: 1 / -1;
        }

        textarea, input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.3s ease;
          margin-bottom: 12px;
          box-sizing: border-box;
          background: white;
          display: block;
        }

        textarea {
          resize: vertical;
          min-height: 80px;
          line-height: 1.4;
        }

        textarea:focus, input:focus {
          outline: none;
          border-color: #EC3928;
          box-shadow: 0 0 0 3px rgba(236, 57, 40, 0.1);
        }

        input[type="url"], input[type="email"], input[type="tel"], input[type="text"] {
          height: auto;
          line-height: normal;
        }

        .message {
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 14px;
          font-weight: 500;
        }

        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          gap: 12px;
        }

        .nav-button {
          padding: 12px 24px;
          border: 1px solid #ddd;
          background: white;
          color: #333333;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-button:hover:not(:disabled) {
          background: #f8f9fa;
          border-color: #999;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .next-button, .submit-button {
          background: linear-gradient(135deg, #EC3928 0%, #d32f2f 100%);
          color: white;
          border: none;
          margin-left: auto;
          box-shadow: 0 4px 12px rgba(236, 57, 40, 0.25);
          font-weight: 600;
          border-radius: 8px;
          padding: 14px 28px;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .next-button::before, .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .next-button:hover:not(:disabled), .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(236, 57, 40, 0.35);
          background: linear-gradient(135deg, #f44336 0%, #c62828 100%);
        }

        .next-button:hover:not(:disabled)::before, .submit-button:hover:not(:disabled)::before {
          left: 100%;
        }

        .next-button:active:not(:disabled), .submit-button:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 4px 12px rgba(236, 57, 40, 0.25);
        }

        .next-button:disabled, .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 4px 12px rgba(236, 57, 40, 0.25);
        }

        .submit-button {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 10px;
          font-weight: 700;
          letter-spacing: 0.025em;
        }

        .submit-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.35);
        }

        .submit-button:disabled {
          background: #9CA3AF;
          box-shadow: none;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .disclaimer {
          text-align: center;
          font-size: 12px;
          color: #888;
          margin-top: 20px;
          margin-bottom: 0;
        }

        .disclaimer a {
          color: #EC3928;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .disclaimer a:hover {
          color: #d32f2f;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .contact-main {
            padding-top: 90px;
            padding-bottom: 40px;
          }

          .container {
            padding: 0 16px;
            max-width: 100%;
          }

          .contact-form-container {
            width: 95%;
            margin: 2vh auto;
            padding: 24px 20px;
            border-radius: 12px;
            max-width: 100%;
          }

          .form-step {
            min-height: 280px;
          }

          .form-step h2 {
            font-size: 20px;
            margin-bottom: 8px;
          }

          .form-step p {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .options-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .option-card {
            padding: 16px 12px;
            border-radius: 12px;
          }

          .option-title {
            font-size: 15px;
            margin-bottom: 4px;
          }

          .option-desc {
            font-size: 11px;
            line-height: 1.2;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .form-navigation {
            flex-direction: column-reverse;
            gap: 12px;
            margin-top: 24px;
          }

          .nav-button, .next-button, .submit-button {
            width: 100%;
            margin-left: 0;
            padding: 14px 20px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
          }

          .step-indicators {
            gap: 2px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .step-dot {
            width: 28px;
            height: 28px;
            font-size: 11px;
          }

          .step-dot.completed {
            font-size: 10px;
          }

          textarea, input {
            padding: 14px 16px;
            border-radius: 12px;
            font-size: 16px;
            border: 1.5px solid #e0e0e0;
            margin-bottom: 16px;
          }

          textarea:focus, input:focus {
            border-color: #EC3928;
            box-shadow: 0 0 0 3px rgba(236, 57, 40, 0.08);
          }

          textarea {
            min-height: 80px;
          }

          .disclaimer {
            font-size: 11px;
            margin-top: 16px;
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}