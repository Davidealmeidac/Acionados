import React from 'react';
import { Users, Zap, Heart } from 'lucide-react';

const programs = [
  {
    name: 'Connect',
    description: 'Um encontro semanal para conexão com Deus e com outros jovens.',
    icon: Users,
    time: 'Sextas às 20h'
  },
  {
    name: 'Overflow',
    description: 'Noite de adoração e ministração da palavra.',
    icon: Heart,
    time: 'Sábados às 19h'
  },
  {
    name: 'Upperroom',
    description: 'Momento de oração e busca pela presença de Deus.',
    icon: Zap,
    time: 'Quartas às 19h30'
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-16">Nossas Programações</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.name} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all">
              <program.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{program.name}</h3>
              <p className="text-gray-400 mb-4">{program.description}</p>
              <p className="text-primary font-semibold">{program.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}