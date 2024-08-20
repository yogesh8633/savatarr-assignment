import logo from "./assets/logo.png";
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <header className="flex flex-col justify-between items-center p-4 bg-white ">
      <img src={logo} alt="LOGO"/>
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">HAIR COLOR</a>
        <a href="#" className="text-gray-600 text-sm hover:text-gray-900">CONTACT US</a>

        <a href="#" className="text-black border-l-2 border-black ps-7"><CiSearch size={20}/></a>
      </nav>
    </header>
  );
};

export default Header;
