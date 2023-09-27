import React from "react";
import { CodeIcon, HomeIcon, ImageIcon, PhoneIcon } from "./SVG";

const Footer = () => {
  return (
    <footer className='fixed w-full bottom-0 p-4 flex items-center justify-around bg-gray-500 dark:bg-gray-900'>
      <div>
        <HomeIcon />
      </div>
      <div>
        <ImageIcon />
      </div>
      <div>
        <CodeIcon />
      </div>
      <div>
        <PhoneIcon />
      </div>
    </footer>
  );
};

export default Footer;
