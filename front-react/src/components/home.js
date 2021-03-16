import React, { useEffect, useState } from 'react';
import useToken from './usetokem';

export default function Home() {

    const { token, setToken } = useToken();
    
    const [user, setUser] = useState('');


    useEffect( async () =>{
        const res = await getUserInfo();
        setUser(res);
     }, '');

    const getUserInfo = async () =>{
        const url = `http://localhost:3001/get-user-info?token=${token}`;
        const data = await fetch(url);

        const res = await data.json();
        console.log(res);
        return res.username;
    }

    return (
        <div>
            <h2>Bienvenido {user}</h2>
        </div>
    );
}