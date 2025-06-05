
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Star, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Domina el Chino HSK
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La plataforma más completa para aprender chino. Libros especializados y lecciones en video
            para todos los niveles HSK, desde principiante hasta avanzado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/libros"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explorar Libros
            </Link>
            <Link
              to="/lecciones"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Ver Lecciones
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ¿Por qué elegir HSK Master?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Libros Especializados</h3>
              <p className="text-gray-600">
                Libros cuidadosamente seleccionados para cada nivel HSK, desde HSK 1 hasta HSK 6.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Lecciones en Video</h3>
              <p className="text-gray-600">
                Lecciones interactivas con explicaciones claras y ejercicios prácticos.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Progreso Garantizado</h3>
              <p className="text-gray-600">
                Metodología probada que te llevará desde principiante hasta avanzado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Estudiantes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Libros Disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Lecciones en Video</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
