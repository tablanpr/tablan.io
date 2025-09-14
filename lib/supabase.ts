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