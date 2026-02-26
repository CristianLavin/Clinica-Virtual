import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  User, 
  Briefcase, 
  Stethoscope, 
  Users, 
  Calendar, 
  MessageCircle,
  Activity,
  Award
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="pt-[130px] lg:pt-[160px]">
        <div className="w-full">
          <Carousel />
        </div>
      </section>

      {/* Trust Badges - Institucional Style */}
      <section className="py-10 bg-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-xl text-[#003B71] tracking-tighter">MINSAL CHILE</div>
            <div className="flex items-center gap-2 font-black text-xl text-[#003B71] tracking-tighter">FONASA</div>
            <div className="flex items-center gap-2 font-black text-xl text-[#003B71] tracking-tighter">ISAPRE</div>
            <div className="flex items-center gap-2 font-black text-xl text-[#003B71] tracking-tighter">SUPERINTENDENCIA</div>
            <div className="flex items-center gap-2 font-black text-xl text-[#003B71] tracking-tighter">COLMAT</div>
          </div>
        </div>
      </section>

      {/* Portal Selection Section */}
      <section id="servicios" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              to="/login" 
              className="group flex items-center justify-between p-8 bg-[#0071C1] rounded-2xl shadow-xl hover:bg-[#005da1] transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <User className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="text-white text-3xl font-black italic tracking-tighter uppercase">Portal Paciente</h3>
                <p className="text-blue-100 font-bold">Reserva, recetas y exámenes</p>
              </div>
              <div className="bg-white/20 p-4 rounded-full text-white group-hover:translate-x-2 transition-transform relative z-10">
                <ArrowRight className="w-8 h-8" />
              </div>
            </Link>

            <Link 
              to="/login" 
              className="group flex items-center justify-between p-8 bg-[#8E248D] rounded-2xl shadow-xl hover:bg-[#711d70] transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                <Briefcase className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="text-white text-3xl font-black italic tracking-tighter uppercase">Portal Funcionario</h3>
                <p className="text-purple-100 font-bold">Gestión clínica y agenda</p>
              </div>
              <div className="bg-white/20 p-4 rounded-full text-white group-hover:translate-x-2 transition-transform relative z-10">
                <ArrowRight className="w-8 h-8" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-[#003B71] text-4xl font-black tracking-tighter uppercase italic">Nuestros Servicios</h2>
            <div className="h-1.5 w-24 bg-[#0071C1] mx-auto rounded-full" />
            <p className="text-gray-500 font-bold mt-4 italic">Soluciones integrales para cada etapa de tu vida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Stethoscope />, title: "Control Prenatal", desc: "Seguimiento mes a mes de tu embarazo con las mejores especialistas." },
              { icon: <Activity />, title: "Planificación", desc: "Asesoría experta en métodos anticonceptivos y salud reproductiva." },
              { icon: <Users />, title: "Taller de Parto", desc: "Preparación física y emocional para el momento más importante." },
              { icon: <MessageCircle />, title: "Teleconsulta", desc: "Resuelve tus dudas de forma inmediata sin salir de tu hogar." },
              { icon: <Calendar />, title: "Agenda Online", desc: "Sistema de reserva inteligente disponible las 24 horas." },
              { icon: <Award />, title: "Certificación", desc: "Todas nuestras matronas cuentan con registro en la SIS." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="text-[#0071C1] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-[#003B71] text-xl font-black mb-3 uppercase tracking-tight italic">{service.title}</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-20 px-6 bg-[#003B71] text-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
            Estamos donde tú estés <br />
            <span className="text-[#0071C1]">Atención digital de excelencia</span>
          </h2>
          <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto italic">
            "Nuestra misión es brindar un acompañamiento profesional y humano a todas las mujeres, sin importar la distancia."
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-6">
            <div className="text-center px-8 border-r border-white/10 last:border-none">
              <p className="text-4xl font-black">15k+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0071C1]">Pacientes</p>
            </div>
            <div className="text-center px-8 border-r border-white/10 last:border-none">
              <p className="text-4xl font-black">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0071C1]">Seguro</p>
            </div>
            <div className="text-center px-8 border-r border-white/10 last:border-none">
              <p className="text-4xl font-black">24/7</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0071C1]">Soporte</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WelcomePage;
