//Criação da pagina de login para o cp-5
import React, { useState } from 'react';

function LoginPage({isOpen, onClose}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    if(!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "LEJMconsultoria@gamil.com" && senha === "LEJM"){
            alert("Login realizado com sucesso");
            onClose();
        }else{
            setError("Usuaria ou senha inválidos");
        }
    } ;

  return (
    <div onClick={onClose} className=''>
        <div onClick={(e) = e.stopPropagation()}>
            <div>
                <h1>Login</h1>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;

