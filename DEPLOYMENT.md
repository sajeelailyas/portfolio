# 🚀 Deployment Guide - Portfolio Website

## Deployment Overview

Your portfolio has:
- **Frontend**: React/Vite app
- **Backend**: Node.js/Express API
- **Database**: MongoDB Atlas (already cloud-based)

## 🎯 Recommended Deployment Platforms

### Option 1: **Vercel** (Recommended - Easiest)
- **Frontend**: Vercel (free, automatic deployments)
- **Backend**: Vercel Serverless Functions or Railway

### Option 2: **Netlify + Railway**
- **Frontend**: Netlify (free)
- **Backend**: Railway (free tier available)

### Option 3: **Render**
- **Frontend**: Render Static Site
- **Backend**: Render Web Service

---

## 📋 Pre-Deployment Checklist

### ✅ 1. MongoDB Atlas
- ✅ Already configured
- Make sure your MongoDB Atlas allows connections from anywhere (0.0.0.0/0) or add deployment server IPs

### ✅ 2. Backend Environment Variables
Set these in your hosting platform:
```
MONGODB_URI=mongodb+srv://sajeelailyas_db_user:n2ZdVFQ8ZhRgA3RV@portfolio.b9cmo2v.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000 (or let platform assign)
EMAIL_USER=sajeelailyas@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
NODE_ENV=production
```

### ✅ 3. Frontend API Configuration
Update frontend to use production backend URL (we'll do this)

---

## 🚀 Deployment Steps

### **Method 1: Deploy to Vercel (Easiest)**

#### Frontend on Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Go to frontend folder: `cd frontend`
3. Build: `npm run build`
4. Deploy: `vercel`
5. Set environment variable `VITE_API_URL` = your backend URL

#### Backend on Railway/Render:
1. Push code to GitHub
2. Connect repository on Railway or Render
3. Set environment variables
4. Deploy

### **Method 2: Deploy to Netlify + Railway**

#### Frontend on Netlify:
1. Build command: `cd frontend && npm run build`
2. Publish directory: `frontend/dist`
3. Environment variables: `VITE_API_URL` = backend URL

#### Backend on Railway:
1. Connect GitHub repo
2. Root directory: `backend`
3. Start command: `npm start`
4. Set environment variables

---

## 🔧 Required Changes Before Deployment

### 1. Update Frontend API Base URL
We need to create an environment variable for API URL.

### 2. Update CORS in Backend
Allow your frontend domain in CORS.

---

## 📝 Post-Deployment

1. Update MongoDB Atlas network access to allow your backend server IP
2. Test all features:
   - Projects loading from backend
   - Contact form submission
   - GitHub links working

---

## 🆘 Troubleshooting

- **CORS errors**: Update backend CORS to allow frontend domain
- **API not working**: Check environment variables are set correctly
- **MongoDB connection**: Verify MongoDB Atlas IP whitelist includes deployment server

