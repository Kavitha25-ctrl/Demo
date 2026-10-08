import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="bg-indigo-600 text-white p-2 rounded-xl">
              <GraduationCap className="h-6 w-6" />
            </div>
            SmartTracker
          </Link>
          <p className="text-sm text-slate-400">
            Build Your Skills. Track Your Progress. Shape Your Career. The ultimate career and skill tracker for college students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Career Paths</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform Features</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/skills" className="hover:text-white transition-colors">Skill Management</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
            <li><Link to="/roadmap" className="hover:text-white transition-colors">Career Roadmaps</Link></li>
            <li><Link to="/resume" className="hover:text-white transition-colors">Resume Builder</Link></li>
            <li><Link to="/ai-assistant" className="hover:text-white transition-colors">AI Career Assistant</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <p className="text-sm text-slate-400 mb-4">Empowering students to achieve their tech career aspirations.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="mailto:support@smarttracker.com" className="hover:text-white"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Smart Student Career & Skill Tracker. All rights reserved.
      </div>
    </footer>
  );
}
