export const MOCK_PATIENTS = [
  {
    id: '1',
    name: 'Ana García',
    rut: '12.345.678-9',
    age: 28,
    phone: '+56 9 1234 5678',
    email: 'ana.garcia@email.com',
    reason: 'Control prenatal 20 semanas',
    history: 'Primer embarazo, sin complicaciones previas.',
    status: 'atendido' // azul
  },
  {
    id: '2',
    name: 'María López',
    rut: '15.987.654-3',
    age: 32,
    phone: '+56 9 8765 4321',
    email: 'm.lopez@email.com',
    reason: 'Consulta planificación familiar',
    history: 'Usuaria de ACO por 2 años, desea cambio de método.',
    status: 'no_asistio' // rojo
  },
  {
    id: '3',
    name: 'Carolina Rojas',
    rut: '18.456.789-0',
    age: 25,
    phone: '+56 9 5555 4444',
    email: 'caro.rojas@email.com',
    reason: 'Control post-parto',
    history: 'Parto eutócico hace 10 días.',
    status: 'pendiente' // negro
  },
  {
    id: '4',
    name: 'Javiera Paz',
    rut: '16.123.456-7',
    age: 30,
    phone: '+56 9 3333 2222',
    email: 'jpaz@email.com',
    reason: 'Ingreso control prenatal',
    history: 'Test de embarazo positivo hoy.',
    status: 'pendiente' // negro
  }
];

export const MOCK_APPOINTMENTS = [
  { id: 'a1', patientId: '1', time: '09:00', date: new Date().toISOString().split('T')[0] },
  { id: 'a2', patientId: '2', time: '10:30', date: new Date().toISOString().split('T')[0] },
  { id: 'a3', patientId: '3', time: '11:00', date: new Date().toISOString().split('T')[0] },
  { id: 'a4', patientId: '4', time: '15:30', date: new Date().toISOString().split('T')[0] },
  { id: 'a5', patientId: '1', time: '17:00', date: new Date().toISOString().split('T')[0] },
];
