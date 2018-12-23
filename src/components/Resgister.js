import React, { Component } from "react";
import { UserPasswordAuthProviderClient } from "mongodb-stitch-browser-sdk";
import { Formik } from "formik";
import FormField from "./FormField";
import { client } from "../config/stitch";

export default class Resgister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (values, { resetForm }) => {
		const emailPassClient = client.auth.getProviderClient(
			UserPasswordAuthProviderClient.factory
		);
		emailPassClient
			.registerWithEmail(values.email, values.password)
			.then(() => {
				console.log("Successfully sent account confirmation email!");
			})
			.catch(err => {
				console.log("Error registering new user:", err);
			});
		resetForm({
			email: "",
			password: "",
		});
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
