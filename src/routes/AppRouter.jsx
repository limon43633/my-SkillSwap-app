// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ForgetPassword from '../pages/Auth/ForgetPassword';
import SkillDetails from '../pages/Skills/SkillDetails';
import MyProfile from '../pages/Profile/MyProfile';
import UpdateProfile from '../pages/Profile/UpdateProfile';
import ProtectedRoute from '../components/ProtectedRoute';
import NotFoundPage from '../pages/ NotFoundPage';
import ViewAllSkillPage from '../pages/Skills/ViewAllSkillPage';
import BookSessionForm from '../pages/Skills/BookSessionForm';

import { AuthProvider } from '../context/AuthContext'; // ✅ Import this

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="view-all-skills-page" element={<ViewAllSkillPage />} />

            {/* Protected Routes */}
            <Route
              path="skill/:id"
              element={
                <ProtectedRoute>
                  <SkillDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="skill/:id/book"
              element={
                <ProtectedRoute>
                  <BookSessionForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-profile"
              element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="update-profile"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
