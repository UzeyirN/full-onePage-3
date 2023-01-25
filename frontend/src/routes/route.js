import MainRoot from "../components/MainRoot"
import Home from '../pages/Home'
import AboutUs from "../pages/AboutUs"
import Portfolio from "../pages/Portfolio"
import Pricing from "../pages/Pricing"
import Contact from "../pages/Contact"
import Add from "../pages/Add"

const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "portfolio",
                element: <Portfolio />
            },
            {
                path: "pricing",
                element: <Pricing />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "add",
                element: <Add />
            }
        ]
    }
]

export default ROUTES;