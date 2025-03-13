import React from 'react';
import Navbar from './components/Navbar';
import Programs from './components/Programs';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1609139003551-ee5552a8d1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            ACIONADOS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Uma geração que busca mais de Deus
          </p>
          <a
            href="#programs"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Conheça Nossas Programações
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Quem Somos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Somos um ministério de jovens apaixonados por Jesus, comprometidos em criar um ambiente 
              onde cada pessoa possa experimentar o amor de Deus de maneira profunda e transformadora. 
              Nossa missão é levantar uma geração que vive para a glória de Deus.
            </p>
          </div>
        </div>
      </section>

      <Programs />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Entre em Contato</h2>
            <p className="text-lg text-gray-400 mb-8">
              Venha fazer parte dessa família! Nos encontre nas redes sociais ou envie uma mensagem.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-primary">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-primary">
                YouTube
              </a>
              <a href="#" className="text-white hover:text-primary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;