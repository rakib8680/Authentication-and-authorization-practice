import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Register from "../components/Register";
import Services from "../components/Services";
import ServicesDetails from "../components/ServicesDetails";
import LoginLayout from "../layout/LoginLayout";
import ServicesLayout from "../layout/ServicesLayout";
import PrivateRoute from "./PrivateRoute";



const route = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element : <Hero></Hero>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "services",
        element: <ServicesLayout></ServicesLayout>,
        children: [
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: ":id",
                element:
                    <PrivateRoute>
                        <ServicesDetails></ServicesDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)
            }
        ]
    }

]);


export default route;