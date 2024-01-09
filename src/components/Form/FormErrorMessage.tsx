interface FormErrorMessageProps {
    message: string;
}

export default function FormErrorMessage({message}: FormErrorMessageProps){
    return (
        <div className="form-error-message__container">
            <span className="form-error-message">{message}</span>
        </div>
    )
}