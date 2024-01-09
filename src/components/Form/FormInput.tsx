import { useRef } from "react";

interface FormInputProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    labelText: string;
    onChange?: (value: string)=> void;
}
export default function FormInput({inputProps, labelText, onChange}: FormInputProps){
    const refInput = useRef<HTMLInputElement>(null);

    const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>)=> {
        const enteredText = event.target.value;
        if(onChange){
            onChange(enteredText);
        }

        if(enteredText.length > 0){
            refInput.current?.classList.add('text-entered');
            return;
        }

        refInput.current?.classList.remove('text-entered')
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
                />
                <label className="form-textbox-label">{labelText}</label>
            </div>
        </div>
    )
}