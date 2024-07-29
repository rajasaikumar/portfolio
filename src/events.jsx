import React from "react";

/*export default function Handleclick() {

function Handleclick(){
    alert('helloo chitti') ;
}
return(
    <button onClick={Handleclick}>slap here</button>
) ;
}*/


/*export default  function Event(){
    function Event(){
        alert('are u trying to develop the applications') ;
    }
    return(
        <button onClick={Event}>bkjabkjlvnln</button>
    ) ;
}*/


class Button extends React.Component{
    render(){
        return(
            <button onClick={()=>alert('danger')}>slap here</button>
        )
    }
}
export default Button;