import React from 'react'
import axios from 'axios'


class App extends React.Component{
    state = {advice: ''}

    componentDidMount(){

    }
    
    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice');
    }

    render(){
        return(
            <h1>APP</h1>
        )
    }
}

export default App