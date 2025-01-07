import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import Organizations from "../components/OranizationSection";
import { PiDeviceMobileCameraLight, PiDesktopTowerFill, PiLinuxLogo, PiUsb, PiSimCardLight, PiDiscLight, PiLaptop, PiPlugBold } from "react-icons/pi";
import { GrWindows } from "react-icons/gr";
import { IoLogoApple, IoBluetoothOutline } from "react-icons/io5";
import { SlPrinter } from "react-icons/sl";
import { SelectedEvent, ToggleStates } from "../types/DeviceMangement";
import { columns, users } from "../utilities/data";


const DeviceManagement: React.FC = () => {
  
  const [toggleStates, setToggleStates] = useState<ToggleStates>(() => {
    const initialState: ToggleStates = {};
    users.forEach((user) => {
      initialState[user.name] = {};
      columns.forEach((col) => {
        initialState[user.name][col] = Math.random() > 0.5; 
      });
    });
    return initialState;
  });
  
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);

  const handleToggle = (userName: string, columnName: string) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [userName]: {
        ...prevState[userName],
        [columnName]: !prevState[userName][columnName],
      },
    }));

    setSelectedEvent({ user: userName, event: columnName });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="dashbd-title-wrap justify-content-between align-items-center mb-2">
        <h1 className="dashbd-title">
          <span className="icon-wrapper me-3">
            <RxDashboard />
          </span>
          Device Management
        </h1>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-content_col1">
          <Organizations />
        </div>

        <div className="dashboard-content_col2">
          <div className="dashbd-widget-wrapper align-items-center mb-2">
            <p className="dashbd-widget-title">
              <PiDeviceMobileCameraLight className="me-1" size={22} />
              Mobile
            </p>
            <p className="dashbd-widget-title dashbd-widget-content">
              <PiDesktopTowerFill className="me-1" size={22} />
              Computer
            </p>
          </div>

          <div className="dashbd-widget-wrapper align-items-center mb-2">
            <p className="dashbd-widget-title dashbd-widget-content">
              <GrWindows className="me-1" size={22} />
              Windows
            </p>
            <p className="dashbd-widget-title">
              <IoLogoApple className="me-1" size={22} />
              Mac
            </p>
            <p className="dashbd-widget-title">
              <PiLinuxLogo className="me-1" size={22} />
              Linux
            </p>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="table-heading">
                  <th className="first-col">Status</th>
                  <th>Name</th>
                  {columns.map((col, colIndex) => (
                    <th key={colIndex}>
                      <div className="tableheader-wrap">
                        <span className="mb-2">
                          {col === "USB Ports" && <PiUsb size={18} />}
                          {col === "SD Ports" && <PiSimCardLight size={18} />}
                          {col === "CD/DVDs" && <PiDiscLight size={18} />}
                          {col === "Lock Device" && <PiDeviceMobileCameraLight size={18} />}
                          {col === "Bluetooth" && <IoBluetoothOutline size={18} />}
                          {col === "Printers" && <SlPrinter size={18} />}
                          {col === "Shutdown Device" && <PiPlugBold size={18} />}
                          {col === "Reboot Device" && <PiLaptop size={18} />}
                        </span>
                        {col}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="table-body">
                {users.map((user) => (
                  <tr key={user.name}>
                    <td className={user.status === "online" ? "text-success" : "text-danger"}>
                      <span
                        className={`status-dot ${user.status === "online" ? "online" : "offline"
                          }`}
                      ></span>
                    </td>
                    <td>{user.name}</td>
                    {columns.map((col) => (
                      <td key={col}>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={toggleStates[user.name][col]}
                            onChange={() => handleToggle(user.name, col)}
                          />
                          <span className="slider"></span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>Toggle Event</h2>
            <p>
              You toggled <strong>{selectedEvent.event}</strong> for{" "}
              <strong>{selectedEvent.user}</strong>.
            </p>
            <button className="btn btn-light" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceManagement;
