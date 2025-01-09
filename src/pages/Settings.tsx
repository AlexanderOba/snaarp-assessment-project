import { useState } from 'react';
import { Bell, Shield, Globe, User } from 'lucide-react';
import Toggle from '../components/Toggle';

const Settings = () => {
  const [settings,] = useState({
    notifications: false,
    security: true,
    profileVisibility: false
  });

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 dashbd-title">Settings</h1>

      <div className="card">
        <div className="list-group list-group-flush">
          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Bell className="text-muted me-3" size={24} />
                <div>
                  <h3 className="mb-1 dashbd-title">Notifications</h3>
                  <p className="text-muted small mb-0">Manage notification preferences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Shield className="text-muted me-3" size={24} />
                <div>
                  <h3 className="mb-1 dashbd-title">Security</h3>
                  <p className="text-muted small mb-0">Configure security settings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Globe className="text-muted me-3" size={24} />
                <div>
                  <h3 className="dashbd-title mb-1">Language</h3>
                  <p className="text-muted small mb-0">Choose your preferred language</p>
                </div>
              </div>
              <select className="form-select" style={{ width: '200px' }}>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>

          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <User className="text-muted me-3" size={24} />
                <div>
                  <h3 className="dashbd-title mb-1">Profile Visibility</h3>
                  <p className="text-muted small mb-0">Control your profile visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;