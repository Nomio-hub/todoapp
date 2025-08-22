// src/components/ProtectedRoute.js
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a nice spinner
  }

  return isAuthenticated ? <Layout /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;