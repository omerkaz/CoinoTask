import React from "react";
import { Formik, Field, Form } from "formik";
import { addNotification } from "@src/utils/notifications";
import styles from "./SubscribeForm.module.scss";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
type Values = {
  email: string;
};

function SubscribeForm() {
  const { t } = useTranslation();

  const onSubmit = async (values: Values) => {
    try {
      console.log(values);
      addNotification({
        title: "Abonelik işleminiz başarıyla tamamlandı!",
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
              name="email"
              type="email"
              placeholder="example@gmail.com"
            ></Field>
            <button className={styles.button} type="submit">
              {t("subscribeForm.subscribe")}
            </button>
          </Form>
        </Formik>
      </div>
      <div className={styles.icons}>
        <FaTwitterSquare size={30} /> <FaFacebookSquare size={30} />{" "}
        <FaInstagramSquare size={30} />
      </div>
    </div>
  );
}

export default SubscribeForm;
