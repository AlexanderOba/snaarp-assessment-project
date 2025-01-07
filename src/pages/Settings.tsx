import React, { useState } from 'react';
import { Bell, Shield, Globe, User } from 'lucide-react';
import Toggle from '../components/Toggle';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: false,
    security: true,
    profileVisibility: false
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleToggle = (setting: keyof typeof settings, message: string) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    setModalMessage(message);
    setShowModal(true);
  };

  return (
    <div className="container-fluid p-4">
      <h1 className="h3 mb-4">Settings</h1>

      <div className="card">
        <div className="list-group list-group-flush">
          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Bell className="text-muted me-3" size={24} />
                <div>
                  <h3 className="h5 mb-1">Notifications</h3>
                  <p className="text-muted small mb-0">Manage notification preferences</p>
                </div>
              </div>
              <Toggle
                checked={settings.notifications}
                onChange={() => handleToggle('notifications', 'Email notifications toggled')}
              />
            </div>
          </div>

          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Shield className="text-muted me-3" size={24} />
                <div>
                  <h3 className="h5 mb-1">Security</h3>
                  <p className="text-muted small mb-0">Configure security settings</p>
                </div>
              </div>
              <Toggle
                checked={settings.security}
                onChange={() => handleToggle('security', 'Two-factor authentication toggled')}
              />
            </div>
          </div>

          <div className="list-group-item p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Globe className="text-muted me-3" size={24} />
                <div>
                  <h3 className="h5 mb-1">Language</h3>
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
                  <h3 className="h5 mb-1">Profile Visibility</h3>
                  <p className="text-muted small mb-0">Control your profile visibility</p>
                </div>
              </div>
              <Toggle
                checked={settings.profileVisibility}
                onChange={() => handleToggle('profileVisibility', 'Profile visibility toggled')}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Settings Update</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </div>
      )}
    </div>
  );
};

export default Settings;