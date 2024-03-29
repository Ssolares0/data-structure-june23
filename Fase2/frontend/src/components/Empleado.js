
export const Empleado = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
    }

    const cerrarSesion = async(e) => {
        window.open('http://localhost:3000/', '_self');
        
    }

    const GenerarFactura = async(e) => {
        window.open('http://localhost:3000/Factura', '_self');
    }

    const Filtros = async(e) => {
        window.open('http://localhost:3000/Filtros', '_self');
        
    }

    return (
        <div className="container">
        <div className="screen">
            <div className="screen__content">
            
                
                
                <form  onSubmit={handleSubmit} className="login">
                <h3 className='letra'>Menu Empleado</h3>
                    <button className="button login__submit"  value="Aplicacion Filtros" type= "button" onClick={Filtros}>
                        <span className="button__text">Aplicacion de Filtros</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>
                    <button className="button login__submit"  value="Generar Factura"type= "button" id="factura" onClick={GenerarFactura}>
                        <span className="button__text">Generar Factura</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>
                    <button className="button login__submit"  value="Generar Factura"type= "button" id="facturaext" >
                        <span className="button__text">Mostrar Factura extendida</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>
                    <button className="button login__submit"  value="Cerrar sesión"  type= "button"onClick={cerrarSesion}>
                        <span className="button__text">Cerrar Sesion</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                </form>
                
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    );

};