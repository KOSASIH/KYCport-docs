import React, { useState } from 'eact';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <h1>Personalized Onboarding</h1>
      {step === 1 && (
        <div>
          <p>Welcome to the KYC portal!</p>
          <button onClick={handleNextStep}>Next Step</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Here's a tutorial on how to use the portal.</p>
          <button onClick={handlePrevStep}>Previous Step</button>
          <button onClick={handleNextStep}>Next Step</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <p>Congratulations! You've completed the onboarding process.</p>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
