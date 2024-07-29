import React from 'react'

class Project extends React.Component{
    constructor(props){
        super(props)
        this.inputref =React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
        console.log(this.inputref)
    }
    Handler = () =>{
    alert(this.inputref.current.value)
    }
    render(){
        return(
            <div>
                <h2>DEMO REFS</h2>
                <input type = "text" ref = {this.inputref}/>
                <button onClick={this.Handler}>touch here</button>
            </div>
        )
    }
}

export default Project
