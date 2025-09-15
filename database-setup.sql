-- Database setup script for Tablanio project
-- Run this in your Supabase SQL Editor

-- Table for contact form submissions (popup form)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  implementation_areas TEXT[],
  current_challenges TEXT,
  current_solutions TEXT,
  business_goals TEXT,
  company_website TEXT,
  full_name TEXT,
  job_title TEXT,
  work_email TEXT,
  contact_number TEXT,
  company_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Table for subscription form submissions
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  is_active BOOLEAN DEFAULT TRUE
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (insert only)
CREATE POLICY "Allow public contact form submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public subscriptions" ON subscriptions
  FOR INSERT WITH CHECK (true);

-- Optional: Create policies for admin access (if you need to view submissions)
-- You would need to set up authentication for these
-- CREATE POLICY "Allow admin to view contact submissions" ON contact_submissions
--   FOR SELECT USING (auth.role() = 'authenticated');

-- CREATE POLICY "Allow admin to view subscriptions" ON subscriptions
--   FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email
  ON contact_submissions(work_email);

CREATE INDEX IF NOT EXISTS idx_subscriptions_created_at
  ON subscriptions(subscribed_at DESC);

CREATE INDEX IF NOT EXISTS idx_subscriptions_email
  ON subscriptions(email);

-- Add unique constraint to prevent duplicate subscriptions
ALTER TABLE subscriptions
ADD CONSTRAINT unique_email_subscription
UNIQUE (email);

-- Comments for documentation
COMMENT ON TABLE contact_submissions IS 'Stores submissions from the multi-step contact form popup';
COMMENT ON TABLE subscriptions IS 'Stores email subscriptions from various sources';

COMMENT ON COLUMN contact_submissions.implementation_areas IS 'Array of selected implementation areas (Sales, Marketing, Operations, Custom)';
COMMENT ON COLUMN subscriptions.source IS 'Source of subscription (website, popup, footer, etc.)';