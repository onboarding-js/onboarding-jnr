import React, { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext.js';


export default function Input() {
    const { user, setUser } = useContext(InputContext)

    console.log(user)
    return (
        <form >
            <input type='text' name='search-bar' value={user}
                onChange={(e) => setUser(e.target.value)}
            />

            <button> BUSCAR </button>

        </form>

    )

}

