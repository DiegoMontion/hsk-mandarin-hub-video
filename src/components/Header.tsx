
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Play, User, Home } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/libros', label: 'Libros HSK', icon: BookOpen },
    { path: '/lecciones', label: 'Lecciones', icon: Play },
    { path: '/sobre-nosotros', label: 'Sobre Nosotros', icon: User },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              HSK Master
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-100 to-green-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <BookOpen size={24} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
