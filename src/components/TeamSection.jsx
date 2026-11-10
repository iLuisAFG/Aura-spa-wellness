import React from 'react';
import { teamData } from '../data/teamData';
import { Award, Sparkles } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="expertos" className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sand-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/60 text-sand-700 text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sage-700" />
            <span>Maestría & Vocación</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight mb-4">
            La magia de nuestros expertos
          </h2>
          
          <p className="text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            Un equipo multidisciplinario de terapeutas holísticos y cosmiatras certificados, comprometidos con el cuidado respetuoso de tu cuerpo y tu piel.
          </p>
        </div>

        {/* 4 Columns in Arch / Pill Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="group card-hover flex flex-col items-center text-center bg-cream-100 rounded-b-3xl rounded-t-[100px] sm:rounded-t-[120px] p-4 pt-4 border border-sand-200 shadow-sm transition-all duration-300"
            >
              {/* Arch Photo Container */}
              <div className="relative w-full aspect-[4/5] rounded-t-[90px] sm:rounded-t-[110px] rounded-b-2xl overflow-hidden bg-sand-200 mb-5 shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Subtle tag at bottom of photo */}
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-cream-100 bg-charcoal-900/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Information */}
              <h3 className="font-serif text-xl text-charcoal-900 font-medium mb-1">
                {member.name}
              </h3>

              <p className="text-xs uppercase tracking-wider text-sage-700 font-semibold mb-2">
                {member.role}
              </p>

              <div className="w-8 h-px bg-sand-300 mb-3" />

              <p className="text-xs font-medium text-charcoal-700 mb-2">
                {member.specialty}
              </p>

              <p className="text-xs text-charcoal-500 font-light leading-relaxed px-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
