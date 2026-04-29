import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'AutoVisionHub - FYP',
    description: 'AutoVisionHub is an AI-powered automotive marketplace and community platform designed to connect vehicle enthusiasts and simplify buying, selling, and exploring automotive parts. It includes AR-based part visualization for real-world previews, a Flutter frontend for smooth user experience, and a Node.js backend for scalable server-side operations and database management.',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    githubLink: 'https://github.com/HarisAli-dev/AutoVisionHub',
    featured: true
  },
  {
    title: 'Blood Donation System (Semester Project - Database) - SQL',
    description: 'A blood management system developed to manage donors, blood records, and hospital requirements efficiently. The SQL-based version operates through a command-line interface for structured data management and reliable retrieval in emergency scenarios.',
    technologies: ['Java', 'SQL', 'MySQL', 'JDBC', 'CMD'],
    githubLink: 'https://github.com/sajeelailyas/blood-management-system',
    featured: false
  },
  {
    title: 'Blood Donation System (Semester Project - Database) - MongoDB',
    description: 'A GUI-based blood management system implemented with MongoDB, focused on advanced operations such as aggregation pipelines for efficient processing. This NoSQL implementation complements the SQL version and demonstrates handling of both relational and non-relational databases.',
    technologies: ['Java', 'MongoDB', 'Java Swing', 'NoSQL'],
    githubLink: 'https://github.com/sajeelailyas/BloodManagmentSys_MongoDB',
    featured: false
  },
  {
    title: 'RX-Scan (Internship Project)',
    description: 'Designed and developed responsive frontend interfaces for a medical lab management system, including a modern landing page. Implemented Google Sign-In/Sign-Up for user authentication and focused on creating a clean, user-friendly UI to improve accessibility and overall user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubLink: 'https://github.com/sajeelailyas/midl-internship',
    featured: false
  },
  {
    title: 'Budget Tracker App',
    description: 'A user-friendly GUI budget tracking app using Java OOP. Semester Project.',
    technologies: ['Java', 'OOP', 'GUI'],
    githubLink: 'https://github.com/sajeelailyas/budgetTracker',
    featured: false
  },
  {
    title: 'Eventify - Event Management System (Semester Project - Web Development)',
    description: 'A static frontend website for an event management business, featuring pages like Home, About, Contact, Gallery, Testimonials, and Event Types. The project focuses on clean UI design and smooth navigation to showcase services and improve user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/sajeelailyas/eventify',
    featured: false
  },
  {
    title: 'GB Travel Hub - Gilgit-Baltistan Tourism Platform',
    description:
      'A region-focused platform for Gilgit-Baltistan that allows users to explore tourist destinations, search locations, and view detailed place information. Implemented dynamic search functionality and structured data handling to improve navigation and user experience.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/sajeelailyas/GBTravelHub',
    featured: false
  }
];

async function seedProjects() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');

    // Insert new projects
    await Project.insertMany(projects);
    console.log('✅ Seeded projects successfully');

    process.exit(0);
  } catch (error) {
    const message = String(error?.message || error);
    const looksLikePlaceholder = mongoUri?.includes?.('<db_password>');

    if (message.toLowerCase().includes('bad auth') || message.toLowerCase().includes('auth failed')) {
      console.error('❌ MongoDB authentication failed while seeding.');
      if (looksLikePlaceholder) {
        console.error("`backend/.env` `MONGODB_URI` still contains `<db_password>` placeholder. Replace it with the real Atlas password.");
      }
    }

    console.error('❌ Error seeding projects:', message);
    process.exit(1);
  }
}

seedProjects();

