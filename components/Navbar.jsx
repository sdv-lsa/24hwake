import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="relative p-8">
            {/* flex container */}
            <div className="flex items-center justify-between">
                {/* LOGO */}
                <div className="pt-2">
                    <img src="Logo.svg" alt="24HLogo"></img>
                </div>

                {/* MENU ITEMS */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-grey pt-2 font-lexend">
                        Home
                    </a>
                    <a href="/about" className="text-white hover:text-grey pt-2 font-lexend">
                        About
                    </a>
                    <a
                        href="#"
                        className="text-white bg-orange px-6 py-2 hover:text-grey font-lexend"
                    >
                        Join the Wake
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16 M4 12h16 M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'
            } top-full w-full py-2`}>
                    <ul className="text-white">
                        <li className="mb-2">
                            <a href="/" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/about" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">
                                Join the Wake
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
};

export default Navbar;
