import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Para as setas de navegação (opcional)

// Dados de exemplo para seus filmes em destaque
const featuredMovies = [
  {
    id: 1,
    title: "ECHOES OF THE COSMOS",
    rating: "4.9",
    year: "2024",
    synopsis: "A lone explorer uncovers secrets that pulsate with the very fabric of reality...",
    imageUrl: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sg9jrTGJ00aCXoTMyDpQS72xZU3.jpg", // Substitua por URLs reais da TMDb
    detailsUrl: "#" // Link para a página de detalhes do filme
  },
  {
    id: 2,
    title: "A Última Fronteira",
    rating: "8.0",
    year: "2023",
    synopsis: "Dezenas de prisioneiros violentos são libertados após o avião que os transportava cair numa remota região do Alasca. O único representante da lei no local deve proteger a cidade que ele jurou manter em segurança.",
    imageUrl: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sg9jrTGJ00aCXoTMyDpQS72xZU3.jpg",
    detailsUrl: "#"
  },
  {
    id: 3,
    title: "Pacificador",
    rating: "8.2",
    year: "2022",
    synopsis: "A série explorará as origens do Pacificador, um homem que acredita na paz a qualquer custo - não importa quantas pessoas ele tenha que matar para obtê-la.",
    imageUrl: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/fbW4ym5rgMRkNjNAzpZQX5vkxMf.jpg",
    detailsUrl: "#"
  },
];

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para controlar qual slide está ativo

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredMovies.length);
  };

  // Função para ir para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? featuredMovies.length - 1 : prevSlide - 1
    );
  };

  // Efeito para auto-play (opcional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [currentSlide]); // Reinicia o timer sempre que o slide muda

  const currentMovie = featuredMovies[currentSlide];

  return (
    <section
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-end p-8 md:p-16 transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${currentMovie.imageUrl})` }}
    >
      {/* Botões de navegação (opcional) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors hidden md:block"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors hidden md:block"
      >
        <ChevronRight size={28} />
      </button>

      {/* Conteúdo do filme em destaque */}
      <div className="relative z-10 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {currentMovie.title}
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-2 drop-shadow">
          ⭐ {currentMovie.rating} | {currentMovie.year}
        </p>
        <p className="text-base md:text-lg mb-6 leading-relaxed drop-shadow">
          {currentMovie.synopsis}
        </p>
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Ver Detalhes
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
            + Adicionar à Lista
          </button>
        </div>
      </div>

      {/* As Bolinhas de Paginação */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentSlide ? 'bg-white w-8' : 'bg-gray-500 hover:bg-gray-300'}
            `}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Main;