import { Link } from 'react-router-dom';
import { FaEdit, FaEnvelope, FaUser } from 'react-icons/fa';

const MyProfile = () => {
  // Placeholder user data - will be replaced with Firebase auth context
  const user = {
    displayName: 'Hassibur rahman',
    email: 'md9178558@gmail.com',
    photoURL: 'https://i.pravatar.cc/300?u=john.doe@example.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Profile Card */}
          <div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            data-aos="zoom-in"
          >
            {/* Header Background */}
            <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <img 
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-32 h-32 rounded-full border-8 border-white shadow-xl"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="pt-20 pb-8 px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {user.displayName}
                </h2>
                <p className="text-gray-600 flex items-center justify-center space-x-2">
                  <FaEnvelope />
                  <span>{user.email}</span>
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <p className="text-gray-700 font-semibold">Sessions Booked</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <p className="text-gray-700 font-semibold">Skills Learning</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">4.5★</div>
                  <p className="text-gray-700 font-semibold">Avg Rating Given</p>
                </div>
              </div>

              {/* User Details */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Profile Information</h3>
                
                <div className="flex items-start space-x-3">
                  <FaUser className="text-gray-500 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-gray-800 font-semibold">{user.displayName}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaEnvelope className="text-gray-500 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="text-gray-800 font-semibold">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-gray-500 mt-1">🖼️</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Profile Photo</p>
                    <img 
                      src={user.photoURL} 
                      alt="Profile" 
                      className="mt-2 w-20 h-20 rounded-lg border-2 border-gray-200"
                    />
                  </div>
                </div>
              </div>

              {/* Update Profile Button */}
              <Link 
                to="/update-profile"
                className="w-full btn-primary-custom flex items-center justify-center space-x-2 text-lg py-4"
              >
                <FaEdit />
                <span>Update Profile</span>
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center text-gray-600">
            <p className="text-sm">
              Member since January 2025 • Last login: Today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
