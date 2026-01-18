# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- 🎨 Modern, beautiful UI with dark/light theme toggle
- 📱 Fully responsive design
- 🚀 Fast and optimized with React and Vite
- 💾 MongoDB database for projects and contact form submissions
- 🔗 GitHub links for all projects
- 📧 Contact form with email notifications
- ✨ Smooth animations with Framer Motion

## Tech Stack

### Frontend
- React 18
- Vite
- Framer Motion (animations)
- React Icons
- Axios (API calls)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer (email notifications)

## Project Structure

```
Portfolio/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   ├── assets/
│   │   └── documents/
│   └── package.json
├── backend/           # Express backend API
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   └── server.js
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

5. **Copy Assets**
   
   Copy the `assets` and `documents` folders to `frontend/public/`:
   ```bash
   cp -r assets frontend/public/
   cp -r documents frontend/public/
   ```

6. **Seed Database (Optional)**
   
   To populate the database with sample projects:
   ```bash
   cd backend
   node scripts/seedProjects.js
   ```

### Running the Application

1. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server will run on `http://localhost:5000`

3. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

4. **Build for Production**
   ```bash
   cd frontend
   npm run build
   ```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Health Check
- `GET /api/health` - Server health check

## Adding Projects

You can add projects in two ways:

1. **Via API** (requires admin authentication - to be implemented):
   ```bash
   POST /api/projects
   {
     "title": "Project Name",
     "description": "Project description",
     "technologies": ["React", "Node.js"],
     "githubLink": "https://github.com/username/project",
     "liveLink": "https://project-demo.com",
     "featured": true
   }
   ```

2. **Via Database Seed Script**:
   Edit `backend/scripts/seedProjects.js` and run:
   ```bash
   node backend/scripts/seedProjects.js
   ```

## Customization

### Update Personal Information
Edit the following files:
- `frontend/src/components/Hero.jsx` - Hero section
- `frontend/src/components/About.jsx` - About section
- `frontend/src/components/Contact.jsx` - Contact information

### Update Projects
Projects are stored in MongoDB. Update them via the API or directly in the database.

### Styling
Main styles are in:
- `frontend/src/index.css` - Global styles and theme variables
- `frontend/src/App.css` - Component styles

## Deployment

### Backend Deployment
1. Set up MongoDB Atlas (cloud database)
2. Update `MONGODB_URI` in `.env`
3. Deploy to Heroku, Railway, or similar platform

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy `dist` folder to Vercel, Netlify, or similar

## License

MIT License

## Author

Sajeela Ilyas - Software Engineering Student at COMSATS University Islamabad

---

Made with ❤️ using MERN Stack

