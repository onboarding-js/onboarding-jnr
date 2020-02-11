import React, { useContext, useEffect } from 'react';
import { InputContext } from '../../contexts/InputContext.js';
// import { getUser } from     '../../services/endPoints'
import { withServices } from '../../services/index';


function Input({ service }) {
  const { user, setUser } = useContext(InputContext)
  // const {valueInput, setValueInput} = useContext(InputContext)

  // console.log(user)
// function handleSubmit(e){
//   e.preventDefault()

// }


  function searching() {
    service.getUserList(user).then(resp => {
    }).catch(err => {
      console.log('Erro Capturado: ', err)
    })

  }


  return (
    <>

      <input type='text' name='search-bar' value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={() => searching()}>enviar</button>
  
    </>


  )

}

export default withServices(Input)