import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LandingPage, Login, LoginInterface, Signup, SignupInterface, Form,UserProfile, SelectedDomainProfessionals, DeveloperDashboard} from './routes/Routes.js'
// import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:3001/api"
// axios.defaults.withCredentials = true



const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path = '/' element = {<LandingPage/>} />
    <Route path = '/login' element = {<LoginInterface/>} />
    <Route path = '/login/role' element = {<Login/>} />
    <Route path = '/signup' element = {<SignupInterface/>} />
    <Route path = '/signup/role' element = {<Signup/>} />
    <Route path = '/form' element = {<Form/>} />
    <Route path = '/user' element = {<UserProfile/>} />
    <Route path = '/selecteddomainprof' element = {<SelectedDomainProfessionals/>} />
    <Route path = '/devdashboard' element = {<DeveloperDashboard/>} />


   </Routes>
   </BrowserRouter>
  )
}

export default App