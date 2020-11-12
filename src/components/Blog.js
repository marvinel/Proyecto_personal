import React, { Component } from 'react';

//Components

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {
    state = {
        articles: {}

    }

    render() {

        return (
            <div className="blog">
                <Slider 
                title="Blog" 
                slider="Slider-small"
                />


                <div className="center">
                    <div id="content">
                        {/* articulos que vienen de la api */}
 
                        <Articles/>

                    </div>

                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}
export default Blog;