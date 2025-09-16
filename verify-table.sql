-- Verify table exists and check structure
-- Run this in Supabase SQL Editor to diagnose issues

-- 1. Check if tables exist
SELECT table_name, table_schema
FROM information_schema.tables
WHERE table_name IN ('contact_submissions', 'subscriptions');

-- 2. Check table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- 3. Check current RLS status
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE tablename IN ('contact_submissions', 'subscriptions');

-- 4. Check existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'subscriptions');

-- 5. Check table permissions
SELECT grantee, privilege_type
FROM information_schema.table_privileges
WHERE table_name = 'contact_submissions';

-- 6. Simple test insert (this will show the exact error)
INSERT INTO contact_submissions (
  full_name,
  work_email,
  implementation_areas,
  current_challenges,
  current_solutions,
  business_goals,
  company_website,
  job_title,
  contact_number,
  company_name
) VALUES (
  'Test User',
  'test@example.com',
  ARRAY['Sales'],
  'Testing database',
  'Running diagnostics',
  'Fix connection',
  'test.com',
  'Developer',
  '123-456-7890',
  'Test Company'
);

-- 7. If insert worked, clean up
DELETE FROM contact_submissions WHERE work_email = 'test@example.com';