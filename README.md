# Africentric Professional Services - Corporate Platform

A high-performance, institutional-grade corporate website for **Africentric Professional Services**. Built with Next.js 16, TypeScript, and Framer Motion, this platform is designed for high-end lead generation and professional brand positioning.

## 🚀 Key Features

### 1. Interactive Lead Generation
- **Google Sheets Integration**: All form submissions (Contact, Lead Magnet, Newsletter) are automatically forwarded to a Google Sheets CRM via a custom Google Apps Script webhook.
- **Smart Lead Magnet**: A "Tax Compliance Checklist" download flow with animated progress bars and automatic data capture.
- **Newsletter Subscription**: Real-time email capture integrated into the Google Sheets backend.

### 2. Premium User Experience
- **Calendly Modal Integration**: High-conversion "Schedule a Briefing" buttons that open a sleek, centered booking modal without leaving the site.
- **Tactile UI Feedback**: Global button interaction system with scaling effects on click and subtle corporate gold glows on hover.
- **Animated Stats Counters**: Dynamic counting animations on the About page to showcase firm experience and scale.
- **Predictive Search**: Real-time filtering of Insights and thought leadership articles.

### 3. Visual & Technical Excellence
- **Corporate Branding**: Fully implemented Navy (`#000d22`) and Gold (`#775a19`) corporate palette.
- **Advanced Animations**: Staggered scroll reveals and smooth page transitions using Framer Motion.
- **Responsive Architecture**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **SEO Optimized**: Includes JSON-LD structured data, meta tags, and semantic HTML5 structure.

### 4. Practical Utilities
- **Interactive Google Map**: Stylized grayscale map of the Abuja headquarters that reveals color on hover.
- **WhatsApp Integration**: Floating contact button for immediate mobile engagement.
- **Global Deployment**: Configured for seamless deployment on Vercel.

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes + Google Apps Script

## ⚙️ Environment Configuration

To enable the Google Sheets integration, you must provide the following environment variable in your `.env.local` or Vercel dashboard:

```env
GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_url_here
```

### Deployment Note
> [!WARNING]
> Pushing `.env.local` to a public GitHub repository is generally discouraged as it exposes your private keys. For production, it is recommended to set these variables in the **Vercel Project Settings > Environment Variables** dashboard.

## 📁 Project Structure
- `/src/app`: Page routes and API handlers.
- `/src/components`: Reusable UI components and sections.
- `/data`: Local JSON backups of leads and contacts.
- `/public`: Static assets and branding.

---

© 2024 Africentric Professional Services. All rights reserved.
