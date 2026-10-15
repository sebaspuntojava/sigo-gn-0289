import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Dashboard() {
  const navegar = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('sigoUsuario'))

  function cerrarSesion() {
    localStorage.removeItem('sigoUsuario')
    navegar('/', { replace: true })
  }

  return (
    <Layout>
      <section className="tarjeta">
        <h2>Bienvenido, {usuario?.nombre}</h2>
        <p>Rol: {usuario?.rol}</p>
        <p>Panel principal del Sistema Integral de Gestión Operativa.</p>

        <button onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </section>
    </Layout>
  )
}