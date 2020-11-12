import React, { Component } from 'react';

import Pelicula from './Pelicula';

import Slider from './Slider';
import Sidebar from './Sidebar';
class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'One piece', image: 'https://elcomercio.pe/resizer/TiF2YY5XB05bJRLH1eDImvtwwLE=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6PH4EQELKFFGHFMYIM4NTGJXPU.jpg' },
            { titulo: 'Naruto', image: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/n/naruto_momentos_tristes_portada.jpg' }
        ],
        nombre: 'Bersherssj',
        fav: '',
        num: 1
    }

    cambiarnombre = () => {

        var random = Math.floor(Math.random() * 2)
        var { peliculas, num } = this.state;
        num = num + 1
        peliculas[random].titulo = peliculas[random].titulo + num;

        this.setState({
            peliculas: peliculas,
            num: num
        });
    }

    favorita = (pelicula, i) => {
        console.log(i);
        console.log(pelicula);
        this.setState({
            fav: pelicula
        });
        console.log("favorita marcada");
    }

    componentWillMount() { //antes de que se monte el componente y el Didmount despues de que se monta el componente

    }

    render() {
        var pStyle = {
            background: 'blue',
            color: 'white',
            padding: '10px'
        };
        var pStyle2 = {
            background: 'red',
            color: 'white',
            padding: '10px'
        };
        return (
            <div className="peliculas">

                <Slider
                    title="bienvenido a la pagina de Marvin"
                    slider="Slider-big"
                    btn="ir al blog"
                />
                <div className="center">
                    <section id="content" className="peliculas">

                        <h2 className="subheader">Peliculas</h2>
                        <p>Seleccion de los animes fav de: {this.state.nombre}</p>
                        <p><button onClick={this.cambiarnombre} className="btn">Cambiar el titulo</button> </p>
                        {this.state.fav ? (
                            <p className="favorita" style={pStyle}>
                                <strong>El anime fav de marvin es: </strong>
                                <span>{this.state.fav}</span>
                            </p>
                        ) : (
                                <p className="favorita" style={pStyle2}>
                                    <strong>Escoge un anime fav </strong>
                                </p>
                            )
                        }

                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <div id="articles" key={i}>
                                        <Pelicula
                                            key={i}
                                            indice={i}
                                            pelicula={pelicula}
                                            marcarFavorita={this.favorita}
                                        />
                                    </div>
                                )
                            })
                        }

                    </section>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}
export default Peliculas;