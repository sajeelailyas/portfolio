# 🔧 Railway Root Directory Fix

## Problem
Railway is looking for start command in root directory, but backend is in `backend/` folder.

## Solution: Set Root Directory

### Step 1: Go to Railway Settings
1. Open Railway dashboard
2. Click on your "portfolio" service
3. Go to **Settings** tab

### Step 2: Set Root Directory
1. Scroll down to find **"Root Directory"** field
2. Change from: `./` (or blank)
3. Change to: `backend`
4. Click **Save**

### Step 3: Redeploy
1. After saving, Railway will automatically redeploy
2. Or click **Redeploy** button manually

---

## Alternative: If Root Directory option not visible

Add this to root `package.json`:
```json
"scripts": {
  "start": "cd backend && npm start"
}
```

But **Root Directory** method is better!

