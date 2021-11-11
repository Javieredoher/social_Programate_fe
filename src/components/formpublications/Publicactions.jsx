import React, { Fragment } from 'react';


const Publications = () => {


    return (
        <Fragment>
            <form>
                <h1>Noticias</h1>
                <label>Nombre de la noticia</label>
                <input />
                <label>Contenido escrito de la misma</label>
                <input />
                <label>Tecnologías</label>
                <input />
                <label>Imagen</label>
                <input />
                <input type="submit" value="Enviar" />
            </form>
        </Fragment>
    );
};

export default Publications;
