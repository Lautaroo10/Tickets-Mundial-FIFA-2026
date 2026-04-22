


export default function Page() {
  return (
    <>
      <header className="header">
        <img className="logo-mundial" src="/Logo-Copa-Mundial.png" alt="Logo" />
        <h1>FIFA WORLD CUP</h1>
      </header>

      <main>
        <h2 className="titulo">PARTIDOS DISPONIBLES</h2>

        <div className="partidos">
          <div className="parte-arriba">
            <p className="dia-numero">16</p>
            <div className="fecha">
              <p className="dia">Martes</p>
              <p className="hora">22:00</p>
            </div>
            <img className="img-logo-mundial" src="/Logo-Copa-Mundial.png" alt="logo" />
          </div>

          <div className="parte-abajo">
            <div className="escudos">
              <img className="img-escudos-local" src="/logo-argentina.png" />
              <p className="vs">VS.</p>
              <img className="img-escudos-visitante" src="/logo-argelia.png" />
            </div>

            <h2 className="selecciones">ARGENTINA - ARGELIA</h2>
            <p className="estadio">Arrowhead Stadium</p>
            <div className="linea-divisora"></div>

            <button className="comprar">Comprar</button>
          </div>
        </div>
      </main>
    </>
  )
}