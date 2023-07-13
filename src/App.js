import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import BootCamp from './BootCamp/BootCamp'
import Courses from './Courses/Courses'
import Header from './components/Header'
import LoginForm from './Forms/LoginForm'
import Signup from './Forms/Signup'
import DiffCamp from './BootCamp/DiffCamp'
import ShowAddBootcamp from './BootCamp/ShowAddBootcamp'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/diffcourses' element={<DiffCamp></DiffCamp>}></Route>

      <Route path='/dashboard' element={<Dashboard/>}></Route>

      <Route path='/bootcamp' element={<BootCamp/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/header' element={<Header/>}></Route>

      <Route path='showaddbootcamp' element={<ShowAddBootcamp></ShowAddBootcamp>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App





