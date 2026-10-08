import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, LayoutDashboard, LogIn, UserPlus, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-sky-600 rounded-lg text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Smart<span className="text-sky-600">Career</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isActive('/dashboard') ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
