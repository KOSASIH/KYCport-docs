import React from 'react';

const Accessibility = () => {
  const [highContrast, setHighContrast] = useState(false);

  const handleHighContrastToggle = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div>
      <h1>Accessibility Features</h1>
      <button onClick={handleHighContrastToggle}>
        {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
      </button>
      <div
        style={{
          backgroundColor: highContrast ? '#000' : '#fff',
          color: highContrast ? '#fff' : '#000',
        }}
      >
        <p>This text will change color and background color based on high contrast mode.</p>
      </div>
    </div>
  );
};

export default Accessibility;
