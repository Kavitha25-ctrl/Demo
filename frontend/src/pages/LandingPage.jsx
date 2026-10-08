import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import {
  Code2,
  FolderGit2,
  Map,
  Award,
  FileText,
  Bot,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  Sparkles
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Code2,
      title: 'Skill Tracker',
      description: 'Log and monitor your technical and soft skills with real-time progress indicators.'
    },
    {
      icon: FolderGit2,
      title: 'Project Portfolio',
      description: 'Showcase your engineering projects with direct links to GitHub repositories and live demos.'
    },
    {
      icon: Map,
      title: 'Interactive Roadmaps',
      description: 'Follow guided milestone paths tailored for Data Science, Web Dev, AI/ML, and Data Analytics.'
    },
    {
      icon: Award,
      title: 'Achievements & Certs',
      description: 'Record hackathons, certifications, internships, and academic accomplishments in one timeline.'
    },
    {
      icon: FileText,
      title: 'Resume Builder',
      description: 'Generate ATS-friendly, professional PDF resumes automatically populated from your profile.'
    },
    {
      icon: Bot,
      title: 'AI Career Assistant',
      description: 'Get instant skill gap analysis and personalized recommendations powered by AI.'
    }
  ];

  const careerPaths = [
    {
      title: 'Full Stack Developer',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Data Scientist',
      skills: ['Python', 'SQL', 'Statistics', 'Pandas', 'Machine Learning'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'AI/ML Engineer',
      skills: ['Python', 'Math & Calc', 'NumPy', 'Deep Learning', 'NLP'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Data Analyst',
      skills: ['Excel', 'SQL', 'Python', 'Power BI/Tableau', 'Data Viz'],
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      description: 'Sign up with your college, degree, and target career goal.'
    },
    {
      step: '02',
      title: 'Track Skills & Projects',
      description: 'Log your current proficiency levels and display project links.'
    },
    {
      step: '03',
      title: 'Follow Career Roadmaps',
      description: 'Mark career roadmap steps as you master each topic.'
    },
    {
      step: '04',
      title: 'Build Resume & Apply',
      description: 'Utilize AI gap analysis and download ready-to-use PDF resumes.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-indigo-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" /> Smart Student Career Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Build Your Skills. Track Your Progress.{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Shape Your Career.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All-in-one skill tracker, interactive career roadmaps, project portfolio builder, and AI-powered advisor for college students and job seekers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-xl shadow-sm transition-all text-center"
            >
              Login to Dashboard
            </Link>
          </div>

          {/* Hero Banner Preview Mockup */}
          <div className="mt-16 max-w-5xl mx-auto bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-2xl border border-slate-800">
            <div className="bg-slate-800 rounded-xl overflow-hidden p-4 sm:p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-400 font-mono">dashboard.smarttracker.app</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-xs text-slate-400">Target Career</p>
                  <p className="text-lg font-bold text-white mt-1">Data Scientist</p>
                  <div className="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[70%]" />
                  </div>
                  <p className="text-xs text-indigo-400 mt-2 font-medium">70% Readiness Score</p>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-xs text-slate-400">Total Skills Tracked</p>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">14 Skills</p>
                  <p className="text-xs text-slate-400 mt-2">8 Advanced / 6 Learning</p>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-xs text-slate-400">Portfolio Projects</p>
                  <p className="text-2xl font-bold text-violet-400 mt-1">5 Complete</p>
                  <p className="text-xs text-slate-400 mt-2">GitHub & Live Demos Linked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Comprehensive Student Toolkit</h2>
            <p className="mt-4 text-slate-600">
              Everything you need to navigate college academics, gain technical competencies, and prepare for industry roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Predefined Career Roadmaps</h2>
            <p className="mt-4 text-slate-600">
              Structured step-by-step guidance designed around current tech industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${path.color} mb-4`} />
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{path.title}</h3>
                  <div className="space-y-2">
                    {path.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to="/careers"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Explore Roadmap <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How SmartTracker Works</h2>
            <p className="mt-4 text-slate-600">A structured method to accelerate your journey from student to hired professional.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="text-5xl font-black text-indigo-100 block mb-2">{item.step}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Why Students & Recruiter Advisors Love SmartTracker
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Measurable Skill Growth</h4>
                    <p className="text-indigo-200 text-sm mt-1">
                      Visual charts help students pinpoint exactly where they need further practice.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BrainCircuit className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">AI Skill Gap Analysis</h4>
                    <p className="text-indigo-200 text-sm mt-1">
                      Never guess what to study next; get targeted recommendations based on target roles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FileText className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">One-Click Resume Generation</h4>
                    <p className="text-indigo-200 text-sm mt-1">
                      Convert your recorded projects and verified skills straight into an ATS-friendly resume.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700/50 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to accelerate your career?</h3>
              <p className="text-indigo-200 mb-8">
                Join thousands of students organizing their tech portfolio today.
              </p>
              <Link
                to="/register"
                className="inline-block bg-white text-indigo-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-50 transition-colors"
              >
                Create Your Account Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
