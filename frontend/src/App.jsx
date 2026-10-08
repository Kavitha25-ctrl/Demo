import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import GenericPage from './pages/GenericPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard & App Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<GenericPage title="My Profile" description="Manage personal, education, and career goal details." />} />
        <Route path="/skills" element={<GenericPage title="Skills Tracker" description="Manage, update, and track technical skill progress." />} />
        <Route path="/projects" element={<GenericPage title="Projects Portfolio" description="Log engineering projects with GitHub and live links." />} />
        <Route path="/roadmap" element={<GenericPage title="Career Roadmaps" description="Interactive step-by-step career timelines." />} />
        <Route path="/achievements" element={<GenericPage title="Achievements & Certs" description="Record certifications, hackathons, and awards." />} />
        <Route path="/analytics" element={<GenericPage title="Analytics & Progress" description="Detailed charts and progress analytics." />} />
        <Route path="/resume" element={<GenericPage title="Resume Builder" description="Generate professional PDF resumes." />} />
        <Route path="/ai-assistant" element={<GenericPage title="AI Career Assistant" description="Skill gap analysis and personalized recommendations." />} />
        <Route path="/settings" element={<GenericPage title="Account Settings" description="Configure account security and preferences." />} />

        {/* Fallback 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
