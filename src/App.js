import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewPost from './Pages/NewPost';
import Account from './Pages/Account';
import NotFound from './Pages/NotFound';
import MainLayout from './Pages/MainLayout';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import AuthRoute from './components/AuthRoute';
import MyPosts from './Pages/MyPosts';

const isAuthenticated = () => {
  return localStorage.getItem('access');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute  isAuthenticated={isAuthenticated}/>,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />
          },
          {
            path: '/new-post',
            element: <NewPost />,
          },
          {
            path: '/account',
            element: <Account />,
          },
          {
            path: '/my-posts',
            element: <MyPosts />,
          },
        ]
      }
    ]
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;