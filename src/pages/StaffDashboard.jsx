import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_PATIENTS, MOCK_APPOINTMENTS } from '../data/mockData';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  FileText,
  Phone,
  Mail,
  UserCircle,
  X,
  Plus,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';

const StaffDashboard = () => {
  const { user, logout } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedPatient, setSelectedPatient] = useState(null);

  const hours = Array.from({ length: 10 }, (_, i) => i + 9); // 9:00 to 18:00

  const getPatientById = (id) => MOCK_PATIENTS.find(p => p.id === id);

  const getAppointmentsForTime = (hour, date) => {
    return MOCK_APPOINTMENTS.filter(app => 
      app.time.startsWith(hour.toString().padStart(2, '0')) && 
      app.date === format(date, 'yyyy-MM-dd')
    );
  };

  const isLunchTime = (hour) => hour >= 13 && hour < 15;

  return (
    <div className="flex h-screen bg-[#fafafa] font-sans text-gray-900">
      {/* Sidebar - Modern Minimalist */}
      <aside className="w-24 bg-white border-r border-gray-100 flex flex-col items-center py-8 gap-8">
        <div className="bg-pink-500 p-3 rounded-2xl shadow-lg shadow-pink-200">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
        <nav className="flex-1 flex flex-col gap-4">
          <button className="p-4 bg-pink-50 text-pink-600 rounded-2xl transition-all shadow-sm">
            <CalendarIcon className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-300 hover:bg-gray-50 hover:text-gray-600 rounded-2xl transition-all">
            <User className="w-6 h-6" />
          </button>
          <button className="p-4 text-gray-300 hover:bg-gray-50 hover:text-gray-600 rounded-2xl transition-all">
            <FileText className="w-6 h-6" />
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
        <header className="h-24 bg-white border-b border-gray-100 px-10 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Agenda Profesional</h1>
            <p className="text-sm font-medium text-gray-400">Gestiona tus atenciones diarias</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input 
                type="text" 
                placeholder="Buscar paciente..." 
                className="pl-11 pr-6 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500/20 outline-none w-64"
              />
            </div>
            <div className="h-10 w-px bg-gray-100" />
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">{user?.name}</p>
                <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Matrona Especialista</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-pink-100 to-pink-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                <User className="w-6 h-6 text-pink-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-10">
          {/* Calendar Header Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <h2 className="text-3xl font-extrabold text-gray-900 capitalize">
                {format(currentDate, 'MMMM yyyy', { locale: es })}
              </h2>
              <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1">
                <button 
                  onClick={() => setCurrentDate(subWeeks(currentDate, 1))}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button 
                  onClick={() => setCurrentDate(addWeeks(currentDate, 1))}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <button 
                onClick={() => setCurrentDate(new Date())}
                className="px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 shadow-sm transition-all"
              >
                Hoy
              </button>
            </div>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Nueva Cita
            </button>
          </div>

          {/* Modern Agenda Grid */}
          <div className="bg-white rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="p-6 border-b border-gray-100 w-24 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest text-center">Hora</th>
                    {[0, 1, 2, 3, 4].map(dayOffset => {
                      const date = addDays(startOfWeek(currentDate, { weekStartsOn: 1 }), dayOffset);
                      const isToday = isSameDay(date, new Date());
                      return (
                        <th key={dayOffset} className={`p-6 border-b border-gray-100 text-left min-w-[200px] ${isToday ? 'bg-pink-50/30' : ''}`}>
                          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${isToday ? 'text-pink-600' : 'text-gray-400'}`}>
                            {format(date, 'EEEE', { locale: es })}
                          </p>
                          <p className={`text-2xl font-black ${isToday ? 'text-gray-900' : 'text-gray-900'}`}>
                            {format(date, 'd')}
                          </p>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {hours.map(hour => (
                    <tr key={hour} className="group transition-colors">
                      <td className="p-6 text-sm font-black text-gray-300 text-center align-top bg-gray-50/20">
                        {hour}:00
                      </td>
                      {[0, 1, 2, 3, 4].map(dayOffset => {
                        const date = addDays(startOfWeek(currentDate, { weekStartsOn: 1 }), dayOffset);
                        const appointments = getAppointmentsForTime(hour, date);
                        const lunch = isLunchTime(hour);
                        const isToday = isSameDay(date, new Date());

                        return (
                          <td 
                            key={dayOffset} 
                            className={`p-3 align-top min-h-[120px] relative border-l border-gray-50 transition-colors ${lunch ? 'bg-gray-50/50' : 'hover:bg-gray-50/30'} ${isToday ? 'bg-pink-50/5' : ''}`}
                          >
                            {lunch ? (
                              <div className="flex items-center justify-center py-6">
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180">
                                  Receso
                                </span>
                              </div>
                            ) : (
                              <div className="space-y-3">
                                {appointments.map(app => {
                                  const patient = getPatientById(app.patientId);
                                  const statusColors = {
                                    atendido: 'border-blue-200 bg-blue-50/50 text-blue-700',
                                    no_asistio: 'border-red-200 bg-red-50/50 text-red-700',
                                    pendiente: 'border-gray-200 bg-white text-gray-900'
                                  };
                                  const iconColors = {
                                    atendido: 'text-blue-500',
                                    no_asistio: 'text-red-500',
                                    pendiente: 'text-gray-400'
                                  };

                                  return (
                                    <button
                                      key={app.id}
                                      onClick={() => setSelectedPatient(patient)}
                                      className={`w-full text-left p-4 rounded-2xl border transition-all hover:scale-[1.02] hover:shadow-lg shadow-sm group/card ${statusColors[patient.status] || statusColors.pendiente}`}
                                    >
                                      <div className="flex justify-between items-start mb-2">
                                        <span className="text-sm font-black leading-tight truncate pr-2">
                                          {patient.name}
                                        </span>
                                        {patient.status === 'atendido' && <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-500" />}
                                        {patient.status === 'no_asistio' && <XCircle className="w-4 h-4 shrink-0 text-red-500" />}
                                        {patient.status === 'pendiente' && <HelpCircle className="w-4 h-4 shrink-0 text-gray-300" />}
                                      </div>
                                      <div className="flex items-center gap-3">
                                        <div className="flex items-center text-[10px] font-bold opacity-60">
                                          <Clock className="w-3 h-3 mr-1" />
                                          {app.time}
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-current opacity-20" />
                                        <div className="text-[10px] font-bold opacity-60 truncate">
                                          {patient.reason}
                                        </div>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Modern Modal - Glassmorphism style */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedPatient(null)} />
          <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="relative h-48 bg-linear-to-br from-pink-600 to-rose-600 p-10 text-white flex items-end">
              <button 
                onClick={() => setSelectedPatient(null)}
                className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">
                  <UserCircle className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight">{selectedPatient.name}</h2>
                  <div className="flex items-center gap-3 mt-1 opacity-80 font-bold text-sm">
                    <span>{selectedPatient.rut}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>{selectedPatient.age} años</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-10 grid grid-cols-2 gap-10 bg-[#fafafa]">
              <div className="space-y-8">
                <section>
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest block mb-4">Contacto Directo</label>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <Phone className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-sm font-bold text-gray-700">{selectedPatient.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <Mail className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="text-sm font-bold text-gray-700">{selectedPatient.email}</span>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section>
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest block mb-4">Detalles Médicos</label>
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-pink-500 uppercase mb-1">Motivo</p>
                      <p className="text-sm font-bold text-gray-800 leading-relaxed">{selectedPatient.reason}</p>
                    </div>
                    <div className="h-px bg-gray-50" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Antecedentes</p>
                      <p className="text-xs font-medium text-gray-500 leading-relaxed">{selectedPatient.history}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 bg-white border-t border-gray-100 flex justify-between items-center px-10">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                <FileText className="w-4 h-4" />
                Actualizado hoy a las 10:45 AM
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedPatient(null)}
                  className="px-6 py-3 font-bold text-gray-400 hover:text-gray-900 transition-colors"
                >
                  Cerrar
                </button>
                <button 
                  className="px-8 py-3.5 bg-gray-900 text-white font-bold rounded-2xl shadow-xl shadow-gray-200 hover:bg-gray-800 transition-all hover:scale-[1.02]"
                >
                  Iniciar Atención
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDashboard;
