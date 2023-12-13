import { useRef } from "react";

interface FormInputProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelText: string;
    customValidityMessage?: string;
    onChange?: (value: string)=> void;
}
export default function FormInput({inputProps, labelText, customValidityMessage, onChange}: FormInputProps){
    const refInput = useRef<HTMLInputElement>(null);

    const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>)=> {
        if(onChange){
            onChange(event.target.value)
        }
    }

    const handleInputInvalid = ()=>{
        if(customValidityMessage) {
            refInput.current?.setCustomValidity(customValidityMessage);
        }
    }

    return (
        <div className="form-cell">
            <div className="form-cell-wrapper form-textbox">
                <input
                    ref={refInput}
                    type="text"
                    autoComplete="off"
                    autoCorrect="offf"
                    autoCapitalize="off"
                    required={true}
                    spellCheck={false}
                    {...inputProps}
                    onChange={handleInputChange}
                    placeholder={undefined}
                    className={`form-textbox-input ${inputProps?.className ?? ''}`}
                    onInvalid={handleInputInvalid}
                />
                <label className="form-textbox-label">{labelText}</label>
            </div>
        </div>
    )
}