import { FORM_FIELDS_VALIDITY_LENGHTS } from "../../utils/constanst";
import Form from "../Form";
import AuthCard from "./AuthCard";
import AuthLink from "./AuthLink";
import useFormFields from "../../hooks/use-form-fields";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function AuthLogin() {
    const [httpRequestStatus, setRequestStatus] = useState<{loading: boolean; error?: string}>({loading: false});

    const {
        enteredInputFieldEmail,
        enteredInputFieldPassword,
        handleInputFieldEmailChange,
        handleInputFieldEmailPasswordChange
    } = useFormFields();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(enteredInputFieldEmail, enteredInputFieldPassword);
        setRequestStatus({loading: true});
    }

    const {loading} = httpRequestStatus;
    console.log(loading);

    return (
        <AuthCard>
            <Form onSubmit={handleSubmit}>
                <Form.Header title="Login" />
                <Form.Input
                    inputProps={{
                        id: 'email',
                        type: 'email',
                        name: 'email',
                        autoComplete: 'email',
                        minLength: FORM_FIELDS_VALIDITY_LENGHTS.email.min,
                        maxLength: FORM_FIELDS_VALIDITY_LENGHTS.email.max,
                        disabled: loading,
                    }}
                    labelText="Email"
                    customValidityMessage={`Please enter a valid Email with max ${FORM_FIELDS_VALIDITY_LENGHTS.email.max} character`}
                    onChange={handleInputFieldEmailChange}
                />
                <Form.Input
                    inputProps={{
                        id: 'password',
                        type: 'password',
                        name: 'password',
                        autoComplete: 'password',
                        minLength: FORM_FIELDS_VALIDITY_LENGHTS.password.min,
                        maxLength: FORM_FIELDS_VALIDITY_LENGHTS.password.max,
                        disabled: loading,
                    }}
                    labelText="Password"
                    customValidityMessage={`Please enter a valid Password with max ${FORM_FIELDS_VALIDITY_LENGHTS.password.max} character`}
                    onChange={handleInputFieldEmailPasswordChange}
                />
                {!loading ? (
                    <Form.ButtonSubmit title="Login" />
                ):(
                    <LoadingSpinner />
                )}
                <AuthLink link="/register">Create an Account</AuthLink>
            </Form>

        </AuthCard>

    )
}