# Quick Setup Guide

## Step 1: Install Dependencies

Run this command from the root directory to install all dependencies:

```bash
npm run install-all
```

Or install manually:
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

## Step 2: Setup MongoDB

### Option A: Local MongoDB
1. Install MongoDB on your system
2. Start MongoDB service
3. MongoDB will run on `mongodb://localhost:27017`

### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update `MONGODB_URI` in `backend/.env`

## Step 3: Configure Environment Variables

✅ **Already Configured!** The `.env` file has been created with:
- MongoDB Atlas connection string
- Email: sajeelailyas@gmail.com
- Port: 5000

**Note:** To enable email notifications, add your Gmail App Password to `EMAIL_PASS` in `backend/.env`

**Note:** For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an "App Password" from your Google Account settings
3. Use that app password in `EMAIL_PASS`

## Step 4: Seed Database

✅ **Already Seeded!** The database has been populated with 5 projects including GitHub links.

To re-seed the database:
```bash
npm run seed
```

## Step 5: Run the Application

### Option A: Run Both Servers Together
```bash
npm run dev
```

### Option B: Run Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your `MONGODB_URI` in `.env`
- For Atlas, ensure your IP is whitelisted

### Port Already in Use
- Change `PORT` in `backend/.env`
- Update proxy in `frontend/vite.config.js`

### Module Not Found
- Delete `node_modules` and reinstall
- Make sure you're using Node.js v16 or higher

## Next Steps

1. ✅ **Setup Complete!** All dependencies installed and database seeded
2. **Optional:** Add Gmail App Password to `EMAIL_PASS` in `backend/.env` for email notifications
3. Customize the theme colors in `frontend/src/index.css` if desired
4. Deploy to production when ready!

## 🚀 Quick Start

Just run:
```bash
npm run dev
```

Then visit http://localhost:3000 to see your portfolio!

