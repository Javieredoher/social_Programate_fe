import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ForumAddQuestion.module.css";
import ReactTagInput from "@pathofdev/react-tag-input"; //Review !
import "@pathofdev/react-tag-input/build/index.css"; //Review !
import { sendData } from "../../helpers/fetch";

const ForumAddQuestion = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [tags, setTags] = useState([]);
  return (
    <>
      <Formik
        initialValues={{
          title: "test1",
          input_foro: "Tutorial",
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
          if (!valores.input_foro) {
            errores.input_foro = "Por favor ingrese el tipo de aporte";
          }

          if (!valores.description) {
            errores.description = "Por favor escriba su aporte";
          }

          if (valores.images.size > 200000) {
            errores.images = "La foto es demasiado pesada";
          }
          return errores;
        }}
        onSubmit={async (valores, { resetForms }) => {
          valores.tags = tags;
          setTags([]);
          resetForms();
          console.log("Formulario enviado");
          console.log(valores);
          await sendData("posts", valores);
          setTimeout(() => cambiarFormularioEnviado(false), 3000);
        }}
      >
        {({ errors, setFieldValue }) => (
          <Form className="formulario">
            <div>
              <h2>Crear pregunta</h2>
              <label htmlFor="title">Titulo del recurso</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage
                name="title"
                component={() => <div className="error">{errors.title}</div>}
              />
            </div>

            <div>
              <label htmlFor="input_foro">Tipo de aporte</label>
              <Field name="input_foro" as="select" id="input_foro">
                <option value="">Seleccione una opción</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Libro">Libro</option>
                <option value="Video">Video</option>
                <option value="Enlace">Enlace</option>
                <option value="Curso">Curso</option>
              </Field>
              <ErrorMessage
                name="input_foro"
                component={() => (
                  <div className="error">{errors.input_foro}</div>
                )}
              />
            </div>

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
    </>
  );
};

export default ForumAddQuestion;
