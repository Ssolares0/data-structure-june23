import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';


export const Admin = () => {
    const [Empleados, setEmpleados] = useState(0);
    const [Pedidos, setPedidos] = useState(0);
    const [imagen, setImagen] = useState();
    
  
   
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/CargaMasiva', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                Empleados: Empleados,
                Pedidos: Pedidos,

            }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'

            }

        })
        
        .then(res => console.log(Empleados, Pedidos))

    };

    const cerrarSesion = async(e) => {
        window.open('http://localhost:3000/', '_self');
    };

    const validar = (data) =>{
        console.log(data)
        setImagen(data.ImageBase64)
    };

    const Reporte = async(e) => {
        e.preventDefault();
        fetch('http://localhost:3001/ReporteTree',{
        })
        .then(response => response.json())
        .then(data => validar(data));
    };

   

        

    return (
        <div className="container">
        <div className="screen">
            <div className="screen__content">
            
                
                
                <form onSubmit={handleSubmit} className="login">
                <h3 className='letra'>Menu Admin</h3>
                    
                    <div className="login__field">
                        
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Cargar Empleados" required onChange={e => setEmpleados(e.target.value)}/>
                    </div>
                    <div className="login__field">
                        
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Cargar Pedidos" required onChange={e => setPedidos(e.target.value)}/>
                    </div>
                    <br/>
                    <button className="button login__submit" type ="submit">
                        <span className="button__text">Enviar Datos</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>	
                    <br/>
                    <button className="button login__submit" type= "button" onClick={Reporte}>
                        <span className="button__text">Reportes</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>	
                    <br/>
                    <button className="button login__submit" type= "button"onClick={cerrarSesion}>
                        <span className="button__text">Cerrar Sesion</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>
                    <br/>		
                    <img src={imagen} width="250" height="250" alt='some value' />		
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