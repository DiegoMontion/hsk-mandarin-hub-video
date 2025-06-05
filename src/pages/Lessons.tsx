
import React, { useState } from 'react';
import { Play, Clock, BookOpen, Users } from 'lucide-react';

const Lessons = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const lessons = [
    {
      id: 1,
      title: 'Introducción al HSK 1 - Saludos Básicos',
      duration: '15:32',
      level: 'HSK1',
      description: 'Aprende los saludos más importantes en chino mandarín y cómo presentarte.',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://example.com/video1'
    },
    {
      id: 2,
      title: 'Números del 1 al 10 en Chino',
      duration: '12:45',
      level: 'HSK1',
      description: 'Domina los números básicos con pronunciación y escritura.',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://example.com/video2'
    },
    {
      id: 3,
      title: 'Colores y Objetos Cotidianos',
      duration: '18:20',
      level: 'HSK1',
      description: 'Vocabulario esencial sobre colores y objetos que usas todos los días.',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://example.com/video3'
    },
    {
      id: 4,
      title: 'Estructura de Oraciones Básicas',
      duration: '22:15',
      level: 'HSK2',
      description: 'Aprende a formar oraciones simples en chino con sujeto, verbo y objeto.',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://example.com/video4'
    },
    {
      id: 5,
      title: 'Preguntas con 什么 (qué)',
      duration: '16:30',
      level: 'HSK2',
      description: 'Cómo hacer preguntas usando la partícula interrogativa 什么.',
      thumbnail: '/placeholder.svg',
      videoUrl: 'https://example.com/video5'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Lecciones en Video
          </h1>
          <p className="text-xl text-gray-600">
            Aprende chino con nuestras lecciones paso a paso
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{lessons[selectedVideo].title}</h3>
                  <p className="text-blue-200">Haz clic en una lección para comenzar</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 text-sm font-medium rounded-full">
                    {lessons[selectedVideo].level}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock size={16} />
                    <span>{lessons[selectedVideo].duration}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                  {lessons[selectedVideo].title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {lessons[selectedVideo].description}
                </p>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <BookOpen className="mr-2" size={20} />
                  Lista de Lecciones
                </h3>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    onClick={() => setSelectedVideo(index)}
                    className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                      selectedVideo === index ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                        <Play size={20} className="text-blue-600" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                          {lesson.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span className="px-2 py-1 bg-gray-100 rounded">{lesson.level}</span>
                          <span className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Stats */}
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Estadísticas del Curso</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total de lecciones</span>
                  <span className="font-semibold">{lessons.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duración total</span>
                  <span className="font-semibold">1h 25m</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Estudiantes</span>
                  <div className="flex items-center space-x-1">
                    <Users size={16} className="text-gray-400" />
                    <span className="font-semibold">324</span>
                  </div>
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
