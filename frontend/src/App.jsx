import { useState } from 'react'
import LoginPage from './components/LoginPage'
function App() {
  
  // HOOK-useState- vai controlar a visibilidade do modal
  const [isPageOpen, setIsPageOpen] = useState(false);

  // função para abrir o modal
  const openPAge = ()=>setIsPageOpen(true);

  // função para fechar o modal
  const closePage = ()=>setIsPageOpen(false);
 
  return (
    
    <div className="">
        <h2 className="">Sistema de Projetos</h2>
        <button onClick={openPAge}
          className="">
            Faça seu Login
        </button>
        <LoginPage isOpen={isPageOpen} onClose={closePage}/>
    </div>
  )
}

export default App
