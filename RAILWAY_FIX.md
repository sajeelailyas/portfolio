# 🔧 Railway Deployment Fix Guide

## Common Issues & Solutions

### Issue 1: Wrong Root Directory ❌
**Problem**: Railway is trying to build from root folder instead of `backend` folder.

**Solution**: 
1. Go to Railway dashboard → Your project → Settings
2. Find "Root Directory" setting
3. Change to: `backend`
4. Save and redeploy

### Issue 2: Missing Environment Variables ❌
**Problem**: MongoDB connection string not set.

**Solution**:
1. Go to Railway → Your project → Variables tab
2. Add these environment variables:
   ```
   MONGODB_URI=mongodb+srv://sajeelailyas_db_user:n2ZdVFQ8ZhRgA3RV@portfolio.b9cmo2v.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```
3. Save and redeploy

### Issue 3: Build Command Issue ❌
**Problem**: Railway doesn't know how to start the app.

**Solution**: Railway should auto-detect `npm start` from `backend/package.json`. But if not:
1. Go to Settings → Deploy
2. Build Command: (leave empty or use `npm install`)
3. Start Command: `npm start`

---

## ✅ Correct Railway Setup:

1. **Root Directory**: `backend`
2. **Environment Variables**: Set all required variables
3. **Build Command**: (auto - just installs dependencies)
4. **Start Command**: `npm start` (auto-detected)

---

## 🚀 Step-by-Step Fix:

1. Open Railway dashboard
2. Click on your "portfolio" service
3. Go to **Settings** tab
4. Scroll to **Root Directory**
5. Set to: `backend`
6. Go to **Variables** tab
7. Add `MONGODB_URI` with your connection string
8. Click **Redeploy**

---

## 📋 Quick Checklist:

- [ ] Root Directory set to `backend`
- [ ] MONGODB_URI environment variable added
- [ ] PORT environment variable (optional - Railway auto-assigns)
- [ ] NODE_ENV=production set
- [ ] Service redeployed

After fixing, check the **Logs** tab to see if deployment succeeds!

