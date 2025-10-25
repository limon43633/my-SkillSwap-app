import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase.config'; // Adjust path based on location

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  
  // Check if user is authenticated using Firebase
  const user = auth.currentUser;
  
  if (!user) {
    // Redirect to login and save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

export default ProtectedRoute;