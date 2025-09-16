-- Minimal test to see what's wrong
-- Run this to diagnose the exact issue

-- First check current table structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;

-- Check current RLS status
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE tablename IN ('contact_submissions', 'subscriptions');

-- Check current policies
SELECT schemaname, tablename, policyname, roles, cmd
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'subscriptions');

-- Check permissions
SELECT grantee, privilege_type
FROM information_schema.table_privileges
WHERE table_name = 'contact_submissions';

-- Try the simplest possible insert without RLS
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

INSERT INTO contact_submissions (
    full_name,
    work_email,
    company_name
) VALUES (
    'Minimal Test',
    'minimal@test.com',
    'Test Co'
);

SELECT 'Insert worked without RLS' as test_result;