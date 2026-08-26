import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function CitizenshipCard({ title, items, image, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
    >
      {image && (
        <div className="relative h-56 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
      )}
      
      <div className={`p-8 md:p-10 flex-grow flex flex-col relative z-10 ${image ? '-mt-12' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-serif text-primary mb-8 border-b border-border/80 pb-6 drop-shadow-sm">{title}</h3>
        <ul className="space-y-4 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-muted-foreground text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default CitizenshipCard;