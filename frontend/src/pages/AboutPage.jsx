import React from 'react';
import Layout from '../layouts/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">About Smart Student Tracker</h1>
        <p className="text-slate-600 leading-relaxed mb-6">
          Smart Student Career & Skill Tracker is designed to bridge the gap between academic education and industry expectation. It allows students to manage skills, track engineering projects, generate ATS-ready resumes, and leverage AI analysis to stay job-ready.
        </p>
      </div>
    </Layout>
  );
}
