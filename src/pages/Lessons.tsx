
import React, { useState } from 'react';
import { Play, Clock, BookOpen, Users, Star } from 'lucide-react';

const Lessons = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState('HSK1');

  const lessonsByLevel = {
    HSK1: [
      {
        id: 1,
        title: '第一课：你好 - Saludos Básicos',
        duration: '15:32',
        description: 'Aprende los saludos más importantes en chino mandarín y cómo presentarte.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video1'
      },
      {
        id: 2,
        title: '第二课：数字 - Números del 1 al 10',
        duration: '12:45',
        description: 'Domina los números básicos con pronunciación y escritura.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video2'
      },
      {
        id: 3,
        title: '第三课：颜色 - Colores y Objetos',
        duration: '18:20',
        description: 'Vocabulario esencial sobre colores y objetos cotidianos.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video3'
      }
    ],
    HSK2: [
      {
        id: 4,
        title: '第四课：句子结构 - Estructura de Oraciones',
        duration: '22:15',
        description: 'Aprende a formar oraciones simples con sujeto, verbo y objeto.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video4'
      },
      {
        id: 5,
        title: '第五课：什么 - Preguntas con "qué"',
        duration: '16:30',
        description: 'Cómo hacer preguntas usando la partícula interrogativa 什么.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video5'
      }
    ],
    HSK3: [
      {
        id: 6,
        title: '第六课：时间表达 - Expresiones de Tiempo',
        duration: '25:10',
        description: 'Aprende a expresar tiempo, fechas y horarios en chino.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video6'
      }
    ],
    HSK4A: [
      {
        id: 7,
        title: '第七课：文化话题 - Temas Culturales Avanzados',
        duration: '28:45',
        description: 'Explora temas culturales y sociales en nivel intermedio-alto.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video7'
      }
    ],
    HSK4B: [
      {
        id: 8,
        title: '第八课：商务中文 - Chino de Negocios',
        duration: '32:20',
        description: 'Vocabulario y expresiones para el mundo empresarial.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video8'
      }
    ],
    HSK5A: [
      {
        id: 9,
        title: '第九课：文学欣赏 - Apreciación Literaria',
        duration: '35:15',
        description: 'Análisis de textos literarios clásicos chinos.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video9'
      }
    ],
    HSK5B: [
      {
        id: 10,
        title: '第十课：学术写作 - Escritura Académica',
        duration: '40:30',
        description: 'Técnicas avanzadas de escritura académica en chino.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video10'
      }
    ],
    HSK6A: [
      {
        id: 11,
        title: '第十一课：古典诗词 - Poesía Clásica',
        duration: '45:20',
        description: 'Estudio profundo de la poesía clásica china.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video11'
      }
    ],
    HSK6B: [
      {
        id: 12,
        title: '第十二课：哲学思想 - Filosofía China',
        duration: '50:10',
        description: 'Exploración de las grandes corrientes filosóficas chinas.',
        thumbnail: '/placeholder.svg',
        videoUrl: 'https://example.com/video12'
      }
    ]
  };

  const levels = ['HSK1', 'HSK2', 'HSK3', 'HSK4A', 'HSK4B', 'HSK5A', 'HSK5B', 'HSK6A', 'HSK6B'];
  const currentLessons = lessonsByLevel[selectedLevel] || [];

  const getTotalLessons = () => {
    return Object.values(lessonsByLevel).flat().length;
  };

  const getTotalDuration = () => {
    const allLessons = Object.values(lessonsByLevel).flat();
    return allLessons.length * 25; // Approximation in minutes
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Decorative Asian Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#dc2626" strokeWidth="2"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="#eab308" strokeWidth="1"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="#dc2626" strokeWidth="1"/>
            <text x="100" y="105" textAnchor="middle" className="fill-red-600 text-2xl font-bold">中文</text>
          </svg>
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-red-600 to-yellow-600 rounded-lg transform rotate-45"></div>
        </div>
        <div className="absolute bottom-10 left-1/3 w-48 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 opacity-20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-red-600 mr-4"></div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              视频课程 · Lecciones en Video
            </h1>
            <div className="w-12 h-1 bg-red-600 ml-4"></div>
          </div>
          <p className="text-xl text-gray-700">
            从初学者到大师级别的完整学习旅程
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Aprende chino con nuestras lecciones paso a paso
          </p>
        </div>

        {/* Level Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => {
                setSelectedLevel(level);
                setSelectedVideo(0);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                selectedLevel === level
                  ? 'bg-gradient-to-r from-red-600 to-yellow-600 text-white shadow-lg border-red-600 transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-red-50 border-red-200 hover:border-red-400'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-red-100">
              <div className="aspect-video bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
                </div>
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play size={40} className="ml-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {currentLessons[selectedVideo]?.title || 'Selecciona una lección'}
                  </h3>
                  <p className="text-red-200">点击开始学习 · Haz clic para comenzar</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-red-100 to-yellow-100 text-red-700 text-sm font-bold rounded-full border border-red-200">
                    {selectedLevel}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock size={16} />
                    <span>{currentLessons[selectedVideo]?.duration || '0:00'}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                  {currentLessons[selectedVideo]?.title || 'Lección no disponible'}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentLessons[selectedVideo]?.description || 'Selecciona una lección para ver la descripción.'}
                </p>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-red-100">
              <div className="p-6 border-b border-red-100 bg-gradient-to-r from-red-50 to-yellow-50">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <BookOpen className="mr-2 text-red-600" size={20} />
                  课程列表 · Lista de Lecciones
                </h3>
                <p className="text-sm text-gray-600 mt-1">{selectedLevel}</p>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {currentLessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    onClick={() => setSelectedVideo(index)}
                    className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-red-50 transition-colors duration-200 ${
                      selectedVideo === index ? 'bg-red-50 border-l-4 border-l-red-500' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg flex items-center justify-center border border-red-200">
                        <Play size={16} className="text-red-600 ml-1" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                          {lesson.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {currentLessons.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
                    <p>此级别的课程即将推出</p>
                    <p className="text-sm">Lecciones para este nivel próximamente</p>
                  </div>
                )}
              </div>
            </div>

            {/* Course Stats */}
            <div className="mt-6 bg-white rounded-xl shadow-xl p-6 border-2 border-red-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
                <Star className="mr-2 text-yellow-500" size={18} />
                统计数据 · Estadísticas
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">总课程数 · Total lecciones</span>
                  <span className="font-bold text-red-600">{getTotalLessons()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">总时长 · Duración total</span>
                  <span className="font-bold text-red-600">{Math.floor(getTotalDuration() / 60)}h {getTotalDuration() % 60}m</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">学生人数 · Estudiantes</span>
                  <div className="flex items-center space-x-1">
                    <Users size={16} className="text-gray-400" />
                    <span className="font-bold text-red-600">1,245</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">当前级别 · Nivel actual</span>
                  <span className="font-bold text-yellow-600">{selectedLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
