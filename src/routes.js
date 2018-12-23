import React from "react";
import Home from "./components/Home";
import Resgister from "./components/Resgister";
import Login from "./components/Login";
import Auth from "./components/Auth";

const routes = [
	{
		path: "/",
		exact: true,
		main: () => <Home />,
	},
	{
		path: "/resgister",
		exact: false,
		main: () => <Resgister />,
	},
	{
		path: "/login",
		exact: false,
		main: () => <Login />,
	},
	{
		path: "/auth",
		exact: false,
		main: () => <Auth />,
	},
];

export default routes;
