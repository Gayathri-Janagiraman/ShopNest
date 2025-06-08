import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { menuSections } from '../data/menuData';
import menubar from '../assets/images/menu-bar.png';
import remove from '../assets/images/remove.png';
import { useCart } from '../context/CartContext';
import { toast } from "react-toastify";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSection = (key) => {
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  const handleLogout = async () => {
    try {
      clearCart();
      await signOut(auth);
       toast.info("Logged out successfully");
      setMenuOpen(false);
      navigate('/');
    } catch (error) {
       toast.error("Logout failed");
    }
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setExpandedSection(null);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
   
      <div className="block md:hidden">
        {!menuOpen && (
          <img
            src={menubar}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

     
      <div
        className={`fixed top-0 left-0 h-full w-2/3 md:hidden bg-gray-100 text-gray-800 z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <img
            src={remove}
            alt="close"
            className="w-10 h-10 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4" ref={sectionRef}>
          {menuSections.map((section) => (
            <div key={section.key}>
              <button
                className="text-lg font-semibold w-full text-left"
                onClick={() => toggleSection(section.key)}
              >
                {section.label}
              </button>

              {expandedSection === section.key && (
                <div className="mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200">
                  <ul className="text-sm font-medium text-gray-800 space-y-2 p-2">
                    {section.subLinks.map((item, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-blue-100 rounded-md transition-colors"
                      >
                        <Link to={item.to} onClick={toggleMenu}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-full absolute bottom-6 left-4"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;
