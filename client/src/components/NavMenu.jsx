import { useState } from 'react';
import DropdownMenu from './DropDownMenu';
import { menuSections } from '../data/menuData';

const NavMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <ul className="hidden sm:flex gap-7 text-gray-700 font-medium relative">
      {menuSections.map((section) => (
        <DropdownMenu
          key={section.key}
          label={section.label}
          path={`/${section.key}`}
          subLinks={section.subLinks}
          isOpen={openMenu === section.key}
          onToggle={() =>
            setOpenMenu((prev) => (prev === section.key ? null : section.key))
          }
        />
      ))}
    </ul>
  );
};

export default NavMenu;
