import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../components/Home';
import Books from '../components/Books';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/books',
                element: <Books></Books>
            }
        ]
    }
])