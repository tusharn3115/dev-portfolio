export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <div className="hover:scale-105 duration-200">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#" className="nav-item">
            Project
          </a>
          <a href="#" className="nav-item">
            About
          </a>
          <a
            href="#"
            className="nav-item bg-white text-gray-900 hover:bg-white/30 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
