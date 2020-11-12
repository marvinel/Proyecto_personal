import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula.titulo, this.props.indice);
    }

    
    render() {

        const { titulo, image } = this.props.pelicula;
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date"> hacer 5minutos</span>
                <Link to="#">leer mas</Link>
                <button onClick={this.marcar}>Marcar como favorita</button>
                <div className="clearfix"></div>
            </article>
        )
    }
}
export default Pelicula;