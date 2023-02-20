import React, { useRef } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import { CheckoutSchema } from "@utils/yup";
import styles from "./Checkout.module.scss";

type CheckoutFormValues = {
  name: string;
  surname: string;
  phone: number | string;
  email: string;
  city: string;
  district: string;
  address: string;
  apartmentNumber: number | string;
};
function Checkout() {
  const initialValues: CheckoutFormValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    address: "",
    apartmentNumber: "",
  };
  const formikRef = useRef<FormikProps<CheckoutFormValues>>(null);

  // This function is called when the form submit button outside the form is clicked.
  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  // This function is triggered when the form is submitted successfully
  const onSubmit = (values: CheckoutFormValues) => {
    console.log(values);
  };

  return (
    <div className={styles.checkoutRow}>
      <div className={styles.checkoutCol}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: CheckoutFormValues) => onSubmit(values)}
          validationSchema={CheckoutSchema}
          innerRef={formikRef}
        >
          {({ values, errors, handleChange, touched }) => (
            <Form className={styles.checkoutForm}>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="name">Name</label>
                  <span>:</span>
                  <Field
                    as={"input"}
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    values={values.name}
                    placeholder={
                      errors.name && touched.name ? errors.name : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="surname">Surname</label>
                  <span>:</span>
                  <Field
                    as={"input"}
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder={
                      errors.surname && touched.surname
                        ? errors.surname
                        : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="phone">Phone</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder={
                      errors.phone && touched.phone ? errors.phone : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="email">Email</label>
                  <span>:</span>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder={
                      errors.email && touched.email ? errors.email : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="city">City</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    placeholder={
                      errors.city && touched.city ? errors.city : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="district">District</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="district"
                    id="district"
                    placeholder={
                      errors.district && touched.district
                        ? errors.district
                        : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="address">Address</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    placeholder={
                      errors.address && touched.address
                        ? errors.address
                        : undefined
                    }
                  />
                </div>
              </div>
              <div className={styles.checkoutFormItem}>
                <div style={{ display: "flex" }}>
                  <label htmlFor="apartmentNumber">Ap. Number</label>
                  <span>:</span>
                  <Field
                    type="text"
                    name="apartmentNumber"
                    id="apartmentNumber"
                    placeholder={
                      errors.apartmentNumber && touched.apartmentNumber
                        ? errors.apartmentNumber
                        : undefined
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
          <h2>Summary</h2>
        </div>
        <div className={styles.summaryShippingInfoWrap}>
          <span>Shipping</span>
          <span>Gratis</span>
        </div>
        <div className={styles.summaryAmountInfoWrap}>
          <span>Total Amount</span>
          <span>0$</span>
        </div>
        <div className={styles.summaryButtonWrap}>
          <button type="submit" onClick={handleSubmit}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
