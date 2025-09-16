'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestForm() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const testSubmission = async () => {
    setLoading(true)
    setResult('Testing...')

    console.log('Starting test...')

    try {
      // Test data
      const testData = {
        full_name: 'Test User',
        work_email: 'test@example.com',
        implementation_areas: ['Sales'],
        current_challenges: 'Testing form',
        current_solutions: 'Running test',
        business_goals: 'Fix form',
        company_website: 'test.com',
        job_title: 'Tester',
        contact_number: '123-456-7890',
        company_name: 'Test Company'
      }

      console.log('Attempting insert...', testData)

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([testData])
        .select()

      if (error) {
        console.error('Error:', error)
        setResult(`
ERROR:
Message: ${error.message}
Code: ${error.code}
Details: ${error.details}
Hint: ${error.hint}
        `)
      } else {
        console.log('Success:', data)
        setResult(`SUCCESS!
Data inserted: ${JSON.stringify(data, null, 2)}`)
      }
    } catch (err: any) {
      console.error('Caught error:', err)
      setResult(`CAUGHT ERROR: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Quick Form Test</h1>
      <button
        onClick={testSubmission}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: loading ? '#ccc' : '#007cba',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test Form Submission'}
      </button>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        whiteSpace: 'pre-wrap',
        border: '1px solid #ddd'
      }}>
        <h3>Result:</h3>
        {result || 'Click the button to test...'}
      </div>
    </div>
  )
}