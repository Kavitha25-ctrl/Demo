import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-sky-600 rounded-lg text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg text-white">
              Smart<span className="text-sky-400">Career</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 text-center md:text-left">
            Empowering students to build skills, track milestones, and shape tech careers.
          </p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Smart Student Career & Skill Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
