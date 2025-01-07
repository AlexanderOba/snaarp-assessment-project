import { Settings } from 'lucide-react';
import { AiOutlineUser } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { LuCircleHelp } from "react-icons/lu";
import { PiBuildingsLight, PiChartBarLight, PiClipboardTextBold, PiCreditCard, PiDevicesFill, PiLockKeyThin } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TbHeartbeat } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import snaarp from '../assets/snaarp.png';
import avatar from '../assets/avatar.png';


interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const navItems = [
    { icon: RxDashboard, label: 'Dashboard', path: '/' },
    { icon: PiBuildingsLight, label: 'Organization & Reg', path: '/billing' },
    { icon: PiClipboardTextBold, label: 'Reporting', path: '/billing' },
    { icon: PiCreditCard, label: 'Billing', path: '/billing' },
    { icon: AiOutlineUser, label: 'Account', path: '/organization' },
    { icon: TbHeartbeat, label: 'Device Health', path: '/reporting' },
    { icon: PiLockKeyThin, label: 'End Point Mgt Security', path: '/billing' },
    { icon: PiDevicesFill, label: 'Device Management', path: '/devices' },
    { icon: BsGlobe, label: 'Website Block', path: '/security' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className={`d-flex flex-column flex-shrink-0 p-2 rounded-md bg-white ${isOpen ? 'w-200' : 'w-100'}`}>
      <h1 className="h5 mb-4 text-center logo">
        {isOpen ? <img src={snaarp} alt='logo' /> : 'S'}
      </h1>
      <ul className="nav nav-pills flex-column mb-4">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link align-items-center ${isActive ? 'active' : 'link-dark'}`
              }
            >
              <item.icon className="me-2" size={20} />
              {isOpen && <span style={{ width: '80%' }}>{item.label}</span>}
            </NavLink>
          </li>
        ))}

        <li className="nav-item nav-item-footer">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `nav-link align-items-center ${isActive ? 'active' : 'link-dark'}`
            }
          >
            <PiChartBarLight className="me-2" size={20} />
            {isOpen && <span style={{ width: '80%' }}>User Panel</span>}
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `nav-link align-items-center ${isActive ? 'active' : 'link-dark'}`
            }
          >
            <LuCircleHelp className="me-2" size={20} />
            {isOpen && <span style={{ width: '80%' }}>Support</span>}
          </NavLink>
        </li>

        <div className="user-profile">
          <div className="profile-picture">
            <img
              src={avatar}
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <span className="user-name">Chidinma Snaarp</span>
            <span className="user-email">aln.lawso@example.com</span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;