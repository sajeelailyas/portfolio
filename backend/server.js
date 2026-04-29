import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/projects.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Allow all origins in development, set specific URL in production
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

const maskMongoUri = (uri) => {
  // Masks credentials in mongodb://user:pass@host form so we never log passwords.
  // Example: mongodb+srv://user:pass@cluster/... -> mongodb+srv://user:***@cluster/...
  return uri.replace(/(mongodb(\+srv)?:\/\/[^:]+:)([^@]+)/i, '$1***');
};

mongoose
  .connect(mongoUri)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    const message = String(err?.message || err);

    // Your current .env has a placeholder like "<db_password>" which will always fail auth.
    const looksLikePlaceholder = mongoUri.includes('<db_password>');
    const authFailed =
      message.toLowerCase().includes('bad auth') ||
      message.toLowerCase().includes('authentication failed') ||
      message.toLowerCase().includes('auth failed');

    if (authFailed) {
      console.error('MongoDB authentication failed.');
      if (looksLikePlaceholder) {
        console.error(
          "Your `backend/.env` `MONGODB_URI` still contains `<db_password>` placeholder. Replace it with the real Atlas password."
        );
      } else {
        console.error(
          'Double-check Atlas username/password and that the user has access to the target database.'
        );
      }
    }

    console.error('MongoDB Connection Error:', { message, mongoUriMasked: maskMongoUri(mongoUri) });
  });

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

