import React, { Component } from 'react';

//Components

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Slider 
                title="bienvenido a la pagina de Marvin"  
                slider="Slider-big" 
                btn="ir al blog"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader"> Ultimos articulos</h1>
                        <Articles
                        home='true'
                        />
                    </div>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}
export default Home;