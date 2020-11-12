import React, {Component} from 'react';
import {  Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import ImageDefault from '../assets/images/default.png'


class Art extends Component {
    url = Global.url;
    

    state={
        article: {},
        status: null
    }
    componentWillMount(){
        this.getArticle();
    }
    getArticle=()=>{
        var id = this.props.match.params.id;

        axios.get(this.url+"Articulo/"+id)
        .then(res =>{
            
            this.setState({
                article: res.data.article,
                status: 'success'
            });
        
        })
        console.log(this.state.article)
    }
    deleteArticle = (id) =>{
        console.log(id);
        swal({
            title: "Seguro?",
            text: "no lo vas a recuperar si le das aceptar!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                        axios.delete(this.url+'Articulo/'+id)
        .then(res =>{
            this.setState({
                article: res.data.article,
                status:'deleted'
            });
            
            
        });
              swal("Articulo eliminado correctamente", {
                icon: "success",
              });

            } else {
              swal("No se ha eliminado el articulo");
            }
          });

    }
    render(){

        if(this.state.status === 'deleted'){
            return <Redirect to ="/blog"/>
        }
        var article= this.state.article;
        console.log(article);
        return(
            <div className="center">

            <section id="content">

                <div id="articles">
                    <article className="article-item article-detail" >
                        <div className="image-wrap">
                            {article.image !== null ? (
                                <img src={this.url+"get-image/"+article.image} alt={article.title} />
                            ) : (
                                <img src={ImageDefault} alt={article.title} />
                            )

                            }
                        
                        </div>
    
                        <h1 className="subheader">{article.title}</h1>
                        <span className="date">
                            <Moment locale="es" fromNow >{article.date}</Moment>
                        </span>
                        <p>{article.content}</p>
                        <button  onClick={

                            ()=>{
                                this.deleteArticle(article._id)
                            }
                        } className="btn btn-danger">Eliminar</button>
                        <Link to={"/blog/editar/"+ article._id} className="btn btn-warning">Editar</Link>
                        
                            <div className="clearfix"></div>
                    </article>
                    </div>
            </section>

            <Sidebar/>
            <div className="clearfix"></div>
            </div>
        );
    }
}
export default Art;