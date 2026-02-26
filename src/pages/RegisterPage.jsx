import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, Mail, Lock, User, Briefcase, IdCard, ArrowLeft } from 'lucide-react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('paciente');
  const [rut, setRut] = useState('');
  const [name, setName] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: Date.now(),
      email,
      name,
      rut,
      role: role
    };
    register(userData);
    if (role === 'funcionario') {
      navigate('/staff');
    } else {
      navigate('/patient');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-pink-100/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-3xl animate-pulse" />

      <div className="w-full max-w-lg relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100 p-10 md:p-12">
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-pink-500 rounded-2xl shadow-lg shadow-pink-200 mb-2">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Crea tu cuenta</h2>
            <p className="text-gray-400 font-medium">Únete a nuestra comunidad de cuidado</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex p-1.5 bg-gray-50 rounded-2xl mb-6">
              <button
                type="button"
                onClick={() => setRole('paciente')}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                  role === 'paciente' ? 'bg-white shadow-sm text-pink-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Paciente
              </button>
              <button
                type="button"
                onClick={() => setRole('funcionario')}
                className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                  role === 'funcionario' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Funcionario
              </button>
            </div>

            <div className="space-y-4">
              <div className="group space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Nombre completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Ana María Pérez"
                    className="w-full pl-12 pr-6 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">RUT</label>
                <div className="relative">
                  <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type="text"
                    required
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    placeholder="12.345.678-9"
                    className="w-full pl-12 pr-6 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full pl-12 pr-6 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="group space-y-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-6 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-5 rounded-[24px] font-extrabold text-lg text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 ${
                role === 'funcionario' 
                  ? 'bg-blue-600 shadow-blue-200 hover:bg-blue-700' 
                  : 'bg-pink-600 shadow-pink-200 hover:bg-pink-700'
              }`}
            >
              Registrarme
            </button>

            <div className="pt-4 text-center">
              <p className="text-gray-400 font-medium text-sm">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="text-pink-600 font-extrabold hover:text-pink-700 transition-colors">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
