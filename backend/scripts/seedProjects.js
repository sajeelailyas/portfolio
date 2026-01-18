import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'AutoVisionHub',
    description: 'An AI-based automotive marketplace and community platform with AR part visualization. Frontend: Flutter, Backend: Node.js. Final Year Project.',
    technologies: ['Flutter', 'Node.js', 'AI', 'AR'],
    githubLink: 'https://github.com/HarisAli-dev/AutoVisionHub',
    featured: true
  },
  {
    title: 'Blood Donation System (SQL)',
    description: 'A CMD-based blood management system using SQL for managing donors, recipients, inventory, and transfusions with secure admin controls. Semester Project.',
    technologies: ['Java', 'MySQL', 'JDBC', 'CMD'],
    githubLink: 'https://github.com/sajeelailyas/blood-management-system',
    featured: false
  },
  {
    title: 'Blood Donation System (MongoDB)',
    description: 'A GUI-based blood management system using MongoDB and Java Swing for managing donors, recipients, blood banks, donations, and transfusion records. Semester Project.',
    technologies: ['Java', 'MongoDB', 'Java Swing', 'NoSQL'],
    githubLink: 'https://github.com/sajeelailyas/BloodManagmentSys_MongoDB',
    featured: false
  },
  {
    title: 'MIDL Internship Project',
    description: 'Web development internship project at Medical and Diagnostic Lab - NCAI. Developed frontend including responsive landing pages and user authentication with Google sign-in.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Google Auth'],
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
    title: 'Eventify',
    description: 'An online platform for booking elegant event decoration services. Semester Project.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/sajeelailyas/eventify',
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
    console.error('❌ Error seeding projects:', error);
    process.exit(1);
  }
}

seedProjects();

