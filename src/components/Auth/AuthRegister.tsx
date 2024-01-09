import { FORM_FIELDS_VALIDITY_LENGHTS, SITE_MAP } from "../../utils/constanst";
import Form from "../Form";
import AuthCard from "./AuthCard";
import AuthLink from "./AuthLink";
import useFormFields from "../../hooks/use-form-fields";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import TikoTodosApi from "../../api";
import { useNavigate } from "react-router";
import FormErrorMessage from "../Form/FormErrorMessage";

export default function AuthRegister() {
    const navigate = useNavigate()
    const [httpRequestStatus, setRequestStatus] = useState<{loading: boolean; errorMessage?: string}>({loading: false});

    const {
        enteredInputFieldFirstName,
        enteredInputFieldLastName,
        enteredInputFieldEmail,
        enteredInputFieldPassword,
        enteredInputFieldPassword2,
        handleInputFieldFirstNameChange,
        handleInputFieldLastNameChange,
        handleInputFieldEmailChange,
        handleInputFieldPasswordChange,
        handleInputFieldPassword2Change,
    } = useFormFields();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        if(enteredInputFieldPassword !== enteredInputFieldPassword2){
            setRequestStatus({loading: false, errorMessage: 'Confirm password is different'});
            return;
        }

        setRequestStatus({loading: true});

        const {error} = await TikoTodosApi.auth.register({
            first_name: enteredInputFieldFirstName,
            last_name: enteredInputFieldLastName,
            email: enteredInputFieldEmail,
            password: enteredInputFieldPassword,
            password2: enteredInputFieldPassword2
        });

        if(error){
            let errorMessage = '';

            if('first_name' in error) errorMessage = `First Name: ${error.first_name}`;
            if('last_name' in error) errorMessage = `Last Name: ${error.last_name}`;
            if('email' in error) errorMessage = `Email: ${error.email}`;
            if('password' in error) errorMessage = `Password: ${error.password}`;
            if('password2' in error) errorMessage = `Password Confirm: ${error.password}`;

            setRequestStatus({loading: false, errorMessage})
            return;
        }
        
        navigate(SITE_MAP.login);
    }

    const {loading, errorMessage} = httpRequestStatus;

    return (
        <AuthCard>
            <Form onSubmit={handleSubmit}>
                <Form.Header title="Register" />
                {errorMessage && (
                    <FormErrorMessage message={errorMessage} />
                )}
                <Form.Input
                    inputProps={{
                        id: 'first_name',
                        type: 'text',
                        name: 'first_name',
                        minLength: FORM_FIELDS_VALIDITY_LENGHTS.name.min,
                        maxLength: FORM_FIELDS_VALIDITY_LENGHTS.name.max,
                        disabled: loading,
                    }}
                    labelText="First Name"
                    onChange={handleInputFieldFirstNameChange}
                />
                <Form.Input
                    inputProps={{
                        id: 'last_name',
                        type: 'text',
                        name: 'last_name',
                        minLength: FORM_FIELDS_VALIDITY_LENGHTS.name.min,
                        maxLength: FORM_FIELDS_VALIDITY_LENGHTS.name.max,
                        disabled: loading,
                    }}
                    labelText="Last Name"
                    onChange={handleInputFieldLastNameChange}
                />
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
                    onChange={handleInputFieldPasswordChange}
                />
                <Form.Input
                    inputProps={{
                        id: 'password2',
                        type: 'password',
                        name: 'password2',
                        autoComplete: 'password2',
                        minLength: FORM_FIELDS_VALIDITY_LENGHTS.password.min,
                        maxLength: FORM_FIELDS_VALIDITY_LENGHTS.password.max,
                        disabled: loading,
                    }}
                    labelText="Password Confirm"
                    onChange={handleInputFieldPassword2Change}
                />
                {!loading ? (
                    <Form.ButtonSubmit title="Register" />
                ):(
                    <LoadingSpinner />
                )}
                <AuthLink link={SITE_MAP.login}>Login</AuthLink>
            </Form>
        </AuthCard>
    )
}