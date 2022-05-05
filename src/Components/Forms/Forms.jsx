import React, { useState } from 'react'

export const Forms = (props) => {
    const [data, setData] = useState({
        usuario: '',
        password: ''
    });
    const capturarData = (event) => {
        // console.log(event.target.name)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        console.log(data)
    }
    const logear = () =>{
        if (data.usuario ==='' || data.password === '') {
            console.log('campos vacios');
            return;
        }
        props.login(data)
    }

    return (
        <div>
            <form action="">
                <label htmlFor="usuario">Ingrese Usuario</label>
                <input
                    onChange={capturarData}
                    name='usuario'
                    type="text" />
                <label htmlFor="pass">Ingrese Contraseña</label>
                <input
                    onChange={capturarData}
                    name='password'
                    type="password" />

                <button type="button" onClick={logear}>Login</button>
            </form>
            {
                data.usuario && data.password ? (
                    <h2>
                        usuario: {data.usuario},
                        contraseña: {data.password}
                    </h2>
                ) :
                    (
                        null
                    )
            }


        </div>
    )
}
