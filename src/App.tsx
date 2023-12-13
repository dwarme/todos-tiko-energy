import React, { Suspense } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import { SITE_MAP } from './utils/constanst';

const PAGES = {
  Index: IndexPage,
  Login: React.lazy(
    () => import(/* webpackChunkName: "login" */ "./pages/LoginPage")
  ),
  Logout: React.lazy(
    () => import(/* webpackChunkName: "logout" */ "./pages/LogoutPage")
  ),
  Todos: React.lazy(
    () => import(/* webpackChunkName: "todos" */ "./pages/TodosPage")
  ),
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={"Loading...."}>
          <Routes>
            <Route path={SITE_MAP.index} element={<PAGES.Index />} />
            <Route path={SITE_MAP.login} element={<PAGES.Login />} />
            <Route path={SITE_MAP.logout} element={<PAGES.Logout />} />
            <Route path={SITE_MAP.todos} element={<PAGES.Todos />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
