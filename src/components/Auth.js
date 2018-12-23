import React, { Component } from "react";
import { UserPasswordAuthProviderClient } from "mongodb-stitch-browser-sdk";
import { client } from "../config/stitch";

export default class Auth extends Component {
	componentDidMount() {
		// Parse the URL query parameters
		const url = window.location.search;
		const params = new URLSearchParams(url);
		const token = params.get("token");
		const tokenId = params.get("tokenId");

		// Confirm the user's email/password account
		const emailPassClient = client.auth.getProviderClient(
			UserPasswordAuthProviderClient.factory
		);

		return emailPassClient
			.confirmUser(token, tokenId)
			.then(() => this.props.history.push("/login"))
			.catch(err => console.log(err));
	}
	render() {
		return <div>user confirm</div>;
	}
}
