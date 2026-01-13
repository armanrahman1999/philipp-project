import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-4 shadow-sm md:px-5">
      <div className="logo">
        <img
          src="logo/Selise Logo G.svg"
          alt="SELISE Digital Platforms"
          className="h-7 w-auto md:h-7"
        />
      </div>
      <a
        href="/"
        className="text-sm font-medium text-primary-500 hover:text-primary-700 hover:underline"
      >
        Zurück zur Startseite
      </a>
    </header>
  );
};

export default Header;
