'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Server,
  LayoutDashboard,
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [targetServer, setTargetServer] = useState<'fastify' | 'nest' | 'express'>('fastify');
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const serverEndpoints = {
    fastify: 'http://localhost:4000/api/v1/auth/login',
    nest: 'http://localhost:3000/api/v1/auth/login',
    express: 'http://localhost:3001/api/v1/auth/login',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      const endpoint = serverEndpoints[targetServer];
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Authentication failed. Invalid credentials.');
      }

      setSuccessMessage(`Login successful via ${targetServer.toUpperCase()} Auth Server! Redirecting to Dashboard...`);
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
      }
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } catch (err: any) {
      // If server is not running locally, provide clear feedback with fallback
      setErrorMessage(
        err.message || `Unable to reach ${targetServer.toUpperCase()} server. Make sure it is running locally.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 flex items-center justify-center relative min-h-[calc(100vh-160px)]">
      
      {/* Ambient Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md px-4">
        
        {/* Top Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              BoardPilot <span className="gradient-text">AI</span>
            </span>
          </Link>
          <h1 className="text-xl font-bold text-white">Sign In to Your Account</h1>
          <p className="text-xs text-slate-400 mt-1">Select a backend auth server and enter your credentials.</p>
        </div>

        {/* Card */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-left">
          
          {/* Target Backend Server Selector */}
          <div className="mb-6">
            <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Server className="w-3.5 h-3.5 text-indigo-400" /> Target Backend Server
            </label>
            <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setTargetServer('fastify')}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  targetServer === 'fastify'
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fastify (4000)
              </button>
              <button
                type="button"
                onClick={() => setTargetServer('nest')}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  targetServer === 'nest'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                NestJS (3000)
              </button>
              <button
                type="button"
                onClick={() => setTargetServer('express')}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  targetServer === 'express'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Express (3001)
              </button>
            </div>
          </div>

          {/* Feedback Messages */}
          {errorMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-slate-300">Password</label>
                <Link href="/forgot-password" className="text-xs text-indigo-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-xs text-slate-400">
                Remember this device
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-glow flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px bg-slate-800 flex-1" />
            <span className="text-[11px] text-slate-400 uppercase font-mono">or continue with</span>
            <span className="h-px bg-slate-800 flex-1" />
          </div>

          {/* Social Logins */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => alert('Google OAuth integration configured in backend services.')}
              className="py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.6 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.4 8.8 5 12 5z"/>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                <path fill="#FBBC05" d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.4C.6 9.4 0 11.6 0 14s.6 4.6 1.6 6.6l3.7-2.9 shadow-none"/>
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.4-6.7-5.3L1.6 15.9C3.5 19.7 7.4 23 12 23z"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              onClick={() => alert('GitHub OAuth integration configured in backend services.')}
              className="py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

        </div>

        {/* Bottom Signup Link */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-indigo-400 font-semibold hover:underline">
            Create an Account Free
          </Link>
        </p>

      </div>
    </div>
  );
}
