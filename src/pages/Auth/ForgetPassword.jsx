import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase.config'; // Updated with .js

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!email) {
        throw new Error('Please enter your email address');
      }
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Check your inbox.');
      
      setTimeout(() => {
        window.open('https://mail.google.com', '_blank');
      }, 1000);
    } catch (error) {
      console.error('Reset error:', error);
      toast.error(error.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>

      {/* Card */}
      <div className="max-w-sm w-full z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 space-y-6 border border-white/20">
          {/* Header */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full mb-3">
              <FaKey className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Forgot Password?</h2>
            <p className="text-gray-300 text-sm">Enter your email to reset your password</p>
          </div>

          {/* Form */}
          <form onSubmit={handleResetPassword} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-gray-200 mb-1">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-gray-500/50 rounded-md text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all text-sm"
                  placeholder="Your email"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-md text-sm overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">{loading ? 'Sending email...' : 'Reset Password'}</span>
            </button>
          </form>

          {/* Back to Login */}
          <div className="text-center">
            <Link 
              to="/login" 
              className="text-blue-400 hover:text-blue-300 font-medium hover:underline inline-flex items-center space-x-2 text-xs"
            >
              <span>←</span>
              <span>Back to Login</span>
            </Link>
          </div>

          {/* Info Box */}
          <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3">
            <p className="text-xs text-blue-200">
              <strong>Note:</strong> If you don't receive an email within a few minutes, check your spam folder or try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;