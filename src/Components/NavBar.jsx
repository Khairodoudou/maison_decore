import { Link } from 'react-scroll';
import logo from '../images/logo.png'; // ES6 import for the image

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-30 mt-3 w-52 p-2 ">
                        {/* Add correct 'to' values that match section IDs */}
                        <li><Link to="header" smooth={true} duration={500} className="text-black">Home</Link></li>
                        <li><Link to="services" smooth={true} duration={500} className="text-black">Services</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className="text-black">About Us</Link></li>
                    </ul>
                </div>
                <Link to="header" smooth={true} duration={500} className="btn btn-ghost text-xl">
                    <img className='w-36' src={logo} alt='logo' />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="header" smooth={true} duration={500} className="text-black font-semibold">Home</Link></li>
                    <li><Link to="services" smooth={true} duration={500} className="text-black font-semibold">Services</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="text-black font-semibold">About Us</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn px-6 text-dark ">Sign up</a>
            </div>
        </div>
    );
}
