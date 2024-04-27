import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { GetProfle } from '../../../../../Axios/AxiosInit';
import { motion } from 'framer-motion';

export const ProfileNavigate = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token).user_id;

    const ProfileView = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: -10
        }
    }

    GetProfle(decoded)
    .then((res) => {
        const response = res.data

        setData(response)
    })

    function Logout() {
        localStorage.removeItem('token')
        window.location.reload();
    }

    return (
        <motion.section className="ProfileNavigate" variants={ProfileView}>
            {data ? <NavLink>{data.first_name} {data.last_name}</NavLink> : null}
            <button onClick={Logout}><span>Выйти</span></button>
        </motion.section>
    )
}