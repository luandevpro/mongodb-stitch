import React, { Component } from "react";
import { Form, Field } from "formik";

export default class FormField extends Component {
	render() {
		return (
			<Form>
				<Field name="email" placeholder="Email" type="email" />
				<br />
				<br />
				<Field name="password" placeholder="Password" type="password" />
				<br />
				<br />
				<button type="submit">Submit</button>
			</Form>
		);
	}
}
