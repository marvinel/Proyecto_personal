import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import SelectedListItem from './SelectedListItem';

class Slider extends Component{

    render(){
        var slider = this.props.slider;
        return(
            <div id="slider" className={slider}>
                {/** 
                    <div className="izq">
                        <SelectedListItem/>
                    </div>
                    */}
                    <div >

                    
                        <h1>{this.props.title}</h1>
                        {this.props.btn &&
                            <Link  to="/blog" className="btn-white"  >{this.props.btn}</Link>

                        }
                    </div>
                        

            </div>
        );
    }
}
export default Slider;