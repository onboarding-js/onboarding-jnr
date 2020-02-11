import React, { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext.js';
import { getUser } from     '../../services/endPoints'


export default function Input() {
    const { user, setUser } = useContext(InputContext)
    // const {valueInput, setValueInput} = useContext(InputContext)

    // console.log(user)


    const handleSubmit = (e) => {
        e.preventDefault()     
    }

    function searching() {
        if (user !== "") {
          getUser(user)
            .then(response => {
              setUser(response)
            }
            )
        };
      }

      console.log()
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='search-bar' value={user}
                onChange={(e) => setUser(e.target.value)}
            />

            <button onClick={() => searching()}> BUSCAR </button>

        </form>

    )

}

