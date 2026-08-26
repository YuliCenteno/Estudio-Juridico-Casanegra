import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
function Footer() {
  return <footer className="bg-muted pt-20 pb-8 border-t border-border/60">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                <Scale className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif text-primary leading-none">Casanegra & Asociados</span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase mt-1 text-primary/70">Estudio Juridico</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Firma legal especializada, brindando soluciones integrales y estrategicas en areas de alta complejidad normativa.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <a href="https://www.linkedin.com/in/francisco-casanegra-610413191/" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/estudio_casanegra" aria-label="Instagram" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/estcasanegra" aria-label="Facebook" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-lg font-serif text-primary mb-6">Informacion de Contacto</h4>
            <ul className="space-y-6 text-muted-foreground">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="leading-relaxed pt-1">Jose Gigena 2058,<br />Cerro de las Rosas,<br />Cordoba, Argentina</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <a href="tel:+543516506222" className="hover:text-primary transition-colors">+54 351 650 6222</a>
                  <a href="tel:+543512016540" className="hover:text-primary transition-colors">+54 351 201 6540</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:contacto@casanegra.com.ar" className="hover:text-primary transition-colors">secretaria@estudiocasanegra.com</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-serif text-primary mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link to="/areas" className="text-muted-foreground hover:text-primary transition-colors">Areas de Practica</Link></li>
              <li><Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-serif text-primary mb-6">Especialidades</h4>
            <ul className="space-y-4">
              <li><Link to="/ciudadanias-migratorio" className="text-muted-foreground hover:text-primary transition-colors">Ciudadanias</Link></li>
              <li><Link to="/ciudadanias-migratorio" className="text-muted-foreground hover:text-primary transition-colors">Migratorio</Link></li>
              <li><Link to="/inversiones" className="text-muted-foreground hover:text-primary transition-colors">Inversiones</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Estudio Juridico Casanegra & Asociados. Todos los derechos reservados.
          </p>
          <a href="https://github.com/YuliCenteno" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground/70 hover:text-primary transition-colors">
            Desarrollado por ZCS Systems
          </a>
        </div>
      </div>
    </footer>;
}
export default Footer;