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
            setError("Usuario ou senha inválidos");
        }
    } ;

  return (
    <div onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>
            
            <div>
                <h1>Acesse sua contas</h1>
                <button onClick={onClose}>
                    &times;
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Email </label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Senha</label>
                    <input id='senha' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                {error && (
                    <p>{error}</p>
                )}

                <div>
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginPage;

