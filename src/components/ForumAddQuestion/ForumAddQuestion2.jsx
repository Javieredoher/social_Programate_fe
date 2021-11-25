import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ForumAddQuestion.module.css";
import ReactTagInput from "@pathofdev/react-tag-input"; //Review !
import "@pathofdev/react-tag-input/build/index.css"; //Review !
import { sendData } from "../../helpers/fetch";

import { BiMessageAltX } from "react-icons/bi";
import { BiBox } from "react-icons/bi";

const ForumAddQuestion2 = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [tags, setTags] = useState([]);
  return (
    <section className={styles.section}>
      <div className={styles.section__global}>
        <div className={styles.containerForum}>
          <div className={styles.containerTitle}>
            <h2 className={styles.title}>
              <BiBox size="25" /> Crear pregunta
            </h2>
            <hr className={styles.lineTitle} />
          </div>
      <Formik
        initialValues={{
          title: "test1",
          description: "test1",
          images: "imagenPrueba",
          tags: [],
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion title
          if (!valores.title) {
            errores.title = "Por favor ingresa un titulo";
          }
          // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.title)) {
          //   errores.title =
          //     "El title solo puede contener letras y espacios";
          // }
        

          if (!valores.description) {
            errores.description = "Por favor escriba su aporte";
          }

          if (valores.images.size > 200000) {
            errores.images = "La foto es demasiado pesada";
          }
          return errores;
        }}
        onSubmit={ (valores, { resetForm }) => {
          valores.tags = tags;
          setTags([]);
          resetForm();
          console.log("Formulario enviado");
          console.log(valores);
          // await sendData("posts", valores);
          setTimeout(() => cambiarFormularioEnviado(false), 3000);
        }}
      >
        {({ errors, setFieldValue }) => (
          <Form className={styles.forumAdd}>
            
              <label htmlFor="title">Titulo de pregunta</label>
              <Field type="text" id="title" name="title" className={styles.inputs}/>
              <ErrorMessage
                name="title"
                component={() => <div className="error">{errors.title}</div>}
              />
            

            <div>
              <label htmlFor="description">Escribe tu aporte</label>
              <Field name="description" as="textarea" id="description" />
              <ErrorMessage
                name="description"
                component={() => (
                  <div className="error">{errors.description}</div>
                )}
              />
            </div>
            <div>
              <ReactTagInput
                tags={tags}
                placeholder="Type and press enter"
                onChange={(newTags) => setTags(newTags)}
              />
            </div>
            <div>
              <input
                name="images"
                type="file"
                onChange={(event) => {
                  setFieldValue("images", event.target.files[0]);
                }}
              />
              <ErrorMessage
                name="images"
                component={() => <div className="error">{errors.images}</div>}
              />
            </div>

            <button type="submit">Publicar recurso</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
      </div>
      </div>
    </section>
  );
};

export default ForumAddQuestion2;