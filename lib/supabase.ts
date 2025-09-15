import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mlwcbcvlqzjbgriwhino.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to get photos from the Photos bucket
export async function getPhotosFromBucket() {
  try {
    const { data, error } = await supabase.storage
      .from('Photos')
      .list('', {
        limit: 100,
        offset: 0
      })

    if (error) {
      console.error('Error fetching photos:', error)
      return []
    }

    // Generate public URLs for each photo
    const photosWithUrls = data?.map(file => {
      const { data: publicData } = supabase.storage
        .from('Photos')
        .getPublicUrl(file.name)
      
      return {
        name: file.name,
        url: publicData.publicUrl,
        size: file.metadata?.size || 0,
        lastModified: file.updated_at
      }
    })

    return photosWithUrls || []
  } catch (error) {
    console.error('Error in getPhotosFromBucket:', error)
    return []
  }
}

// Function to get a specific photo URL
export function getPhotoUrl(fileName: string) {
  const { data } = supabase.storage
    .from('Photos')
    .getPublicUrl(fileName)
  
  return data.publicUrl
}

// Function to get the Tablanio logo URL
export function getLogoUrl() {
  const { data } = supabase.storage
    .from('Photos')
    .getPublicUrl('tablaniologo.png')

  return data.publicUrl
}

// Database functions for form submissions
export async function submitContactForm(formData: {
  implementationAreas: string[]
  currentChallenges: string
  currentSolutions: string
  businessGoals: string
  companyWebsite: string
  fullName: string
  jobTitle: string
  workEmail: string
  contactNumber: string
  companyName: string
}) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          implementation_areas: formData.implementationAreas,
          current_challenges: formData.currentChallenges,
          current_solutions: formData.currentSolutions,
          business_goals: formData.businessGoals,
          company_website: formData.companyWebsite,
          full_name: formData.fullName,
          job_title: formData.jobTitle,
          work_email: formData.workEmail,
          contact_number: formData.contactNumber,
          company_name: formData.companyName
        }
      ])
      .select()

    if (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in submitContactForm:', error)
    throw error
  }
}

// Function to submit subscription form
export async function submitSubscription(email: string, source?: string) {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .insert([
        {
          email,
          source: source || 'website',
          subscribed_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Error submitting subscription:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in submitSubscription:', error)
    throw error
  }
}

// Function to get all contact submissions (admin use)
export async function getContactSubmissions() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching contact submissions:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in getContactSubmissions:', error)
    throw error
  }
}

// Function to get all subscriptions (admin use)
export async function getSubscriptions() {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .order('subscribed_at', { ascending: false })

    if (error) {
      console.error('Error fetching subscriptions:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error in getSubscriptions:', error)
    throw error
  }
}