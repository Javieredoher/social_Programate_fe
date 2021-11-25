import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from '../../../utils/validation'
import { showErrMsg, showSuccessMsg } from '../../../utils/notification'
import { Input } from '../../../components/input/Input'
import logo from '../../../assets/images/logo-blanco-alta-.png'
import './ForgotPassword.css'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'El email es incorrecto', success: '' })

        try {
            const res = await axios.post('http://localhost:3001/api/forgot', { email })

            showSuccessMsg(res.data.msg)
            setData({ ...data, err: "", success: res.data.msg })
        } catch (err) {
            showErrMsg(err.response.data.msg)
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className="container-main-forgotPassword">
            <div className="container-forgotPassword">
                <img className="logo" src={logo} alt="logo" />
                <h2 className="title-forgotPassword">OLVIDASTE TU CONTRASEÑA?</h2>

                <div className="container-info-forgotPassword">
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}

                    <Input
                        label='Ingresa tu correo electronico'
                        placeholder="Juan@hotmail.com"
                        name='email'
                        value={email}
                        onChange={handleChangeInput}
                    />
                    <button className="button-forgotPassword" onClick={forgotPassword}>Verificar tu correo</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword