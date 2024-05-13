import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ title: '', price: '' , img:'',id:uuidv4()}}
      validate={values => {
        const errors = {};
       
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          axios.post("http://localhost:3000/products",values).then(res=>console.log(res.data)).catch(res=>console.log(res.err))
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
          <input
          placeholder='title'
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
          <input
          placeholder='price'
            type="number"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          {errors.price && touched.price && errors.price}
          <input
          placeholder='Image'
            type="text"
            name="img"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.img}
          />
          {errors.img && touched.img && errors.img}
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;