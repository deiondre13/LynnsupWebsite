# 🚀 Netlify Deployment Guide - Lynnsup Website

Complete guide for deploying the Lynnsup Next.js website to Netlify with serverless contact form functionality.

## 📋 Prerequisites

- Node.js 22.x or higher
- npm or yarn package manager
- Netlify account (free tier works)
- Resend account with API key

## 🔧 Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14.x (App Router)
- Resend for email functionality
- Netlify Functions support
- All required dependencies

### 2. Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update `.env.local` with your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Get your Resend API key:**
1. Sign up at https://resend.com
2. Navigate to API Keys section
3. Create a new API key
4. Copy and paste into `.env.local`

### 3. Test Locally

```bash
# Development server
npm run dev

# Test the contact form at http://localhost:3000/contact
```

**Note:** Netlify Functions won't work in local dev mode. To test functions locally, use Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

## 🌐 Netlify Deployment

### Option 1: Deploy via Netlify Dashboard (Recommended)

#### Step 1: Connect Repository

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select the `LynnsupWebsite` repository
5. Authorize Netlify to access your repository

#### Step 2: Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Functions directory:** `netlify/functions`

#### Step 3: Add Environment Variables

**CRITICAL:** Before deploying, add your Resend API key:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"** → **"Add a single variable"**
3. Add the following:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_8sEXHDro_PwUzFg5tTZDbehyKVKgasEbS` (or your API key)
   - **Scopes:** All scopes (Production, Deploy Previews, Branch deploys)
4. Click **"Create variable"**

#### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for build to complete (2-5 minutes)
3. Your site will be live at `https://random-name-12345.netlify.app`

#### Step 5: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `www.lynnsup.co.za`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

## 📧 Email Configuration

### Current Setup

The contact form sends **two emails** using Resend:

1. **To Lynnsup** (`lynnsupcompany@gmail.com`)
   - Subject: "New Website Enquiry – Lynnsup"
   - Contains: Client details, message, timestamp, ticket number

2. **To Client** (confirmation email)
   - Subject: "We've Received Your Enquiry – Lynnsup"
   - Contains: Confirmation, ticket number, next steps, company info

### Temporary Sender Address

Currently using: `onboarding@resend.dev`

**⚠️ IMPORTANT:** This is a temporary sender for testing. For production:

1. Verify your domain in Resend dashboard
2. Update sender in `netlify/functions/contact.ts`:

```typescript
// Change from:
from: 'Lynnsup Website <onboarding@resend.dev>'

// To:
from: 'Lynnsup <noreply@lynnsup.co.za>'
```

### Verify Domain in Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain: `lynnsup.co.za`
4. Add DNS records to your domain provider:
   - SPF record
   - DKIM records
   - DMARC record (optional)
5. Wait for verification (can take up to 48 hours)

## 🧪 Testing the Contact Form

### Test in Production

1. Visit your deployed site: `https://your-site.netlify.app/contact`
2. Fill out the contact form
3. Submit and verify:
   - ✅ Success message appears
   - ✅ Ticket number is displayed
   - ✅ Email received at `lynnsupcompany@gmail.com`
   - ✅ Confirmation email received at your test email

### Troubleshooting

**Form submission fails:**
- Check Netlify Functions logs: Site → Functions → contact
- Verify `RESEND_API_KEY` is set in environment variables
- Check Resend dashboard for API usage/errors

**Emails not received:**
- Check spam/junk folders
- Verify Resend API key is valid
- Check Resend dashboard logs
- Ensure sender domain is verified (for production)

**Build fails:**
- Check Node version: Must be 22.x or higher
- Verify all dependencies are installed
- Check build logs in Netlify dashboard

## 📁 Project Structure

```
LynnsupWebsite/
├── netlify/
│   └── functions/
│       └── contact.ts          # Serverless contact form handler
├── src/
│   ├── app/
│   │   └── contact/
│   │       └── page.tsx        # Contact form component
│   └── components/
├── netlify.toml                # Netlify configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies & Node version
├── .env.local                  # Local environment variables (gitignored)
└── .env.example                # Environment variables template
```

## 🔐 Security Best Practices

✅ **Implemented:**
- API keys stored in environment variables (never in code)
- `.env.local` is gitignored
- Input validation on both frontend and backend
- Email format validation
- CORS headers handled by Netlify
- Rate limiting via Netlify (automatic)

⚠️ **Additional Recommendations:**
- Enable Netlify Forms spam filtering
- Add reCAPTCHA for additional bot protection
- Monitor Resend usage to prevent abuse
- Set up email alerts for form submissions

## 🔄 Continuous Deployment

Once connected to Git, Netlify automatically:
- Deploys on every push to main branch
- Creates preview deployments for pull requests
- Runs build checks before deploying
- Rolls back on build failures

### Deploy Previews

Every pull request gets a unique preview URL:
- Test changes before merging
- Share with stakeholders
- Automatic cleanup after merge

## 📊 Monitoring

### Netlify Analytics
- Site → Analytics
- View traffic, performance, and form submissions

### Function Logs
- Site → Functions → contact
- View execution logs, errors, and performance

### Resend Dashboard
- Monitor email delivery
- Check bounce rates
- View API usage

## 🆘 Support

**Netlify Issues:**
- Documentation: https://docs.netlify.com
- Support: https://answers.netlify.com

**Resend Issues:**
- Documentation: https://resend.com/docs
- Support: support@resend.com

**Project Issues:**
- Contact: info@lynnsup.co.za
- Phone: +27 72 294 8797

## ✅ Deployment Checklist

Before going live:

- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Connect repository to Netlify
- [ ] Add `RESEND_API_KEY` environment variable
- [ ] Deploy site
- [ ] Test contact form in production
- [ ] Verify emails are received
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Verify domain in Resend
- [ ] Update sender email in contact function
- [ ] Test final production setup
- [ ] Monitor for 24 hours

---

**Last Updated:** February 2026  
**Node Version:** 22.x  
**Next.js Version:** 14.x  
**Deployment Platform:** Netlify
