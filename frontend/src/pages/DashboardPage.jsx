import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  Code2,
  FolderGit2,
  Award,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Target
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

export default function DashboardPage() {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : {
    name: 'John Student',
    careerGoal: 'Data Scientist'
  };

  const stats = [
    { label: 'Total Skills', value: '14', change: '+2 this month', icon: Code2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Completed Skills', value: '8', change: '57% complete', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Projects', value: '5', change: '3 Completed / 2 In-Progress', icon: FolderGit2, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Certificates', value: '3', change: 'Verified achievements', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Roadmap Progress', value: '68%', change: 'Target: Data Scientist', icon: TrendingUp, color: 'text-sky-600', bg: 'bg-sky-50' }
  ];

  const requiredSkills = [
    { name: 'Python', progress: 90, level: 'Advanced', color: 'bg-emerald-500' },
    { name: 'C / C++', progress: 75, level: 'Intermediate', color: 'bg-indigo-500' },
    { name: 'SQL', progress: 85, level: 'Advanced', color: 'bg-emerald-500' },
    { name: 'JavaScript', progress: 60, level: 'Intermediate', color: 'bg-amber-500' },
    { name: 'DSA', progress: 70, level: 'Intermediate', color: 'bg-indigo-500' },
    { name: 'Statistics', progress: 50, level: 'Beginner', color: 'bg-rose-500' }
  ];

  const radarData = [
    { subject: 'Python', A: 90, fullMark: 100 },
    { subject: 'C++', A: 75, fullMark: 100 },
    { subject: 'SQL', A: 85, fullMark: 100 },
    { subject: 'JavaScript', A: 60, fullMark: 100 },
    { subject: 'DSA', A: 70, fullMark: 100 },
    { subject: 'Statistics', A: 50, fullMark: 100 }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Customer Churn Prediction Model',
      tech: ['Python', 'Pandas', 'Scikit-Learn'],
      status: 'Completed',
      github: 'https://github.com/example/churn-prediction'
    },
    {
      id: 2,
      title: 'E-Commerce Analytics Dashboard',
      tech: ['React', 'Node.js', 'SQL'],
      status: 'In Progress',
      github: 'https://github.com/example/ecommerce-analytics'
    },
    {
      id: 3,
      title: 'Student Performance Tracker',
      tech: ['JavaScript', 'Express', 'MongoDB'],
      status: 'Completed',
      github: 'https://github.com/example/student-tracker'
    }
  ];

  const recommendedSteps = [
    { title: 'Complete SQL Basics & Joins', category: 'Database', difficulty: 'Intermediate' },
    { title: 'Learn Pandas & Data Wrangling', category: 'Data Science', difficulty: 'Beginner' },
    { title: 'Build a Data Analysis Portfolio Project', category: 'Projects', difficulty: 'Hands-on' },
    { title: 'Practice 10 LeetCode DSA Questions', category: 'Algorithms', difficulty: 'Practice' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-semibold mb-3 border border-indigo-400/30">
              <Sparkles className="w-3.5 h-3.5" /> Career Goal Dashboard
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Welcome back, {user.name} 👋
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl">
              Target Role: <span className="font-semibold text-white underline decoration-indigo-400">{user.careerGoal || 'Data Scientist'}</span>. Track your milestones and level up your skills today.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 w-full md:w-auto shrink-0 min-w-[220px]">
            <div className="text-xs text-indigo-200 font-medium">Overall Preparedness</div>
            <div className="text-3xl font-black mt-1">68%</div>
            <div className="w-full bg-indigo-950/60 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-400 to-emerald-400 h-full w-[68%]" />
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-500">{stat.label}</span>
                    <div className={`${stat.bg} ${stat.color} p-2 rounded-xl`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                </div>
                <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  {stat.change}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Progress & Radar Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Skill Progress Bars */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Core Skill Progress</h3>
                <p className="text-xs text-slate-500">Required proficiencies for {user.careerGoal || 'Data Scientist'}</p>
              </div>
              <Link to="/skills" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                Manage All <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-5">
              {requiredSkills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-slate-800">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">{skill.level}</span>
                      <span className="font-bold text-slate-900 text-xs">{skill.progress}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`${skill.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Readiness Chart */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-900">Radar Evaluation</h3>
                <span className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-lg">Interactive</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">Competency matrix comparison</p>
            </div>

            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" />
                  <Radar name="Student" dataKey="A" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center text-xs text-slate-500 mt-2">
              Strengths: Python & SQL • Focus area: Statistics
            </div>
          </div>
        </div>

        {/* Recent Projects & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Recent Projects */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Recent Projects</h3>
                <p className="text-xs text-slate-500">Portfolio builds linked to your profile</p>
              </div>
              <Link to="/projects" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                View All <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {recentProjects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl border border-slate-200/80 hover:border-indigo-200 transition-all flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{proj.title}</h4>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${
                      proj.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {proj.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {proj.status}
                    </span>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
                    >
                      Repository <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Next Steps */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Recommended Steps</h3>
                <p className="text-xs text-slate-500">Automated path suggestions</p>
              </div>
              <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>

            <div className="space-y-3">
              {recommendedSteps.map((step, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-between gap-3 hover:bg-slate-100/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{step.title}</p>
                      <span className="text-[10px] text-slate-500">{step.category}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-600 shrink-0">
                    {step.difficulty}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/ai-assistant"
              className="mt-6 w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-indigo-200"
            >
              <Target className="w-4 h-4" /> Get AI Gap Recommendations
            </Link>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
