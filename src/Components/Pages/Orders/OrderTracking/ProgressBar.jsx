import React, { useEffect, useState } from 'react';

const CustomProgressBar = () => {
  const steps = [
    { title: 'Order Received' },
    { title: 'Order Shipped' },
    { title: 'In Transit' },
    { title: 'Delivered' },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(()=> {
    console.log(currentStep);
  },[currentStep])

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
    console.log(currentStep);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    console.log(currentStep);
  };

  return (
    <div className="w-[100%] mx-auto my-8 text-center">
      <div className="flex justify-evenly items-center space-x-12">
        {steps.map((step, index) => (
          <div key={index} className={`relative ${index < currentStep ? 'text-blue-500' : 'text-gray-500'}`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-${index < currentStep ? 'blue' : 'gray'}-500`}>
              {index + 1}
            </div>
            <p className="text-sm mt-2">{step.title}</p>
            {index < steps.length-1 && (
              <div className={`absolute bottom-[3rem] left-[12rem] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[18rem] bg-${index < currentStep-1 ? 'blue' : 'gray'}-500`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between mx-8 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className={`px-4 py-1 text-white rounded-full cursor-pointer ${currentStep === 1?'bg-textGray text-black':'bg-primaryColor'}`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className={`px-4 py-1 bg-primaryColor text-white rounded-full cursor-pointer ${currentStep === steps.length?'bg-textGray text-black':'bg-primaryColor'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomProgressBar;



