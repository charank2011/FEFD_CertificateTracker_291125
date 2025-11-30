# 🚀 Deployment Guide - Professional Certification Tracker

This guide will help you deploy the Professional Certification Tracker on **Netlify** or **Vercel**.

---

## 📋 Prerequisites

1. **Git Repository** - Push your code to GitHub
2. **Node.js** - Installed on your machine (v18 or higher)
3. **npm** - Package manager installed
4. **GitHub Account** - For connecting to Netlify/Vercel
5. **Netlify or Vercel Account** - Create free accounts at:
   - Netlify: https://netlify.com
   - Vercel: https://vercel.com

---

## 🌐 Option 1: Deploy on Netlify (Recommended)

### Step 1: Push Code to GitHub

```powershell
cd c:\Users\srima\OneDrive\Desktop\sdp_proj

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional Certification Tracker"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/certification-tracker.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com
2. Click **"New site from Git"** or **"Add new site"**
3. Choose **GitHub** as the provider
4. Authorize Netlify to access your GitHub account
5. Select the **certification-tracker** repository
6. **Build settings** should auto-detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

### Step 3: Configure Environment (if needed)

In Netlify Dashboard:
1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add environment variables if needed (currently not required)
3. Deploy status will show as "Live"

### Step 4: Monitor Deployment

- Netlify will automatically build and deploy on every push to main
- View deployment logs in **Deploys** tab
- Live URL: `https://your-site-name.netlify.app`

---

## 🚀 Option 2: Deploy on Vercel

### Step 1: Push Code to GitHub

Same as Netlify (see above)

### Step 2: Connect to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Choose **GitHub** as the source
4. Select your **certification-tracker** repository
5. **Project settings** should auto-detect:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**

### Step 3: Configure Environment

1. Go to **Settings** → **Environment Variables**
2. Add any required variables (currently not needed)
3. Vercel will automatically redeploy

### Step 4: Monitor Deployment

- Deployments tab shows all builds
- Live URL: `https://your-project.vercel.app`

---

## 📝 Build Configuration Files

The following files have been created for deployment:

### `netlify.toml`
- Specifies build command: `npm run build`
- Sets publish directory: `dist`
- Configures redirects for SPA routing
- Sets environment variables

### `vercel.json`
- Specifies build and output directories
- Configures rewrites for client-side routing
- Sets Node.js version: 18.x

---

## ✅ Pre-Deployment Checklist

- [x] Project builds successfully: `npm run build`
- [x] No console errors in dev mode: `npm run dev`
- [x] `dist/` folder is generated (ignored in `.gitignore`)
- [x] All components are properly exported
- [x] Redux store is correctly configured
- [x] No hardcoded localhost URLs
- [x] `netlify.toml` created
- [x] `vercel.json` created

---

## 🔍 Troubleshooting

### Build Fails on Netlify/Vercel

**Issue**: "Build failed" error
**Solution**:
1. Check logs in deployment dashboard
2. Ensure `package.json` has all dependencies
3. Run `npm install && npm run build` locally
4. Push changes and retry

### Site Shows Blank Page

**Issue**: Application loads but shows nothing
**Solution**:
1. Check browser console for errors (F12)
2. Verify Redux store is initialized
3. Ensure `public/` folder is correctly served
4. Clear browser cache and reload

### Routing Issues (404 on page refresh)

**Issue**: Refreshing page shows 404 error
**Solution**:
- Netlify: Redirect rules in `netlify.toml` should handle this (already configured)
- Vercel: Rewrites in `vercel.json` should handle this (already configured)

### Environment Variables Not Working

**Issue**: App behavior is incorrect
**Solution**:
1. Check Netlify/Vercel dashboard for environment variables
2. Redeploy after adding variables
3. Use `import.meta.env` for Vite environment variables

---

## 📊 Deployment Comparison

| Feature | Netlify | Vercel |
|---------|---------|--------|
| **Free Tier** | ✅ Yes | ✅ Yes |
| **Build Time** | ~1-2 min | ~1-2 min |
| **Bandwidth** | 100 GB/month | 100 GB/month |
| **Custom Domain** | ✅ Yes | ✅ Yes |
| **SSL Certificate** | ✅ Free | ✅ Free |
| **Environment Variables** | ✅ Yes | ✅ Yes |
| **Preview Deploys** | ✅ Yes | ✅ Yes |
| **Analytics** | ✅ Free | ✅ Paid |

---

## 🎯 Post-Deployment

### Verify Deployment

1. Open your live URL in browser
2. Test all features:
   - Authentication (Login/Signup)
   - User Dashboard
   - Certification cards
   - ATS Calculator
   - Admin Dashboard
3. Check console for errors (F12)

### Set Up Custom Domain (Optional)

**Netlify**:
1. Domain settings → Custom domain
2. Add your domain
3. Follow DNS configuration

**Vercel**:
1. Settings → Domains
2. Add your domain
3. Follow DNS configuration

### Enable Analytics (Optional)

**Netlify**: Built-in analytics available
**Vercel**: Analytics available in Pro plan

---

## 📞 Support

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/static-deploy.html

---

## 🎉 Your App is Live!

Once deployed, you'll have:
- ✅ Professional Certification Tracker running in the cloud
- ✅ Automatic deployments on every GitHub push
- ✅ Free SSL certificates
- ✅ Global CDN distribution
- ✅ Preview URLs for pull requests

**Share your live URL with others to showcase your project!**

---

**Built with React, Redux, and Vite** 🚀
