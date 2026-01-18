# 🚀 Vercel Deployment Guide - Step by Step

## Quick Deploy to Vercel

### Method 1: Using Vercel Website (Easiest) ⭐

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign up/Login with GitHub

3. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Configure project:
     - **Framework Preset**: Vite
     - **Root Directory**: `frontend` (important!)
     - **Build Command**: `npm run build` (auto-detected)
     - **Output Directory**: `dist` (auto-detected)

4. **Environment Variables**
   - Add: `VITE_API_URL` = your backend URL (after backend is deployed)
   - For now, you can leave it empty and add later

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Your site will be live! 🎉

---

### Method 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from frontend folder**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow prompts:**
   - Link to existing project? → No
   - Project name? → portfolio (or your choice)
   - Directory? → ./
   - Override settings? → No

5. **Add Environment Variable (after backend deployed)**
   ```bash
   vercel env add VITE_API_URL
   # Enter your backend URL when prompted
   ```

---

## ⚠️ Important: Backend Deployment

Your portfolio needs a backend for:
- Projects API (`/api/projects`)
- Contact form (`/api/contact`)

### Backend Options:

#### Option A: Railway (Recommended - Free)
1. Go to https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub repo
4. Select your repo
5. Set Root Directory: `backend`
6. Add Environment Variables:
   ```
   MONGODB_URI=mongodb+srv://sajeelailyas_db_user:n2ZdVFQ8ZhRgA3RV@portfolio.b9cmo2v.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=5000
   FRONTEND_URL=https://your-vercel-app.vercel.app
   NODE_ENV=production
   ```
7. Copy the Railway URL (e.g., `https://your-app.railway.app`)
8. Add to Vercel: `VITE_API_URL=https://your-app.railway.app`

#### Option B: Render
- Similar process to Railway
- Visit: https://render.com

---

## ✅ Post-Deployment Checklist

1. ✅ Frontend deployed on Vercel
2. ✅ Backend deployed on Railway/Render
3. ✅ Environment variables set in both:
   - Vercel: `VITE_API_URL` = backend URL
   - Backend: `FRONTEND_URL` = Vercel URL
4. ✅ MongoDB Atlas network access updated (allow all IPs or specific)
5. ✅ Test all features:
   - Projects loading from API
   - Contact form working
   - All links working

---

## 🔗 Your URLs After Deployment

- **Frontend**: `https://your-portfolio.vercel.app`
- **Backend**: `https://your-backend.railway.app` (or render.app)

---

## 🆘 Troubleshooting

- **API not working**: Check `VITE_API_URL` is set correctly
- **CORS errors**: Update backend `FRONTEND_URL` environment variable
- **Build fails**: Check Node.js version (should be 16+)

