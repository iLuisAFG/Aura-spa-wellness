import React from 'react';
import { statsData } from '../data/statsData';

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-24 bg-cream-50 border-y border-sand-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-sand-200/80">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center px-4 ${
                idx > 0 && idx % 2 === 0 ? 'pt-8 lg:pt-0' : idx % 2 !== 0 && idx > 1 ? 'pt-8 lg:pt-0' : ''
              }`}
            >
              <div className="flex items-baseline justify-center mb-2">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight">
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="font-serif text-2xl sm:text-3xl text-roseDust-500 font-normal ml-0.5">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-base sm:text-lg font-medium text-charcoal-800 tracking-wide mb-1.5">
                {stat.label}
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-500 font-light max-w-xs leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
