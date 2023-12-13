interface FormInputProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelText: string;
}
export default function FormInput({inputProps, labelText}: FormInputProps){
    return (
        <div className="form-cell">
            <div className="form-cell-wrapper form-textbox">
                <input
                    type="text"
                    autoComplete="off"
                    autoCorrect="offf"
                    autoCapitalize="off"
                    required={true}
                    spellCheck={false}
                    {...inputProps}
                    placeholder={undefined}
                    className={`form-textbox-input ${inputProps?.className ?? ''}`}
                />
                <label className="form-textbox-label">{labelText}</label>
            </div>
        </div>
    )
}