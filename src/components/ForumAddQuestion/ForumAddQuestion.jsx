import React, { useState, useContext } from "react";
import styles from "./ForumAddQuestion.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sendData } from "../../helpers/fetch";
import { BiMessageAltX } from "react-icons/bi";
import { BiBox, BiImageAdd } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";
import { TagsInput } from "react-tag-input-component";
import { useNavigate } from "react-router-dom";

const ForumAddQuestion = () => {
  const [tags, setTags] = useState([]);
  const [img, setImg] = useState("");


  let navigate = useNavigate();
  const { dataUser, idUser } = useContext(DataContext);
  function getBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        let aux = [];
        let base64 = reader.result;
        aux = base64.split(",")
        setImg(aux[1]);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

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
              description: "test2",
              tags: [],
              images: "",
              type: "questions",
              user_info: idUser,
            }}
            validate={(valores) => {
              let errores = {};

              // Validacion title
              if (!valores.title) {
                errores.title = "Por favor ingresa un titulo";
              }

              if (!valores.description) {
                errores.description = "Por favor escriba su aporte";
              }

              if (valores.images.size > 200000) {
                errores.images = "La foto es demasiado pesada";
              }

              
              return errores;
            }}
            onSubmit={ async (valores, { resetForm }) => {
              valores.tags = tags;
              valores.images = img;
              setTags([]);
              resetForm();
              await sendData("posts", valores);
              navigate("/questions");
            }}
          >
            {({ errors }) => (
              <Form className={styles.forumAdd}>
                <label htmlFor="title">Titulo de la pregunta</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className={styles.inputs}
                />
                <ErrorMessage
                  name="title"
                  component={() => (
                    <div className={styles.error}>
                      <BiMessageAltX color="red" size="18" />
                      {errors.title}
                    </div>
                  )}
                />

                <label htmlFor="description">Escribe tu pregunta</label>
                <Field
                  name="description"
                  as="textarea"
                  id="description"
                  className={styles.textArea}
                />
                <ErrorMessage
                  name="description"
                  component={() => (
                    <div className={styles.error}>
                      <BiMessageAltX color="red" size="18" />
                      {errors.description}
                    </div>
                  )}
                />

                <label htmlFor="tag">Agregar etiquetas</label>
                <TagsInput
                  value={tags}
                  onChange={setTags}
                  name="tags"
                  placeHolder="ingrese tecnologia"
                />
                <em>Presionar enter para agregar</em>

                <div className={styles.inputFile}>
                <label htmlFor="image"><BiImageAdd size="20"/> Añadir imagen </label>
                  <input
                    name="images"
                    type="file"
                    id="image"
                    onChange={(event) => {
                      getBase64(event.target.files[0]);
                    }}
                  />
                </div>
                <ErrorMessage
                  name="images"
                  component={() => (
                    <div className={styles.error}>
                      <BiMessageAltX color="red" size="18" />
                      {errors.images}
                    </div>
                  )}
                />
                <button className={styles.btnAdd} type="submit">
                  Publicar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ForumAddQuestion;
