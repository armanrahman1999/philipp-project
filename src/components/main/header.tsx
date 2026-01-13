const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-4 shadow-sm md:px-5">
      <div className="logo">
        <img
          src="/Selise Logo G.svg"
          alt="SELISE Digital Platforms"
          className="h-7 w-auto md:h-7"
        />
      </div>
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="text-sm font-medium text-blue-500 hover:text-blue-700 hover:underline"
        >
          Zurück zur Startseite
        </a>
      </div>
    </header>
  );
};

export default Header;
