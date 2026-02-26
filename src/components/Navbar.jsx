import { Link } from 'react-router-dom';
import { Heart, Menu, X, User, Search, Phone, Calendar, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar - White (UC Christus Style) */}
      <div className="bg-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-[#003B71] p-2 rounded-lg">
            <Heart className="w-6 h-6 text-white fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-[#003B71] leading-none uppercase">
              Matrona<span className="text-[#0071C1]">Virtual</span>
            </span>
            <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Excelencia en Cuidado</span>
          </div>
        </Link>

        {/* Top Actions Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 items-center">
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase">Reserva de Hora</p>
              <p className="text-sm font-black text-[#0071C1]">22 676 7000</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase">Urgencias 24/7</p>
              <p className="text-sm font-black text-[#E11D48]">800 265 265</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-sm font-bold text-[#0071C1] hover:text-[#003B71] transition-colors">
            <Search className="w-4 h-4" />
            Buscar
          </button>

          <Link 
            to="/login" 
            className="px-6 py-2 border-2 border-[#0071C1] text-[#0071C1] rounded-lg font-bold text-sm hover:bg-[#0071C1] hover:text-white transition-all flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Portal Paciente
          </Link>

          <button className="px-6 py-2 bg-[#8E248D] text-white rounded-lg font-bold text-sm shadow-lg shadow-purple-200 hover:bg-[#711d70] transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Reserva de Hora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main Navigation - Blue (UC Christus Style) */}
      <nav className="bg-[#0071C1] hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center gap-2">
            {[
              'Información al Paciente',
              'Matronas y Especialidades',
              'Convenios',
              'Exámenes y Procedimientos',
              'Red de Atención',
              'Seguros de Salud'
            ].map((item) => (
              <li key={item}>
                <button className="px-4 py-3 text-white text-[13px] font-bold flex items-center gap-2 hover:bg-[#005da1] transition-colors">
                  {item}
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-2xl lg:hidden transition-all duration-300 border-t border-gray-100 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 gap-2">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link to="/login" className="py-3 px-4 border border-[#0071C1] text-[#0071C1] rounded-xl text-center font-bold text-sm">
              Portal Paciente
            </Link>
            <button className="py-3 px-4 bg-[#8E248D] text-white rounded-xl text-center font-bold text-sm">
              Reserva Hora
            </button>
          </div>
          {['Información al Paciente', 'Matronas y Especialidades', 'Convenios', 'Red de Atención'].map((item) => (
            <button key={item} className="flex items-center justify-between py-4 px-2 text-sm font-bold text-gray-600 border-b border-gray-50">
              {item}
              <ChevronDown className="w-4 h-4 opacity-40" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
