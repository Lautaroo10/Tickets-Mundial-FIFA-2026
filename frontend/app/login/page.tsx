'use client';

import { useState } from 'react';

export default function PaginaLogin() {
  const [view, setView] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviado:', { email, password, name });
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <>
      <header className="header">
        <img className="logo-mundial" src="/Logo-Copa-Mundial.png" alt="Logo" />
        <h1>FIFA WORLD CUP</h1>
      </header>

      <main className="login-main">
        <div className="login-box">
          <h2 className="login-titulo">FIFA WORLD CUP</h2>

          {view === 'login' && (
            <form onSubmit={handleSubmit} className="form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
              <button type="submit" className="btn-primary">
                INICIAR SESIÓN
              </button>
            </form>
          )}

          {view === 'register' && (
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
              <button type="submit" className="btn-primary">
                REGISTRARSE
              </button>
            </form>
          )}

          {view === 'forgot' && (
            <form onSubmit={handleSubmit} className="form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
              <button type="submit" className="btn-primary">
                ENVIAR ENLACE
              </button>
            </form>
          )}

          <div className="login-links">
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                setView('login');
                resetForm();
              }}
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                setView('register');
                resetForm();
              }}
            >
              Registrarse
            </button>
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                setView('forgot');
                resetForm();
              }}
            >
              Olvidaste la contraseña
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
