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
          <div className="form-step">
            <h2>Which area would you like to implement AI automation?</h2>
            <p>Select the primary area where you'd like to see the biggest impact from AI automation</p>
            <div className="options-grid">
              {[
                { title: 'Sales', desc: 'Lead generation, qualification, and conversion automation' },
                { title: 'Marketing', desc: 'Content creation, campaign automation, and analytics' },
                { title: 'Operations', desc: 'Workflow optimization, process automation, and efficiency' },
                { title: 'Customer Service', desc: 'Support automation, chatbots, and response systems' }
              ].map((option, index) => (
                <button
                  key={index}
                  className={`option-card ${formData.implementation_areas.includes(option.title) ? 'selected' : ''}`}
                  onClick={() => handleImplementationAreaSelect(option.title)}
                >
                  <div className="option-title">{option.title}</div>
                  <div className="option-desc">{option.desc}</div>
                </button>
              ))}
            </div>
            <p className="disclaimer">
              This information helps me understand your specific needs and tailor my recommendations accordingly.
              Your data is securely stored and will only be used to provide you with relevant AI automation solutions.
            </p>
          </div>
        )

      case 2:
        return (
          <div className="form-step">
            <h2>What are your current challenges?</h2>
            <p>Describe the main challenges you're facing that AI automation could help solve</p>
            <textarea
              value={formData.current_challenges}
              onChange={(e) => updateFormData({ current_challenges: e.target.value })}
              placeholder="e.g., Manual lead qualification takes too much time, struggling to generate consistent content, repetitive tasks slowing down operations..."
            />
          </div>
        )

      case 3:
        return (
          <div className="form-step">
            <h2>What solutions have you tried?</h2>
            <p>Tell me about any current tools or methods you're using to address these challenges</p>
            <textarea
              value={formData.current_solutions}
              onChange={(e) => updateFormData({ current_solutions: e.target.value })}
              placeholder="e.g., Using basic CRM, manual spreadsheets, hiring more staff, tried some automation tools but they didn't fit our needs..."
            />
          </div>
        )

      case 4:
        return (
          <div className="form-step">
            <h2>What are your business goals?</h2>
            <p>Share your key objectives and what success would look like for your business</p>
            <textarea
              value={formData.business_goals}
              onChange={(e) => updateFormData({ business_goals: e.target.value })}
              placeholder="e.g., Increase sales by 30%, reduce manual work by 50%, improve customer response time, scale operations without adding staff..."
            />
          </div>
        )

      case 5:
        return (
          <div className="form-step">
            <h2>What's your company website?</h2>
            <p>This helps me understand your business and industry better</p>
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
          <div className="form-step">
            <h2>Contact Information</h2>
            <p>Please provide your contact details so I can reach out to discuss your needs</p>
            <div className="contact-grid">
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => updateFormData({ full_name: e.target.value })}
                placeholder="Full Name"
              />
              <input
                type="text"
                value={formData.job_title}
                onChange={(e) => updateFormData({ job_title: e.target.value })}
                placeholder="Job Title"
              />
              <input
                type="email"
                value={formData.work_email}
                onChange={(e) => updateFormData({ work_email: e.target.value })}
                placeholder="Work Email"
                className="full-width"
              />
              <input
                type="tel"
                value={formData.contact_number}
                onChange={(e) => updateFormData({ contact_number: e.target.value })}
                placeholder="Phone Number"
              />
              <input
                type="text"
                value={formData.company_name}
                onChange={(e) => updateFormData({ company_name: e.target.value })}
                placeholder="Company Name"
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
            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-header">
                <span className="progress-text">Step {currentStep} of {totalSteps}</span>
                <span className="progress-percentage">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <h3 className="step-title">{stepTitles[currentStep - 1]}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <div className="step-indicators">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`step-dot ${
                      i + 1 < currentStep ? 'completed' :
                      i + 1 === currentStep ? 'active' : 'upcoming'
                    }`}
                    onClick={() => {
                      if (i + 1 < currentStep || (i + 1 === currentStep)) {
                        setCurrentStep(i + 1)
                      }
                    }}
                  >
                    {i + 1 < currentStep ? '✓' : i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            {message && (
              <div className={`message ${message.type}`}>
                {message.text}
              </div>
            )}

            {renderStep()}

            {/* Navigation */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="nav-button"
                >
                  Previous
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  disabled={!validateStep()}
                  className="next-button"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!validateStep() || isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .contact-main {
          padding-top: 100px;
          padding-bottom: 80px;
        }

        .container {
          max-width: 800px;
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
          background: white;
          border-radius: 20px;
          padding: 50px 40px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border: 1px solid #f1f3f4;
        }

        .progress-container {
          margin-bottom: 40px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .progress-text {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .progress-percentage {
          font-size: 13px;
          font-weight: 500;
          color: #6B7280;
          background: #F3F4F6;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          color: #1F2937;
          margin: 8px 0 16px 0;
          text-align: center;
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
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
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
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .form-step h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
          text-align: center;
          line-height: 1.3;
        }

        .form-step p {
          color: #6b7280;
          margin-bottom: 32px;
          line-height: 1.6;
          text-align: center;
          font-size: 16px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .option-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
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
          font-size: 18px;
          margin-bottom: 8px;
        }

        .option-desc {
          font-size: 13px;
          opacity: 0.8;
          line-height: 1.3;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: start;
        }

        .contact-grid .full-width {
          grid-column: 1 / -1;
        }

        .form-step {
          width: 100%;
        }

        textarea, input {
          width: 100%;
          padding: 18px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          margin-bottom: 20px;
          background: #ffffff;
          box-sizing: border-box;
        }

        textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.6;
        }

        textarea:focus, input:focus {
          outline: none;
          border-color: #EC3928;
          box-shadow: 0 0 0 4px rgba(236, 57, 40, 0.1);
          background: #ffffff;
        }

        input::placeholder, textarea::placeholder {
          color: #9CA3AF;
          font-size: 15px;
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
          margin-top: 32px;
          gap: 16px;
        }

        .nav-button {
          padding: 14px 28px;
          border: 1px solid #ddd;
          background: white;
          color: #333;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-button:hover:not(:disabled) {
          background: #f8f9fa;
          border-color: #999;
        }

        .next-button, .submit-button {
          background: linear-gradient(135deg, #EC3928 0%, #d32f2f 100%);
          color: white;
          border: none;
          margin-left: auto;
          box-shadow: 0 4px 12px rgba(236, 57, 40, 0.25);
          font-weight: 600;
          border-radius: 8px;
          padding: 16px 32px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .next-button:hover:not(:disabled), .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(236, 57, 40, 0.35);
          background: linear-gradient(135deg, #f44336 0%, #c62828 100%);
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
        }

        .submit-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.35);
        }

        .disclaimer {
          text-align: center;
          font-size: 12px;
          color: #888;
          margin-top: 24px;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .contact-main {
            padding-top: 90px;
            padding-bottom: 40px;
          }

          .container {
            padding: 0 16px;
          }

          .contact-form-container {
            padding: 32px 24px;
            border-radius: 16px;
            margin: 0 auto;
          }

          .form-step {
            min-height: 350px;
          }

          .form-step h2 {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .form-step p {
            font-size: 15px;
            margin-bottom: 28px;
          }

          .options-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .option-card {
            padding: 20px 16px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .form-navigation {
            flex-direction: column-reverse;
            gap: 16px;
            margin-top: 40px;
          }

          .nav-button, .next-button, .submit-button {
            width: 100%;
            margin-left: 0;
            padding: 16px 24px;
            font-size: 16px;
          }

          .step-indicators {
            gap: 6px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .step-dot {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }

          textarea, input {
            padding: 16px 18px;
            font-size: 16px;
            margin-bottom: 16px;
          }

          textarea {
            min-height: 120px;
          }
        }
      `}</style>
    </div>
  )
}