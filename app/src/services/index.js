import React from 'react'

import {getUser , getUSerList} from './endPoints'

export default function withService (Component){
   const  ComponentWithService = props =>(

        <>
        <Component service={{
            getUSer,
            getUSerList,
        }} 
        {...props}/>


        </>
    )

 return ComponentWithService

}