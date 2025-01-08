import { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import Organizations from "../components/OranizationSection";
import { PiDeviceMobileCameraLight, PiDesktopTowerFill, PiLinuxLogo, PiUsb, PiSimCardLight, PiDiscLight, PiLaptop, PiPlugBold } from "react-icons/pi";
import { GrWindows } from "react-icons/gr";
import { IoLogoApple, IoBluetoothOutline } from "react-icons/io5";
import { SlPrinter } from "react-icons/sl";
import { ColumnToggleState, SelectedEvent, ToggleStates } from "../types/DeviceMangement";
import { columns, users } from "../utilities/data";
import { FaChevronDown } from "react-icons/fa6";


const DeviceManagement: React.FC = () => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);
  const [columnsToggleStates, setColumnsToggleStates] = useState<ColumnToggleState>(
    columns.reduce((acc, col) => ({ ...acc, [col]: true }), {})
  );

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

  const handleFilterStatus = (status: any) => {
    const filtered = users.filter((user) =>
      status === "" ? true : user.status === status
    );
    setFilteredUsers(filtered);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleColumnToggle = (col: any) => {
    setColumnsToggleStates((prevState) => ({
      ...prevState,
      [col]: !prevState[col],
    }));

    setToggleStates((prevState) => {
      const updatedState = { ...prevState };
      users.forEach((user) => {
        updatedState[user.name][col] = !columnsToggleStates[col];
      });
      return updatedState;
    });
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);


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

          <div className="table-responsive table-container">
            <table className="styled-table" style={{ width: '100%' }}>
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
                <tr className="row-even">
                  <th></th>
                  <th className="">
                    <div className="custom-dropdown">
                      <select className="select-input" onChange={(e) => handleFilterStatus(e.target.value)}>
                        <option value="">All</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                      </select>
                      <FaChevronDown size={15} color="#888888" className="dropdown-icon"/>
                    </div>
                  </th>
                  {columns.map((col, index) => (
                    <td key={index}>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={columnsToggleStates[col]}
                          onChange={() => handleColumnToggle(col)}
                        />
                        <span className="slider"></span>
                      </label>
                    </td>
                  ))}
                </tr>
                {filteredUsers.map((user, index) => (
                  <tr key={user.name} className={index % 2 === 0 ? "row-odd" : "row-even"}>
                    <td
                      className={user.status === "online" ? "text-success" : "text-danger"}
                    >
                      <span
                        className={`status-dot ${user.status === "online" ? "online" : "offline"}`}
                      ></span>
                    </td>
                    <td className="name-col">{user.name}</td>
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
