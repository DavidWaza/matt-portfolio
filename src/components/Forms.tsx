import React from 'react';
import { Formik, FormikHelpers } from 'formik';




// Define the shape of your form values
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message:string;
}

// Define the props for your ContactForms component
interface ContactFormsProps {
  initialValues: FormValues;
}



const ContactForms: React.FC<ContactFormsProps> = ({ initialValues }) => {
    
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className=' flex'>
            <input
              type="text"
              name="firstName"
              placeholder='First name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder='Last name'
              className='ml-[20px]'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            </div>
            
            <input
              type="email"
              name="email"
              placeholder='Email'

              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <input
              type="text"
              name="message"
              placeholder='Message'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForms;
