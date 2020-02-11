import React, { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext.js';
import { withServices } from '../../services/index';
import { Search } from '../../styled/styled'


function Input({ service }) {
  const { user, setUser } = useContext(InputContext)
  // const {valueInput, setValueInput} = useContext(InputContext)

  // console.log(user)
// function handleSubmit(e){
//   e.preventDefault()

// }


  function searching(e) {
    e.preventDefault()
    service.getUserList(user).then(resp => {console.log(resp);
    
    }).catch(err => {
      console.log('Erro Capturado: ', err)
    })

  }
  

  return (
    <>

     < Search onSubmit={(e) => searching(e)} >
      <input type='text' name='search-bar' value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={(e) => searching(e)} >enviar</button>
    </Search>
    </>


  )

}

export default withServices(Input)