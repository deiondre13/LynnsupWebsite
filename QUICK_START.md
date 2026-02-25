# ⚡ Quick Start - Deploy to Netlify in 5 Minutes

## 🎯 What You Get

✅ **Fully functional contact form** with dual email notifications  
✅ **Serverless backend** using Netlify Functions  
✅ **Professional email templates** with company branding  
✅ **Automatic ticket number generation**  
✅ **Production-ready security** (no exposed API keys)

---

## 🚀 Deploy Now (5 Steps)

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Push to Git (if not already)

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### 3️⃣ Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your Git repository
4. Netlify auto-detects settings ✅
5. Click **"Deploy site"**

### 4️⃣ Add Environment Variable

**CRITICAL - Do this before testing:**

1. In Netlify Dashboard → **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Set:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_8sEXHDro_PwUzFg5tTZDbehyKVKgasEbS`
4. Click **"Save"**
5. **Trigger redeploy:** Deploys → Click ⋯ → **"Redeploy"**

### 5️⃣ Test Contact Form

1. Visit: `https://your-site.netlify.app/contact`
2. Fill out and submit the form
3. Check:
   - ✅ Success message appears
   - ✅ Email arrives at `lynnsupcompany@gmail.com`
   - ✅ Confirmation email sent to your test address

---

## 📧 Email Flow

**When a user submits the contact form:**

```
User fills form → Netlify Function triggered → Resend API called
                                                      ↓
                                    ┌─────────────────┴─────────────────┐
                                    ↓                                   ↓
                    Email to Lynnsup                    Email to Client
              (lynnsupcompany@gmail.com)              (confirmation)
                    
                Contains:                              Contains:
                • Client name                          • Personalized greeting
                • Email & phone                        • Ticket number
                • Message                              • 24-48hr response time
                • Timestamp                            • Company info
                • Ticket number                        • Contact details
```

---

## 🔧 Local Development

```bash
# Run development server
npm run dev

# Visit http://localhost:3000/contact
```

**Note:** Netlify Functions don't work in `npm run dev`. To test functions locally:

```bash
npm install -g netlify-cli
netlify dev
```

---

## 📝 What Was Configured

### Files Updated/Created:

- ✅ `netlify.toml` - Netlify build configuration
- ✅ `netlify/functions/contact.ts` - Serverless contact handler
- ✅ `src/app/contact/page.tsx` - Contact form (already configured)
- ✅ `package.json` - Node 22.x engine requirement
- ✅ `next.config.js` - Removed static export for serverless
- ✅ `.env.local` - Updated with new Resend API key
- ✅ `.env.example` - Template for environment variables

### Key Features:

**Contact Function (`netlify/functions/contact.ts`):**
- ✅ TypeScript with full type safety
- ✅ Input validation (name, email, message)
- ✅ Email format validation
- ✅ Dual email sending (to Lynnsup + client)
- ✅ Professional HTML email templates
- ✅ Ticket number generation (`LYN-YYYYMMDD-XXXXXXXX`)
- ✅ Error handling with proper status codes
- ✅ Secure API key usage from environment

**Contact Form (`src/app/contact/page.tsx`):**
- ✅ React state management
- ✅ Fetch API for form submission
- ✅ Loading states with disabled button
- ✅ Success message (green styled)
- ✅ Error message (red styled)
- ✅ Form reset after success
- ✅ Client-side validation
- ✅ Accessible labels and ARIA attributes
- ✅ Gold gradient button with hover effects

---

## 🔐 Security Checklist

- ✅ API key stored in environment variables (not in code)
- ✅ `.env.local` is gitignored
- ✅ Input validation on frontend and backend
- ✅ Email format validation
- ✅ Required field validation
- ✅ Proper error handling
- ✅ No secrets exposed to client

---

## 🎨 Email Templates

### Email 1: To Lynnsup
- **Subject:** "New Website Enquiry – Lynnsup"
- **Recipient:** lynnsupcompany@gmail.com
- **Includes:** Client details, message, timestamp, ticket number
- **Style:** Corporate blue/gold theme

### Email 2: To Client (Confirmation)
- **Subject:** "We've Received Your Enquiry – Lynnsup"
- **Recipient:** Client's email address
- **Includes:** Personalized greeting, ticket number, response timeline
- **Footer:** Company registration (2019/463569/07), contact info
- **Style:** Professional with company branding

---

## ⚠️ Important Notes

### Temporary Sender Email
Currently using: `onboarding@resend.dev`

**For production, you should:**
1. Verify your domain in Resend: `lynnsup.co.za`
2. Update sender in `netlify/functions/contact.ts`:
   ```typescript
   from: 'Lynnsup <noreply@lynnsup.co.za>'
   ```

### Node Version
Project requires **Node.js 22.x or higher**. Netlify will automatically use this version based on `package.json` engines field.

---

## 🆘 Troubleshooting

**Build fails on Netlify:**
- Check build logs in Netlify dashboard
- Ensure Node 22.x is being used
- Verify all dependencies installed

**Contact form doesn't work:**
- Check you added `RESEND_API_KEY` environment variable
- Redeploy after adding environment variable
- Check Netlify Functions logs

**Emails not received:**
- Check spam/junk folder
- Verify Resend API key is valid
- Check Resend dashboard for errors
- Ensure you're using correct recipient email

**Form shows error message:**
- Open browser console for details
- Check Netlify Functions logs
- Verify all required fields are filled

---

## 📚 Full Documentation

For detailed information, see:
- **`NETLIFY_DEPLOYMENT.md`** - Complete deployment guide
- **`.env.example`** - Environment variable template

---

## ✅ Pre-Deployment Checklist

- [x] Dependencies installed
- [x] Resend API key configured locally
- [x] Next.js config updated for Netlify
- [x] Netlify.toml configured
- [x] Contact function implemented
- [x] Contact form updated
- [x] Environment variables documented
- [ ] Repository pushed to Git
- [ ] Site deployed to Netlify
- [ ] Environment variable added in Netlify
- [ ] Contact form tested in production
- [ ] Emails verified

---

**Ready to deploy!** 🎉

Visit [netlify.com](https://netlify.com) to get started.
