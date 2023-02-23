import React, { useRef } from "react";
import { Formik, Field, Form, FormikProps } from "formik";
import { CheckoutSchema } from "@utils/yup";
import styles from "./Checkout.module.scss";
import {
  UserInformationFormValues,
  CheckoutFormItem,
  Option,
} from "@src/types";
import { useTranslation } from "react-i18next";
import { getTotalPrice } from "@src/store/cart/slice";
import { addFormValues } from "@src/store/checkout/slice";
import { useAppSelector, useAppDispatch } from "@src/store/hooks";
import DropdownMenu from "@src/components/DropdownMenu/DropdownMenu";

const initialValues: UserInformationFormValues = {
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
  const dispatch = useAppDispatch();
  const formikRef = useRef<FormikProps<UserInformationFormValues>>(null);
  const cartItemsTotalPrice = useAppSelector(getTotalPrice);
  const savedForms = useAppSelector((state) => state.checkout.checkoutForms);

  // This function is called when the form submit button outside the form is clicked.
  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  // This function is triggered when the form is submitted successfully
  const onSubmit = (values: UserInformationFormValues) => {
    // send formValues with id and label to redux
    dispatch(
      addFormValues({
        id: savedForms.length,
        label: "zort",
        formValues: values,
      })
    );
  };

  const handleDropdownMenu = (option: Option) => {
    // if select empty option then reset form values
    if (option.value === "") formikRef.current?.resetForm();

    // take matching formValues
    const selectedFormValues = savedForms.find(
      (value) => value.id === option.value
    );

    // and set forms value
    for (const [fieldName, fieldValue] of Object.entries(
      selectedFormValues?.formValues || {}
    )) {
      formikRef.current?.setFieldValue(fieldName, fieldValue);
    }
  };

  // create options for saved forms from store/checkout
  const generateDropdownMenuOptions = (checkoutForms: CheckoutFormItem[]) => {
    const defaultOption = { value: "", label: "Kayıtlı Adreslerim" };
    const options = checkoutForms.map(({ id, label }): Option => {
      return { value: id, label };
    });
    options.unshift(defaultOption);
    return options;
  };

  return (
    <div className={styles.checkoutRow}>
      <div className={styles.checkoutCol}>
        <DropdownMenu
          options={generateDropdownMenuOptions(savedForms)}
          width={"100%" as React.CSSProperties}
          onSelect={(option) => handleDropdownMenu(option)}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={(values: UserInformationFormValues) => onSubmit(values)}
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
                    onChange={handleChange}
                    values={values.surname}
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
                    onChange={handleChange}
                    values={values.phone}
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
                    onChange={handleChange}
                    values={values.email}
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
                    onChange={handleChange}
                    values={values.city}
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
                    onChange={handleChange}
                    values={values.district}
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
                    onChange={handleChange}
                    values={values.address}
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
                    onChange={handleChange}
                    values={values.apartmentNumber}
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
