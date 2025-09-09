import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface ContactFormData {
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

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    const requiredFields = [
      'implementation_areas',
      'current_challenges', 
      'current_solutions',
      'business_goals',
      'company_website',
      'full_name',
      'job_title', 
      'work_email',
      'contact_number',
      'company_name'
    ]

    for (const field of requiredFields) {
      if (field === 'implementation_areas') {
        if (!body[field as keyof ContactFormData] || !Array.isArray(body[field as keyof ContactFormData]) || (body[field as keyof ContactFormData] as string[]).length === 0) {
          return NextResponse.json(
            { error: `${field} is required and must be a non-empty array` },
            { status: 400 }
          )
        }
      } else {
        const fieldValue = body[field as keyof ContactFormData]
        if (!fieldValue || typeof fieldValue !== 'string' || fieldValue.trim().length === 0) {
          return NextResponse.json(
            { error: `${field} is required` },
            { status: 400 }
          )
        }
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.work_email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate URL format
    try {
      const url = body.company_website.startsWith('http') 
        ? body.company_website 
        : `https://${body.company_website}`
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: 'Invalid website URL format' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        implementation_areas: body.implementation_areas,
        current_challenges: body.current_challenges,
        current_solutions: body.current_solutions,
        business_goals: body.business_goals,
        company_website: body.company_website,
        full_name: body.full_name,
        job_title: body.job_title,
        work_email: body.work_email,
        contact_number: body.contact_number,
        company_name: body.company_name
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Submission successful',
        id: data?.[0]?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}