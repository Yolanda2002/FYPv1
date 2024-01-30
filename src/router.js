import {createHashRouter} from "react-router-dom";
import Bookes from "./pages/books";
import Recommendations from "./pages/Recommendations";
import {
    AppOutline,
    MessageOutline,
    // MessageFill,
    UnorderedListOutline,
    // UserOutline,
    SetOutline,
} from 'antd-mobile-icons'
export const mateRouter = [
    {
        path: "/books",
        key: "/books",
        title:'Books',
        element: <Bookes/>,
        icon: <AppOutline />,
    },
    {
        path: "/recommendations",
        key: "/recommendations",
        title:'Recommendations',
        element: <Recommendations/>,
        icon: <UnorderedListOutline />,
    },
    {
        path: "/chat",
        key: "/chat",
        title:'Chat',
        icon: <MessageOutline />,
    },
    {
        path: "/setting",
        key: "/setting",
        title:'Settings',
        icon: <SetOutline />,
    },
]
export const router = createHashRouter(mateRouter);
