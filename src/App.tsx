import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DeviceManagement from './pages/DeviceManagement';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/devices" replace />} />
          <Route path="devices" element={<DeviceManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/devices" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;