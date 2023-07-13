
import React from 'react'
import '../css/loginform.css'
import { Formik,Form,Field } from 'formik';
import axios from '../Api/Axios';
import { useNavigate } from 'react-router';

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

const LoginForm = () => {

  const navigate = useNavigate();

  return (
    <>
    <Formik 
    initialValues={{
      email:'',
      password:'',
    }}

    onSubmit={values => {
      console.log(values)
      
      const LoginInfo=async(values)=>{

        try{
        const res = await axios.post('/auth/login',values)
    
        localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTdjMzZmYjY5YzU4YmQwODNmOGJmNiIsImlhdCI6MTY4OTIzMTMxMCwiZXhwIjoxNjg5ODM2MTEwfQ.K_dgDcsyfYKmsVUs8iRXNz2TrTbENWNaIqnO5O_o4XY")
    
        console.log(res)

        navigate("/dashboard")

        }catch(error){
          console.log(error)

          navigate("/")
        }
      }
      LoginInfo(values);

    }}
    >

{({ errors, touched, isValidating }) => (
        <div className="form-container">
        <Form>
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
      
          <button type="submit">Login</button>
        </Form>
      </div>
      
       
       )}

    </Formik>
    </>
  )
}

export default LoginForm;


