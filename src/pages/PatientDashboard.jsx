import { useAuth } from '../context/AuthContext';
import { Heart, LogOut, Calendar, Clock, FileText, Video, ArrowRight, Bell, Settings, MessageCircle } from 'lucide-react';

const PatientDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-24 bg-white border-r border-gray-100 hidden md:flex flex-col items-center py-8 gap-8">
        <div className="bg-pink-500 p-3 rounded-2xl shadow-lg shadow-pink-200">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
        <nav className="flex-1 flex flex-col gap-4">
          <button className="p-4 bg-pink-50 text-pink-600 rounded-2xl transition-all shadow-sm">
            <Calendar className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-300 hover:bg-gray-50 hover:text-gray-600 rounded-2xl transition-all">
            <FileText className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-300 hover:bg-gray-50 hover:text-gray-600 rounded-2xl transition-all">
            <MessageCircle className="w-6 h-6" />
          </button>
        </nav>
        <button 
          onClick={logout}
          className="p-4 text-gray-300 hover:bg-red-50 hover:text-red-500 rounded-2xl transition-all"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-24 bg-white border-b border-gray-100 px-6 md:px-12 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Mi Panel</h1>
            <p className="text-sm font-medium text-gray-400">Bienvenida de nuevo, {user?.name}</p>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-10 w-px bg-gray-100" />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">{user?.name}</p>
                <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Paciente Premium</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-100 to-blue-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 md:p-12 space-y-10 max-w-7xl mx-auto w-full">
          {/* Welcome Card */}
          <div className="relative overflow-hidden bg-gray-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl shadow-gray-200">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-pink-600/20 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="space-y-6 max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-pink-300 text-[10px] font-bold uppercase tracking-wider">
                  Próxima Consulta
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">Tienes una cita hoy con tu matrona</h2>
                <p className="text-lg text-gray-300 font-medium">Prepárate para tu control prenatal. La videollamada estará disponible 5 minutos antes.</p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                  <button className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-extrabold shadow-xl shadow-pink-900/20 hover:bg-pink-700 transition-all flex items-center gap-3 group">
                    <Video className="w-5 h-5" />
                    Entrar a Consulta
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-extrabold hover:bg-white/20 transition-all border border-white/10">
                    Reprogramar
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-64 h-64 bg-white/5 rounded-[48px] backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between">
                  <Clock className="w-12 h-12 text-pink-400" />
                  <div>
                    <p className="text-4xl font-black">11:00</p>
                    <p className="text-pink-300 font-bold uppercase tracking-widest text-xs mt-1">Hoy, Feb 26</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Sections */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* My Care Team */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Acciones Rápidas</h3>
                <button className="text-sm font-bold text-pink-600 hover:underline transition-all">Ver todo</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <button className="group bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-100 transition-all text-left">
                  <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-2">Agendar Cita</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Reserva un nuevo horario para tu próximo control.</p>
                </button>
                <button className="group bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-pink-100 transition-all text-left">
                  <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="text-xl font-extrabold text-gray-900 mb-2">Mis Fichas</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Revisa tus exámenes y notas de consultas anteriores.</p>
                </button>
              </div>
            </div>

            {/* Specialist Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Tu Especialista</h3>
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-pink-100 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=carolina" alt="Matrona" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900">Carolina Herrera</h4>
                    <p className="text-xs font-bold text-pink-500 uppercase tracking-widest">Matrona de Cabecera</p>
                  </div>
                </div>
                <div className="h-px bg-gray-50" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <Clock className="w-4 h-4 text-gray-300" />
                    Disponible de 09:00 a 18:00
                  </div>
                  <button className="w-full py-4 bg-gray-50 text-gray-900 rounded-2xl font-extrabold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
