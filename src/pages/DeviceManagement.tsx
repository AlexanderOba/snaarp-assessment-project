import { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import Organizations from '../components/OranizationSection';
import { PiDeviceMobileCameraLight } from "react-icons/pi";
import { PiDesktopTowerFill } from "react-icons/pi";
import { GrWindows } from "react-icons/gr";
import { IoLogoApple } from "react-icons/io5";
import { PiLinuxLogo } from "react-icons/pi";


interface Device {
  id: string;
  name: string;
  status: 'online' | 'offline';
  type: string;
  permissions: {
    usb: boolean;
    bluetooth: boolean;
    printing: boolean;
    shutdown: boolean;
  };
}

const DeviceManagement = () => {
  const [devices] = useState<Device[]>([
    {
      id: '1',
      name: 'Workstation-001',
      status: 'online',
      type: 'Windows',
      permissions: {
        usb: true,
        bluetooth: true,
        printing: true,
        shutdown: false,
      },
    },
    {
      id: '2',
      name: 'Laptop-002',
      status: 'offline',
      type: 'Mac',
      permissions: {
        usb: false,
        bluetooth: true,
        printing: true,
        shutdown: true,
      },
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleToggle = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
  };

  return (
    <div>
      <div className="dashbd-title-wrap justify-content-between align-items-center mb-2">
        <h1 className='dashbd-title'>
          <span className="icon-wrapper me-3">
            <RxDashboard />
          </span>
          Device Management
        </h1>
      </div>

      <div className='dashboard-content'>
        <div className="dashboard-content_col1">
          <Organizations />
        </div>

        <div className="dashboard-content_col2">
          <div className="dashbd-widget-wrapper align-items-center mb-2">
            <p className='dashbd-widget-title'>
              <span className="me-1">
                <PiDeviceMobileCameraLight className="me-1" size={22} />
              </span>
              Mobile
            </p>
            <p className='dashbd-widget-title dashbd-widget-content'>
              <span className="me-1">
                <PiDesktopTowerFill className="me-1" size={22} />
              </span>
              Computer
            </p>
          </div>

          <div className="dashbd-widget-wrapper align-items-center mb-2">
            <p className='dashbd-widget-title dashbd-widget-content'>
              <span className="me-1">
                <GrWindows className="me-1" size={22} />
              </span>
              Windows
            </p>
            <p className='dashbd-widget-title'>
              <span className="me-1">
                <IoLogoApple className="me-1" size={22} />
              </span>
              Mac
            </p>
            <p className='dashbd-widget-title'>
              <span className="me-1">
                <PiLinuxLogo className="me-1" size={22} />
              </span>
              Linux
            </p>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th>Status</th>
                  <th>Name</th>
                  <th>USB</th>
                  <th>Bluetooth</th>
                  <th>Printing</th>
                  <th>Shutdown</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id}>
                    <td>
                      <span
                        className={`rounded-circle d-inline-block ${device.status === 'online' ? 'bg-success' : 'bg-secondary'
                          }`}
                        style={{ width: '10px', height: '10px' }}
                      />
                    </td>
                    <td>{device.name}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleToggle(`USB ${device.permissions.usb ? 'disabled' : 'enabled'} for ${device.name}`)
                        }
                        className={`form-check-input ms-2 ${device.permissions.usb ? 'bg-primary' : 'bg-secondary'
                          }`}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleToggle(`Bluetooth ${device.permissions.bluetooth ? 'disabled' : 'enabled'} for ${device.name}`)
                        }
                        className={`form-check-input ms-2 ${device.permissions.bluetooth ? 'bg-primary' : 'bg-secondary'
                          }`}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleToggle(`Printing ${device.permissions.printing ? 'disabled' : 'enabled'} for ${device.name}`)
                        }
                        className={`form-check-input ms-2 ${device.permissions.printing ? 'bg-primary' : 'bg-secondary'
                          }`}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleToggle(`Shutdown ${device.permissions.shutdown ? 'disabled' : 'enabled'} for ${device.name}`)
                        }
                        className={`form-check-input ms-2 ${device.permissions.shutdown ? 'bg-primary' : 'bg-secondary'
                          }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title">{modalMessage}</h5>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceManagement;
