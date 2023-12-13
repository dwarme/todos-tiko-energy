import FormButtonSubmit from "./FormButtonSubmit";
import FormInput from "./FormInput";
import "./Form.css";
import { ReactNode } from "react";
import FormHeader from "./FormHeader";

interface FormProps{
    children: ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>)=> void;
}

const Form: React.FC<FormProps> & {
    Header: typeof FormHeader;
    Input: typeof FormInput;
    ButtonSubmit: typeof FormButtonSubmit;
} = ({children, onSubmit})=>{
    return (
        <form onSubmit={onSubmit} className="form-container">
            <div className="form-content">
                {children}
            </div>
        </form>
    )
}

Form.Header = FormHeader;
Form.Input = FormInput;
Form.ButtonSubmit = FormButtonSubmit;

export default Form;