import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './login/login.jsx'
import SignUp from './SignUp/SignUp.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
       
    },
    {
        path: "signup",
        element: <SignUp/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);
