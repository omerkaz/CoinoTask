import React, { useRef } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import { CheckoutSchema } from "@utils/yup";
import styles from "./Checkout.module.scss";
import { UserOrderFormValues } from "@src/types";
import { useTranslation } from "react-i18next";
import { getTotalPrice } from "@src/store/cart/slice";
import { useAppSelector } from "@src/store/hooks";

const initialValues: UserOrderFormValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  city: "",
  district: "",
  address: "",
  apartmentNumber: "",
};

function Checkout() {
  const { t } = useTranslation();

  const formikRef = useRef<FormikProps<UserOrderFormValues>>(null);
  const cartItemsTotalPrice = useAppSelector(getTotalPrice);

  // This function is called when the form submit button outside the form is clicked.
  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  // This function is triggered when the form is submitted successfully
  const onSubmit = (values: UserOrderFormValues) => {
    console.log(values);
  };

  return (
    <div className={styles.checkoutRow}>
      <div className={styles.checkoutCol}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: UserOrderFormValues) => onSubmit(values)}
          validationSchema={CheckoutSchema}
          innerRef={formikRef}
        >
          {({ values, errors, handleChange, touched }) => (
            <Form className={styles.checkoutForm}>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="name">{t("form.name")}</label>
                  <span>:</span>
                  <Field
                    as={"input"}
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    values={values.name}
                    placeholder={
                      errors.name && touched.name ? errors.name : t("form.name")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="surname">{t("form.surname")}</label>
                  <span>:</span>
                  <Field
                    as={"input"}
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder={
                      errors.surname && touched.surname
                        ? errors.surname
                        : t("form.surname")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="phone">{t("form.phone")}</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder={
                      errors.phone && touched.phone
                        ? errors.phone
                        : t("form.phone")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="email">{t("form.email")}</label>
                  <span>:</span>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder={
                      errors.email && touched.email
                        ? errors.email
                        : t("form.email")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="city">{t("form.city")}</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    placeholder={
                      errors.city && touched.city ? errors.city : t("form.city")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="district">{t("form.district")}</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="district"
                    id="district"
                    placeholder={
                      errors.district && touched.district
                        ? errors.district
                        : t("form.district")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="address">{t("form.address")}</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    placeholder={
                      errors.address && touched.address
                        ? errors.address
                        : t("form.address")
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex", height: "2rem" }}>
                  <label htmlFor="apartmentNumber">
                    {t("form.apartmentNumber")}
                  </label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="apartmentNumber"
                    id="apartmentNumber"
                    placeholder={
                      errors.apartmentNumber && touched.apartmentNumber
                        ? errors.apartmentNumber
                        : t("form.apartmentNumber")
                    }
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={styles.summaryCol}>
        <div className={styles.summaryHeaderWrap}>
          <h2>{t("checkout.summary")}</h2>
        </div>
        <div className={styles.summaryShippingInfoWrap}>
          <span>{t("checkout.shipping")}</span>
          <span>Gratis</span>
        </div>
        <div className={styles.summaryAmountInfoWrap}>
          <span>{t("checkout.total-amount")}</span>
          <span>{cartItemsTotalPrice}$</span>
        </div>
        <div className={styles.summaryButtonWrap}>
          <button type="submit" onClick={handleSubmit}>
            {t("checkout.confirm-order")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
