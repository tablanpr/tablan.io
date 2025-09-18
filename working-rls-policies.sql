-- WORKING RLS POLICIES FOR FORM SUBMISSIONS
-- Copy and paste this entire script into Supabase SQL Editor

-- Enable RLS on both tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "anon_insert_subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "authenticated_full_access_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "authenticated_full_access_subscriptions" ON subscriptions;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON subscriptions TO anon;
GRANT ALL ON contact_submissions TO authenticated;
GRANT ALL ON subscriptions TO authenticated;

-- Create INSERT-ONLY policies for anonymous users
CREATE POLICY "anon_insert_contact_submissions"
    ON contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "anon_insert_subscriptions"
    ON subscriptions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create full access policies for authenticated users
CREATE POLICY "authenticated_full_access_contact_submissions"
    ON contact_submissions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "authenticated_full_access_subscriptions"
    ON subscriptions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Test with a simple insert
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
    'Testing policies',
    'SQL script',
    'Working forms',
    'example.com',
    'Developer',
    '123-456-7890',
    'Test Company'
);

-- Clean up test data
DELETE FROM contact_submissions WHERE work_email = 'test@example.com';

-- Show success message
SELECT 'RLS policies configured successfully! Forms should work securely.' as result;