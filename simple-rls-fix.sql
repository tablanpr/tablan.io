ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "anon_insert_subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "authenticated_full_access_contact_submissions" ON contact_submissions;
DROP POLICY IF EXISTS "authenticated_full_access_subscriptions" ON subscriptions;

GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON subscriptions TO anon;
GRANT ALL ON contact_submissions TO authenticated;
GRANT ALL ON subscriptions TO authenticated;

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