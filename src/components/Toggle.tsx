import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  size?: 'sm' | 'lg';
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, size = 'lg' }) => {
  
  const sizeClass = size === 'lg' ? 'form-switch-lg' : '';
  
  return (
    <div className={`form-check form-switch ${sizeClass}`}>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Toggle;