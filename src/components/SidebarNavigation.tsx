import React from 'react';

interface SidebarProps {
  activeSection: string;
}

const SidebarNavigation: React.FC<SidebarProps> = ({ activeSection }) => {
  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
  ];

  const getOpacity = (sectionId: string) => {
    return activeSection === sectionId ? 'opacity-100' : 'opacity-50';
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 pr-8 z-40 hidden md:block">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              onClick={() => handleScroll(section.id)}
              className="group block cursor-pointer" // Adicione o cursor para indicar que é clicável
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 hover:scale-125 ${getOpacity(section.id)}`}
              ></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;