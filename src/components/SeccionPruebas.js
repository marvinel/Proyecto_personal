import React, {Component} from 'react';

class SeccionPruebas extends Component{
   /* constructor(){
        super();
        this.state={
            contador: 0
        }
    }*/

    state={
        contador: 0
    }


    sumar = ()=>{
            
        this.setState({
            contador: this.state.contador +1
        })
    }

    restar = ()=>{
            
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        
        return(
            <section id="content">
                <h2 className="subheader">Ultimos articulos</h2>

                <h2 className="subheader">Estados</h2>
                <p>
                    contador: {this.state.contador}
                </p>
                <p>
                    <input type="button"  value="sumar" onClick={this.sumar}/>
                    <input type="button" value="restar" onClick={this.restar}/>
                </p>

            </section>
        );
    }
}
export default SeccionPruebas;