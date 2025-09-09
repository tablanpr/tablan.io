# Tablan - Industrial AI Automation Landing Page

A modern React/Next.js website for industrial AI automation services, featuring a multi-step contact form, FAQ accordion, and Supabase integration.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **CSS Modules** for component-scoped styling
- **Supabase** integration for form submissions
- **Multi-step contact form** with validation
- **FAQ accordion** with smooth animations
- **Responsive design** for all devices
- **SEO optimized** with proper meta tags

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: CSS Modules, CSS3 animations
- **Backend**: Next.js API Routes
- **Database**: Supabase
- **Animations**: Framer Motion
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file (already created) with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set up Supabase database**:
   Run this SQL in your Supabase dashboard:
   ```sql
   CREATE TABLE contact_submissions (
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

   -- Enable Row Level Security
   ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

   -- Create a policy that allows inserting new records
   CREATE POLICY "Allow public inserts" ON contact_submissions
     FOR INSERT WITH CHECK (true);
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 📁 Project Structure

```
tablanio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ContactModal.tsx   # Multi-step form modal
│   ├── FAQ.tsx           # FAQ accordion
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation
│   └── *.module.css      # Component styles
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎯 Key Components

### ContactModal
- Multi-step form with validation
- Progress indicator
- Supabase integration
- Responsive design

### FAQ Component
- Accordion functionality
- Smooth animations
- React state management

### Navbar
- Smooth scrolling navigation
- Mobile responsive menu
- Scroll-based styling

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Add environment variables in Netlify dashboard

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js
- **Code splitting** automatic
- **SEO friendly** with proper meta tags

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary.