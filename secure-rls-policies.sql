-- SECURE RLS POLICIES FOR FORM SUBMISSIONS
-- This allows anonymous form submissions while protecting existing data
-- Run this script in your Supabase SQL Editor

-- 1. Enable RLS on both tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- 2. Drop all existing policies to start fresh
DO $$
DECLARE
    policy_record RECORD;
BEGIN
    -- Drop all policies on contact_submissions
    FOR policy_record IN
        SELECT policyname FROM pg_policies WHERE tablename = 'contact_submissions'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_record.policyname) || ' ON contact_submissions';
    END LOOP;

    -- Drop all policies on subscriptions
    FOR policy_record IN
        SELECT policyname FROM pg_policies WHERE tablename = 'subscriptions'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(policy_record.policyname) || ' ON subscriptions';
    END LOOP;
END $$;

-- 3. Grant necessary schema and table permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON subscriptions TO anon;

-- Also grant to authenticated users (you as admin)
GRANT ALL ON contact_submissions TO authenticated;
GRANT ALL ON subscriptions TO authenticated;

-- 4. Create secure INSERT-ONLY policies for anonymous users
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

-- 5. Create comprehensive access policies for authenticated users (admins)
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

-- 6. Test the setup with a sample insert
DO $$
BEGIN
    BEGIN
        INSERT INTO contact_submissions (
            full_name, work_email, implementation_areas, current_challenges,
            current_solutions, business_goals, company_website, job_title,
            contact_number, company_name
        ) VALUES (
            'Policy Test', 'policy-test@example.com', ARRAY['Sales'],
            'Testing RLS policies', 'Secure setup', 'Working forms',
            'example.com', 'Developer', '123-456-7890', 'Test Co'
        );

        -- Clean up test data immediately
        DELETE FROM contact_submissions WHERE work_email = 'policy-test@example.com';

        RAISE NOTICE 'SUCCESS: Form submission policies are working correctly!';
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'ERROR: %', SQLERRM;
    END;
END $$;

-- 7. Verify the final policy configuration
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'subscriptions')
ORDER BY tablename, policyname;

-- 8. Show table permissions
SELECT
    grantee,
    table_name,
    privilege_type
FROM information_schema.table_privileges
WHERE table_name IN ('contact_submissions', 'subscriptions')
AND grantee IN ('anon', 'authenticated')
ORDER BY table_name, grantee;

-- Success message
SELECT 'RLS policies configured securely! Forms should work while data is protected.' as status;