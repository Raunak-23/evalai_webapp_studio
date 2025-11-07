
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  // A mock auth state. In a real app, this would come from context or a store.
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/settings" 
          element={isAuthenticated ? <SettingsPage /> : <Navigate to="/" />} 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
