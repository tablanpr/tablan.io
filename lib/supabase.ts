import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mlwcbcvlqzjbgriwhino.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sd2NiY3ZscXpqYmdyaXdoaW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwODQxMTEsImV4cCI6MjA3MjY2MDExMX0.IKyB6T_cyeQshByBprgFlGJrYbr-RcAEhiousQFoV60'

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
// Test Supabase connection
export async function testSupabaseConnection() {
  try {
    console.log('🔍 Testing Supabase connection...')
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Anon key present:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    console.log('Anon key first 20 chars:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20))

    // Test 1: Basic connection
    console.log('📡 Testing basic table access...')
    const { data: countData, error: countError } = await supabase
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true })

    if (countError) {
      console.error('❌ Table access failed:', countError)
      console.error('Error code:', countError.code)
      console.error('Error message:', countError.message)
      console.error('Error details:', countError.details)
    } else {
      console.log('✅ Table access successful')
    }

    // Test 2: Try a simple insert
    console.log('📤 Testing insert permissions...')
    const testData = {
      full_name: 'Connection Test',
      work_email: 'test@connection.com',
      implementation_areas: ['Sales'],
      current_challenges: 'Testing connection',
      current_solutions: 'Running diagnostics',
      business_goals: 'Verify database access',
      company_website: 'test.com',
      job_title: 'Tester',
      contact_number: '000-000-0000',
      company_name: 'Test Company'
    }

    const { data: insertData, error: insertError } = await supabase
      .from('contact_submissions')
      .insert([testData])
      .select()

    if (insertError) {
      console.error('❌ Insert test failed:', insertError)
      console.error('Insert error code:', insertError.code)
      console.error('Insert error message:', insertError.message)
      console.error('Insert error details:', insertError.details)
      console.error('Insert error hint:', insertError.hint)
      return false
    } else {
      console.log('✅ Insert test successful:', insertData)
      // Clean up test data
      if (insertData?.[0]?.id) {
        await supabase.from('contact_submissions').delete().eq('id', insertData[0].id)
        console.log('🧹 Test data cleaned up')
      }
      return true
    }

  } catch (error) {
    console.error('💥 Connection test crashed:', error)
    return false
  }
}

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
    console.log('🔍 Starting form submission process...')
    console.log('Form data received:', formData)

    // Test connection first
    const connectionOk = await testSupabaseConnection()
    if (!connectionOk) {
      throw new Error('Database connection failed')
    }

    // Validate required fields
    if (!formData.workEmail || !formData.fullName) {
      throw new Error('Email and full name are required')
    }

    console.log('📤 Inserting data into contact_submissions table...')
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
      console.error('❌ Supabase error details:', error)
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      console.error('Error details:', error.details)
      console.error('Error hint:', error.hint)
      throw error
    }

    console.log('✅ Contact form submitted successfully:', data)
    return data
  } catch (error) {
    console.error('❌ Error in submitContactForm:', error)
    throw error
  }
}

// Function to submit subscription form
export async function submitSubscription(email: string, source?: string) {
  try {
    console.log('🔍 Starting subscription process...')
    console.log('Email:', email)
    console.log('Source:', source || 'website')

    // Validate email format
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email format')
    }

    const subscriptionData = {
      email: email.toLowerCase().trim(),
      source: source || 'website',
      subscribed_at: new Date().toISOString()
    }

    console.log('📤 Inserting subscription data:', subscriptionData)

    const { data, error } = await supabase
      .from('subscriptions')
      .insert([subscriptionData])
      .select()

    if (error) {
      console.error('❌ Subscription error details:', error)
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      console.error('Error details:', error.details)
      console.error('Error hint:', error.hint)

      // Handle duplicate email error
      if (error.code === '23505' || error.message?.includes('duplicate')) {
        throw new Error('duplicate')
      }

      throw error
    }

    console.log('✅ Subscription submitted successfully:', data)
    return data
  } catch (error) {
    console.error('❌ Error in submitSubscription:', error)
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