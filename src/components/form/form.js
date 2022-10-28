import React from "react";
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

const newline = <><br /><br /></>;
const fullWidth = {width: '100%'};
const default_errors = {
    name: false,
    email: false,
    name1: false,
    name2: false
};
const default_formData = {
    name: "",
    email: "",
    people: "0",
    name1: '',
    name2: '',
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
    const [formData, setFormData] = React.useState(default_formData);

    const setPeopleNames = (i, data, val) => {
        if (!data.people) {
            return {name1: '', name2: ''};
        }
        const d = {
            name1: data.name1,
            name2: data.name2,
        };
        d["name"+(i+1)] = val;
        areThereErrors();
        return d;
    };

    const changeEmail = (event) => {
        setFormData({
            name: formData.name,
            email: event.target.value,
            people: formData.people,
            ...setPeopleNames(0, formData, formData.name1),
        });
        areThereErrors();
    };

    const changeName = (event) => {
        setFormData({
            name: event.target.value,
            email: formData.email,
            people: formData.people,
            ...setPeopleNames(0, formData, formData.name1),
        });
        areThereErrors();
    };

    const changeNumberOfPeople = (event) => {
        setFormData({
            name: formData.name,
            email: formData.email,
            people: String(event.target.value),
            ...setPeopleNames(0, formData, formData.name1),
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
        if (formData.email === "") {
            setErrors(setError("email"));
            flag = true;
        } else setErrors(setNoError("email"));
        if (formData.name === "") {
            setErrors(setError("name"));
            flag = true;
        } else setErrors(setNoError("name"));
        if (formData.people !== "0") {
            if (formData.name1 === "") {
                setErrors(setError("name1"));
                flag = true;
            } else setErrors(setNoError("name1"));
            if (formData.name2 === "") {
                setErrors(setError("name2"));
                flag = true;
            } else setErrors(setNoError("name2"));
        }
        return flag;
    };

    const makePayload = () => {
        return {
            method: 'post',
            url: 'https://sheet.best/api/sheets/5f58bab6-6249-42eb-9e82-bb6c5afa214f',
            data: [formData],
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
                setFormData(default_formData);
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

    const getPeopleElements = () => {
        let textBoxes = [];
        for (let i = 0; i < formData.people; i++) {
            textBoxes = [
                ...textBoxes, 
                <TextField 
                    key={i}
                    id="outlined-basic" 
                    label={"Nombre de acompañante " + (i+1)} 
                    variant="outlined" 
                    required 
                    style={fullWidth} 
                    value={formData["name"+(i+1)]}
                    error={errors["name"+(i+1)]}
                    onChange={(event) => {setFormData({
                        name: formData.name,
                        people: formData.people,
                        ...setPeopleNames(i, formData, event.target.value)
                    });
                }} />,
                newline,
            ]
        }
        return textBoxes;
    };

    return <div className="join-us-form">
        <TextField 
            id="outlined-email" 
            label="Email"
            variant="outlined" 
            required 
            style={fullWidth} 
            value={formData.email} 
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
            value={formData.name} 
            onChange={changeName}
            error={errors.name}
        />
        {newline}
        <TextField
            id="outlined-select-currency"
            select
            label="Número de personas que traerás"
            value={formData.people}
            onChange={changeNumberOfPeople}
            style={fullWidth}
        >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
        </TextField>
        {newline}
        {getPeopleElements()}
        {submitButton()}
        {newline}
        {showMessage ? message : ""}
    </div>
}

export default Form;