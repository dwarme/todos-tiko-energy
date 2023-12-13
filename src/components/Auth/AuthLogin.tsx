import Form from "../Form";
import AuthCard from "./AuthCard";

export default function AuthLogin() {
    return (
        <AuthCard>
            <Form>
                <Form.Header />
                <Form.Input
                    inputProps={{
                        type: 'text'
                    }}
                    labelText="Email"
                />
                <Form.Input
                    inputProps={{
                        type: 'text'
                    }}
                    labelText="Email"
                />
                <Form.ButtonSubmit />
            </Form>

        </AuthCard>

    )
}