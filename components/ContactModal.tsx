'use client'

import { useState, useEffect } from 'react'
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

  const handleImplementationAreaChange = (area: string, checked: boolean) => {
    const newAreas = checked 
      ? [...formData.implementation_areas, area]
      : formData.implementation_areas.filter(a => a !== area)
    
    updateFormData({ implementation_areas: newAreas })
  }

  const validateStep = (): boolean => {
    switch (currentStep) {
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
    if (!validateStep()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Thank you for your application! I will review your information and get back to you within 24 hours with next steps.' 
        })
        setTimeout(() => {
          handleClose()
        }, 3000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Sorry, there was an error submitting your application. Please try again or contact me directly.' 
      })
    }
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={handleClose}>&times;</span>
        
        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className={styles.stepIndicator}>
            Step {currentStep} of {totalSteps}
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
              <div className={styles.checkboxGroup}>
                {[
                  { value: 'sales', label: 'Sales', desc: 'Automate lead generation, qualification, and follow-ups' },
                  { value: 'marketing', label: 'Marketing', desc: 'Content creation, campaign automation, and analytics' },
                  { value: 'operations', label: 'Operations', desc: 'Streamline workflows and business processes' },
                  { value: 'custom', label: 'Custom Project/Enterprise', desc: 'Tailored AI solutions for specific needs' }
                ].map((area) => (
                  <label key={area.value} className={styles.checkboxItem}>
                    <input 
                      type="checkbox" 
                      checked={formData.implementation_areas.includes(area.value)}
                      onChange={(e) => handleImplementationAreaChange(area.value, e.target.checked)}
                    />
                    <div className={styles.checkboxContent}>
                      <strong>{area.label}</strong>
                      <span>{area.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2>Current Challenges</h2>
              <p>What specific challenges are you facing in your operations that affects efficiency, speed, downtime or quality of output/results? *</p>
              <textarea 
                rows={5} 
                value={formData.current_challenges}
                onChange={(e) => updateFormData({ current_challenges: e.target.value })}
                placeholder="Describe your current challenges..."
              />
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2>Current Solutions</h2>
              <p>Are you currently using any automation or AI solutions? If so, what&apos;s working or not working? *</p>
              <textarea 
                rows={5} 
                value={formData.current_solutions}
                onChange={(e) => updateFormData({ current_solutions: e.target.value })}
                placeholder="Tell us about your current solutions..."
              />
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2>Business Goals</h2>
              <p>What are your business goals for the next 6-12 months? *</p>
              <textarea 
                rows={5} 
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
              <div className={styles.formRow}>
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
              </div>
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
              />
            </div>
          )}
        </div>

        <div className={styles.formNavigation}>
          {currentStep > 1 && (
            <button type="button" className={styles.navButton} onClick={prevStep}>
              Previous
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button 
              type="button" 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={nextStep}
              disabled={!validateStep()}
            >
              Next
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