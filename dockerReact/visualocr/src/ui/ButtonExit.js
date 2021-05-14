import React from 'react'


function ButtonSortie() {

 
        


    return <button onClick={
        () => {
       localStorage.clear('token');
       window.location.reload()
            }
    
    }
    >deconnexion</button>;
  }


  export default ButtonSortie