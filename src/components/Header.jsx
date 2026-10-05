import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Lista de items de navegación principal
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/areas', label: 'Áreas de Práctica' },
    {
      path: '/ciudadanias-migratorio',
      label: 'Ciudadanías y Migratorio',
      hasDropdown: true,
      subItems: [
        { path: '/ciudadanias-migratorio', label: 'Trámites Generales' },
        { path: '/ciudadania-argentina-por-inversion', label: 'Ciudadanía por Inversión' },
      ]
    },
    { path: '/inversiones', label: 'Inversiones' },
    { path: '/articulos', label: 'Articulos' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-border shadow-sm py-3' 
          : 'bg-background/80 backdrop-blur-md border-border/50 py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group z-50 relative">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'bg-primary text-primary-foreground' : 'bg-primary text-primary-foreground'}`}>
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif leading-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-primary'}`}>Casanegra & Asociados</span>
              <span className={`text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-primary/70'}`}>Estudio Jurídico</span>
            </div>
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.subItems && link.subItems.some(sub => sub.path === location.pathname));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors relative px-2 py-1 flex items-center gap-1 ${
                        isActive 
                          ? 'text-primary' 
                          : 'text-foreground/80 hover:text-primary'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Desplegable en Hover */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-card border border-border/60 rounded-xl shadow-xl py-2 z-50 overflow-hidden"
                        >
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                location.pathname === sub.path
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'text-foreground/80 hover:bg-muted hover:text-primary'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative px-2 py-1 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden z-50 relative text-primary hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* MENÚ MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg xl:hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  if (link.hasDropdown) {
                    return (
                      <div key={link.path} className="flex flex-col gap-1">
                        <Link
                          to={link.path}
                          className={`text-lg font-serif transition-colors px-4 py-2.5 rounded-lg ${
                            isActive 
                              ? 'bg-primary/5 text-primary' 
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          {link.label}
                        </Link>
                        {/* Sub-items indentados para Mobile */}
                        <div className="pl-6 flex flex-col gap-1 border-l-2 border-border/50 ml-4 my-1">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`text-sm py-2 px-3 rounded-md transition-colors ${
                                location.pathname === sub.path
                                  ? 'text-primary font-medium bg-primary/5'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-lg font-serif transition-colors px-4 py-2.5 rounded-lg ${
                        isActive 
                          ? 'bg-primary/5 text-primary' 
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;