import React, { useState } from 'react';
import { X, Lock, Mail, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState('admin');
  const [email, setEmail] = useState('admin@aischolar.com');
  const [password, setPassword] = useState('admin123');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else if (role === 'franchise') {
      navigate('/dashboard/franchise-owner');
    } else if (role === 'teacher') {
      navigate('/dashboard/teacher');
    } else if (role === 'coaching') {
      navigate('/dashboard/coaching-admin');
    } else {
      navigate('/dashboard/student');
    }
  };

  const selectRole = (roleType) => {
    setRole(roleType);
    if (roleType === 'admin') {
      setEmail('admin@aischolar.com');
      setPassword('admin123');
    } else if (roleType === 'franchise') {
      setEmail('franchise@aischolar.com');
      setPassword('franchise123');
    } else if (roleType === 'teacher') {
      setEmail('priya.sen@aischolar.com');
      setPassword('teacher123');
    } else if (roleType === 'coaching') {
      setEmail('coaching@aischolar.com');
      setPassword('coaching123');
    } else {
      setEmail('student@aischolar.com');
      setPassword('student123');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 transition-all animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-slate-800 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-amber-400/20 text-amber-400 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-amber-400">
              AI Scholar Secure Access
            </span>
          </div>

          <h2 className="text-2xl font-black text-white">Login to Portal</h2>
          <p className="text-xs text-slate-400 mt-1">Select your account role to proceed to your dedicated dashboard</p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Role Tabs */}
          <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-2xl mb-5 text-xs font-semibold">
            {[
              { id: 'admin', label: 'Super Admin' },
              { id: 'franchise', label: 'Franchise' },
              { id: 'coaching', label: 'Coaching' },
              { id: 'teacher', label: 'Teacher' },
              { id: 'student', label: 'Student' },
            ].map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => selectRole(r.id)}
                className={`py-2 px-1 rounded-xl transition-all text-center cursor-pointer truncate ${
                  role === r.id
                    ? 'bg-white text-slate-950 shadow-xs font-bold border border-slate-200/80'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Official Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@aischolar.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white transition-all text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white transition-all text-slate-800"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 py-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-amber-500 focus:ring-amber-400" defaultChecked />
                <span>Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-amber-600 font-semibold hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Access Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              ⚡ Demo mode enabled. Credentials auto-populate by role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

