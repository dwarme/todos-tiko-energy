import { useState } from "react";

export default function useFormFields(){
    const [enteredInputFieldEmail, setEnteredInputFieldEmail] = useState<string>('');
    const [enteredInputFieldPassword, setEnteredInputFieldPassword] = useState<string>('');
    const [enteredInputFieldPassword2, setEnteredInputFieldPassword2] = useState<string>('');
    const [enteredInputFieldFirstName, setEnteredInputFieldFirstName] = useState<string>('');
    const [enteredInputFieldLastName, setEnteredInputFieldLastName] = useState<string>('');

    const handleInputFieldEmailChange = (email: string)=>{
        setEnteredInputFieldEmail(email);
    }

    const handleInputFieldPasswordChange = (password: string)=>{
        setEnteredInputFieldPassword(password);
    }

    const handleInputFieldPassword2Change = (password2: string)=>{
        setEnteredInputFieldPassword2(password2);
    }

    const handleInputFieldFirstNameChange = (firstName: string)=>{
        setEnteredInputFieldFirstName(firstName);
    }

    const handleInputFieldLastNameChange = (lastName: string)=>{
        setEnteredInputFieldLastName(lastName);
    }

    return {
        enteredInputFieldEmail,
        handleInputFieldEmailChange,
        enteredInputFieldPassword,
        handleInputFieldPasswordChange,
        enteredInputFieldPassword2,
        handleInputFieldPassword2Change,
        enteredInputFieldFirstName,
        handleInputFieldFirstNameChange,
        enteredInputFieldLastName,
        handleInputFieldLastNameChange
    }
}