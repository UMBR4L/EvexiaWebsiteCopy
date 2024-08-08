import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="w-[166.73px] space-y-6">
      <h3 className="font-semiBold text-lg">Contact Info</h3>
      <ul className="space-y-6">
        <p className="text-lg font-regular">1234 Dundas St, Toronto, Ontario, Canada</p>
        <p className="text-lg font-regular">+1 (437) 983-4973</p>
        <p className="text-lg font-regular">support@evexia.com</p>
      </ul>
    </div>
  );
};

export default ContactInfo;
