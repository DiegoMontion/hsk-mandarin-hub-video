
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
      title: 'HSK 4 - Libro de Texto',
      level: 'HSK4',
      price: 44.99,
      rating: 4.9,
      image: '/placeholder.svg',
      description: 'Preparación para el nivel intermedio-alto con temas especializados.'
    },
    {
      id: 6,
      title: 'HSK 5 - Libro de Texto',
      level: 'HSK5',
      price: 49.99,
      rating: 4.7,
      image: '/placeholder.svg',
      description: 'Nivel avanzado para estudiantes que buscan fluidez en chino.'
    }
  ];

  const levels = ['todos', 'HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'];

  const filteredBooks = selectedLevel === 'todos' 
    ? books 
    : books.filter(book => book.level === selectedLevel);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Libros HSK
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra el libro perfecto para tu nivel de chino. Desde principiante hasta avanzado.
          </p>
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedLevel === level
                  ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {level === 'todos' ? 'Todos los Niveles' : level}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-green-100 p-8 flex items-center justify-center">
                <BookOpen size={64} className="text-blue-600" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 text-sm font-medium rounded-full">
                    {book.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{book.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${book.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-600 transition-all duration-200 flex items-center space-x-2">
                    <ShoppingCart size={18} />
                    <span>Comprar</span>
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
