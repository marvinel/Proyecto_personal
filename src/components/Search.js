import React, { Component } from 'react';

//Components

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component {
    state = {
        articles: {}

    }

    render() {
        var searched = this.props.match.params.search;
        return (
            <div className="blog">
                <Slider 
                title={"Busqueda: "+ searched} 
                slider="Slider-small"
                />


                <div className="center">
                    <div id="content">
                        {/* articulos que vienen de la api */}
 
                        <Articles
                        search={searched}
                        />

                    </div>

                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}
export default Search;