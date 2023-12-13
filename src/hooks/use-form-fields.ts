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

    const handleInputFieldEmailPasswordChange = (password: string)=>{
        setEnteredInputFieldPassword(password);
    }

    const handleInputFieldEmailPassword2Change = (password2: string)=>{
        setEnteredInputFieldPassword2(password2);
    }

    const handleInputFieldEmailFirstNameChange = (firstName: string)=>{
        setEnteredInputFieldFirstName(firstName);
    }

    const handleInputFieldEmailLastNameChange = (lastName: string)=>{
        setEnteredInputFieldLastName(lastName);
    }

    return {
        enteredInputFieldEmail,
        handleInputFieldEmailChange,
        enteredInputFieldPassword,
        handleInputFieldEmailPasswordChange,
        enteredInputFieldPassword2,
        handleInputFieldEmailPassword2Change,
        enteredInputFieldFirstName,
        handleInputFieldEmailFirstNameChange,
        enteredInputFieldLastName,
        handleInputFieldEmailLastNameChange
    }
}