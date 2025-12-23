/*
  # Create contact inquiries table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person making the inquiry
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number for contact
      - `company` (text, optional) - Company name if applicable
      - `service_type` (text) - Type of service interested in (pool, hotel, construction)
      - `message` (text) - Additional message or details
      - `created_at` (timestamp) - When the inquiry was submitted

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for inserting inquiries (anyone can submit)
    - Add policy for reading inquiries (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text DEFAULT '',
  service_type text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);