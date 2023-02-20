import * as Yup from "yup";

// Checkout/Form validation
export const CheckoutSchema = Yup.object().shape({
  name: Yup.string().min(2).required("Name is required"),
  surname: Yup.string().min(2).required("Surname is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  address: Yup.string().required("Address is required"),
  apartmentNumber: Yup.string().required("Apartment number is required"),
});
