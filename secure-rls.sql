-- Secure RLS Setup - Run this to properly secure your database
-- This allows form submissions but protects your data

-- Re-enable RLS with proper security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT only (submit forms)
CREATE POLICY "Allow contact form submissions" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow subscription submissions" ON subscriptions
  FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated users (you) to view and manage all data
CREATE POLICY "Allow admin full access to contact_submissions" ON contact_submissions
  FOR ALL TO authenticated WITH CHECK (true);

CREATE POLICY "Allow admin full access to subscriptions" ON subscriptions
  FOR ALL TO authenticated WITH CHECK (true);

-- Verify policies are working
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'subscriptions');