import React, { Component } from 'react';
import TextField from '@mui/material/TextField';


class FormContacto extends React.Component {
    render() { 
        return <div>
            <h2>Dejanos tus datos para contactarte</h2>
            <TextField id="outlined-basic" label="Nombre" variant="outlined"/>
            <TextField id="outlined-basic" label="Correo" variant="outlined"/>
            <TextField id="outlined-basic" label="Mensaje" variant="outlined"/>

        </div>;
    }
}
 
export default FormContacto;