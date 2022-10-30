import React from "react";
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";
import validator from 'validator'

const newline = <><br /><br /></>;
const fullWidth = {width: '100%'};
const default_errors = {
    name: false,
    email: false,
};
const msg = {
    sendErr: <>hubo un error al enviar el formulario, contáctanos a <a href = "mailto: iraxboda@gmail.com">iraxboda@gmail.com</a></>,
    formErr: <>hay errores en el formulario, corrígelos y vuelve a intentarlo o envíanos un email a <a href = "mailto: iraxboda@gmail.com">iraxboda@gmail.com</a></>,
    success: <>el formulario fue enviado con exito</>,
};

const Form = () => {
    const [message, setMessage] = React.useState();
    const [errors, setErrors] = React.useState(default_errors);
    const [loading, setLoading] = React.useState(false);
    const [showMessage, setShowMessage] = React.useState("");

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    const changeEmail = (event) => {
        setEmail(event.target.value);
        areThereErrors();
    };

    const changeName = (event) => {
        setName(event.target.value);
        areThereErrors();
    };

    const clearForm = () => {
        setName("");
        setEmail("");
        setErrors({
            name: false,
            email: false,
        });
    };

    const setError = (idx) => {
        const err = errors;
        err[idx] = true;
        return err;
    };

    const setNoError = (idx) => {
        const err = errors;
        err[idx] = false;
        return err;
    };

    const areThereErrors = () => {
        let flag = false;
        if (!validator.isEmail(email)) {
            setErrors(setError("email"));
            flag = true;
        } else setErrors(setNoError("email"));
        if (name === "") {
            setErrors(setError("name"));
            flag = true;
        } else setErrors(setNoError("name"));
        return flag;
    };

    const makePayload = () => {
        return {
            method: 'post',
            url: 'https://sheet.best/api/sheets/5f58bab6-6249-42eb-9e82-bb6c5afa214f',
            data: [{
                name: name,
                email: email,
            }],
            headers: {'x-api-key': 'k8xAExX$esA_0wH2F$7Qd%k@NAxTr#feCE_B8IbRheEWWypefPVDT$3XUfG49kFO'}
        };
    };

    const handleSubmit = () => {
        if (!areThereErrors()) {
            axios(makePayload())
            .then(response => {
                console.log(response);
                setMessage(msg.success);
                setShowMessage(true);
                setLoading(false);
                clearForm();
            })
            .catch(error => {
                console.log(error);
                setMessage(msg.sendErr);
                setShowMessage(true);
            });
            setMessage("");
            setShowMessage(false);
            setLoading(true);
            return;
        }
        setLoading(false);
        setMessage(msg.formErr);
        setShowMessage(true);
    };

    const submitButton = () => {
        return <LoadingButton variant="outlined" loading={loading} onClick={handleSubmit}>
            Enviar
        </LoadingButton>
    };

    return <div className="join-us-form">
        <TextField 
            id="outlined-email" 
            label="Email (para las fotos)"
            variant="outlined" 
            required 
            style={fullWidth} 
            value={email} 
            onChange={changeEmail}
            error={errors.email}
        />
        {newline}
        <TextField 
            id="outlined-basic" 
            label="Nombre"
            variant="outlined" 
            required 
            style={fullWidth} 
            value={name} 
            onChange={changeName}
            error={errors.name}
        />
        {newline}
        {submitButton()}
        {newline}
        {showMessage ? message : ""}
    </div>
}

export default Form;