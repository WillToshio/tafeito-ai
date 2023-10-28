import * as React from "react";
import { createRoot } from "react-dom/client";
import {  
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import ProtectedRoute from "./Provider/protectedRoute";
import Login from './Views/Login';
import Task from './Views/Task';
import App from './App';

const Routes = () =>{
    

    const unAuthenticatedRoutes = [
        {
            path: '/login',
            element: <Login />
        }
    ]

    const authenticatedRoutes = [
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/tarefas',
                    element: <Task />
                }
            ]
        }
    ]

    const routes = createBrowserRouter([
        ...unAuthenticatedRoutes,
        ...authenticatedRoutes
    ])
        
    return <RouterProvider router={routes} />
}

export default Routes;