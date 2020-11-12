import React, { Component } from 'react';

//Components

import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    Nombreref = React.createRef();
    Apellidosref = React.createRef();
    Bioref = React.createRef();
    Hombreref = React.createRef();
    Mujerref = React.createRef();
    Otroref = React.createRef();


    state={
        user:{}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var Genero = 'hombre';

        if(this.Hombreref.current.checked){
            Genero = this.Hombreref.current.value
        }else if(this.Mujerref.current.checked){
            Genero = this.Mujerref.current.value
        }else{
            Genero = this.Otroref.current.value
        }
        var User = {
            nombre: this.Nombreref.current.value,
            apellidos: this.Apellidosref.current.value,
            bio: this.Bioref.current.value,
            genero: Genero

        }
        this.setState({
            user: User
        });
       
        
    }

    render() {
        return (
            <div className="blog">
                <Slider
                    title="Blog"
                    slider="Slider-big"
                    btn="ir al blog"
                />

                <div className="center">
                    <section id="content">

                        <h1 className="subheader">Formulario</h1>

                        {this.state.user.nombre &&
                            <div id="user-data">
                                <p>Nombre: <strong>{this.state.user.nombre}</strong></p>
                            </div>
                        }

                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}> 
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.Nombreref} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.Apellidosref} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.Bioref}></textarea>
                            </div>

                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.Hombreref} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.Mujerref} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.Otroref} /> Otro
                            </div>

                            <div className="clearfix"></div>
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>

                    </section>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default Formulario;