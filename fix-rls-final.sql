-- Final RLS Fix - This should work properly
-- Run this in your Supabase SQL Editor

-- Drop any existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow subscription submissions" ON subscriptions;
DROP POLICY IF EXISTS "Allow admin full access to contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow admin full access to subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON subscriptions;

-- Make sure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create simple, working policies
CREATE POLICY "contact_insert_anon" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "subscriptions_insert_anon" ON subscriptions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated users full access for admin purposes
CREATE POLICY "contact_admin_all" ON contact_submissions
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "subscriptions_admin_all" ON subscriptions
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Grant explicit permissions
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON subscriptions TO anon;

-- Verify policies
SELECT tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'subscriptions');