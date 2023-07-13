import React from 'react';
import '../css/signup.css'
import { Formik,Form,Field } from 'formik';
import axios from '../Api/Axios';
import { useNavigate } from 'react-router';

const validateName=(value)=>{
    let error;
    if(!value){
        error = 'Required'
    }
    return error;
}

const validateEmail=(value)=>{

    let error;
     if (!value) {
       error = 'Required';
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
       error = 'Invalid email address';
     }
     return error;
   }  

   const validatePassword=(value)=>{
    let error;
  
    if(value === 'admin'){
      error = 'Nice try !';
    }
    return error;
  
   }

const Signup = () => {

  const navigate = useNavigate();

  return (
    <>

   <Formik 
    initialValues={{
      name:'',
      email:'',
      password:'',
      role:'publisher'
    }}

    onSubmit={values => {
      console.log(values);


      const Signup=async(values)=>{

        try{
          const res = await axios.post('/auth/ragister',values)

         localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWZjZWU5N2I1NDJjMGJmN2NiYjNhZiIsImlhdCI6MTY4OTI0MzM2OSwiZXhwIjoxNjg5ODQ4MTY5fQ.DGpgeH15wZ2tV3IIdcaf_nhjBvoU5-iOGbYpJL6hJSk")

          console.log(res)

          navigate("/dashboard")


        }catch(error){
         console.log(error)
         navigate("/")
        }
      }
      Signup(values);
    }}
    >

{({ errors, touched, isValidating }) => (

<div className="form-container">
    <Form>
    <div className="form-group">
            <label htmlFor="name">name</label>
            <Field name="name" type="name" id="name" validate={validateName} />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>


    <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" id="email" validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" id="password" validate={validatePassword} />
            {errors.password && touched.password && <div>{errors.password}</div>}
          </div>

          <button type="submit">Submit</button>
    </Form>
</div>

)}
    </Formik>
    
    </>
  )
}

export default Signup