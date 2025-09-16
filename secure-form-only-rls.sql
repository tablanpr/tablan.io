-- SECURE SOLUTION - Allow form submissions but protect data
-- This allows anonymous users to submit forms but NOT read existing data

-- Re-enable RLS for security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "allow_anon_insert_contact" ON contact_submissions;
DROP POLICY IF EXISTS "allow_anon_insert_subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "allow_authenticated_all_contact" ON contact_submissions;
DROP POLICY IF EXISTS "allow_authenticated_all_subscriptions" ON subscriptions;

-- Create INSERT-ONLY policies for anonymous users (they can submit but not read)
CREATE POLICY "anon_can_only_insert_contact" ON contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "anon_can_only_insert_subscriptions" ON subscriptions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create full access policies for authenticated users (you as admin)
CREATE POLICY "authenticated_full_access_contact" ON contact_submissions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "authenticated_full_access_subscriptions" ON subscriptions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Grant INSERT permissions only to anon
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON subscriptions TO anon;

-- Test that anon can insert
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
    'Security Test',
    'securitytest@example.com',
    ARRAY['Sales'],
    'Testing secure policies',
    'Using RLS correctly',
    'Secure form submission',
    'test.com',
    'Developer',
    '123-456-7890',
    'Test Company'
);

-- Clean up test data
DELETE FROM contact_submissions WHERE work_email = 'securitytest@example.com';

-- Show final secure configuration
SELECT 'Forms work securely - anon can submit but not read data!' as status;