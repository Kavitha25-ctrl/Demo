import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

export default function GenericPage({ title, description }) {
  return (
    <DashboardLayout>
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-600">{description}</p>
        <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700 text-sm">
          Stage 1: Page framework initialized. Complete feature logic will be implemented in subsequent stages.
        </div>
      </div>
    </DashboardLayout>
  );
}
