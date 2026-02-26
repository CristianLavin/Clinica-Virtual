import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const slides = [
  {
    title: "CONVENIO PRENATAL",
    subtitle: "MATRONA VIRTUAL",
    highlight: "Tu bienestar es mi tranquilidad",
    description: "Ya disponible para Isapre y Fonasa",
    image: "https://plus.unsplash.com/premium_photo-1681826183557-9133034685d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Conoce más",
    color: "blue"
  },
  {
    title: "ACOMPAÑAMIENTO",
    subtitle: "PROFESIONAL",
    highlight: "Cuidado experto en cada etapa",
    description: "Consultas 100% online con matronas certificadas",
    image: "https://images.unsplash.com/photo-1669663981756-85cb3c5d75cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Ver especialistas",
    color: "purple"
  },
  {
    title: "CONTROL GESTACIONAL",
    subtitle: "SIN SALIR DE CASA",
    highlight: "Seguridad y comodidad para ti",
    description: "Agenda tu hora hoy mismo",
    image: "https://plus.unsplash.com/premium_photo-1721995226767-b88bb71d60be?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Reservar ahora",
    color: "blue"
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group rounded-2xl shadow-2xl">
      {/* Slides */}
      <div className="h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            {/* Background Image using <img> tag to avoid ORB issues */}
            <img 
              src={slide.image} 
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gray-900/30" />
            
            {/* Content Overlay */}
            <div className="relative h-full max-w-7xl mx-auto px-12 flex items-center">
              <div className="max-w-2xl space-y-6">
                <div className="animate-in slide-in-from-left-8 duration-700">
                  {/* Styled Text Blocks (UC Christus Style) */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#003B71] px-6 py-3 rounded-lg flex items-center gap-2 shadow-xl">
                        <span className="text-white text-3xl md:text-5xl font-black italic tracking-tighter">
                          {slide.title}
                        </span>
                        <Check className="w-8 h-8 text-[#0071C1]" />
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-[#0071C1] px-4 py-2 rounded-lg shadow-lg">
                        <span className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest">
                          {slide.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex mt-2">
                      <div className="bg-white px-6 py-3 rounded-lg shadow-xl border-l-8 border-[#8E248D]">
                        <span className="text-[#003B71] text-2xl md:text-4xl font-black italic">
                          {slide.highlight}
                          <span className="text-[#0071C1] ml-2">✓✓</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white text-xl md:text-2xl font-black mt-6 drop-shadow-lg uppercase tracking-tight">
                    {slide.description}
                  </p>

                  <div className="pt-8">
                    <button className="px-10 py-4 bg-[#0071C1] text-white rounded-lg font-black text-lg shadow-xl hover:bg-[#005da1] hover:scale-105 active:scale-95 transition-all">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-12 flex gap-4 z-20">
        <button 
          onClick={prev}
          className="p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-12 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 transition-all duration-300 rounded-full ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
