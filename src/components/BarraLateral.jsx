
function BarraLateral() {
    return (
        <div className="sidebar">
            <div className="item">
                <img className="icon" src="src/assets/img/hogar-unscreen.gif" />
                <div className="text">Inicio</div>
            </div>
            <div className="item">
                <img className="icon" src="src/assets/img/libro-unscreen.gif" />
                <div className="text">Catalogo</div>
            </div>
            <div className="item">
                <img className="icon" src="src/assets/img/perfil-unscreen.gif" />
                <div className="text">Perfil</div>
            </div>
            <div className="item">
                <img className="icon" src="src/assets/img/apoyo-tecnico-unscreen.gif"  />
                <div className="text">Atencion Al Cliente</div>
            </div>
        </div>
    )
}

export default BarraLateral