
import React from 'react';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre HSK Master
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Somos una plataforma educativa dedicada a enseñar chino mandarín a través de recursos 
            de alta calidad y metodologías probadas.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En HSK Master, creemos que aprender chino debe ser accesible, efectivo y entretenido. 
                Nuestra misión es proporcionar los mejores recursos educativos para que estudiantes 
                de todo el mundo puedan dominar el idioma chino y aprobar los exámenes HSK.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos libros de texto cuidadosamente seleccionados con lecciones en video 
                interactivas para crear una experiencia de aprendizaje completa y efectiva.
              </p>
            </div>
            <div className="lg:text-center">
              <div className="inline-block p-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl">
                <Globe size={120} className="text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Calidad Educativa</h3>
              <p className="text-gray-600">
                Seleccionamos cuidadosamente cada recurso para garantizar la más alta calidad 
                en el contenido educativo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Comunidad</h3>
              <p className="text-gray-600">
                Fomentamos una comunidad de aprendizaje donde estudiantes y profesores 
                pueden compartir conocimientos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por la excelencia en todo lo que hacemos, desde el contenido 
                hasta la experiencia del usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Li Wei</h3>
              <p className="text-blue-600 font-medium mb-2">Director Académico</p>
              <p className="text-gray-600">
                PhD en Lingüística China con 15 años de experiencia en enseñanza de mandarín.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={60} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">María González</h3>
              <p className="text-green-600 font-medium mb-2">Coordinadora Pedagógica</p>
              <p className="text-gray-600">
                Especialista en metodologías de enseñanza de idiomas con certificación HSK nivel 6.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={60} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zhang Ming</h3>
              <p className="text-purple-600 font-medium mb-2">Productor de Contenido</p>
              <p className="text-gray-600">
                Nativo de Beijing, especializado en crear contenido educativo multimedia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Empezar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya están aprendiendo chino con HSK Master.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contactar
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Ver Precios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
