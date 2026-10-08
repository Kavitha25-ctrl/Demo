import React from 'react';
import {
  Code,
  CheckCircle,
  FolderGit2,
  Award,
  TrendingUp,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function Dashboard() {
  const mockUser = {
    name: 'Alex Johnson',
    careerGoal: 'Data Scientist'
  };

  const mockSkills = [
    { name: 'Python', progress: 85 },
    { name: 'C', progress: 70 },
    { name: 'SQL', progress: 60 },
    { name: 'JavaScript', progress: 75 },
    { name: 'DSA', progress: 65 },
    { name: 'Statistics', progress: 50 }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Welcome back, {mockUser.name} 👋
        </h1>
        <p className="text-sky-100 text-sm sm:text-base mt-2">
          Target Goal: <span className="font-semibold underline decoration-sky-300">{mockUser.careerGoal}</span>
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { label: 'Total Skills', val: '12', icon: <Code className="w-5 h-5 text-sky-600" /> },
          { label: 'Completed Skills', val: '7', icon: <CheckCircle className="w-5 h-5 text-emerald-600" /> },
          { label: 'Projects', val: '4', icon: <FolderGit2 className="w-5 h-5 text-indigo-600" /> },
          { label: 'Certificates', val: '3', icon: <Award className="w-5 h-5 text-amber-600" /> },
          { label: 'Roadmap Progress', val: '62%', icon: <TrendingUp className="w-5 h-5 text-purple-600" /> }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">{stat.label}</span>
              <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Progress */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Skill Proficiency Overview</h2>
            <span className="text-xs text-sky-600 font-medium">6 Skills Tracked</span>
          </div>

          <div className="space-y-4">
            {mockSkills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-slate-800">{skill.name}</span>
                  <span className="text-slate-500">{skill.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-sky-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-600" />
            <h2 className="text-lg font-bold text-slate-900">Recommended Next Steps</h2>
          </div>

          <ul className="space-y-3">
            {[
              'Complete SQL basics & join queries',
              'Learn Pandas for data manipulation',
              'Build a data analysis project',
              'Practice DSA array & string problems'
            ].map((step, idx) => (
              <li key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium text-slate-700 flex items-center justify-between">
                <span>{step}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
