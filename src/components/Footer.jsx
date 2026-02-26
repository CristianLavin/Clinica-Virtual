import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-pink-500 p-2 rounded-xl shadow-lg shadow-pink-900/20 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-xl font-black tracking-widest text-white uppercase">
                Clinica<span className="text-pink-600">Virtual</span>
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed">
              Dedicados al cuidado integral de la salud reproductiva con la tecnología más avanzada y un trato humano excepcional.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button 
                  key={i} 
                  className="p-3 bg-white/5 hover:bg-pink-500 hover:text-white rounded-xl transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Servicios', 'Especialistas', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-bold hover:text-pink-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Servicios</h4>
            <ul className="space-y-4">
              {['Control Prenatal', 'Planificación Familiar', 'Ginecología Preventiva', 'Salud Sexual', 'Climaterio'].map((item) => (
                <li key={item}>
                  <span className="text-sm font-bold hover:text-pink-500 cursor-pointer transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Contáctanos</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Phone className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-sm font-bold">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <Mail className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-sm font-bold">contacto@clinicamatrona.cl</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-xl">
                  <MapPin className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-sm font-bold text-gray-500">Atención Virtual 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
          <p>© 2026 Clínica Virtual de Matronas. Hecho con ♡ para tu salud.</p>
          <div className="flex gap-8">
            <span className="hover:text-pink-500 cursor-pointer transition-colors">Términos</span>
            <span className="hover:text-pink-500 cursor-pointer transition-colors">Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
