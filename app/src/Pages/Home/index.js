import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../Components/Logo'
import Input from '../../Components/Input'
// import { getUser, getUserList} from '../../services/endPoints'
import { InputContext } from '../../contexts/InputContext'
import { withServices } from '../../services/index'

function Home({service}) {
    const[userList, setUserList] = useState([])
    const {user} = useContext(InputContext)

// useEffect(()=>{

//     service.getUserList(user).then(resp =>{
//     }).catch(err => {
//         console.log('Erro Capturado: ', err)
//     })

// })
    return (
        <>
            <Logo />
            <Input />


        </>

        
    )
}

export default withServices(Home)