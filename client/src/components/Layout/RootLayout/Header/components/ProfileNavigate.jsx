import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { GetProfle } from '../../../../../Axios/AxiosInit';

export const ProfileNavigate = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token).user_id;

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
        <section className="ProfileNavigate">
            {data ? <NavLink>{data.first_name} {data.last_name}</NavLink> : null}
            <button onClick={Logout}><span>Выйти</span></button>
        </section>
    )
}