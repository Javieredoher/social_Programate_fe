import React, { Fragment } from 'react'
import style from './AdminHome.module.css'
import AdminCommunity from './adminCommunity/AdminCommunity'
import Adminjob from './adminJob/Adminjob'


const AdminHome = () => {

        
/*     const { sendData } = useContext(DataContext);
    const [status, setStatus] = useState(false)
    const [statusOff, setStatusOff] = useState(true)
    const [items, setItems] = useState([])
    const auth = useSelector(state => state.auth)

    const token = useSelector(state => state.token)
    const { _id, email } = auth.user;

    useEffect(async () => {
        const { email } = auth.user;
        const data = await getDataAll(`profiles`)


        data.map((value) => {
            setItems(items => [...items, value]);
        })

    }, []);
    useEffect(() => {
        items.map((item) => {
            if (item.user_info.email === email) {
                setStatus(status => true)
            }
            if (item.user_info.rol === 0 || item.user_info.state === false) {
                setStatusOff(false)
            }
        })

    }, [setItems, items])
 */


    return (
        <Fragment>
            <div className={style.container}>

                <section>

                    <div className={style.cont}>


                        <AdminCommunity/>

                        <Adminjob/>

                    </div>

                </section>

            </div>

        </Fragment>
    )
}

export default AdminHome
