import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import { solutionsRoles } from '../data/siteData';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('/dashboard/super-admin');
  const [rememberMe, setRememberMe] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate directly to selected role dashboard
    navigate(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Branding & Visual */}
        <div className="lg:col-span-6 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                AIS
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">AI Scholar</span>
            </Link>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4 inline-block">
              Secure Multi-Role Access
            </span>

            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              Welcome Back to AI Scholar System
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Access your role dashboard to manage franchise centers, batch timetables, teacher salaries, student LMS content, and QR certificates.
            </p>
          </div>

          {/* Quick Role Highlights Box */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase">Supported Portals:</div>
            <div className="flex flex-wrap gap-2 text-xs text-gray-200 font-semibold">
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Super Admin</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Coaching Admin</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Teacher</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Student</span>
              <span className="bg-white/10 px-2.5 py-1 rounded-md">Franchise Owner</span>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
          
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
              Welcome Back
            </h3>
            <p className="text-xs text-gray-500">
              Select your role portal and sign in to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Role Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select Role Portal</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold bg-amber-50/50 text-gray-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              >
                <option value="/dashboard/super-admin">Super Admin Portal</option>
                <option value="/dashboard/coaching-admin">Coaching Admin Portal</option>
                <option value="/dashboard/teacher">Teacher Portal</option>
                <option value="/dashboard/student">Student LMS Portal</option>
                <option value="/dashboard/franchise-owner">Franchise Owner Portal</option>
              </select>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="admin@aischolar.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4"
                />
                <span className="font-semibold text-gray-700">Remember me</span>
              </label>

              <a href="#forgot" className="font-bold text-amber-600 hover:text-amber-700">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-500 text-white font-extrabold text-base hover:bg-amber-600 shadow-lg orange-glow transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Login to Dashboard</span>
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-600">
            <span>Are you a coaching partner? </span>
            <Link to="/franchise" className="font-bold text-amber-600 hover:text-amber-700">
              Join AI Scholar
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

