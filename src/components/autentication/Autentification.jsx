import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../pages/auth/login/Login'
import ForgotPassword from '../../pages/auth/forgotPassword/ForgotPassword'
import ResetPassword from '../../pages/auth/resetPassword/ResetPassword'
import NotFound from '../notFound/NotFound'
import CompletePerfil from "../../pages/CompletePerfil";
import FormEventPage from "../../pages/FormEventPage";
import FormEventEdit from "../../components/FormEvent/FormEventEdit";
import Redirect from '../Redirect/Redirect'
import DontAllow from '../Messages/DontAllow'


function Autentification() {
  const auth = useSelector(state => state.auth)
  const { isLogged, isAdmin } = auth
  // useEffect(() => {

  // }, [isLogged])

  return (
    <>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/forgot_password' element={<ForgotPassword />} exact />
        <Route exact path='/user/reset/:token' element={isLogged ? <NotFound /> : <ResetPassword />} />
        <Route exact path="/formprofile" element={isLogged ? < CompletePerfil /> : <NotFound />} />
        <Route exact path="/formevent" element={isLogged ? <FormEventPage /> : <NotFound />} />
        <Route exact path="/editevent" element={isLogged ? <FormEventEdit /> : <NotFound />} />
        <Route exact path="/redirect" element={<Redirect />} />
        <Route exact path="/dontallow" element={<DontAllow />} />
      </Routes>

    </>
  )
}
export default Autentification
