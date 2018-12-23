import React, { Component } from "react";
import { client } from "../config/stitch";

export default class Home extends Component {
	componentDidMount() {
		var user = client.auth.user;
		if (user) {
			console.log(user);
		} else {
			console.log("ban phai login");
		}
	}
	render() {
		return <div>homes</div>;
	}
}
