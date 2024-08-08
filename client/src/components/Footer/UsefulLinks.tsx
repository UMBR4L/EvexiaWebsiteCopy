import React from 'react';
import { Link } from "react-router-dom";

const UsefulLinks: React.FC = () => {
  return (
    <div className="w-[106.96px] space-y-6">
      <h3 className="font-semiBold text-lg">Useful Links</h3>
      <ul className='space-y-6'>
        <li><Link to="/how-it-works" className="text-lg font-regular">How It Works</Link></li>
        <li><Link to="/partners" className="text-lg font-regular">Partners</Link></li>
        <li><Link to="/testimonials" className="text-lg font-regular">Testimonials</Link></li>
        <li><Link to="/articles" className="text-lg font-regular">Articles</Link></li>
      </ul>
    </div>
  );
};

export default UsefulLinks;
