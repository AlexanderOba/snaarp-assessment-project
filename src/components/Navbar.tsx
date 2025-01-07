import { Menu, Bell, Search } from 'lucide-react';
import { PiCopy } from "react-icons/pi";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {

  return (
    <nav className="navbar navbar-light ms-2 bg-white border-bottom">
      <div className="container-fluid navbar-wraper ">
        <div className="d-flex align-items-center">
          <button
            onClick={onMenuClick}
            className="btn btn-light me-3"
          >
            <Menu size={20} />
          </button>
        </div>
        <div className="position-relative">
          <Search className="position-absolute top-50 translate-middle-y ms-3" size={18} color='#888888' />
          <input
            type="text"
            placeholder="Search for files and folders"
            className="form-control ps-5 search-input"
            style={{ width: '300px' }}
          />
        </div>
        <div className="d-flex align-items-center">
          <span className="icon-wrapper me-3">
            <Bell size={20} />
          </span>
          <div className="icon-wrapper me-3 copywrap">
            Agent Code: <span className='navtext'>0365o2j37742y3B38</span>
            <PiCopy className='ms-3' fontSize={18} />
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;