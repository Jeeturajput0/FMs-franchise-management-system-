import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                AIS
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white">AI Scholar</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400 block -mt-1">
                  Franchise System
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering education coaching franchises with centralized courses, student LMS, teacher allocation, auto fee management, and QR verified credentials.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-amber-400 border border-gray-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Network System Active
              </span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Franchise Management</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Course Management</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Student Management</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Teacher Management</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Certificate System</Link></li>
              <li><Link to="/franchise" className="hover:text-amber-400 transition-colors">Join as Franchise</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/features" className="hover:text-amber-400 transition-colors">Platform Features</Link></li>
              <li><Link to="/how-it-works" className="hover:text-amber-400 transition-colors">How It Works</Link></li>
              <li><Link to="/solutions" className="hover:text-amber-400 transition-colors">Role Solutions</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Company Hierarchy</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Support & Help</Link></li>
            </ul>
          </div>

          {/* Column 4: DASHBOARDS (Special user request column) */}
          <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700/60">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Icon name="LayoutDashboard" size={16} />
              Role Dashboards
            </h4>
            <p className="text-[11px] text-gray-400 mb-3">Click any link below to open the dedicated role dashboard:</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/admin/dashboard" className="flex items-center justify-between p-2 rounded-lg bg-gray-900/80 hover:bg-amber-500 hover:text-white transition-all group font-semibold text-gray-200">
                  <span>Super Admin</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/coaching-admin" className="flex items-center justify-between p-2 rounded-lg bg-gray-900/80 hover:bg-amber-500 hover:text-white transition-all group font-semibold text-gray-200">
                  <span>Coaching Admin</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/teacher" className="flex items-center justify-between p-2 rounded-lg bg-gray-900/80 hover:bg-amber-500 hover:text-white transition-all group font-semibold text-gray-200">
                  <span>Teacher Dashboard</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/student" className="flex items-center justify-between p-2 rounded-lg bg-gray-900/80 hover:bg-amber-500 hover:text-white transition-all group font-semibold text-amber-300">
                  <span>Student Dashboard</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/franchise-owner" className="flex items-center justify-between p-2 rounded-lg bg-gray-900/80 hover:bg-amber-500 hover:text-white transition-all group font-semibold text-gray-200">
                  <span>Franchise Owner</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Legal & Info
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 mb-4">
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Cookie Policy</Link></li>
            </ul>

            <div className="pt-2">
              <div className="text-xs text-gray-400 mb-2">Get in touch:</div>
              <div className="text-xs font-semibold text-amber-400">support@aischolar.edu.in</div>
              <div className="text-xs font-medium text-gray-400">+91 (800) 456-7890</div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Social links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 AI Scholar Inc. All rights reserved. Powering the Future of Coaching Franchises.
          </div>
          <div className="flex items-center gap-4">
            <a href="#twitter" aria-label="Twitter" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-colors">
              <Icon name="Twitter" size={16} />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-colors">
              <Icon name="Linkedin" size={16} />
            </a>
            <a href="#facebook" aria-label="Facebook" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-colors">
              <Icon name="Facebook" size={16} />
            </a>
            <a href="#youtube" aria-label="YouTube" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-amber-400 hover:bg-gray-700 transition-colors">
              <Icon name="Youtube" size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
