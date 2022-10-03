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
import CreateTaskPage from 'src/pages/samples/CreateTaskPage';
import UpdateTaskPage from 'src/pages/samples/UpdateTaskPage';
import GetTasksPage from 'src/pages/samples/GetTasksPage';
import AccountPage from 'src/pages/samples/AccountPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="samples">
          <Route index element={<SamplesPage/>} />
          <Route path="slideovers" element={<SlideOversPage />} />
          <Route path="createTask" element={<CreateTaskPage />} />
          <Route path="updateTask" element={<UpdateTaskPage />} />
          <Route path="getTasks" element={<GetTasksPage />} />
          <Route path="account" element={<AccountPage />} />
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
