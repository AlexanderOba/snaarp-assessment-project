import { Search } from "lucide-react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";


const Organizations = () => {
    const [selectedOption, setSelectedOption] = useState("all");

    return (
        <div className="organizations-container">
            <h3 className="organizations-title">Organizations</h3>
            <div className="search-box">
                <Search className="position-absolute top-50 translate-middle-y ms-2" size={18} color='#888888' />
                <input
                    type="text"
                    placeholder="Search organizational units"
                    className="search-input"
                />
            </div>
            <div className="radio-group icon-wrapper">
                <label className="radio-item mb-3">
                    <input
                        type="radio"
                        name="organization"
                        value="all"
                        checked={selectedOption === "all"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-label">All organizational units users</span>
                </label>
                <label className="radio-item">
                    <input
                        type="radio"
                        name="organization"
                        value="selected"
                        checked={selectedOption === "selected"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <span className="radio-custom"></span>
                    <span className="radio-label">Selected Organizational units users</span>
                </label>
            </div>
            <div className="select-dropdown">
                <label htmlFor="select">Select</label>
                <select id="select" className="select-input">
                    <option value="none" selected>
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
                <FaChevronDown size={21} color="#888888" />
            </div>
        </div>
    );
};

export default Organizations;
