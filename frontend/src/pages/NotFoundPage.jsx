import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl font-black text-indigo-600">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mt-4">Page Not Found</h2>
        <p className="text-slate-600 mt-2 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
}
