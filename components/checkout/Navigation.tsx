import React from "react";

const Navigation = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-100 py-4 flex items-center justify-center flex-wrap sm:space-y-0 space-y-4 md:space-x-12">
      <div className="flex items-center space-x-2">
        <div className="border-2 rounded-full flex items-center justify-center border-primary bg-primary text-white w-8 h-8">
          1
        </div>
        <h4 className="font-main text-lg capitalize text-gray-800">
          Order Details
        </h4>
      </div>
      <div className="flex items-center space-x-2">
        <div className="border-2 rounded-full flex items-center justify-center border-primary w-8 h-8">
          2
        </div>
        <h4 className="font-main text-lg capitalize text-gray-800">
          Billing Details
        </h4>
      </div>
      <div className="flex items-center space-x-2">
        <div className="border-2 rounded-full flex items-center justify-center border-primary w-8 h-8">
          3
        </div>
        <h4 className="font-main text-lg capitalize text-gray-800">Payment</h4>
      </div>
    </div>
  );
};

export default Navigation;
