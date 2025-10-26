import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaImage, FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    displayName: 'John Doe',
    photoURL: 'https://i.pravatar.cc/300?u=john.doe@example.com'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (formData.displayName && formData.photoURL) {
      toast.success('Profile updated successfully!', {
        icon: '✅'
      });
      
      // Navigate back to profile page
      setTimeout(() => {
        navigate('/my-profile');
      }, 1500);
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Update Profile Card */}
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8"
            data-aos="zoom-in"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mb-4">
                <FaSave className="text-3xl text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-2">Update Profile</h2>
              <p className="text-gray-600">
                Keep your information up to date
              </p>
            </div>

            {/* Current Photo Preview */}
            <div className="text-center mb-8">
              <div className="inline-block relative">
                <img 
                  src={formData.photoURL}
                  alt="Current profile"
                  className="w-32 h-32 rounded-full border-4 border-purple-200 shadow-lg"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Photo URL Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Photo URL
                </label>
                <div className="relative">
                  <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="url"
                    name="photoURL"
                    value={formData.photoURL}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter photo URL"
                    required
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Paste a URL to your profile image
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Your email address cannot be changed. 
                  If you need to update your email, please contact support.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/my-profile')}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary-custom flex items-center justify-center space-x-2"
                >
                  <FaSave />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
