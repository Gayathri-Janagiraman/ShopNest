import { Link } from 'react-router-dom';
import { menuSections } from '../data/menuData';

function SidebarMenu() {
  return (
    <div>
      {menuSections.map(section => (
        <div key={section.key}>
          <h3>{section.label}</h3>
          <ul>
            {section.subLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SidebarMenu;
