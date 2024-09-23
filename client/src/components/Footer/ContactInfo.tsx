import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full space-y-lg">
      <h3 className="font-semiBold text-lg">Contact Info</h3>
      <ul className="space-y-lg">
        {/* <p className="text-lg font-regular">1234 Dundas St, Toronto, Ontario, Canada</p> */}
        <p className="text-lg font-regular">+1 (437) 987-4419</p>
        <p className="text-lg font-regular">outreachevexia@gmail.com</p>
      </ul>
    </div>
  );
};

export default ContactInfo;
