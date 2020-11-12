import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import error from './components/error';
import SeccionPruebas from './components/SeccionPruebas';
import Home from './components/Home';
import Blog from './components/Blog';
import Search from './components/Search';
import Art from './components/Art';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {

    render() {
        return (

            <BrowserRouter >

                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/articulo/:id" component={Art}/>
                    <Route exact path="/blog/articulo/:id" component={Art}/>
                    <Route exact path="/blog/crear" component={CreateArticle}/>
                    <Route exact path="/blog/editar/:id" component={EditArticle}/>
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            var search = props.match.params.search;
                            return (
                                <Redirect to={'/blog/busqueda/' + search} />
                            );
                        }
                    } />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />

                    <Route component={error} />
                </Switch>
                <Footer />
            </BrowserRouter>

        )
    }
}
export default Router;