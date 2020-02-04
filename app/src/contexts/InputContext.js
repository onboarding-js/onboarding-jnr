import React, {createContext , useState} from 'react';

export const InputContext = createContext();

export function InputContextProvider ({children}){
    const [user , setUser] = useState('')
    return(
        <InputContext.Provider 
        value={{
            user, 
            setUser,
        }}>
            {children}
        </InputContext.Provider>
      
    );



}


