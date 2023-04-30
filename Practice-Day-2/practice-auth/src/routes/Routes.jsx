import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Services from "../components/Services";
import ServicesDetails from "../components/ServicesDetails";
import LoginLayout from "../layout/LoginLayout";
import ServicesLayout from "../layout/ServicesLayout";



const route = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
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
                element: <ServicesDetails></ServicesDetails>
            }
        ]
    }
]);


export default route;