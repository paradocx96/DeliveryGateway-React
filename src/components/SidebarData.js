import React from "react";
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AIIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Product',
        path: '/product',
        icon: <FAIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Delivery',
        path: '/delivery',
        icon: <AIIcons.AiFillCar />,
        cName: 'nav-text'
    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <AIIcons.AiFillSetting />,
        cName: 'nav-text'
    },
]