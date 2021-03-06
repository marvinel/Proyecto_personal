import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';


class EditArticle extends Component {
    url = Global.url;
    articleId = null;
    titleRef = React.createRef();
    contentRef = React.createRef();


    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount() {
        this.articleId = this.props.match.params.id;
        console.log(this.articleId);
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.',
                alpha_num_space: 'Solo se puede letras espacios y numeros'

            }
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'Articulo/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                });
            });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })


    }
    SaveArticle = (e) => {
        e.preventDefault();
        this.changeState();

        if (this.validator.allValid()) {



            axios.put(this.url + 'Articulo/'+this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        swal(
                            'Articulo creado',
                            'El articulo ha sido creado correactamente',
                            'success'
                        );

                        //Subir imagen
                        if (this.state.selectedFile !== null) {
                            //Sacar el id del articulo fuardado
                            var articleId = this.state.article._id;
                            console.log(articleId);


                            // crear form data y añadir fichero
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );
                            //peticion ajax
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                })
                        } else {

                            this.setState({
                                status: 'success'
                            });
                        }

                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        } else {
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">
                        Editar Articulo
                    </h1>

                    {this.state.article &&
                        <form className="mid-form" onSubmit={this.SaveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={this.state.article.title} ref={this.titleRef} onChange={this.changeState} />
                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea type="text" name="content" defaultValue={this.state.article.content} ref={this.contentRef} onChange={this.changeState}></textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>

                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>
                    }

                {!this.state.article &&
                    <h1 className="subheader">Cargando...</h1>
                }

                </section>

                <Sidebar />
                <div className="clearfix"></div>
            </div>
        );
    }
}
export default EditArticle;