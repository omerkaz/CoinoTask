import React from "react";
import { Formik, Field, Form } from "formik";
import styles from "./Subscribe.module.scss";
import { addNotification } from "@src/utils/notifications";
type Values = {
  email: string;
};

function Subscribe() {
  const onSubmit = async (values: Values) => {
    try {
      console.log(values);
      addNotification({
        title: "İşlem Başarılı!",
        message: "",
        type: "success",
      });
    } catch ({ response }) {
      console.log(response);
      addNotification({
        title: "İşlem Başarısız!",
        message: "",
        type: "danger",
      });
    }
  };

  return (
    <div className={styles.row}>
      <div className={styles.subscribe}>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values: Values) => onSubmit(values)}
        >
          <Form className={styles.form}>
            <Field
              className={styles.input}
              name={"email"}
              placeholder="example@gmail.com"
            ></Field>
            <button className={styles.button} type="submit">
              SUBSCRIBE
            </button>
          </Form>
        </Formik>
      </div>
      <div className={styles.icons}>icon icon icon icon</div>
    </div>
  );
}

export default Subscribe;
