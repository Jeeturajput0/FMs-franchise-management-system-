import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('/admin/dashboard');
  const [rememberMe, setRememberMe] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Map route to role key for local storage
    const roleKeyMap = {
      "/admin/dashboard": "super_admin",
      "/dashboard/coaching-admin": "coaching_admin",
      "/dashboard/teacher": "teacher",
      "/dashboard/student": "student",
      "/dashboard/franchise-owner": "franchise_owner",
    };

    localStorage.setItem(
      "ai_scholars_user",
      JSON.stringify({
        email: email || "demo@aischolars.in",
        role: roleKeyMap[selectedRole] || "super_admin",
      })
    );

    navigate(selectedRole);
  };

  return (
    <div className="min-h-screen bg-[#f7f7fb] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-['DM_Sans',sans-serif]">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Branding & Visual */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#282146] via-[#3a2f68] to-[#7658df] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#7658df] flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                A
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">AI Scholars</span>
            </Link>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-purple-200 border border-white/20 mb-4 inline-block">
              Secure Multi-Role Access
            </span>

            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              Welcome Back to AI Scholars System
            </h2>

            <p className="text-purple-100 text-sm leading-relaxed mb-8">
              Access your role dashboard to manage franchise centers, batch timetables, teacher staff, student LMS content, and certificates.
            </p>
          </div>

          {/* Quick Role Highlights Box */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-2">
            <div className="text-xs font-bold text-purple-300 uppercase">Supported Portals:</div>
            <div className="flex flex-wrap gap-2 text-xs text-white font-semibold">
              <span className="bg-white/15 px-2.5 py-1 rounded-md">Super Admin</span>
              <span className="bg-white/15 px-2.5 py-1 rounded-md">Coaching Admin</span>
              <span className="bg-white/15 px-2.5 py-1 rounded-md">Teacher</span>
              <span className="bg-white/15 px-2.5 py-1 rounded-md">Student</span>
              <span className="bg-white/15 px-2.5 py-1 rounded-md">Franchise Owner</span>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
          
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
              Sign In to Your Workspace
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold bg-purple-50/40 text-gray-900 focus:outline-none focus:border-[#7658df] focus:ring-2 focus:ring-purple-100"
              >
                <option value="/admin/dashboard">Super Admin Portal (/admin/dashboard)</option>
                <option value="/dashboard/coaching-admin">Coaching Admin Portal (/dashboard/coaching-admin)</option>
                <option value="/dashboard/teacher">Teacher Portal (/dashboard/teacher)</option>
                <option value="/dashboard/student">Student LMS Portal (/dashboard/student)</option>
                <option value="/dashboard/franchise-owner">Franchise Owner Portal (/dashboard/franchise-owner)</option>
              </select>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                placeholder="admin@aischolars.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7658df] focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#7658df] focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-[#7658df] focus:ring-[#7658df] h-4 w-4"
                />
                <span className="font-semibold text-gray-700">Remember me</span>
              </label>

              <a href="#forgot" className="font-bold text-[#7658df] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#7658df] text-white font-extrabold text-base hover:bg-[#6547ce] shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Login to Dashboard</span>
              <Icon name="arrow" size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </form>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-600">
            <span>Are you a coaching partner? </span>
            <Link to="/franchise" className="font-bold text-[#7658df] hover:underline">
              Join AI Scholars
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
