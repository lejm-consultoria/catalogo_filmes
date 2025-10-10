import logo from '../assets/logo.png';
import { Search, User } from 'lucide-react';

function Header(){
      
    return(
      <header className="bg-gray-900/80 h-20 flex justify-center items-center">
        <div className="text-gray-200 flex flex-row justify-between items-center w-full max-w-6xl px-4">
            <nav className="flex items-center gap-8">
              <img src={logo} alt="Logo do site" className="h-40 w-auto object-contain"/>
              <a href="">Inicio</a>
              <a href="">Séries</a>
              <a href="">Filmes</a>
            </nav>
            <nav className="flex items-center gap-4">
              <Search size={20}></Search>
              <input type="text" placeholder="Buscar" className='bg-transparent border border-gray-600 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
              <button className='cursor-pointer'><User></User></button>
            </nav>
        </div>
      </header>
    )
}

export default Header