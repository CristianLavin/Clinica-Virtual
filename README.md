# Clinica Virtual de Matronas

Aplicacion web orientada a la atencion virtual de matroneria, creada para conectar pacientes y funcionarios en un entorno digital moderno, ordenado y facil de usar.

La plataforma permite gestionar el acceso segun el tipo de usuario, visualizar informacion clinica y administrar una agenda de atencion con enfoque en controles, acompanamiento y seguimiento de pacientes.

## De Que Trata

`Clinica Virtual de Matronas` es un sistema pensado para apoyar la atencion remota de salud femenina y reproductiva. Su objetivo es ofrecer una experiencia clara tanto para:

- `Pacientes`, que necesitan registrarse, iniciar sesion y acceder a su espacio de atencion.
- `Funcionarios`, que requieren administrar su agenda, revisar pacientes agendadas y consultar fichas tecnicas.

## Caracteristicas Principales

- `Pagina de bienvenida` con diseno institucional, barra de navegacion, carrusel principal y footer informativo.
- `Sistema de registro y login` con acceso diferenciado para pacientes y funcionarios.
- `Agenda para funcionarios` con vista tipo calendario.
- `Horario de atencion` configurado entre `09:00` y `18:00`.
- `Bloque de colacion` visible entre `13:00` y `15:00`.
- `Listado de pacientes agendadas` dentro de cada horario disponible.
- `Estados visuales por color` para cada paciente:
  - Negro: pendiente
  - Azul: atendida
  - Rojo: no asistio o no se conecto
- `Ficha tecnica de paciente` al seleccionar un nombre desde la agenda.
- `Panel de paciente` con acceso a su espacio personal y acciones rapidas.
- `Interfaz moderna y responsiva` construida para escritorio y dispositivos moviles.

## Funcionalidades Por Perfil

### Paciente

- Registro de cuenta
- Inicio de sesion
- Acceso a panel personal
- Visualizacion de proximas atenciones
- Acceso a acciones relacionadas con su seguimiento

### Funcionario

- Inicio de sesion como personal de salud
- Visualizacion de agenda semanal
- Revision de horarios de atencion
- Identificacion rapida del estado de las pacientes
- Apertura de ficha tecnica con datos clinicos basicos

## Ficha Tecnica De Paciente

La ficha tecnica puede incluir datos como:

- Nombre
- RUT
- Edad
- Telefono
- Correo electronico
- Motivo de consulta
- Antecedentes

## Tecnologias Utilizadas

- `React`
- `Vite`
- `React Router`
- `Tailwind CSS v4`
- `Lucide React`
- `date-fns`

## Ejecucion Del Proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar entorno de desarrollo:

```bash
npm run dev
```

3. Generar version de produccion:

```bash
npm run build
```

## Objetivo Del Proyecto

Este proyecto busca digitalizar y mejorar la experiencia de atencion en matroneria, entregando una plataforma clara, moderna y funcional para la gestion de pacientes, controles y atenciones virtuales.
