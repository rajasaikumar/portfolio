import React from "react";

function Onchange(){
    
    function Change(e){
        console.log(e.get.value) ;

    }
    return (
        <input name="firstName" onChange={Change} />
      );
}
export default Onchange ;