import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const AdminListUsers = () => {
    const [user, setUser] = useState([]);
    const ref = useRef();

    useEffect(()=> {
        fetchData();
    }, [])

    const apiUrl = 'http://localhost/customermanagementsystem/backend/api.php?action=';

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}fetch`);
            ref.current = response.data;
            setUser(ref.current);
            console.log(setUser)
        } catch (error) {
            console.error('error fetching data', error)
        }
    }


    return (
        <div className='bg-gray-50 text-center flex'>
            
        </div>
    )
}

export default AdminListUsers;