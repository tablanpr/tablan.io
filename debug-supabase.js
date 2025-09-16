// Simple Supabase test script
// Run this in browser console to test connection

console.log('=== SUPABASE DEBUG TEST ===');

// Check environment variables
console.log('Environment check:');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY present:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Test direct connection
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlwcbcvlqzjbgriwhino.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sd2NiY3ZscXpqYmdyaXdoaW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwODQxMTEsImV4cCI6MjA3MjY2MDExMX0.IKyB6T_cyeQshByBprgFlGJrYbr-RcAEhiousQFoV60';

const testClient = createClient(supabaseUrl, supabaseKey);

// Test connection
async function testConnection() {
  try {
    console.log('Testing connection...');

    const { data, error } = await testClient
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.error('Connection failed:', error);
    } else {
      console.log('Connection successful!');
    }
  } catch (err) {
    console.error('Test failed:', err);
  }
}

testConnection();