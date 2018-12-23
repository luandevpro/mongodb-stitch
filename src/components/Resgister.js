import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";

export default class Resgister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (values, { resetForm }) => {
		console.log(values);
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
