import React, { Component } from "react";
import { UserPasswordCredential } from "mongodb-stitch-browser-sdk";
import { Formik } from "formik";
import FormField from "./FormField";
import { client } from "../config/stitch";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = values => {
		const credential = new UserPasswordCredential(
			values.email,
			values.password
		);
		client.auth
			.loginWithCredential(credential)
			.then(authedId => {
				console.log(`successfully logged in with id`, authedId);
			})
			.catch(err => console.error(`login failed with error: ${err}`));
	};
	render() {
		var { email, password } = this.state;
		return (
			<Formik
				initialValues={{ email, password }}
				onSubmit={this.handleSubmit}
			>
				{props => <FormField {...props} />}
			</Formik>
		);
	}
}
