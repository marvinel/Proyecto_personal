import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';

import ImageDefault from '../assets/images/default.png'

class Articles extends Component {
    url = Global.url;
    state = {
        articles: [],
        status: null
    }

    componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;

        if(home === 'true'){
            this.getLastArticles();

        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        }
        
    }

    getLastArticles = () => {
        axios.get(this.url+"Articulos/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });

                console.log(this.state.articles);
            });
    }

    getArticlesBySearch = (searched) => {
        axios.get(this.url+"search/"+searched)
            .then(res => {
                    if(res.data.articles === ''){
                        this.setState({
                            articles: [],
                            status: 'success'
                        });
                    }else{
                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    });
                }
            })
            .catch(err => {
                this.setState({
                    articles: [],
                    status: 'success'
                });
                console.log(err.response.data);
            })
            ;
    }


    getArticles = () => {
        axios.get(this.url+"Articulos")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });

                console.log(this.state.articles);
            });
    }

    render() {
        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template" key={article._id}>
                        <div className="image-wrap">

                            {article.image !== null ? (
                                <img src={this.url+"get-image/"+article.image} alt={article.title} />
                            ) : (
                                <img src={ImageDefault} alt={article.title} />
                            )

                            }
                            
                        </div>

                        <h2>{article.title}</h2>
                        <span className="date"> 
                            <Moment locale="es" fromNow >{article.date}</Moment>
                        </span>
                        <Link to={"/blog/articulo/"+ article._id}>leer mas</Link>
                        <div className="clearfix"></div>
                    </article>
                );
            })
            return (
                <div id="articles">
                    <h1>Articles</h1>
                    {listArticles}

                </div>
            );

        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay articulos bebeto</h2>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                </div>
            );
        }


    }

}
export default Articles;