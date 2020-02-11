import React, {createContext , useState} from 'react';

export const InputContext = createContext();

export function InputContextProvider ({children}){
    const [user , setUser] = useState('')
    const [valueInput, setValueInput] = useState({})
    return(
        <InputContext.Provider 
        value={{
            user, 
            setUser,
            valueInput,
            setValueInput
        }}>
            {children}
        </InputContext.Provider>
      
    );

}


