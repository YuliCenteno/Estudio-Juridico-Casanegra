import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function PracticeAreaCard({
  icon: Icon,
  title,
  description,
  linkTo,
  color = '#1e3a8a',
  iconBg = 'bg-primary/10',
  iconText = 'text-primary',
  hoverBg = 'group-hover:bg-primary',
  borderAccent = 'border-border/60',
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <Link
        to={linkTo}
        className={`block h-full bg-card border ${borderAccent} p-8 rounded-2xl card-premium flex flex-col items-start relative overflow-hidden z-10`}
        style={{ borderTopWidth: '4px', borderTopColor: color }}
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150 opacity-15"
          style={{ backgroundColor: color }}
        />
        
        <div
          className={`w-14 h-14 rounded-xl ${iconBg} ${iconText} ${hoverBg} flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-300`}
        >
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground font-serif transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
            {description}
          </p>
        )}
        
        <div
          className={`mt-auto flex items-center text-sm font-medium ${iconText} uppercase tracking-wider`}
        >
          <span className="relative">
            Conocer mas
            <span
              className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: color }}
            />
          </span>
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

export default PracticeAreaCard;