import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Context } from "./contexts";
import routes from "./routes";

class App extends Component {
	showRoutes = routes => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				);
			});
		}
		return result;
	};
	render() {
		return (
			<Router>
				<div>
					<Context.Provider>{this.showRoutes(routes)}</Context.Provider>
				</div>
			</Router>
		);
	}
}

export default App;
