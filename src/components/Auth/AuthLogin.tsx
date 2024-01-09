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

export default function AuthLogin() {
    const navigate = useNavigate()
    const [httpRequestStatus, setRequestStatus] = useState<{loading: boolean; errorMessage?: string}>({loading: false});

    const {
        enteredInputFieldEmail,
        enteredInputFieldPassword,
        handleInputFieldEmailChange,
        handleInputFieldPasswordChange
    } = useFormFields();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setRequestStatus({loading: true});

        const {error} = await TikoTodosApi.auth.login({email: enteredInputFieldEmail, password: enteredInputFieldPassword});
        if(error){
            let errorMessage = '';

            if('detail' in error) errorMessage = error.detail;
            if('email' in error) errorMessage = `Email: ${error.email}`;
            if('password' in error) errorMessage = `Password: ${error.password}`;

            setRequestStatus({loading: false, errorMessage})
            return; 
        }
        
        navigate(SITE_MAP.todos);
    }

    const {loading, errorMessage} = httpRequestStatus;

    return (
        <AuthCard>
            <Form onSubmit={handleSubmit}>
                <Form.Header title="Login" />
                {errorMessage && (
                    <FormErrorMessage message={errorMessage} />
                )}
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
                {!loading ? (
                    <Form.ButtonSubmit title="Login" />
                ):(
                    <LoadingSpinner />
                )}
                <AuthLink link={SITE_MAP.register}>Create an Account</AuthLink>
            </Form>
        </AuthCard>
    )
}