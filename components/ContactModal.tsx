'use client'

import { useState, useEffect } from 'react'
import { submitContactForm } from '@/lib/supabase'
import styles from './ContactModal.module.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

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

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setCurrentStep(1)
    setFormData(initialFormData)
    setMessage(null)
    onClose()
  }

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
    console.log('🚀 Submit button clicked!')
    console.log('Current step validation:', validateStep())
    console.log('Form data:', formData)

    if (!validateStep()) {
      console.log('❌ Validation failed, not submitting')
      return
    }

    console.log('✅ Starting submission...')
    setIsSubmitting(true)
    setMessage(null)

    try {
      // Submit to Supabase database
      console.log('📤 Submitting to Supabase...')
      const result = await submitContactForm({
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
      })

      console.log('✅ Submission successful:', result)
      setMessage({
        type: 'success',
        text: 'Thank you for your application! Your information has been successfully submitted. I\'ll respond within 24 hours.'
      })

      // Auto-close after showing success message
      setTimeout(() => {
        handleClose()
      }, 3000)

    } catch (error: any) {
      console.error('❌ Error submitting form:', error)

      // More specific error messages
      let errorMessage = 'Sorry, there was an error submitting your application. Please try again or contact us directly.'

      if (error?.message) {
        console.error('Error message:', error.message)
        if (error.message.includes('RLS') || error.message.includes('policy')) {
          errorMessage = 'Database access issue. Please contact us directly at work@tablan.io'
        } else if (error.message.includes('Network') || error.message.includes('fetch')) {
          errorMessage = 'Network connection issue. Please check your internet and try again.'
        } else if (error.message.includes('required')) {
          errorMessage = 'Please fill in all required fields and try again.'
        }
      }

      if (error?.code) {
        console.error('Error code:', error.code)
      }

      setMessage({
        type: 'error',
        text: errorMessage
      })
    } finally {
      console.log('🏁 Submission process complete')
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={handleClose}>&times;</span>
        
        {/* Professional Status Bar */}
        <div className={styles.statusContainer}>
          <div className={styles.statusHeader}>
            <span className={styles.statusText}>Step {currentStep} of {totalSteps}</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className={styles.stepIndicators}>
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div
                key={step}
                className={`${styles.stepDot} ${
                  step === currentStep ? styles.active :
                  step < currentStep ? styles.completed :
                  styles.upcoming
                }`}
                onClick={() => goToStep(step)}
                title={`Step ${step}: ${stepTitles[step - 1]}`}
              >
                {step < currentStep ? '✓' : step}
              </div>
            ))}
          </div>
        </div>

        {message && (
          <div className={`${styles.message} ${styles[message.type]}`}>
            {message.text}
          </div>
        )}

        <div className={styles.formStep}>
          {currentStep === 1 && (
            <div>
              <h2>Implementation Area</h2>
              <p>Select the area where you want to implement AI:</p>
              <div className={styles.optionsGrid}>
                {[
                  { value: 'sales', label: 'Sales', desc: 'Lead generation & qualification' },
                  { value: 'marketing', label: 'Marketing', desc: 'Content & campaign automation' },
                  { value: 'operations', label: 'Operations', desc: 'Workflow automation' },
                  { value: 'custom', label: 'Custom/Enterprise', desc: 'Tailored AI solutions' }
                ].map((area) => (
                  <button
                    key={area.value}
                    type="button"
                    className={`${styles.optionCard} ${
                      formData.implementation_areas.includes(area.value) ? styles.selected : ''
                    }`}
                    onClick={() => handleImplementationAreaSelect(area.value)}
                  >
                    <div className={styles.optionTitle}>{area.label}</div>
                    <div className={styles.optionDesc}>{area.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
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
          )}

          {currentStep === 3 && (
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
          )}

          {currentStep === 4 && (
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
          )}

          {currentStep === 5 && (
            <div>
              <h2>Company Website</h2>
              <p>What&apos;s your company website? *</p>
              <input 
                type="url" 
                value={formData.company_website}
                onChange={(e) => updateFormData({ company_website: e.target.value })}
                placeholder="https://yourcompany.com"
              />
            </div>
          )}

          {currentStep === 6 && (
            <div>
              <h2>Contact Details</h2>
              <div className={styles.contactGrid}>
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
                  className={styles.fullWidth}
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles.formNavigation}>
          {currentStep > 1 && (
            <button type="button" className={styles.navButton} onClick={prevStep}>
              ← Previous
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextStep}
              disabled={!validateStep()}
            >
              Next →
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={!validateStep() || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>

        <p className={styles.disclaimer}>
          Your information is secure and will never be shared. I&apos;ll respond within 24 hours.
        </p>
      </div>
    </div>
  )
}