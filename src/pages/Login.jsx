import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { usuarios } from '../data/usuarios'

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const navegar = useNavigate()

  function iniciarSesion(evento) {
    evento.preventDefault()

    const encontrado = usuarios.find(
      (persona) =>
        persona.usuario === usuario &&
        persona.contraseña === contrasena
    )

    if (!encontrado) {
      setError('Usuario o contraseña incorrectos.')
      return
    }

    const sesion = {
      usuario: encontrado.usuario,
      nombre: encontrado.nombre,
      rol: encontrado.rol,
    }

    localStorage.setItem('sigoUsuario', JSON.stringify(sesion))
    setError('')
    navegar('/dashboard')
  }

  return (
    <Layout>
      <form
        className="tarjeta formulario"
        onSubmit={iniciarSesion}
      >
        <h2>Iniciar sesión</h2>

        <label>
          Usuario
          <input
            type="text"
            value={usuario}
            onChange={(evento) => setUsuario(evento.target.value)}
            autoComplete="username"
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={contrasena}
            onChange={(evento) => setContrasena(evento.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        <button type="submit">Entrar</button>

        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
      </form>
    </Layout>
  )
}