<<<<<<< HEAD:src/components/lista_usuarios/Lista_Usuarios.jsx
import React, { useState, Fragment, useContext, useEffect } from 'react'
import style from './Lista_Usuarios.module.css'
import { getDataAll } from '../../helpers/fetch'


const Lista_Usuarios = () => {
    const [toogle, setToogle] = useState(true)

    const [allUser, setAllUser] = useState([])

    useEffect(async () => {
        const dataToEdit = await getDataAll("users");

        setAllUser(dataToEdit)
    }, [])
    useEffect(() => {


    }, [allUser, setAllUser]);

    const onToggle = (id) => {
        allUser.map((user) => {
            if (user._id === id) {
                console.log(id, user._id);
                user.state = !user.state
                setAllUser(allUser)
            }

        })
    }
=======
import React, { Fragment } from 'react'
import ImagDama from '../../assets/images/ImagDama.png'
import ImagCaballero from '../../assets/images/ImagCaballero.png'
import style from './UsersList.module.css'

const UsersList
 = () => {
>>>>>>> a4cd8189b8be2735ebbeb286009c3e3fab4e7a70:src/components/UsersList/UsersList.jsx
    return (
        <Fragment>
            <div className={style.container}>
                {allUser.map((user) => (

                    <div key={user._id} className={style.card}>
                        <img className={style.img} src={user.avatar} alt="ImagDama" />
                        <p className={style.p}>{user.firstName} {user.middleName && user.middleName}<br />
                            {user.state ? 'En línea' : 'off line'}</p>
                        <ul className={user.state ? style.icon_green : style.icon_Gray}>
                            <i onClick={() => onToggle(user._id)} className="far fa-user" ></i>
                        </ul>
                    </div>

                ))


                }





            </div>

        </Fragment>


    )
}

export default UsersList

