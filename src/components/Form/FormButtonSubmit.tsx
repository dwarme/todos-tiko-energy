interface FormButtonSubmitProps {
    title: string;
    disabled?: boolean;
}

export default function FormButtonSubmit({title, disabled}: FormButtonSubmitProps){
    return (
        <div className="form-btn-submit__container">
            <button disabled={disabled} type="submit">{title}</button>
        </div>
    )
}