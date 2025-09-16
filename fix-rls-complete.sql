-- Complete RLS Fix for Tablanio Contact Forms
-- Run this entire script in your Supabase SQL Editor

-- First, let's check if the table exists and see its structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions';

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Allow authenticated subscriptions" ON subscriptions;

-- Temporarily disable RLS to test table access
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions DISABLE ROW LEVEL SECURITY;

-- Test insert (this should work now)
-- You can uncomment this to test:
-- INSERT INTO contact_submissions (full_name, work_email, implementation_areas)
-- VALUES ('Test User', 'test@example.com', ARRAY['Sales']);

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create comprehensive policies for all roles
CREATE POLICY "Enable insert for anon users" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users" ON contact_submissions
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Enable insert for service_role" ON contact_submissions
  FOR INSERT TO service_role
  WITH CHECK (true);

-- Same for subscriptions table
CREATE POLICY "Enable insert for anon users" ON subscriptions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users" ON subscriptions
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Enable insert for service_role" ON subscriptions
  FOR INSERT TO authenticated
  WITH CHECK (true);

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'subscriptions');

-- Grant necessary permissions
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON contact_submissions TO authenticated;
GRANT INSERT ON subscriptions TO anon;
GRANT INSERT ON subscriptions TO authenticated;