import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../components/Home';
import Books from '../components/Books';
import BookDetails from '../components/BookDetails';
import About from '../components/About';
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: () => fetch('https://api.itbook.store/1.0/new'),
                element: <Books></Books>
            },
            {
                path:'/book/:bookId',
                loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
                element: <BookDetails></BookDetails>
            },
            {
                path:'about',
                element:<About></About>
            }
        ]
    }
])