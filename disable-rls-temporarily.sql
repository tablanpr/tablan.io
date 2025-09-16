-- TEMPORARY FIX - Disable RLS completely to get forms working
-- Run this in your Supabase SQL Editor

-- Completely disable RLS on both tables
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions DISABLE ROW LEVEL SECURITY;

-- Grant permissions to ensure anonymous users can insert
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON subscriptions TO anon;
GRANT USAGE ON SCHEMA public TO anon;

-- Test insert to verify it works
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
    'Test Form',
    'testdisabledrls@example.com',
    ARRAY['Sales'],
    'Testing without RLS',
    'Disabled RLS temporarily',
    'Get forms working',
    'test.com',
    'Developer',
    '123-456-7890',
    'Test Company'
);

-- Clean up test data
DELETE FROM contact_submissions WHERE work_email = 'testdisabledrls@example.com';

-- Show current RLS status (should be false)
SELECT
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables
WHERE tablename IN ('contact_submissions', 'subscriptions');

SELECT 'RLS disabled - forms should now work!' as status;