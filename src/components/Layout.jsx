export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="encabezado">
        <h1>SIGO-GN · Unidad 89</h1>
      </header>

      <main className="contenido">
        {children}
      </main>
    </div>
  )
}