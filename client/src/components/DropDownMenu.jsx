import { Link } from 'react-router-dom';

const DropdownMenu = ({ label, subLinks, path, isOpen, onToggle }) => {
  return (
    <li className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="hover:text-blue-600 cursor-pointer"
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <ul className="text-sm font-medium text-gray-800 space-y-2 p-2">
            {subLinks.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-blue-100 rounded-md transition-colors">
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;


