import React from 'react'

import {
  Routes,
  Route,
} from "react-router-dom"

import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import BoardPage from "../pages/BoardPage";
import SamplesPage from "../pages/SamplesPage";
import SlideOversPage from "../pages/samples/SlideOversPage";
import SignUpPage from 'src/pages/auth/SignUpPage';
import SignInPage from 'src/pages/auth/SignInPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="samples">
          <Route index element={<SamplesPage/>} />
          <Route path="slideovers" element={<SlideOversPage />} />
        </Route>
        <Route path="auth">
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default Router
