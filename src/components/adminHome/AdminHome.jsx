import React, { Fragment, useState } from 'react'
import style from './AdminHome.module.css'
import AdminCommunity from './adminCommunity/AdminCommunity'
import FormJobs from '../FormJobs/FormJobs'



const AdminHome = () => {

    const [menu, setMenu] = useState(true);

    const changeMenu=()=>{
        const state=menu
        setMenu(!state)
        console.log(menu)
    }

    return (
        <Fragment>

        {/* <button onClick={changeMenu}>Change</button> */}
                        {/* <div>
                            <ul>
                                <li onClick={changeMenu}>Administrar usuarios</li>
                                <li onClick={changeMenu}>Publicar Oferta Laboral</li>
                            </ul>                  
                        </div>
                        
                        {menu?
                        <AdminCommunity/>:
                        <FormJobs/>
                        } */}
                        <AdminCommunity/>
        </Fragment>
    );
};

export default AdminHome;
