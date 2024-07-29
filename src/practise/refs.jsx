import React from 'react';

class Refs extends React.Component{

    constructor(props){
        super(props)
        this.inputref =React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
        console.log(this.inputref)
    }
    clickHandler = () =>{
        alert(this.inputref.current.value)
    }
    render(){
        return(
            <div>
                <h1>hacker</h1>
                <input type = "text" ref = {this.inputref}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default Refs