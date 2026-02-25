# Netlify Deployment Guide - Lynnsup Website

Complete guide for deploying your Next.js website to Netlify with Resend email integration.

---

## 📋 Prerequisites

Before deploying, ensure you have:

1. ✅ A [Netlify account](https://app.netlify.com/signup) (free tier works)
2. ✅ A [Resend account](https://resend.com/signup) (free tier: 100 emails/day)
3. ✅ Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
4. ✅ Resend API key ready

---

## 🔑 Step 1: Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign in
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Give it a name (e.g., "Lynnsup Production")
5. Select **Full Access** or **Sending Access**
6. Copy the API key (starts with `re_`) - **you won't see it again!**

### Optional: Add Your Domain (Recommended for Production)

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain: `lynnsup.co.za`
4. Follow the DNS verification steps
5. Once verified, update the `from` field in `/netlify/functions/contact.ts`:
   ```typescript
   from: 'Lynnsup <noreply@lynnsup.co.za>'
   ```

---

## 🚀 Step 2: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify Dashboard**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click **Add new site** → **Import an existing project**

2. **Connect Your Git Repository**
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Netlify to access your repositories
   - Select the `LynnsupWebsite` repository

3. **Configure Build Settings**
   - **Base directory:** Leave empty (or set to root)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Functions directory:** `netlify/functions` (should auto-detect)

4. **Click "Deploy site"**
   - Netlify will assign a random subdomain (e.g., `random-name-123.netlify.app`)
   - Wait for the build to complete (2-5 minutes)

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Build command: npm run build
# - Publish directory: .next
# - Functions directory: netlify/functions

# Deploy
netlify deploy --prod
```

---

## ⚙️ Step 3: Configure Environment Variables

**CRITICAL:** The contact form won't work without this step!

1. **In Netlify Dashboard:**
   - Go to your site
   - Click **Site settings** → **Environment variables**
   - Click **Add a variable**

2. **Add Resend API Key:**
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (e.g., `re_123abc...`)
   - **Scopes:** Select all (Production, Deploy Previews, Branch deploys)
   - Click **Create variable**

3. **Trigger Redeploy:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**
   - Wait for the new deployment to finish

---

## 🌐 Step 4: Configure Custom Domain (Optional)

### Add Your Domain

1. **In Netlify Dashboard:**
   - Go to **Domain settings**
   - Click **Add custom domain**
   - Enter: `www.lynnsup.co.za` or `lynnsup.co.za`

2. **Update DNS Records:**
   - Go to your domain registrar (where you bought the domain)
   - Add these DNS records:

   **For apex domain (lynnsup.co.za):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

3. **Enable HTTPS:**
   - Netlify will automatically provision an SSL certificate
   - This takes 1-24 hours
   - Your site will be accessible via `https://`

---

## ✅ Step 5: Test Your Contact Form

1. **Visit Your Deployed Site:**
   - Go to `https://your-site-name.netlify.app/contact`
   - Or your custom domain if configured

2. **Submit a Test Message:**
   - Fill out the contact form
   - Click "Send Message"
   - You should see a success message with a ticket number

3. **Check Your Emails:**
   - **Lynnsup inbox** (`lynnsupcompany@gmail.com`) should receive the enquiry
   - **Test user's inbox** should receive a confirmation email

4. **If It Doesn't Work:**
   - Check Netlify Functions logs: **Functions** tab → Click on `contact` function
   - Verify environment variable is set correctly
   - Check Resend dashboard for email logs
   - Ensure API key has sending permissions

---

## 🔍 Monitoring & Logs

### View Function Logs

1. Go to **Functions** tab in Netlify
2. Click on the `contact` function
3. View real-time logs and errors

### View Email Logs

1. Go to [Resend Dashboard](https://resend.com/emails)
2. See all sent emails, delivery status, and errors

---

## 🛠️ Troubleshooting

### Contact Form Returns 500 Error

**Possible causes:**
- ❌ `RESEND_API_KEY` not set in Netlify environment variables
- ❌ API key is invalid or expired
- ❌ Resend account suspended or over quota

**Solution:**
1. Check environment variables in Netlify
2. Verify API key in Resend dashboard
3. Check Resend account status and quota

### Emails Not Being Received

**Possible causes:**
- ❌ Emails going to spam folder
- ❌ Email address typo in function code
- ❌ Resend domain not verified (if using custom domain)

**Solution:**
1. Check spam/junk folders
2. Verify email addresses in `/netlify/functions/contact.ts`
3. Use `onboarding@resend.dev` for testing (no verification needed)
4. Add Resend to email whitelist

### Build Fails on Netlify

**Possible causes:**
- ❌ Missing dependencies
- ❌ Build command incorrect
- ❌ Node version mismatch

**Solution:**
1. Check build logs in Netlify
2. Ensure `package.json` has all dependencies
3. Add `.nvmrc` file with Node version:
   ```
   18.17.0
   ```

---

## 📝 Important Files

| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify configuration |
| `netlify/functions/contact.ts` | Serverless function for contact form |
| `src/app/contact/page.tsx` | Contact page with form |
| `.env.local` | Local environment variables (not deployed) |

---

## 🔒 Security Best Practices

✅ **DO:**
- Store API keys in Netlify environment variables
- Use environment-specific keys (dev/prod)
- Validate all form inputs
- Rate limit form submissions (Netlify has built-in protection)
- Use HTTPS (automatic with Netlify)

❌ **DON'T:**
- Commit API keys to Git
- Expose API keys in frontend code
- Skip email validation
- Allow unlimited form submissions

---

## 📊 Free Tier Limits

### Netlify Free Tier
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ HTTPS included
- ✅ 125k serverless function requests/month

### Resend Free Tier
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ 1 custom domain
- ✅ Email logs for 30 days

---

## 🎉 You're Done!

Your Lynnsup website is now live with a fully functional contact form!

**Next Steps:**
1. Test the contact form thoroughly
2. Set up Google Analytics (optional)
3. Configure custom domain
4. Verify Resend domain for production emails
5. Monitor email delivery and function logs

**Need Help?**
- [Netlify Documentation](https://docs.netlify.com)
- [Resend Documentation](https://resend.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 📞 Support Contacts

**Netlify Support:** support@netlify.com  
**Resend Support:** support@resend.com  
**Next.js Community:** [GitHub Discussions](https://github.com/vercel/next.js/discussions)
