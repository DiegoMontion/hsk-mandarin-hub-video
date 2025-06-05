
import React, { useState } from 'react';
import { BookOpen, Star, ShoppingCart } from 'lucide-react';

const Books = () => {
  const [selectedLevel, setSelectedLevel] = useState('todos');

  const books = [
    {
      id: 1,
      title: 'HSK 1 - Libro de Texto',
      level: 'HSK1',
      price: 29.99,
      rating: 4.8,
      image: '/placeholder.svg',
      description: 'Libro completo para preparar el examen HSK nivel 1 con vocabulario y gramática básica.'
    },
    {
      id: 2,
      title: 'HSK 1 - Libro de Ejercicios',
      level: 'HSK1',
      price: 24.99,
      rating: 4.7,
      image: '/placeholder.svg',
      description: 'Ejercicios prácticos para reforzar lo aprendido en HSK 1.'
    },
    {
      id: 3,
      title: 'HSK 2 - Libro de Texto',
      level: 'HSK2',
      price: 34.99,
      rating: 4.9,
      image: '/placeholder.svg',
      description: 'Continuación del nivel HSK 1 con nuevo vocabulario y estructuras gramaticales.'
    },
    {
      id: 4,
      title: 'HSK 3 - Libro de Texto',
      level: 'HSK3',
      price: 39.99,
      rating: 4.8,
      image: '/placeholder.svg',
      description: 'Nivel intermedio con textos más complejos y vocabulario avanzado.'
    },
    {
      id: 5,
      title: 'HSK 4A - Libro de Texto',
      level: 'HSK4A',
      price: 44.99,
      rating: 4.9,
      image: '/placeholder.svg',
      description: 'Primera parte del nivel intermedio-alto con temas especializados.'
    },
    {
      id: 6,
      title: 'HSK 4B - Libro de Texto',
      level: 'HSK4B',
      price: 44.99,
      rating: 4.8,
      image: '/placeholder.svg',
      description: 'Segunda parte del nivel intermedio-alto, preparación avanzada.'
    },
    {
      id: 7,
      title: 'HSK 5A - Libro de Texto',
      level: 'HSK5A',
      price: 49.99,
      rating: 4.7,
      image: '/placeholder.svg',
      description: 'Primera parte del nivel avanzado para estudiantes que buscan fluidez.'
    },
    {
      id: 8,
      title: 'HSK 5B - Libro de Texto',
      level: 'HSK5B',
      price: 49.99,
      rating: 4.8,
      image: '/placeholder.svg',
      description: 'Segunda parte del nivel avanzado con textos complejos.'
    },
    {
      id: 9,
      title: 'HSK 6A - Libro de Texto',
      level: 'HSK6A',
      price: 54.99,
      rating: 4.9,
      image: '/placeholder.svg',
      description: 'Primera parte del nivel superior, dominio completo del idioma.'
    },
    {
      id: 10,
      title: 'HSK 6B - Libro de Texto',
      level: 'HSK6B',
      price: 54.99,
      rating: 4.8,
      image: '/placeholder.svg',
      description: 'Segunda parte del nivel superior, maestría total del chino.'
    }
  ];

  const levels = ['todos', 'HSK1', 'HSK2', 'HSK3', 'HSK4A', 'HSK4B', 'HSK5A', 'HSK5B', 'HSK6A', 'HSK6B'];

  const filteredBooks = selectedLevel === 'todos' 
    ? books 
    : books.filter(book => book.level === selectedLevel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 py-8 relative overflow-hidden">
      {/* Decorative Asian Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
          <div className="w-full h-full rounded-full border-4 border-red-600 relative">
            <div className="absolute inset-4 rounded-full border-2 border-yellow-600"></div>
            <div className="absolute inset-8 rounded-full border border-red-400"></div>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-red-600">
            <polygon points="50,10 61,35 90,35 69,57 75,85 50,70 25,85 31,57 10,35 39,35" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 w-40 h-8 bg-gradient-to-r from-red-600 to-yellow-600 opacity-10 rounded-full transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-1 bg-red-600 mr-4"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              书籍 HSK · Libros HSK
            </h1>
            <div className="w-8 h-1 bg-red-600 ml-4"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Encuentra el libro perfecto para tu nivel de chino. Desde principiante hasta maestría completa.
          </p>
          <div className="mt-4 text-sm text-red-700 font-medium">
            传统与现代的完美结合 · Tradición y modernidad en perfecta armonía
          </div>
        </div>

        {/* Level Filter with Asian Styling */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                selectedLevel === level
                  ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg border-red-600 transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-red-50 border-red-200 hover:border-red-400 hover:text-red-700'
              }`}
              style={{
                boxShadow: selectedLevel === level ? '0 8px 25px rgba(220, 38, 38, 0.3)' : ''
              }}
            >
              {level === 'todos' ? '所有级别 · Todos los Niveles' : level}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-100 via-yellow-100 to-orange-100 p-8 flex items-center justify-center relative">
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-red-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-yellow-400 rounded-full opacity-40"></div>
                <BookOpen size={64} className="text-red-600" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-red-100 to-yellow-100 text-red-700 text-sm font-bold rounded-full border border-red-200">
                    {book.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-500 fill-current" size={16} />
                    <span className="text-sm text-gray-600 font-medium">{book.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">{book.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-red-600">${book.price}</span>
                  <button className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-yellow-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <ShoppingCart size={18} />
                    <span>购买 · Comprar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
