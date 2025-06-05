
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Star, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Decorative Asian Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#dc2626" strokeWidth="3"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="#eab308" strokeWidth="2"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="#dc2626" strokeWidth="1"/>
            <text x="100" y="105" textAnchor="middle" className="fill-red-600 text-3xl font-bold">漢</text>
          </svg>
        </div>
        <div className="absolute top-32 right-20 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-red-600 to-yellow-600 rounded-lg transform rotate-45"></div>
        </div>
        <div className="absolute bottom-40 left-1/4 w-60 h-3 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 opacity-15 rounded-full transform -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 opacity-8">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-red-600">
            <polygon points="50,5 61,30 90,30 69,47 75,80 50,65 25,80 31,47 10,30 39,30" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-1 bg-red-600 mr-6"></div>
              <div className="text-2xl text-red-700 font-bold">中文大师</div>
              <div className="w-16 h-1 bg-red-600 ml-6"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Domina el Chino HSK
            </h1>
            <div className="text-lg text-red-700 mb-4">
              传统智慧，现代教学 · Sabiduría tradicional, enseñanza moderna
            </div>
          </div>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            La plataforma más completa para aprender chino. Libros especializados y lecciones en video
            para todos los niveles HSK, desde principiante hasta maestría completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/libros"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-red-600"
            >
              📚 探索书籍 · Explorar Libros
            </Link>
            <Link
              to="/lecciones"
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-yellow-600"
            >
              🎥 观看课程 · Ver Lecciones
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              为什么选择中文大师？
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700">
              ¿Por qué elegir HSK Master?
            </h3>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <BookOpen className="text-white" size={36} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">专业书籍 · Libros Especializados</h3>
              <p className="text-gray-600 leading-relaxed">
                Libros cuidadosamente seleccionados para cada nivel HSK, desde HSK 1 hasta HSK 6B.
                Siguiendo la tradición académica china milenaria.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-yellow-100 hover:border-yellow-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Play className="text-white" size={36} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">视频教学 · Lecciones en Video</h3>
              <p className="text-gray-600 leading-relaxed">
                Lecciones interactivas con explicaciones claras y ejercicios prácticos.
                Metodología que combina tradición y tecnología moderna.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <TrendingUp className="text-white" size={36} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">进步保证 · Progreso Garantizado</h3>
              <p className="text-gray-600 leading-relaxed">
                Metodología probada que te llevará desde principiante hasta maestría.
                Basada en siglos de tradición educativa china.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">我们的成就</h2>
            <p className="text-xl text-red-100">Nuestros Logros</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-yellow-100">1,500+</div>
              <div className="text-red-100">满意的学生 · Estudiantes Satisfechos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-yellow-100">80+</div>
              <div className="text-red-100">可用书籍 · Libros Disponibles</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-yellow-100">200+</div>
              <div className="text-red-100">视频课程 · Lecciones en Video</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-yellow-100">9个</div>
              <div className="text-red-100">HSK级别 · Niveles HSK</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-red-100">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              开始你的中文之旅
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Comienza tu Viaje en el Chino
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya han comenzado su camino hacia la maestría del chino mandarín.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/libros"
                className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                立即开始 · Comenzar Ahora
              </Link>
              <Link
                to="/sobre-nosotros"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                了解更多 · Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
