import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/letra-m.svg';
import FadeMenu from './FadeMenu';

class Header extends Component{

    state = {
        contador:0,
        menu: true
    };
    sumar=()=>{
               this.setState({
            contador: (this.state.contador +1)
        });
    }
    restar(){
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    render(){
        return(
            <header id="header">
            <div className="center">

                <div id="logo">
                   {/*<!---- Iconos diseñados por <a href="https://www.flaticon.es/autores/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>---->*/}
                    <img src={logo} className="app-logo" alt="Logotipo"/>
                    <span id="brand">
                        <strong>Marvin</strong>Pag
                    </span>
                </div>


                <nav id="menu">
                    {this.state.menu &&
                        <ul >
                        <li>
                            <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ruta-prueba" activeClassName="active">Pagina 2</NavLink>
                        </li>
                    </ul>
                    

                    }
                    <FadeMenu />
                    {!this.state.menu &&
                        <FadeMenu />
                    }

                    
                    

                    

                </nav>
                
                <div className="clearfix"></div>
            </div>
        </header>  

        )
    }
}
export default Header;