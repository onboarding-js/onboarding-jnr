import React from 'react'

import { getUsersList, getUser } from './endPoints'

export default function withServices(Component){
    const ComponentWithServices = props => {
        <>
            <Component 
                service = {{
                    getUser,
                    getUsersList
                }}
                
            {...props} 
            />
        </>
    }
return    ComponentWithServices

}