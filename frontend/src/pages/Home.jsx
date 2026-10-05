import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  LineChart,
  BookOpen,
  Award,
  FileText,
  Bot,
  CheckCircle2,
  Target
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-900 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold tracking-wide uppercase mb-6 border border-sky-500/20">
            <Target className="w-3.5 h-3.5" /> All-in-One Career Accelerator for Students
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Build Your Skills. Track Your Progress.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Shape Your Career.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The complete platform for college students to manage technical skills, projects, learning roadmaps, certifications, and AI-powered recommendations in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 transition-all"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
            >
              Sign In to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Everything You Need to Get Job-Ready
          </h2>
          <p className="mt-4 text-slate-600">
            Engineered specifically for engineering and CS students aiming for top roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-6 h-6 text-sky-600" />,
              title: 'Skill Tracker',
              desc: 'Categorize, rate proficiency, and visualize growth across programming languages and tools.'
            },
            {
              icon: <BookOpen className="w-6 h-6 text-sky-600" />,
              title: 'Curated Roadmaps',
              desc: 'Step-by-step career path guidelines for Data Science, Full Stack, Data Analyst, and AI/ML.'
            },
            {
              icon: <LineChart className="w-6 h-6 text-sky-600" />,
              title: 'Project Portfolio',
              desc: 'Showcase hands-on builds, tech stacks, live demos, and GitHub repositories.'
            },
            {
              icon: <Award className="w-6 h-6 text-sky-600" />,
              title: 'Achievements Log',
              desc: 'Record hackathons, certifications, internships, and workshops in a single timeline.'
            },
            {
              icon: <FileText className="w-6 h-6 text-sky-600" />,
              title: 'Resume Builder',
              desc: 'Instantly generate ATS-ready professional resume previews and exportable PDFs.'
            },
            {
              icon: <Bot className="w-6 h-6 text-sky-600" />,
              title: 'AI Career Assistant',
              desc: 'Get automated skill gap analysis, recommended projects, and next steps.'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-sky-50 w-fit rounded-xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Supported Career Paths</h2>
            <p className="mt-3 text-slate-600">
              Clear roadmaps tailored to industry demand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Data Scientist', desc: 'Python, SQL, Pandas, Machine Learning, Stats' },
              { title: 'Full Stack Developer', desc: 'HTML/CSS, JS, React, Node, Express, MongoDB' },
              { title: 'Data Analyst', desc: 'Excel, SQL, Python, Power BI, Data Viz' },
              { title: 'AI / ML Engineer', desc: 'Math, PyTorch, Deep Learning, NLP, MLOps' }
            ].map((path, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{path.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{path.desc}</p>
                <Link
                  to="/register"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                >
                  Explore Path <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Start Tracking Your Career Readiness Today</h2>
            <p className="text-sky-100 text-sm sm:text-base mb-6">
              Join thousands of college students bridging the gap between academic education and software engineering job requirements.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-sky-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Free for students & job seekers
              </div>
              <div className="flex items-center gap-2 text-sm text-sky-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Interactive analytics & printable resume generator
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white hover:bg-sky-50 rounded-xl shadow-lg transition-all whitespace-nowrap"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
