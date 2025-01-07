import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="d-flex bg-light p-3">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-grow-1 overflow-auto p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;