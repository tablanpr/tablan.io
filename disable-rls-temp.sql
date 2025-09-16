-- TEMPORARY: Disable RLS to get forms working immediately
-- Run this if you need forms working right away while we debug RLS

-- Disable RLS temporarily
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions DISABLE ROW LEVEL SECURITY;

-- This will allow all inserts to work
-- WARNING: This removes security restrictions temporarily
-- Use only for testing, then re-enable with proper policies

-- To re-enable later:
-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;