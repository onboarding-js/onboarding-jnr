import React from 'react'

import { getUserList, getUser } from './endPoints'

export function withServices(Component) {
    const ComponentWithServices = props => (

        <Component
            service={{
                getUser,
                getUserList
            }}
            {...props}
        />

    )
    return ComponentWithServices

}