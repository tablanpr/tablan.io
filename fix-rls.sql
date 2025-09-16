-- Fix RLS policies for Tablanio project
-- Run this in your Supabase SQL Editor

-- First, drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public subscriptions" ON subscriptions;

-- Recreate policies for public access (insert only)
CREATE POLICY "Allow public contact form submissions" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public subscriptions" ON subscriptions
  FOR INSERT TO anon WITH CHECK (true);

-- Also allow authenticated users to insert (in case they're logged in)
CREATE POLICY "Allow authenticated contact form submissions" ON contact_submissions
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated subscriptions" ON subscriptions
  FOR INSERT TO authenticated WITH CHECK (true);

-- Verify RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Check if policies are working (optional)
-- You can uncomment these to test:
-- SELECT * FROM contact_submissions;
-- SELECT * FROM subscriptions;