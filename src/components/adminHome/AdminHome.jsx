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
                        <AdminCommunity/>
        </Fragment>
    );
};

export default AdminHome;
